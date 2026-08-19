const level = {
    levelsCleared: 0, 
    isReducedRegen: 1,
    isMobDeathHeal: false,
    isMobRespawn: false,
    isMobShields: false,
    isNextLevelPowerUps: false,
    exit: { x: 0, y: 0 },
    levels: [],
    enter: {
        x: 0,
        y: 0,
        draw() {
            ctx.beginPath();
            ctx.moveTo(level.enter.x, level.enter.y + 30);
            ctx.lineTo(level.enter.x, level.enter.y - 80);
            ctx.bezierCurveTo(level.enter.x, level.enter.y - 170, level.enter.x + 100, level.enter.y - 170, level.enter.x + 100, level.enter.y - 80);
            ctx.lineTo(level.enter.x + 100, level.enter.y + 30);
            ctx.lineTo(level.enter.x, level.enter.y + 30);
            ctx.fillStyle = "#ccc";
            ctx.fill();
        }
    },
    inGameText() { },
    newLevelOrPhase() { },
    laser(p1, p2, damage = 0.12, color = "#f00") {
        return {
            isOn: true,
            position: p1,
            look: p2,
            color: color,
            query() {
                if (!m.isTimeDilated) {
                    let best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null }
                    best = vertexCollision(this.position, this.look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);
                    // hitting player
                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; //player is immune to damage for an extra second
                        const dmg = damage * spawn.dmgToPlayerByLevelsCleared();
                        m.takeDamage(dmg);
                        simulation.drawList.push({ //add dmg to draw queue
                            x: best.x,
                            y: best.y,
                            radius: dmg * 1500,
                            color: "rgba(255,0,0,0.5)",
                            time: 20
                        });
                    }
                    //draw
                    if (best.dist2 === Infinity) best = this.look;
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = 5;
                    ctx.setLineDash([50 + 200 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            },
            countDown: 0,
            countTotal: 690,
            countDelay: 630,
            motionQuery() {
                if (!m.isTimeDilated) {
                    let best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null }
                    best = vertexCollision(this.position, this.look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if (this.countDown === 0) {
                        if ((best.who === playerBody || best.who === playerHead)) this.countDown = this.countTotal // hitting player
                        ctx.strokeStyle = `rgba(255,255,255,0.4)`;
                        ctx.lineWidth = 8 + 3 * Math.sin(simulation.cycle * 0.3);
                    } else if (this.countDown > this.countDelay) {
                        ctx.strokeStyle = `rgba(255,255,255,0.8)`;
                        ctx.lineWidth = 11;
                        this.countDown--
                    } else {
                        this.countDown--
                        if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) { // hitting player
                            m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; //player is immune to damage for an extra second
                            const dmg = damage * spawn.dmgToPlayerByLevelsCleared()
                            m.takeDamage(dmg);
                            simulation.drawList.push({ //add dmg to draw queue
                                x: best.x,
                                y: best.y,
                                radius: dmg * 1500,
                                color: "rgba(255,0,0,0.5)",
                                time: 20
                            });
                        }
                        ctx.strokeStyle = this.color;
                        ctx.lineWidth = 5;
                        ctx.setLineDash([50 + 200 * Math.random(), 50 * Math.random()]);
                    }
                    //draw
                    if (best.dist2 === Infinity) best = this.look;
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    ctx.lineTo(best.x, best.y);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            },
        }
    },
    final() {
        level.enter.x = -50;
        level.enter.y = -230;
        spawn.mapRectNow(level.enter.x, level.enter.y + 20, 100, 20);
        spawn.mapRectNow(5500, -330 + 20, 100, 20); //spawn this because the real exit is in the wrong spot
        spawn.mapRectNow(-1950, 0, 8200, 1800); //ground
        spawn.mapRectNow(-1950, -1500, 1800, 1900); //left wall
        spawn.mapRectNow(-1950, -3300, 8200, 1800); //roof
        spawn.mapRectNow(-250, -200, 1000, 300); // shelf
        spawn.mapRectNow(-250, -1700, 1000, 1250); // shelf roof
        spawn.mapRectNow(705, -210, 25, 50);
        spawn.mapRectNow(725, -220, 25, 50);
        spawn.bodyRect(750, -125, 125, 125);
        spawn.bodyRect(875, -50, 50, 50);

        spawn.mapRectNow(5400, -1700, 400, 1150); //right wall
        spawn.mapRectNow(5400, -300, 400, 400); //right wall
        spawn.mapRectNow(5700, -3300, 1800, 5100); //right wall
        // spawn.mapRectNow(5403, -650, 400, 450); //blocking exit
        let s = { //mech statue
            x: 0,
            y: -305,
            angle: 0,
            scale: 1,
            h: { //hip
                x: 12,
                y: 24
            },
            k: { //knee
                x: -30.96, //-17.38
                y: 58.34, //70.49
            },
            f: { //foot
                x: 0,
                y: 91 //112
            },
            fillColor: "hsl(0,0%,100%)", //white
            fillColorDark: "hsl(0,0%,75%)", //25% from white
        }
        function statueLeg(shift, color) {
            ctx.save();
            ctx.translate(shift, shift);
            //front leg
            let stroke = color;
            ctx.beginPath();
            ctx.moveTo((s.h.x + shift) * s.scale, (s.h.y + shift) * s.scale);
            ctx.lineTo((s.k.x + 2 * shift) * s.scale, (s.k.y + shift) * s.scale);
            ctx.lineTo((s.f.x + shift) * s.scale, (s.f.y + shift) * s.scale);
            ctx.strokeStyle = stroke;
            ctx.lineWidth = 7 * s.scale;
            ctx.stroke();
            //toe lines
            ctx.beginPath();
            ctx.moveTo((s.f.x + shift) * s.scale, (s.f.y + shift) * s.scale);
            ctx.lineTo((s.f.x - 15 + shift) * s.scale, (s.f.y + 5 + shift) * s.scale);
            ctx.moveTo((s.f.x + shift) * s.scale, (s.f.y + shift) * s.scale);
            ctx.lineTo((s.f.x + 15 + shift) * s.scale, (s.f.y + 5 + shift) * s.scale);
            ctx.lineWidth = 4 * s.scale;
            ctx.stroke();
            //hip joint
            ctx.beginPath();
            ctx.arc((s.h.x + shift) * s.scale, (s.h.y + shift) * s.scale, 11 * s.scale, 0, 2 * Math.PI);
            //knee joint
            ctx.moveTo((s.k.x + 7 + 2 * shift) * s.scale, (s.k.y + shift) * s.scale);
            ctx.arc((s.k.x + 2 * shift) * s.scale, (s.k.y + shift) * s.scale, 7 * s.scale, 0, 2 * Math.PI);
            //foot joint
            ctx.moveTo((s.f.x + 6 + shift) * s.scale, (s.f.y + shift) * s.scale);
            ctx.arc((s.f.x + shift) * s.scale, (s.f.y + shift) * s.scale, 6 * s.scale, 0, 2 * Math.PI);
            ctx.fillStyle = s.fillColor;
            ctx.fill();
            ctx.lineWidth = 2 * s.scale;
            ctx.stroke();
            ctx.restore();
        }
        level.custom = () => {
            level.enter.draw();

            ctx.save();
            ctx.translate(s.x, s.y);
            statueLeg(-3, "#4a4a4a");
            statueLeg(0, "#333");
            ctx.rotate(s.angle);
            ctx.beginPath();
            ctx.arc(0, 0, 30 * s.scale, 0, 2 * Math.PI);
            let grd = ctx.createLinearGradient(-30 * s.scale, 0, 30 * s.scale, 0);
            grd.addColorStop(0, s.fillColorDark);
            grd.addColorStop(1, s.fillColor);
            ctx.fillStyle = grd;
            ctx.fill();
            ctx.arc(15 * s.scale, 0, 4 * s.scale, 0, 2 * Math.PI);
            ctx.strokeStyle = "#333";
            ctx.lineWidth = 2 * s.scale;
            ctx.stroke();
            ctx.restore();
        }
        level.customTopLayer = () => { }
    },
    custom() { },
    customTopLayer() { },
};
function drawArena() {
    ctx.beginPath();
    for (let i = 0; i < map.length; i++) {
        const vertices = map[i].vertices;
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
        ctx.lineTo(vertices[0].x, vertices[0].y);
    }
    ctx.fillStyle = color.map;
    ctx.fill();
}

let cameraScale = 1, cameraOffsetX = 0, cameraOffsetY = 0;
function updateCameraFit() {
    const margin = -400;
    let left = Infinity;
    let right = -Infinity;
    let top = Infinity;
    let bottom = -Infinity;
    for (const body of map) {
        left = Math.min(left, body.bounds.min.x);
        right = Math.max(right, body.bounds.max.x);
        top = Math.min(top, body.bounds.min.y);
        bottom = Math.max(bottom, body.bounds.max.y);
    }
    const mapWidth = right - left;
    const mapHeight = bottom - top;
    const sx = (canvas.width - margin * 2) / mapWidth;
    const sy = (canvas.height - margin * 2) / mapHeight;
    cameraScale = Math.min(sx, sy);
    cameraOffsetX = canvas.width / 2 - ((left + right) / 2) * cameraScale;
    cameraOffsetY = canvas.height / 2 - ((top + bottom) / 2) * cameraScale;
}
function applyCameraTransform() {
    ctx.setTransform(cameraScale, 0, 0, cameraScale, cameraOffsetX, cameraOffsetY);
}
function screenToArena(px, py) {
    return { x: (px - cameraOffsetX) / cameraScale, y: (py - cameraOffsetY) / cameraScale };
}
// function updateMouseTransform() {
//     Matter.Mouse.setScale(mouse, {
//         x: 1 / cameraScale,
//         y: 1 / cameraScale
//     });

//     Matter.Mouse.setOffset(mouse, {
//         x: -cameraOffsetX / cameraScale,
//         y: -cameraOffsetY / cameraScale
//     });
// }
const keys = {};

window.addEventListener("keydown", e => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", e => {
    keys[e.key.toLowerCase()] = false;
});
function updateCamera() {
    const moveSpeed = 8;
    const zoomSpeed = 0.01;

    if (keys["w"]) cameraOffsetY += moveSpeed;
    if (keys["s"]) cameraOffsetY -= moveSpeed;
    if (keys["a"]) cameraOffsetX += moveSpeed;
    if (keys["d"]) cameraOffsetX -= moveSpeed;

    if (keys["q"]) zoomCamera(cameraScale + zoomSpeed);;
    if (keys["e"]) zoomCamera(cameraScale - zoomSpeed);;
}
function zoomCamera(newScale) {
    const worldCenterX = (canvas.width / 2 - cameraOffsetX) / cameraScale;
    const worldCenterY = (canvas.height / 2 - cameraOffsetY) / cameraScale;
    cameraScale = Math.max(newScale, 0.001);
    cameraOffsetX = canvas.width / 2 - worldCenterX * cameraScale;
    cameraOffsetY = canvas.height / 2 - worldCenterY * cameraScale;
}
