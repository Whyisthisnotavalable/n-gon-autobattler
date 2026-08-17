const TEAM_COLOR = { A: "#e6473d", B: "#3d7fe6" };
const TEAM_LABEL = { A: "Red", B: "Blue" };
const MOB_ROSTER = {
    regular: [
        { tier: 0, label: "Tier 0", names: ["starter"] },
        { tier: 1, label: "Tier 1", names: ["slasher", "hopper", "flutter", "shooter", "grower", "grenadier", "laser", "beamer", "launcher", "exploder", "pitcher"] },
        { tier: 2, label: "Tier 2", names: ["slasher2", "hopperBaby", "stabber", "springer", "striker", "dodger", "spinner", "sucker", "pulsar", "focuser", "spawner"] },
        { tier: 3, label: "Tier 3", names: ["slasher3", "hopMother", "stinger", "sniper", "sneaker", "slicer", "ghoster", "laserLayer", "launcherOne", "freezer", "pitcher3"] },
        { tier: 4, label: "Tier 4", names: ["slasher4", "hopsploder", "stingWinger", "sneakyStriker", "bigSucker", "quadLaser", "launchPusher", "slasher5", "mortar", "pitcher4"] },
    ],
    bosses: [
        { tier: 1, label: "Boss Tier 1", names: ["snakeBoss", "dragonFlyBoss", "slashBoss", "revolutionBoss", "streamBoss", "launcherBoss", "grenadierBoss", "shooterBoss", "orbitalBoss", "spiderBoss", "shieldingBoss", "hydraBoss", "centipedeBoss", "roundwormBoss", "tubeWormBoss"] },
        { tier: 2, label: "Boss Tier 2", names: ["powerUpBossBaby", "sneakBoss", "blockBoss", "laserTargetingBoss", "blinkBoss", "pulsarBoss", "spawnerBossCulture", "growBossCulture", "spiderBoss2", "tendrilBoss", "hydraBoss2", "caterpillarBoss", "mayflyBoss"] },
        { tier: 3, label: "Boss Tier 3", names: ["powerUpBoss", "laserLayerBoss", "historyBoss", "beetleBoss", "snakeSpitBoss", "mantisBoss", "laserBombingBoss", "cellBossCulture", "bomberBoss", "timeSkipBoss", "conductorBoss", "spiderBoss3", "tendrilBoss3", "larvaBoss"] },
        { tier: 4, label: "Boss Tier 4", names: ["stagBeetleBoss", "kingSnakeBoss", "iceBlockBoss", "fabricatorBoss", "pentaLaserBoss", "defendingBoss", "quasarBoss", "spiderBoss4", "roundwormBoss4"] },
        { tier: "S", label: "Special", names: ["suckerBoss", "laserBoss", "tetherBoss", "bounceBoss", "sprayBoss", "mineBoss", "hopMotherBoss", "trainBoss", "trainBoss2"] },
        { tier: "F", label: "Final", names: ["finalBoss"] },
    ],
};
function displayName(name) {
    return name
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([0-9]+)/g, " $1")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^./, c => c.toUpperCase());
}

const game = {
    state: "placing", 
    winner: null,
    place(type, x, y, team) {
        currentActingTeam = team;
        try {
            if (type === "tetherBoss") {
                spawn.tetherBoss(x, y, { x, y });
            } else {
                spawn[type](x, y);
            }
        } finally {
            currentActingTeam = null;
        }
    },
    start() {
        if (mob.filter(m => m.alive && m.team === "A").length === 0 || mob.filter(m => m.alive && m.team === "B").length === 0) return false;
        game.state = "battle";
        game.winner = null;
        return true;
    },
    reset() {
        for (let i = map.length - 1; i >= 0; i--) Composite.remove(engine.world, map[i]);
        map.length = 0;
        for (let i = mob.length - 1; i >= 0; i--) Composite.remove(engine.world, mob[i]);
        mob.length = 0;
        for (let i = body.length - 1; i >= 0; i--) Composite.remove(engine.world, body[i]);
        body.length = 0;
        for (let i = 0; i < cons.length; i++) Composite.remove(engine.world, cons[i]);
        cons.length = 0;
        for (let i = 0; i < consBB.length; i++) Composite.remove(engine.world, consBB[i]);
        consBB.length = 0;
        simulation.drawList.length = 0;
        simulation.ephemera.length = 0;
        simulation.cycle = 0;
        game.state = "placing";
        game.winner = null;

        level.final();
    },
    checkWin() {
        if (game.state !== "battle") return;
        const aliveA = mob.some(m => m.alive && m.team === "A");
        const aliveB = mob.some(m => m.alive && m.team === "B");
        if (!aliveA || !aliveB) {
            game.state = "ended";
            game.winner = (aliveA && !aliveB) ? "A" : (aliveB && !aliveA) ? "B" : null; 
        }
    },
    counts() {
        return {
            A: mob.filter(m => m.alive && m.team === "A").length,
            B: mob.filter(m => m.alive && m.team === "B").length,
        };
    },
};

let selectedTeam = "A";
let selectedMob = "slasher";

function buildRosterUI() {
    const root = document.getElementById("roster");
    root.innerHTML = "";

    function section(titleText, groups) {
        const wrap = document.createElement("div");
        const h = document.createElement("div");
        h.className = "roster-section-title";
        h.textContent = titleText;
        wrap.appendChild(h);
        for (const group of groups) {
            const gTitle = document.createElement("div");
            gTitle.className = "roster-tier-title";
            gTitle.textContent = group.label;
            wrap.appendChild(gTitle);
            const row = document.createElement("div");
            row.className = "roster-row";
            for (const name of group.names) {
                const btn = document.createElement("button");
                btn.className = "mob-btn";
                btn.textContent = displayName(name);
                btn.dataset.name = name;
                btn.onclick = () => selectMob(name, btn);
                row.appendChild(btn);
            }
            wrap.appendChild(row);
        }
        return wrap;
    }

    root.appendChild(section("Regular Mobs", MOB_ROSTER.regular));
    root.appendChild(section("Bosses", MOB_ROSTER.bosses));
}

function selectMob(name, btnEl) {
    selectedMob = name;
    document.querySelectorAll(".mob-btn").forEach(b => b.classList.remove("selected"));
    if (btnEl) btnEl.classList.add("selected");
    document.getElementById("selected-mob-label").textContent = displayName(name);
}

function selectTeam(team) {
    selectedTeam = team;
    document.getElementById("team-a-btn").classList.toggle("selected", team === "A");
    document.getElementById("team-b-btn").classList.toggle("selected", team === "B");
}

function setupControls() {
    document.getElementById("team-a-btn").onclick = () => selectTeam("A");
    document.getElementById("team-b-btn").onclick = () => selectTeam("B");
    document.getElementById("fight-btn").onclick = () => {
        if (game.state !== "placing") return;
        if (!game.start()) {
            flashMessage("Both teams need at least one mob first.");
        }
    };
    document.getElementById("reset-btn").onclick = () => game.reset();

    canvas.addEventListener("click", (e) => {
        if (game.state !== "placing") return;
        const rect = canvas.getBoundingClientRect();
        const px = (e.clientX - rect.left) * (canvas.width / rect.width);
        const py = (e.clientY - rect.top) * (canvas.height / rect.height);
        const p = screenToArena(px, py);
        game.place(selectedMob, p.x, p.y, selectedTeam);
    });

    window.addEventListener("resize", resizeCanvas);
}

let flashMessageText = "", flashMessageTimer = 0;
function flashMessage(text) {
    flashMessageText = text;
    flashMessageTimer = 120;
}

function resizeCanvas() {
    const wrap = document.getElementById("canvas-wrap");
    canvas.width = wrap.clientWidth;
    canvas.height = wrap.clientHeight;
    updateCameraFit();

    Matter.Mouse.setScale(mouse, {
        x: 1 / cameraScale,
        y: 1 / cameraScale
    });

    Matter.Mouse.setOffset(mouse, {
        x: -cameraOffsetX / cameraScale,
        y: -cameraOffsetY / cameraScale
    });
}

function drawHUD() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.font = `600 15px "Chakra Petch"`;
    ctx.textBaseline = "top";

    const counts = game.counts();
    ctx.fillStyle = TEAM_COLOR.A;
    ctx.fillText(`Red: ${counts.A}`, 16, 14);
    ctx.fillStyle = TEAM_COLOR.B;
    ctx.textAlign = "right";
    ctx.fillText(`Blue: ${counts.B}`, canvas.width - 16, 14);
    ctx.textAlign = "left";

    if (flashMessageTimer > 0) {
        flashMessageTimer--;
        ctx.fillStyle = "rgba(30,30,30,0.85)";
        ctx.textAlign = "center";
        ctx.font = `600 14px "Chakra Petch"`;
        ctx.fillText(flashMessageText, canvas.width / 2, 14);
        ctx.textAlign = "left";
    }

    if (game.state === "ended") {
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillRect(canvas.width / 2 - 160, canvas.height / 2 - 46, 320, 92);
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(canvas.width / 2 - 160, canvas.height / 2 - 46, 320, 92);
        ctx.fillStyle = game.winner ? TEAM_COLOR[game.winner] : "#333";
        ctx.textAlign = "center";
        ctx.font = `700 24px "Chakra Petch"`;
        ctx.fillText(game.winner ? `${TEAM_LABEL[game.winner]} Team Wins!` : "Draw!", canvas.width / 2, canvas.height / 2 - 30);
        ctx.font = `400 14px "Chakra Petch"`;
        ctx.fillStyle = "#666";
        ctx.fillText("Click Reset to battle again", canvas.width / 2, canvas.height / 2 + 8);
        ctx.textAlign = "left";
    } else if (game.state === "placing") {
        let text = "Click the arena to place a mob";
        let width = ctx.measureText(text).width + 10;
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillRect(canvas.width / 2 - width / 2, canvas.height - 30, width, 20);
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(canvas.width / 2 - width / 2, canvas.height - 30, width, 20);

        ctx.fillStyle = "rgba(120,120,120,0.7)";
        ctx.textAlign = "center";
        ctx.fillText(text, canvas.width / 2, canvas.height - 26);
        ctx.textAlign = "left";
    }
}

let canvas, ctx, mouse, mouseConstraint;
let noMarkers = true;
function drawTeamMarkers() {
    if(noMarkers) return;
    for (let i = 0; i < mob.length; i++) {
        const me = mob[i];
        if (!me.alive) continue;
        ctx.beginPath();
        ctx.arc(me.position.x, me.position.y, me.radius + 6, 0, 2 * Math.PI);
        ctx.strokeStyle = TEAM_COLOR[me.team] || "#888";
        ctx.lineWidth = 3;
        ctx.stroke();
    }
}
function mainLoop(now) {
    requestAnimationFrame(mainLoop);
    ctx.restore();
    if(!simulation.paused) {
        ctx.save();
        const elapsed = now - simulation.then;
        if (elapsed < simulation.fpsInterval) return;
        simulation.then = now - (elapsed % simulation.fpsInterval);
        simulation.gravity();
        enforceDefaultTiers();
        enforceCollisionMasks();
        Engine.update(engine, simulation.delta);
        simulation.wipe();
        updateCamera();
        applyCameraTransform();
        level.custom();
        drawArena();
        updateMouseTransform();
        simulation.drawCircle();
        simulation.runEphemera();
        mobs.draw();
        simulation.draw.body();
        level.customTopLayer();
        if (game.state === "battle") {
            mouseConstraint.collisionFilter.mask = 0xFFFFFFFF;
            simulation.cycle++;
            runMobAI();
            game.checkWin();
        } else {
            mouseConstraint.collisionFilter.mask = 0;
        }
        drawTeamMarkers();
        drawHUD();
    }
}

requestAnimationFrame(mainLoop);

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    mobs.draw = mobs.drawDefault;
    mouse = Mouse.create(canvas);
    mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
            stiffness: 0.2
        }
    });
    Composite.add(engine.world, mouseConstraint);
    resizeCanvas();
    level.final();
    buildRosterUI();
    setupControls();
    selectMob("slasher", document.querySelector('.mob-btn[data-name="slasher"]'));
    selectTeam("A");
    updateCameraFit();
    window.addEventListener("keydown", (e) => {
        if (e.target.matches("input, textarea, select")) return;
        if (e.key.toLowerCase() === "p") {
            simulation.paused = !simulation.paused;
            if(simulation.paused) {
                document.getElementById("paused").style.display = "block";
            } else {
                document.getElementById("paused").style.display = "none";
            }
        }
    });
    requestAnimationFrame(mainLoop);
};

const fpsSelect = document.createElement("select");
[30, 45, 60, 72, 120, 999].forEach(fps => {
    const option = document.createElement("option");
    option.value = fps;
    option.textContent = `${fps} FPS`;
    if (fps === 60) option.selected = true;
    fpsSelect.appendChild(option);
});
fpsSelect.addEventListener("change", () => {
    simulation.fps = Number(fpsSelect.value);
    simulation.fpsInterval = 1000 / simulation.fps;
    simulation.delta = simulation.fpsInterval;
    simulation.then = performance.now();
});
document.getElementById("fps-select").appendChild(fpsSelect);

function createSlider(obj, property, min, max, step) {
    const label = document.createElement("label");

    const name = document.createElement("span");
    name.textContent = property;

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.value = obj[property];

    const value = document.createElement("span");
    value.textContent = obj[property];

    slider.addEventListener("input", () => {
        obj[property] = Number(slider.value);
        value.textContent = slider.value;
    });

    label.append(name, slider, value);
    document.getElementById("fps-select").appendChild(label);
}

function createTextInput(obj, property, step) {
    const label = document.createElement("label");

    const name = document.createElement("span");
    name.textContent = property;

    const input = document.createElement("input");
    input.type = "number";
    if (step !== undefined) input.step = step;
    input.value = obj[property];

    input.addEventListener("input", () => {
        const n = Number(input.value);
        if (!Number.isNaN(n)) obj[property] = n;
    });

    label.append(name, input);
    document.getElementById("fps-select").appendChild(label);
}

createSlider(simulation, "accelScale", 0.1, 5, 0.1);
createSlider(simulation, "difficulty", 0.1, 5, 0.1);
createSlider(simulation, "difficultyMode", 0.1, 5, 0.1);
createSlider(simulation, "CDScale", 0.1, 2, 0.1);
createTextInput(simulation, "dmgScale", 0.025);
createSlider(simulation, "invFrames", 0, 60, 1);
createTextInput(simulation, "minCdamage", 0);
createTextInput(simulation, "maxCdamage", 0);
createSlider(simulation, "knockback", 0, 15, 0.5);
createTextInput(level, "levelsCleared", 1);