const TEAM_COLOR = { A: "#e6473d", B: "#3d7fe6" };
const TEAM_LABEL = { A: "Red", B: "Blue" };
const completeDisplay = 2;
const completeFade = 0.5;
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
    level: 1,
    playerSide: "left",
    currency: 0,
    lastReward: 0,
    levelCompleteTimer: 0,
    unlockedTiers: [0, 1],
    unlockedBossTiers: [],
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
    beginRun() {
        if (mob.filter(m => m.alive && m.team === "A").length === 0) return false;
        game.level = 1;
        game.playerSide = decidePlayerSide();
        spawnEnemyWaveForLevel(game.level);
        game.state = "battle";
        syncControls();
        return true;
    },
    advanceLevel() {
        if (game.state !== "levelComplete") return;
        game.level++;
        game.levelCompleteTimer = 0;
        clearNonSurvivors();
        repositionSurvivors();
        simulation.drawList.length = 0;
        simulation.ephemera.length = 0;
        spawnEnemyWaveForLevel(game.level);
        game.state = "battle";
        syncControls();
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
        game.level = 1;
        game.currency = shop.startingCurrency;
        game.lastReward = 0;
        game.levelCompleteTimer = 0;
        game.unlockedTiers = [0, 1];
        game.unlockedBossTiers = [];

        level.final();
        syncControls();
    },
    checkWin() {
        if (game.state !== "battle") return;
        const aliveA = mob.some(m => m.alive && m.team === "A");
        const aliveB = mob.some(m => m.alive && m.team === "B");
        if (!aliveA) {
            game.state = "runOver";
            syncControls();
        } else if (!aliveB) {
            game.lastReward = shop.rewardForClearingLevel(game.level);
            game.currency += game.lastReward;
            game.state = "levelComplete";
            game.levelCompleteTimer = Math.round(completeDisplay * simulation.fps);
            syncControls();
        }
    },
    counts() {
        return {
            A: mob.filter(m => m.alive && m.team === "A").length,
            B: mob.filter(m => m.alive && m.team === "B").length,
        };
    },
};

let selectedMob = "slasher";

function buildRosterUI() {
    const root = document.getElementById("roster");
    root.innerHTML = "";

    function section(titleText, groups, sectionKind) {
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
            const needsUnlock = typeof group.tier === "number" && !(sectionKind === "regular" && group.tier <= 1);
            if (needsUnlock) {
                const unlockBtn = document.createElement("button");
                unlockBtn.className = "unlock-btn";
                unlockBtn.dataset.section = sectionKind;
                unlockBtn.dataset.tier = String(group.tier);
                unlockBtn.dataset.tierLabel = group.label;
                unlockBtn.style.display = "none";
                unlockBtn.onclick = () => {
                    const ok = sectionKind === "regular" ? shop.unlockRegularTier(group.tier) : shop.unlockBossTier(group.tier);
                    if (ok) refreshShopUI();
                    else flashMessage("Not enough currency to unlock that yet.");
                };
                wrap.appendChild(unlockBtn);
            }
            const row = document.createElement("div");
            row.className = "roster-row";
            for (const name of group.names) {
                const btn = document.createElement("button");
                btn.className = "mob-btn";
                btn.textContent = displayName(name);
                btn.dataset.name = name;
                btn.dataset.tier = String(group.tier);
                btn.dataset.tierLabel = group.label;
                btn.dataset.section = sectionKind;
                btn.onclick = () => { if (!btn.disabled) selectMob(name, btn); };
                row.appendChild(btn);
            }
            wrap.appendChild(row);
        }
        return wrap;
    }

    root.appendChild(section("Regular Mobs", MOB_ROSTER.regular, "regular"));
    root.appendChild(section("Bosses", MOB_ROSTER.bosses, "boss"));
}
function selectMob(name, btnEl) {
    selectedMob = name;
    document.querySelectorAll(".mob-btn").forEach(b => b.classList.remove("selected"));
    if (btnEl) btnEl.classList.add("selected");
    document.getElementById("selected-mob-label").textContent = displayName(name);
}
function setupControls() {
    document.getElementById("fight-btn").onclick = () => {
        if (game.state === "placing") {
            if (!game.beginRun()) flashMessage("Place at least one mob first.");
        } else if (game.state === "levelComplete") {
            game.advanceLevel();
        }
    };
    document.getElementById("reset-btn").onclick = () => game.reset();
    document.getElementById("heal-btn").onclick = () => {
        if (shop.healTeam()) {
            refreshShopUI();
        } else {
            flashMessage("Nothing to heal, or not enough currency.");
        }
    };
    canvas.addEventListener("click", (e) => {
        if (game.state !== "placing" && game.state !== "levelComplete") return;
        const rect = canvas.getBoundingClientRect();
        const px = (e.clientX - rect.left) * (canvas.width / rect.width);
        const py = (e.clientY - rect.top) * (canvas.height / rect.height);
        const p = screenToArena(px, py);
        const price = shop.priceForName(selectedMob);
        if (price === null) { flashMessage("Not available to place."); return; }
        if (!shop.isUnlocked(selectedMob, game.level)) { flashMessage("Not unlocked yet."); return; }
        if (game.currency < price) { flashMessage("Not enough currency."); return; }
        game.currency -= price;
        game.place(selectedMob, p.x, p.y, "A");
        refreshShopUI();
    });

    window.addEventListener("resize", resizeCanvas);
}
function syncControls() {
    const fightBtn = document.getElementById("fight-btn");
    const resetBtn = document.getElementById("reset-btn");
    const canInteractRoster = game.state === "placing" || game.state === "levelComplete";

    document.getElementById("roster").classList.toggle("disabled", !canInteractRoster);
    document.getElementById("team-row").classList.toggle("disabled", !canInteractRoster);

    if (game.state === "placing") {
        fightBtn.textContent = "Fight";
        fightBtn.disabled = false;
    } else if (game.state === "levelComplete") {
        fightBtn.textContent = "Next Level";
        fightBtn.disabled = false;
    } else {
        fightBtn.textContent = "Fight";
        fightBtn.disabled = true;
    }
    resetBtn.textContent = game.state === "placing" && game.level === 1 ? "Reset" : "New Run";
    refreshShopUI();
}
function refreshShopUI() {
    document.getElementById("currency-amount").textContent = game.currency;
    const inShop = game.state === "placing" || game.state === "levelComplete";
    const canHeal = game.state === "levelComplete";
    const healBtn = document.getElementById("heal-btn");
    if (canHeal) {
        const cost = shop.healTeamCost();
        healBtn.style.display = "";
        healBtn.textContent = cost > 0 ? `Heal Team (${cost})` : "Team Healthy";
        healBtn.disabled = cost === 0 || game.currency < cost;
    } else {
        healBtn.style.display = "none";
    }
    document.querySelectorAll(".unlock-btn").forEach(btn => {
        const tier = Number(btn.dataset.tier);
        const unlocked = btn.dataset.section === "regular"
            ? game.unlockedTiers.includes(tier)
            : game.unlockedBossTiers.includes(tier);
        if (!inShop || unlocked) { btn.style.display = "none"; return; }
        const cost = btn.dataset.section === "regular" ? shop.tierUnlockCost[tier] : shop.bossTierUnlockCost[tier];
        btn.style.display = "";
        btn.textContent = `Unlock ${btn.dataset.tierLabel} (${cost})`;
        btn.disabled = game.currency < cost;
    });

    document.querySelectorAll('.mob-btn[data-section="regular"]').forEach(btn => {
        const name = btn.dataset.name;
        const tier = Number(btn.dataset.tier);
        const base = displayName(name);
        btn.classList.remove("locked", "unaffordable");
        btn.title = "";
        if (!inShop) {
            btn.textContent = base;
            btn.disabled = false;
            return;
        }
        if (tier === 0 && game.level > 1) {
            btn.textContent = base;
            btn.title = "Starter only shows up on Level 1.";
            btn.classList.add("locked");
            btn.disabled = true;
        } else if (!shop.isUnlocked(name, game.level)) {
            btn.textContent = base;
            btn.title = `Unlock ${btn.dataset.tierLabel} first (${shop.tierUnlockCost[tier]})`;
            btn.classList.add("locked");
            btn.disabled = true;
        } else {
            const price = shop.tierPrice[tier];
            const afford = game.currency >= price;
            btn.textContent = `${base} · ${price}`;
            btn.classList.toggle("unaffordable", !afford);
            btn.disabled = !afford;
        }
    });

    document.querySelectorAll('.mob-btn[data-section="boss"]').forEach(btn => {
        const name = btn.dataset.name;
        const base = displayName(name);
        btn.classList.remove("locked", "unaffordable");
        btn.title = "";
        if (!inShop) {
            btn.textContent = base;
            btn.disabled = false;
            return;
        }
        const tier = shop.bossTierOf(name);
        if (tier === null) {
            btn.textContent = base;
            btn.title = "Not available to recruit.";
            btn.classList.add("locked");
            btn.disabled = true;
        } else if (!game.unlockedBossTiers.includes(tier)) {
            btn.textContent = base;
            btn.title = `Unlock ${btn.dataset.tierLabel} first (${shop.bossTierUnlockCost[tier]})`;
            btn.classList.add("locked");
            btn.disabled = true;
        } else {
            const price = shop.bossPrice[tier];
            const afford = game.currency >= price;
            btn.textContent = `${base} · ${price}`;
            btn.classList.toggle("unaffordable", !afford);
            btn.disabled = !afford;
        }
    });
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

    // Matter.Mouse.setScale(mouse, {
    //     x: 1 / cameraScale,
    //     y: 1 / cameraScale
    // });

    // Matter.Mouse.setOffset(mouse, {
    //     x: -cameraOffsetX / cameraScale,
    //     y: -cameraOffsetY / cameraScale
    // });
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

    const bossTag = enemyGen.isBossLevel(game.level) ? " · Boss" : "";
    let lw = ctx.measureText(`Level ${game.level}${bossTag}`).width + 10;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillRect(canvas.width / 2 - lw / 2, 10.5, lw, 20);
    ctx.strokeStyle = "#ccc";
    ctx.strokeRect(canvas.width / 2 - lw / 2, 10.5, lw, 20);
    ctx.fillStyle = "rgba(120,120,120,0.9)";
    ctx.textAlign = "center";
    ctx.fillText(`Level ${game.level}${bossTag}`, canvas.width / 2, 14);
    ctx.textAlign = "left";

    if (flashMessageTimer > 0) {
        flashMessageTimer--;
        ctx.fillStyle = "rgba(30,30,30,0.85)";
        ctx.textAlign = "center";
        ctx.font = `600 14px "Chakra Petch"`;
        ctx.fillText(flashMessageText, canvas.width / 2, 36);
        ctx.textAlign = "left";
    }

    if (game.state === "levelComplete" && game.levelCompleteTimer > 0) {
        const fadeFrames = Math.max(1, Math.round(completeFade * simulation.fps));
        const alpha = Math.min(1, game.levelCompleteTimer / fadeFrames);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillRect(canvas.width / 2 - 170, canvas.height / 2 - 62, 340, 130);
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(canvas.width / 2 - 170, canvas.height / 2 - 62, 340, 130);
        ctx.fillStyle = TEAM_COLOR.A;
        ctx.textAlign = "center";
        ctx.font = `700 22px "Chakra Petch"`;
        ctx.fillText(`Level ${game.level} Cleared!`, canvas.width / 2, canvas.height / 2 - 46);
        ctx.font = `400 14px "Chakra Petch"`;
        ctx.fillStyle = "#666";
        const survivors = countSurvivors();
        ctx.fillText(`${survivors} survivor${survivors === 1 ? "" : "s"} pressing on`, canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillStyle = "#b8860b";
        ctx.font = `600 14px "Chakra Petch"`;
        ctx.fillText(`+${game.lastReward} currency (${game.currency} total)`, canvas.width / 2, canvas.height / 2 + 4);
        ctx.fillStyle = "#333";
        ctx.font = `400 13px "Chakra Petch"`;
        ctx.fillText("Recruit or heal below, then click Next Level", canvas.width / 2, canvas.height / 2 + 30);
        ctx.textAlign = "left";
        ctx.restore();
        game.levelCompleteTimer--;
    } else if (game.state === "levelComplete") {
        ctx.fillStyle = "rgba(160,160,160,0.7)";
        ctx.textAlign = "center";
        ctx.fillText("Recruit or heal in the sidebar, then click Next Level", canvas.width / 2, canvas.height - 26);
        ctx.textAlign = "left";
    } else if (game.state === "runOver") {
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillRect(canvas.width / 2 - 170, canvas.height / 2 - 62, 340, 130);
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(canvas.width / 2 - 170, canvas.height / 2 - 62, 340, 130);
        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.font = `700 22px "Chakra Petch"`;
        ctx.fillText("Run Over", canvas.width / 2, canvas.height / 2 - 46);
        ctx.font = `400 14px "Chakra Petch"`;
        ctx.fillStyle = "#666";
        ctx.fillText(`Reached Level ${game.level}`, canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillText(`Final currency: ${game.currency}`, canvas.width / 2, canvas.height / 2 + 4);
        ctx.fillStyle = "#333";
        ctx.font = `600 14px "Chakra Petch"`;
        ctx.fillText("Click New Run to try again", canvas.width / 2, canvas.height / 2 + 30);
        ctx.textAlign = "left";
    } else if (game.state === "placing") {
        let text = "Spend your starting currency to place a team, then click Fight";
        let width = ctx.measureText(text).width + 10;
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillRect(canvas.width / 2 - width / 2, canvas.height - 30, width, 20);
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(canvas.width / 2 - width / 2, canvas.height - 30, width, 20);

        ctx.fillStyle = "rgba(160,160,160,0.9)";
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
    // updateMouseTransform();
    simulation.drawCircle();
    simulation.runEphemera();
    mobs.draw();
    simulation.draw.body();
    level.customTopLayer();
    if (game.state === "battle") {
        // mouseConstraint.collisionFilter.mask = 0xFFFFFFFF;
        simulation.cycle++;
        runMobAI();
        game.checkWin();
    } else {
        // mouseConstraint.collisionFilter.mask = 0;
    }
    drawTeamMarkers();
    drawHUD();
}

requestAnimationFrame(mainLoop);

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    mobs.draw = mobs.drawDefault;
    // mouse = Mouse.create(canvas);
    // mouseConstraint = MouseConstraint.create(engine, {
    //     mouse,
    //     constraint: {
    //         stiffness: 0.2
    //     }
    // });
    // Composite.add(engine.world, mouseConstraint);
    resizeCanvas();
    level.final();
    buildRosterUI();
    setupControls();
    selectMob("slasher", document.querySelector('.mob-btn[data-name="slasher"]'));
    updateCameraFit();
    game.currency = shop.startingCurrency;
    game.unlockedTiers = [0, 1];
    game.unlockedBossTiers = [];
    syncControls();
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

// createSlider(simulation, "accelScale", 0.1, 5, 0.1);
// createSlider(simulation, "difficulty", 0.1, 5, 0.1);
// createSlider(simulation, "difficultyMode", 0.1, 5, 0.1);
// createSlider(simulation, "CDScale", 0.1, 2, 0.1);
// createTextInput(simulation, "dmgScale", 0.025);
// createSlider(simulation, "invFrames", 0, 60, 1);
// createTextInput(simulation, "minCdamage", 0);
// createTextInput(simulation, "maxCdamage", 0);
// createSlider(simulation, "knockback", 0, 15, 0.5);
// createTextInput(level, "levelsCleared", 1);