const Engine = Matter.Engine,
    Events = Matter.Events,
    Composites = Matter.Composites,
    Composite = Matter.Composite,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Vertices = Matter.Vertices,
    Query = Matter.Query,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Vector = Matter.Vector;

let body = []; 
let map = [];  
let cons = []; 
let consBB = []; 
let bullet = []; 

const cat = {
    player: 0x1,
    map: 0x10,
    body: 0x100,
    bullet: 0x1000,
    powerUp: 0x10000,
    mob: 0x100000,
    mobBullet: 0x1000000,
    mobShield: 0x10000000,
    phased: 0x100000000,
}

let color = {
    block: "rgba(140,140,140,0.85)",
    blockS: "#222",
    map: "#444",
    bullet: "#000"
}

const tech = {
    botSpawner: 0,
    cloakDuplication: 0,
    collidePowerUps: false,
    conchoidalDamage: 1,
    damageAdjustments() { return 1 },
    deathSpawns: 0,
    deathSpawnsFromBoss: 0,
    duplicationChance: 0,
    energySiphon: 0,
    extraMaxHealth: 0,
    healMaxEnergyBonus: 0,
    healSpawn: 0,
    iceIXOnDeath: 0,
    isAddRemoveMaxHealth: false,
    isAoESlow: false,
    isBarycenter: false,
    isBotSpawnerReset: false,
    isChatter: false,
    isChitin: false,
    isConchoidal: false,
    isDarkEnergy: false,
    isDarkStar: false,
    isDemineralize: false,
    isDuplicateMobs: false,
    isEnergyHealth: false,
    isEnergyLoss: false,
    isExplodeMob: false,
    isFarAwayDmg: false,
    isHarmDarkMatter: false,
    isIceKill: false,
    isIceMaxHealthLoss: false,
    isImmortal: false,
    isIntangible: false,
    isMobBlockFling: false,
    isMobDeathImmunity: false,
    isMobFullHealthCloak: false,
    isMobLowHealth: false,
    isMoveDarkMatter: false,
    isNotDarkMatter: false,
    isRadioactive: false,
    isRadioactiveResistance: false,
    isRemineralize: false,
    isShieldAmmo: false,
    isSporeFlea: false,
    isSporeWorm: false,
    isSuperDeterminism: false,
    isVerlet: false,
    largerHeals: 1,
    mineralDamage: 1,
    mineralDamageReduction: 0,
    mineralLastCheck: 0,
    mobSpawnWithHealth: 0, 
    nailsDeathMob: 0,
    radioactiveDamage: 1,
    sporesOnDeath: 0,
    wimpCount: 0,
    mergedList: [],
    duplicationChance() {},
    wire: { segments: [] },
    tech: [
        {
            name: "damage",
            description: `<strong>+10%</strong> team <strong class='color-d'>damage</strong> dealt`,
            maxCount: 5,
            count: 0,
            frequency: 1,
            frequencyDefault: 1,
            allowed() { return true },
            requires: "",
            effect() { 
                m.damageDone *= 1.1 
            },
            remove() { 
                m.damageDone /= 1.1 
            },
        },
    ],
    giveTech(index) {
        const entry = tech.tech[index];
        if (!entry || entry.count >= entry.maxCount) return;
        broadcastTechEffect(entry);
        entry.count++;
    },
};

const localSettings = {
    isHideHUD: false,          
    difficultyCompleted: {},
};
const lore = { techCount: 0, techGoal: 999 }; 
const input = { down: false, up: false, left: false, right: false, fire: false };
const mouseMove = { reset() { } };

const b = {
    inventory: [], 
    guns: [
        // {
        //     name: "nail gun", // 0
        //     // description: `use compressed air to shoot a stream of <strong>nails</strong><br><em>fire rate</em> <strong>increases</strong> the longer you fire<br><strong>60</strong> nails per ${powerUps.orb.ammo()}`,
        //     descriptionFunction() {
        //         return `use compressed air to rapidly drive <strong>nails</strong><br><em>fire rate</em> <strong>increases</strong> the longer you fire<br><strong>${0.5 * this.ammoPack.toFixed(0)}</strong> nails per ${powerUps.orb.ammo()}`
        //         // <em style ="float: right;">(${(11 / 60 * b.fireCDscale * 1000).toFixed(0)} to ${(1 * b.fireCDscale / 60 * 1000).toFixed(0)} millisecond cooldown)</em>`
        //     },
        //     ammo: 0,
        //     ammoPack: 27,
        //     defaultAmmoPack: 27,
        //     recordedAmmo: 0,
        //     have: false,
        //     do() { },
        //     fire() { },
        // },
    ], 
    orbitBot() { }, worm() { }, flea() { }, spore() { }, explosion() { },
    targetedNail() { }, randomBot() { }, iceIX() { }, targetedBlock() { },
};

const engine = Engine.create();
engine.world.gravity.scale = 0; 
engine.constraintIterations = 1;
function enforceDefaultTiers() {
    for (let i = 0; i < mob.length; i++) {
        const me = mob[i];
        if (me.tier === undefined) me.tier = me.isBoss ? 4 : 1;
    }
}
const _originalCanCollide = Matter.Detector.canCollide;
Matter.Detector.canCollide = function (filterA, filterB) {
    if (filterA.team && filterB.team && filterA.team === filterB.team && (filterA.avoidOwnTeam || filterB.avoidOwnTeam)) {
        return false;
    }
    return _originalCanCollide(filterA, filterB);
};

function enforceCollisionMasks() {
    const need = cat.mob | cat.mobBullet | cat.mobShield;
    for (let i = 0; i < mob.length; i++) {
        const me = mob[i];
        const cf = me.collisionFilter;
        if (!cf || cf.category === 0) continue;
        if (me._originallyCollidedWithMobs === undefined) {
            me._originallyCollidedWithMobs = !!(cf.mask & cat.mob);
        }
        cf.team = me.team;
        cf.avoidOwnTeam = !me._originallyCollidedWithMobs;
        cf.mask |= need;
    }
}

function isImmune(who) {
    return !!(who.immuneUntilCycle && who.immuneUntilCycle > simulation.cycle);
}
function setImmune(who) {
    who.immuneUntilCycle = simulation.cycle + simulation.invFrams;
}
function applyMobContact(attacker, defender) {
    if (!attacker.alive || !defender.alive) return;
    if (attacker.isSlowed || attacker.isStunned) return;
    if (isImmune(defender)) return;
    pointGlobalsAt(defender);
    const dmg = Math.min(Math.max(simulation.dmgScale * Math.sqrt(attacker.mass), simulation.minCdamage), simulation.maxCdamage) * attacker.damageScale();
    defender.damage(dmg);
    if (defender.alive) {
        defender.seePlayer.yes = true;
        defender.seePlayer.recall = defender.memory + Math.round(defender.memory * Math.random());
        defender.seePlayer.position.x = attacker.position.x;
        defender.seePlayer.position.y = attacker.position.y;
    }
    if (defender.damageReduction) {
        simulation.drawList.push({ x: defender.position.x, y: defender.position.y, radius: Math.log(dmg + 1.1) * 40 * defender.damageReduction + 3, color: simulation.mobDmgColor, time: simulation.drawTime });
    }
    if (attacker.onHit) attacker.onHit();
    setImmune(defender);
}
function handleMobVsMob(mobA, mobB) {
    if (mobA.team === mobB.team) return;
    applyMobContact(mobA, mobB);
    applyMobContact(mobB, mobA);
    if (mobA.alive && mobB.alive) {
        const angle = Math.atan2(mobA.position.y - mobB.position.y, mobA.position.x - mobB.position.x);
        Body.setVelocity(mobA, { x: mobA.velocity.x + simulation.knockback * Math.cos(angle), y: mobA.velocity.y + simulation.knockback * Math.sin(angle) });
        Body.setVelocity(mobB, { x: mobB.velocity.x - simulation.knockback * Math.cos(angle), y: mobB.velocity.y - simulation.knockback * Math.sin(angle) });
    }
}
function handleMobVsBody(who, obj) {
    if (obj.speed <= 9 || !who.alive) return;
    const v = Vector.magnitude(Vector.sub(who.velocity, obj.velocity));
    if (v <= 11) return;
    const dmg = simulation.blockDmgScale * v * obj.mass;
    who.damage(dmg, true);
    const stunTime = dmg / Math.sqrt(obj.mass);
    if (stunTime > 0.5 && who.memory !== Infinity) mobs.statusStun(who, 60 + 60 * Math.sqrt(stunTime));
    if (who.damageReduction) {
        simulation.drawList.push({ x: who.position.x, y: who.position.y, radius: Math.log(dmg + 1.1) * 40 * who.damageReduction + 3, color: simulation.playerDmgColor, time: simulation.drawTime });
    }
}
function collisionChecks(event) {
    const pairs = event.pairs;
    for (let i = 0, len = pairs.length; i < len; i++) {
        const a = pairs[i].bodyA, b = pairs[i].bodyB;
        if (a.mob && b.mob) {
            handleMobVsMob(a, b);
        } else if (a.mob && b.classType === "body") {
            handleMobVsBody(a, b);
        } else if (b.mob && a.classType === "body") {
            handleMobVsBody(b, a);
        }
    }
}
Events.on(engine, "collisionStart", function (event) {
    collisionChecks(event);
});
Events.on(engine, "collisionActive", function (event) {
    collisionChecks(event);
});

const simulation = {
    cycle: 0,
    delta: 1000 / 60,
    g: 0.0024,
    accelScale: 1,
    difficulty: 1,
    difficultyMode: 1,
    CDScale: 1,
    drawTime: 8,
    mobDmgColor: "rgba(255,0,0,0.7)",
    playerDmgColor: "rgba(0,0,0,0.7)",
    paused: false,
    isChoosing: false,
    isTimeSkipping: false,
    isCheating: false,
    isHorizontalFlipped: false,
    isInvertedVertical: false,
    onTitlePage: false,
    testing: false,
    analysis: 0,
    fps: 60,
    fpsInterval: 1000 / 60,
    then: performance.now(),
    dmgScale: 0.025,
    healScale: 1,
    invFrames: 0,
    minCdamage: 0.05,
    maxCdamage: 1,
    blockDmgScale: 0.02,
    knockback: 3,
    camera() { ctx.save(); },
    checks() { },
    clearMap() { },
    loop() { },                
    timePlayerSkip() { },      
    splashReturn() { },
    inGameConsole() { },       
    updateGunHUD() { },
    updateTechHUD() { },
    drawList: [], 
    drawCircle() {
        let i = simulation.drawList.length;
        while (i--) {
            const d = simulation.drawList[i];
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.radius, 0, 2 * Math.PI);
            ctx.fillStyle = d.color;
            ctx.fill();
            if (d.time) {
                d.time--;
            } else {
                simulation.drawList.splice(i, 1);
            }
        }
    },

    ephemera: [], 
    removeEphemera(who) {
        const i = simulation.ephemera.indexOf(who);
        if (i !== -1) simulation.ephemera.splice(i, 1);
    },
    runEphemera() {
        for (let i = 0; i < simulation.ephemera.length; i++) simulation.ephemera[i].do();
    },

    energyGenGraphic() { }, 

    gravity() {
        for (let i = 0, len = body.length; i < len; i++) {
            body[i].force.y += body[i].mass * simulation.g;
        }
        for (let i = 0, len = powerUp.length; i < len; i++) {
            powerUp[i].force.y += powerUp[i].mass * simulation.g;
        }
    },

    wipe() {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    checkLineIntersection(v1, v1End, v2, v2End) {
        let result = { x: null, y: null, onLine1: false, onLine2: false };
        const denominator = (v2End.y - v2.y) * (v1End.x - v1.x) - (v2End.x - v2.x) * (v1End.y - v1.y);
        if (denominator === 0) return result;
        const a0 = v1.y - v2.y, b0 = v1.x - v2.x;
        const numerator1 = (v2End.x - v2.x) * a0 - (v2End.y - v2.y) * b0;
        const numerator2 = (v1End.x - v1.x) * a0 - (v1End.y - v1.y) * b0;
        const a = numerator1 / denominator, b = numerator2 / denominator;
        result.x = v1.x + a * (v1End.x - v1.x);
        result.y = v1.y + a * (v1End.y - v1.y);
        if (a > 0 && a < 1) result.onLine1 = true;
        if (b > 0 && b < 1) result.onLine2 = true;
        return result;
    },

    draw: {
        bodyDefault() {
            ctx.beginPath();
            for (let i = 0, len = body.length; i < len; i++) {
                const vertices = body[i].vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
            }
            ctx.lineWidth = 2;
            ctx.fillStyle = color.block;
            ctx.fill();
            ctx.strokeStyle = color.blockS;
            ctx.stroke();
        },
        body() { simulation.draw.bodyDefault() },
        cons() {
            ctx.beginPath();
            for (let i = 0, len = cons.length; i < len; i++) {
                ctx.moveTo(cons[i].pointA.x, cons[i].pointA.y);
                ctx.lineTo(cons[i].bodyB.position.x + cons[i].pointB.x, cons[i].bodyB.position.y + cons[i].pointB.y);
            }
            for (let i = 0, len = consBB.length; i < len; i++) {
                ctx.moveTo(consBB[i].bodyA.position.x, consBB[i].bodyA.position.y);
                ctx.lineTo(consBB[i].bodyB.position.x, consBB[i].bodyB.position.y);
            }
            ctx.lineWidth = 2;
            ctx.strokeStyle = "rgba(0,0,0,0.15)";
            ctx.stroke();
        },
    },
};

function vertexCollision(v1, v1End, domains) {
    let best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
    for (let j = 0; j < domains.length; j++) {
        let domain = domains[j];

        const isPlayerRefDomain = domain.length > 0 && domain.length <= 2 &&
            domain.every(b => b === playerBody || b === playerHead);
        if (isPlayerRefDomain && currentActingMob) {
            domain = livingEnemiesOf(currentActingMob.team);
        }

        for (let i = 0; i < domain.length; i++) {
            const vertices = domain[i].vertices;
            const len = vertices.length - 1;
            for (let k = 0; k < len; k++) {
                const r = simulation.checkLineIntersection(v1, v1End, vertices[k], vertices[k + 1]);
                if (r.onLine1 && r.onLine2) {
                    const dx = v1.x - r.x, dy = v1.y - r.y, dist2 = dx * dx + dy * dy;
                    if (dist2 < best.dist2 && (!domain[i].mob || domain[i].alive)) {
                        best = { x: r.x, y: r.y, dist2, who: domain[i], v1: vertices[k], v2: vertices[k + 1] };
                    }
                }
            }
            const r = simulation.checkLineIntersection(v1, v1End, vertices[0], vertices[len]);
            if (r.onLine1 && r.onLine2) {
                const dx = v1.x - r.x, dy = v1.y - r.y, dist2 = dx * dx + dy * dy;
                if (dist2 < best.dist2) best = { x: r.x, y: r.y, dist2, who: domain[i], v1: vertices[0], v2: vertices[len] };
            }
        }
    }
    if (best.who && best.who.mob && currentActingMob && best.who.team !== currentActingMob.team) {
        pointGlobalsAt(best.who);
    }
    return best;
}