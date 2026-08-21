const spawn = {
    pickList: ["starter", "starter"],
    fullPickList: [
        "slasher", "slasher", "slasher2", "slasher3",
        "hopper", "hopper", "hopMother", "hopMother", "hopperBaby",
        "stabber", "stabber", "stabber",
        "springer", "springer", "springer",
        "stinger", "stinger", "stinger",
        "flutter", "flutter",
        "striker", "striker",
        "shooter", "shooter",
        "grenadier", "grenadier",
        "pulsar", "pulsar",
        "laser", "laser",
        "laserLayer", "laserLayer",
        "sneaker", "launcher", "launcherOne", "exploder", "sucker", "sniper", "spinner", "grower", "beamer", "spawner", "ghoster", "focuser", "slasher4", "hopsploder", "stingWinger", "sneakyStriker", "bigSucker", "quadLaser", "launchPusher", "slasher5", "mortar"
    ],
    tier: [
        ["starter"], 
        ["slasher", "hopper", "flutter", "shooter", "grower", "grenadier", "laser", "beamer", "launcher", "exploder", "pitcher"], 
        ["slasher2", "hopperBaby", "stabber", "springer", "striker", "dodger", "spinner", "sucker", "pulsar", "focuser", "spawner"], 
        ["slasher3", "hopMother", "stinger", "sniper", "sneaker", "slicer", "ghoster", "laserLayer", "launcherOne", "freezer", "pitcher3"], 
        ["slasher4", "hopsploder", "stingWinger", "sneakyStriker", "bigSucker", "quadLaser", "launchPusher", "slasher5", "mortar", "pitcher4",],
    ],
    bossTier: [
        [],
        ["snakeBoss", "dragonFlyBoss", "slashBoss", "revolutionBoss", "streamBoss", "launcherBoss", "grenadierBoss", "shooterBoss", "orbitalBoss", "spiderBoss", "shieldingBoss", "hydraBoss", "centipedeBoss", "roundwormBoss", "tubeWormBoss"],
        ["powerUpBossBaby", "sneakBoss", "blockBoss", "laserTargetingBoss", "blinkBoss", "pulsarBoss", "spawnerBossCulture", "growBossCulture", "spiderBoss2", "tendrilBoss", "hydraBoss2", "caterpillarBoss", "mayflyBoss"],
        ["powerUpBoss", "laserLayerBoss", "historyBoss", "beetleBoss", "snakeSpitBoss", "mantisBoss", "laserBombingBoss", "cellBossCulture", "bomberBoss", "timeSkipBoss", "conductorBoss", "spiderBoss3", "tendrilBoss3", "larvaBoss"],
        ["stagBeetleBoss", "kingSnakeBoss", "iceBlockBoss", "fabricatorBoss", "pentaLaserBoss", "defendingBoss", "quasarBoss", "spiderBoss4", "roundwormBoss4"] 
    ],
    bossTierIndex: [0, 0, 0, 0, 0], 
    randomBossList: [
        "snakeBoss", "dragonFlyBoss", "slashBoss", "revolutionBoss", "streamBoss", "launcherBoss", "grenadierBoss", "shooterBoss", "orbitalBoss", "spiderBoss", "shieldingBoss",
        "powerUpBossBaby", "sneakBoss", "blockBoss", "laserTargetingBoss", "blinkBoss", "pulsarBoss", "spawnerBossCulture", "growBossCulture",
        "powerUpBoss", "laserLayerBoss", "historyBoss", "beetleBoss", "snakeSpitBoss", "mantisBoss", "laserBombingBoss", "cellBossCulture", "bomberBoss", "timeSkipBoss", "conductorBoss",
    ],
    mobDmgDoneByTier: [0.35, 0.7, 2.1, 3.8, 4.5, 6.5],
    dmgToPlayerByLevelsCleared() {
        return 0.5 * level.levelsCleared
    },
    mobDmgTakenByTier: [0.5, 1, 0.5, 0.06, 0.013, 0.003],
    mobDmgTakenByLevelsCleared() {
        return 0.5 * Math.pow(0.2, 0.25 * level.levelsCleared)
    },
    mobTypeSpawnOrder: [], 
    mobTierSpawnOrder: [], 
    mobTypeSpawnIndex: 0, 
    setMobTypeSpawnOrder() {
        spawn.mobTypeSpawnIndex = 0
        spawn.mobTypeSpawnOrder = []
        spawn.mobTierSpawnOrder = []
        spawn.pickList = ["starter", "starter",]
        if (simulation.difficultyMode > 3) {
            let tier = 1
            seededShuffle(spawn.tier[tier])
            seededShuffle(spawn.bossTier[tier])
            for (let i = 0; i < 3; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }

            tier++
            seededShuffle(spawn.tier[tier])
            seededShuffle(spawn.bossTier[tier])
            for (let i = 0; i < 3; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }

            tier++
            seededShuffle(spawn.tier[tier])
            seededShuffle(spawn.bossTier[tier])
            for (let i = 0; i < 4; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }

            tier++
            seededShuffle(spawn.tier[tier])
            seededShuffle(spawn.bossTier[tier])
            for (let i = 0; i < 4; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }
        } else { 
            spawn.mobTypeSpawnOrder.push("starter")
            spawn.mobTierSpawnOrder.push(0)

            let tier = 1
            seededShuffle(spawn.tier[tier])
            seededShuffle(spawn.bossTier[tier])
            for (let i = 0; i < 3; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }

            tier++
            seededShuffle(spawn.tier[tier])
            seededShuffle(spawn.bossTier[tier])
            for (let i = 0; i < 4; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }

            tier++
            seededShuffle(spawn.tier[tier])
            seededShuffle(spawn.bossTier[tier])
            for (let i = 0; i < 4; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }

            tier++
            seededShuffle(spawn.tier[tier])
            for (let i = 0; i < 2; i++) {
                spawn.mobTypeSpawnOrder.push(spawn.tier[tier][i])
                spawn.mobTierSpawnOrder.push(tier)
            }
        }
        spawn.setSpawnList()
    },
    setSpawnList() { 
        spawn.pickList.splice(0, 1);
        if (level.levelsCleared > 13) {
            const push = spawn.fullPickList[Math.floor(Math.random() * spawn.fullPickList.length)]
            spawn.pickList.push(push);
        } else {
            const push = spawn.mobTypeSpawnOrder[spawn.mobTypeSpawnIndex++ % spawn.mobTypeSpawnOrder.length]
            spawn.pickList.push(push);
        }
    },
    randomizeSpawnList(tier) { 
        spawn.pickList.splice(0, 1);
        if (level.levelsCleared > 13) {
            const push = spawn.fullPickList[Math.floor(Math.random() * spawn.fullPickList.length)]
            spawn.pickList.push(push);
        } else {
            const array = spawn.tier[tier]
            const push = array[Math.floor(Math.random() * array.length)]
            spawn.pickList.push(push);
        }
    },
    randomMobByLevelsCleared(x, y) {
        if (level.levelsCleared > 13) {
            const pick = spawn.fullPickList[Math.floor(Math.random() * spawn.fullPickList.length)]
            spawn[pick](x, y);
        } else {
            const t = spawn.mobTierSpawnOrder[level.levelsCleared]
            const pickFrom = spawn.tier[t]
            const pick = pickFrom[Math.floor(Math.random() * pickFrom.length)];
            spawn[pick](x, y);
        }
    },
    spawnChance(chance) {
        if (Math.random() < 0.1 + mob.length) false
        const mobs = 5 * Math.log(level.levelsCleared + 1) * (localSettings.isHideHUD ? 0.5 : 1)
        const maxMobs = (simulation.difficultyMode === 1) ? 2 : mobs 
        return (Math.random() < chance + 0.35 * level.levelsCleared) && (mob.length < maxMobs)
    },
    randomMob(x, y, chance = 1) {
        if (spawn.spawnChance(chance) || chance === Infinity) {
            const pick = spawn.pickList[Math.floor(Math.random() * spawn.pickList.length)];
            spawn[pick](x, y);
        }
        if (tech.isDuplicateMobs && Math.random() < tech.duplicationChance()) {
            const pick = spawn.pickList[Math.floor(Math.random() * spawn.pickList.length)];
            spawn[pick](x, y);
        }
    },
    randomSmallMob(x, y,
        num = Math.max(Math.min(Math.round(Math.random() * simulation.difficulty * 0.2), 4), 0),
        size = 16 + Math.ceil(Math.random() * 15),
        chance = 1) {
        if (spawn.spawnChance(chance)) {
            for (let i = 0; i < num; ++i) {
                const pick = spawn.pickList[Math.floor(Math.random() * spawn.pickList.length)];
                spawn[pick](x + Math.round((Math.random() - 0.5) * 20) + i * size * 2.5, y + Math.round((Math.random() - 0.5) * 20), size);
            }
        }
        if (tech.isDuplicateMobs && Math.random() < tech.duplicationChance()) {
            for (let i = 0; i < num; ++i) {
                const pick = spawn.pickList[Math.floor(Math.random() * spawn.pickList.length)];
                spawn[pick](x + Math.round((Math.random() - 0.5) * 20) + i * size * 2.5, y + Math.round((Math.random() - 0.5) * 20), size);
            }
        }
    },
    allowedGroupList: [
        ["starter"],
        ["laser", "pitcher", "beamer", "shooter", "launcher", "grenadier"],
        ["focuser", "pulsar", "pitcher", "shooter", "launcher", "grenadier"],
        ["launcherOne", "sniper", "laserLayer", "freezer", "pulsar", "pitcher3"],
        ["launcherOne", "sniper", "laserLayer", "quadLaser", "launchPusher", "mortar", "freezer", "pitcher4"],
    ],
    randomGroup(x, y, chance = 1) {
        if ((spawn.spawnChance(chance) && simulation.difficulty > 2) || chance === Infinity) {
            if (level.levelsCleared > 13) {
                function pickRandom(arr) {
                    const group = arr[Math.floor(Math.random() * arr.length)];
                    return group[Math.floor(Math.random() * group.length)];
                }
                let pick = pickRandom(spawn.allowedGroupList)
                if (Math.random() < 0.55) {
                    spawn.nodeGroup(x, y, pick);
                } else {
                    spawn.lineGroup(x, y, pick);
                }
            } else {
                const t = spawn.mobTierSpawnOrder[level.levelsCleared]
                let pick = spawn.allowedGroupList[t][Math.floor(Math.random() * spawn.allowedGroupList[t].length)];
                if (Math.random() < 0.55) {
                    spawn.nodeGroup(x, y, pick);
                } else {
                    spawn.lineGroup(x, y, pick);
                }
            }
        }
    },
    randomLevelBoss(x, y, options = []) {
        if (level.levelsCleared > 13) {
            const pick = spawn.randomBossList[Math.floor(Math.random() * spawn.randomBossList.length)]
            spawn[pick](x, y)
        } else {
            if (simulation.difficultyMode > 1 || level.levelsCleared > 1) {
                if (options.length === 0) {
                    const t = spawn.mobTierSpawnOrder[level.levelsCleared]
                    const name = spawn.bossTier[t][spawn.bossTierIndex[t]]
                    if (!name) { 
                        const pick = spawn.randomBossList[Math.floor(Math.random() * spawn.randomBossList.length)]
                        spawn[pick](x, y)
                    } else {
                        spawn[name](x, y)
                        spawn.bossTierIndex[t]++
                        if (spawn.bossTierIndex[t] === spawn.bossTier[t].length) spawn.bossTierIndex[t] = 0
                    }
                } else {
                    spawn[options[Math.floor(Math.random() * options.length)]](x, y)
                }
            } else {
                powerUps.spawnBossPowerUp(x, y)
            }
        }
    },
    secondaryBossChance(x, y, options = []) {
        if (simulation.difficultyMode > 2) {
            spawn.randomLevelBoss(x, y, options);
            powerUps.spawn(x - 30, y, "ammo");
            powerUps.spawn(x + 30, y, "ammo");
        } else {
            return false
        }
    },
    randomHigherTierMob(x, y) { 
        if (simulation.difficultyMode > 3) {
            const t = spawn.mobTierSpawnOrder[level.levelsCleared]
            const pickFrom = spawn.tier[t]
            const pick = pickFrom[Math.floor(Math.random() * pickFrom.length)];
            spawn[pick](x, y)
        }
    },
    darkMatter(x = m.pos.x, y = m.pos.y) { 
        mobs.spawn(x, y, 3, 0.1, "transparent");
        let me = mob[mob.length - 1];
        me.stroke = "transparent"
        me.isShielded = true; 
        me.leaveBody = false;
        me.isBadTarget = true;
        me.isUnblockable = true;
        me.isDropPowerUp = false;
        me.collisionFilter.category = 0;
        me.collisionFilter.mask = 0; 
        me.chaseSpeed = 3.3
        me.isDarkMatter = true;
        me.frictionAir = 0.006
        me.onDeath = function () {
            tech.isHarmDarkMatter = false;
        }
        me.do = function () {
            if (!simulation.isTimeSkipping) {
                const scale = ((tech.isMoveDarkMatter || tech.isNotDarkMatter) ? 1.6 : 1) * level.isReducedRegen
                const sine = Math.sin(simulation.cycle * 0.015)
                this.radius = 148 * tech.isDarkStar + 370 * (1 + 0.1 * sine)
                const sub = Vector.sub(player.position, this.position)
                const mag = Vector.magnitude(sub)
                if (tech.isMoveDarkMatter && m.crouch && input.down) {
                    Matter.Body.setVelocity(this, Vector.add(Vector.mult(this.velocity, 0.97), Vector.mult(player.velocity, 0.03)))
                    Matter.Body.setPosition(this, Vector.add(Vector.mult(this.position, 0.95), Vector.mult(player.position, 0.05)))
                }

                const force = Vector.mult(Vector.normalise(sub), 0.000000003 * (this.distanceToPlayer() > 4000 ? 3 : 1))
                this.force.x += force.x
                this.force.y += force.y

                if (tech.isNotDarkMatter) {
                    if (mag < this.radius) { 
                        tech.isHarmDarkMatter = false;
                    } else {
                        tech.isHarmDarkMatter = true;
                        ctx.strokeStyle = "rgba(80,120,200,0.2)" 
                        ctx.beginPath();
                        ctx.arc(m.pos.x, m.pos.y, 36 * player.scale, 0, 2 * Math.PI);
                        ctx.lineWidth = 10;
                        ctx.stroke();
                        if (tech.isDarkEnergy) {
                            m.energy += 0.00255 * scale
                            if (!(simulation.cycle % 12)) simulation.energyGenGraphic()
                        }
                    }
                } else {
                    if (mag < this.radius) { 
                        tech.isHarmDarkMatter = true;
                        ctx.strokeStyle = "rgba(80,120,200,0.2)" 
                        ctx.beginPath();
                        ctx.arc(m.pos.x, m.pos.y, 36 * player.scale, 0, 2 * Math.PI);
                        ctx.lineWidth = 10;
                        ctx.stroke();
                        if (tech.isDarkEnergy) {
                            m.energy += 0.00255 * scale
                            if (!(simulation.cycle % 12)) simulation.energyGenGraphic()
                        }
                    } else {
                        tech.isHarmDarkMatter = false;
                    }
                }

                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, this.radius + 15, 0, 2 * Math.PI);
                ctx.strokeStyle = "#000"
                ctx.lineWidth = 1;
                ctx.stroke();
                if (tech.isDarkStar && !m.isCloak) { 
                    ctx.fillStyle = "rgba(10,0,40,0.4)"
                    ctx.fill()
                    for (let i = 0, len = mob.length; i < len; ++i) {
                        if (mob[i].alive && !mob[i].isShielded) {
                            if (Vector.magnitude(Vector.sub(this.position, mob[i].position)) - mob[i].radius < this.radius) {
                                const dmg = 0.035 * scale
                                mob[i].damage(dmg);
                                simulation.drawList.push({ 
                                    x: mob[i].position.x,
                                    y: mob[i].position.y,
                                    radius: mob[i].radius + 8,
                                    color: `rgba(10,0,40,0.1)`,
                                    time: 4
                                });
                            }
                        }
                    }
                }
                ctx.beginPath();
                const rate = 150
                const r = simulation.cycle % rate
                ctx.arc(this.position.x, this.position.y, 15 + this.radius + 0.3 * r, 0, 2 * Math.PI);
                ctx.strokeStyle = `rgba(0,0,0,${0.5 * Math.max(0, 1 - 1.4 * r / rate)})`
                ctx.stroke();
            }
        }
    },
    WIMP(x = level.exit.x + tech.wimpCount * 200 * (Math.random() - 0.5), y = level.exit.y + tech.wimpCount * 200 * (Math.random() - 0.5)) { 
        mobs.spawn(x, y, 3, 0.1, "transparent");
        let me = mob[mob.length - 1];
        me.stroke = "transparent"
        me.isShielded = true; 
        me.leaveBody = false;
        me.isBadTarget = true;
        me.isUnblockable = true;
        me.isDropPowerUp = false;
        me.collisionFilter.category = 0;
        me.collisionFilter.mask = 0; 
        me.chaseSpeed = 1.2 + 2.3 * Math.random()

        me.awake = function () {
            const sub = Vector.sub(player.position, this.position)
            const where = Vector.add(this.position, Vector.mult(Vector.normalise(sub), this.chaseSpeed))

            Matter.Body.setPosition(this, { 
                x: where.x,
                y: where.y
            });
            Matter.Body.setVelocity(this, { x: 0, y: 0 });

            if (m.immuneCycle < m.cycle && Vector.magnitude(Vector.sub(player.position, this.position)) < this.radius) {
                const DRAIN = tech.isRadioactiveResistance ? 0.05 * 0.2 : 0.05
                if (m.energy > DRAIN) {
                    if (m.immuneCycle < m.cycle) m.energy -= DRAIN
                } else {
                    m.energy = 0;
                    m.takeDamage((tech.isRadioactiveResistance ? 0.005 * 0.2 : 0.005) * this.damageScale())
                    simulation.drawList.push({ 
                        x: this.position.x,
                        y: this.position.y,
                        radius: this.radius,
                        color: simulation.mobDmgColor,
                        time: simulation.drawTime
                    });
                }
            }
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(25,139,170,${0.2 + 0.12 * Math.random()})`;
            ctx.fill();
            this.radius = 100 * (1 + 0.25 * Math.sin(simulation.cycle * 0.03))
        }
        me.do = function () { 
            if (player.speed > 1 && !m.isCloak) {
                if (this.distanceToPlayer() < 500) {
                    const unit = Vector.rotate({ x: 1, y: 0 }, Math.random() * 6.28)
                    Matter.Body.setPosition(this, Vector.add(player.position, Vector.mult(unit, 2000)))
                }
                setTimeout(() => {
                    this.do = this.awake;
                }, 1000 * Math.random());
            }
            this.checkStatus();
        };
    },
    finalBoss(x, y, radius = 300) {
        mobs.spawn(x, y, 6, radius, "rgb(150,150,255)");
        let me = mob[mob.length - 1];
        me.stroke = "transparent"
        setTimeout(() => { 
            me.constraint = Constraint.create({
                pointA: { x: me.position.x, y: me.position.y },
                bodyB: me,
                stiffness: 1,
                damping: 1
            });
            Composite.add(engine.world, me.constraint);
        }, 1000); 
        me.tier = 5
        me.isBoss = true;
        me.isFinalBoss = true;
        me.frictionAir = 0.01;
        me.memory = Infinity;
        me.locatePlayer();
        me.hasRunDeathScript = false
        me.cycle = 1;

        Matter.Body.setDensity(me, 0.2); 
        me.damageReduction = 0.14
        me.startingDamageReduction = me.damageReduction
        me.nextHealthThreshold = 0.999
        me.invulnerableCount = 0
        me.isInvulnerable = false
        console.log(me.isDropPowerUp)
        me.totalModes = 0
        me.lastDamageCycle = 0
        me.onDamage = function () {
            this.lastDamageCycle = this.cycle
            if (this.health < this.nextHealthThreshold) {
                if (this.health === 1) me.cycle = 1; 
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 
                this.invulnerableCount = 0
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        me.invulnerable = function () {
            if (this.isInvulnerable) {
                this.invulnerableCount++
                if (this.invulnerableCount === 120 || this.invulnerableCount === 300 || this.invulnerableCount === 540) { 
                    const tier = 1 + Math.floor(Math.random() * 4)
                    me.mobType = spawn.tier[tier][Math.floor(Math.random() * spawn.tier[tier].length)]; 
                    for (let i = 0, len = Math.floor(4 + 9 * Math.random()); i < len; i++) me.spawnMobs(i)
                }

                if (this.invulnerableCount > 600) {
                    let foundMobs = false
                    for (let i = 0; i < mob.length; i++) {
                        if (mob[i].isFinalBossMob) {
                            foundMobs = true
                            break
                        }
                    }
                    if (!foundMobs) {
                        setTimeout(() => { this.pushAway(); }, 1000);
                        this.isInvulnerable = false
                        this.damageReduction = this.startingDamageReduction
                        this.mode[this.totalModes].enter() 
                        this.totalModes++
                        level.newLevelOrPhase() 
                    }
                }
                ctx.beginPath(); 
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 25 + 10 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.8 + 0.2 * Math.random()})`;
                ctx.stroke();
                ctx.fillStyle = `rgba(255,255,255,0.7)`;
                ctx.fill()
            }
        }
        me.damageReductionDecay = function () { 
            if (!(me.cycle % 60) && this.lastDamageCycle + 240 > this.cycle) this.damageReduction *= 1.04 
        }
        me.mobType = spawn.tier[4][Math.floor(Math.random() * spawn.tier[4].length)]
        me.spawnMobs = function (index = 0) {
            const vertex = me.vertices[index % 6]
            const unit = Vector.normalise(Vector.sub(me.position, vertex))
            const where = Vector.add(vertex, Vector.mult(unit, -30))
            spawn.allowShields = false; 
            spawn[me.mobType](where.x + 50 * (Math.random() - 0.5), where.y + 50 * (Math.random() - 0.5));
            spawn.allowShields = true; 
            mob[mob.length - 1].tier = undefined
            mob[mob.length - 1].isFinalBossMob = true
            const velocity = Vector.mult(Vector.perp(unit), -10) 
            Matter.Body.setVelocity(mob[mob.length - 1], { x: me.velocity.x + velocity.x, y: me.velocity.y + velocity.y });
        }
        me.maxMobs = 400
        me.mode = [{
            name: "motionLaser",
            laser: [],
            do() {
                for (let i = 0; i < this.laser.length; i++) {
                    this.laser[i].motionQuery()
                }
            },
            enter() {
                for (let i = -3; i < 4; i++) {
                    const x = me.position.x + i * 700
                    this.laser.push(level.laser({ x: x, y: -1500 }, { x: x, y: 0 }))
                }
            },
            exit() { },
        }, {
            name: "ring",
            count: 0,
            radius: 400, 
            width: 300,
            do() {
                this.count++
                if (this.count > 210) { 
                    this.count = 0
                    this.radius = 400 + Math.floor(1700 * Math.random())
                } else if (this.count > 180) { 
                    const dist = Vector.magnitude(Vector.sub(me.position, player.position)) 
                    if (m.immuneCycle < m.cycle && dist > this.radius - this.width / 2 && dist < this.radius + this.width / 2) {
                        if (m.immuneCycle < m.cycle + 60 + m.collisionImmuneCycles) m.immuneCycle = m.cycle + 60 + m.collisionImmuneCycles; 
                        const dmg = 0.1 * me.damageScale()
                        m.takeDamage(dmg);
                        simulation.drawList.push({ 
                            x: m.pos.x,
                            y: m.pos.y,
                            radius: dmg * 1500,
                            color: `rgba(255,0,50,0.7)`,
                            time: 20
                        });
                    }
                    ctx.beginPath();
                    ctx.arc(me.position.x, me.position.y, this.radius + 3 * (Math.random() - 0.5), 0, 2 * Math.PI); 
                    ctx.lineWidth = this.width;  
                    ctx.strokeStyle = `rgba(255,0,50,${0.84 + 0.16 * Math.random()})`
                    ctx.stroke();
                } else if (this.count > 60) {
                    ctx.beginPath();
                    ctx.arc(me.position.x, me.position.y, this.radius, 0, 2 * Math.PI); 
                    ctx.lineWidth = this.width;  
                    ctx.strokeStyle = `rgba(255,0,50,${0.1 + 0.07 * Math.random()})`
                    ctx.stroke();
                }
            },
            enter() { },
            exit() { },
        }, {
            name: "boulders",
            spawnRate: Math.max(30, 170 - 5 * simulation.difficultyMode),
            do() {
                if (!(me.cycle % this.spawnRate) && mob.length < me.maxMobs) {
                    me.boulder(me.position.x, me.position.y + 250)
                }
            },
            enter() { },
            exit() { },
        },
        {
            name: "mobs",
            spawnRate: Math.max(60, 240 - 20 * simulation.difficultyMode),
            do() {
                if (!(me.cycle % this.spawnRate) && mob.length < me.maxMobs && !this.isInvulnerable) {
                    me.torque += 0.000015 * me.inertia; 

                    const index = Math.floor((me.cycle % (this.spawnRate * 6)) / this.spawnRate) 
                    if (index === 0) {
                        const tier = 4
                        me.mobType = spawn.tier[tier][Math.floor(Math.random() * spawn.tier[tier].length)];
                    }
                    me.spawnMobs(index)
                }
            },
            enter() { },
            exit() { },
        },
        {
            name: "hoppers",
            spawnRate: Math.max(90, 480 - 16 * simulation.difficultyMode),
            do() {
                if (!(me.cycle % this.spawnRate) && mob.length < me.maxMobs) {
                    me.torque += 0.00002 * me.inertia; 
                    for (let i = 0; i < 6; i++) {
                        const vertex = me.vertices[i]
                        spawn.hopBullet(vertex.x + 50 * (Math.random() - 0.5), vertex.y + 50 * (Math.random() - 0.5), 4, 13 + Math.ceil(Math.random() * 8));
                        Matter.Body.setDensity(mob[mob.length - 1], 0.002); 
                        const velocity = Vector.mult(Vector.perp(Vector.normalise(Vector.sub(me.position, vertex))), -18) 
                        Matter.Body.setVelocity(mob[mob.length - 1], {
                            x: me.velocity.x + velocity.x,
                            y: me.velocity.y + velocity.y
                        });
                    }
                    let where = { x: 600 - Math.random() * 100, y: -225 }
                    if (simulation.isHorizontalFlipped) where.x = -600 + Math.random() * 100
                    spawn.hopBullet(where.x, where.y, 4, 13 + Math.ceil(Math.random() * 8));
                    Matter.Body.setDensity(mob[mob.length - 1], 0.002); 
                }
            },
            enter() { },
            exit() { },
        },
        {
            name: "seekers",
            spawnRate: Math.max(10, 80 - 6 * simulation.difficultyMode),
            do() {
                if (!(me.cycle % this.spawnRate) && mob.length < me.maxMobs) { 
                    const index = Math.floor((me.cycle % 360) / 60)
                    spawn.seeker(me.vertices[index].x, me.vertices[index].y, 4, 18 * (0.5 + Math.random()));
                    const who = mob[mob.length - 1]
                    Matter.Body.setDensity(who, 0.00003); 
                    who.timeLeft = 720 + 30 * simulation.difficulty 
                    who.accelMag = 0.0004 * simulation.accelScale; 
                    who.frictionAir = 0.01 
                }
            },
            enter() { },
            exit() { },
        },
        {
            name: "mines",
            bombCycle: 0,
            bombInterval: Math.max(2, 10 - simulation.difficultyMode),
            do() {
                const yOff = 120
                this.bombCycle++
                if (!(this.bombCycle % this.bombInterval) && (this.bombCycle % 660) > 330) { 
                    if (simulation.isHorizontalFlipped) {
                        const x = m.pos.x + 200 * (Math.random() - 0.5)
                        if (x > -750) { 
                            spawn.mine(Math.min(Math.max(-730, x), 100), -450 - yOff * Math.random()) 
                            mob[mob.length - 1].fallHeight = -209
                        } else { 
                            spawn.mine(Math.min(Math.max(-5375, x), -765), -1500 - yOff * Math.random()) 
                            mob[mob.length - 1].fallHeight = -9
                        }
                        if (Math.random() < 0.5) {
                            spawn.mine(-5350 + 4550 * Math.random(), -1500 - yOff * Math.random()) 
                            mob[mob.length - 1].fallHeight = -9
                        }
                    } else {
                        const x = m.pos.x + 200 * (Math.random() - 0.5)
                        if (x < 750) { 
                            spawn.mine(Math.min(Math.max(-100, x), 735), -450 - yOff * Math.random()) 
                            mob[mob.length - 1].fallHeight = -209
                        } else { 
                            spawn.mine(Math.min(Math.max(760, x), 5375), -1500 - yOff * Math.random()) 
                            mob[mob.length - 1].fallHeight = -9
                        }
                        if (Math.random() < 0.5) { 
                            spawn.mine(800 + 4550 * Math.random(), -1500 - yOff * Math.random()) 
                            mob[mob.length - 1].fallHeight = -9
                        }
                    }
                }
                for (let i = 0; i < mob.length; i++) { 
                    if (mob[i].isMine) {
                        if (mob[i].position.y < mob[i].fallHeight) {
                            mob[i].force.y += mob[i].mass * 0.03;
                        } else if (!mob[i].isOnGround) {
                            mob[i].isOnGround = true
                            Matter.Body.setPosition(mob[i], {
                                x: mob[i].position.x,
                                y: mob[i].fallHeight
                            })
                        }
                    }
                }
            },
            enter() {
                this.bombCycle = 0;
            },
            exit() {
                for (let i = 0; i < mob.length; i++) {
                    if (mob[i].isMine) mob[i].isExploding = true 
                }
            },
        },
        {
            name: "orbiters",
            spawnRate: Math.ceil(Math.max(2, 5 - 0.2 * simulation.difficultyMode)),
            orbitersCycle: 0,
            do() {
                this.orbitersCycle++
                if (!(this.orbitersCycle % this.spawnRate) && (this.orbitersCycle % 660) > 600 && mob.length < me.maxMobs) {
                    const speed = (0.01 + 0.0005 * simulation.difficultyMode) * ((Math.random() < 0.5) ? 0.85 : -1.15)
                    const phase = 0 
                    const dist = me.distanceToPlayer()
                    me.orbitalNoVelocity(me, dist + 900 * (Math.random() - 0.5), 0.1 * Math.random() + phase, speed) 
                }
            },
            enter() { },
            exit() { },
        },
        {
            name: "laser",
            spinForce: 0.00000008, 
            fadeCycle: 0, 
            do() {
                this.fadeCycle++
                if (this.fadeCycle > 0) {
                    me.torque += this.spinForce * me.inertia; 
                    if (this.fadeCycle > 360) this.fadeCycle = -200 + simulation.difficultyMode * simulation.difficultyMode 
                    ctx.strokeStyle = "#50f";
                    ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    if (this.fadeCycle < 120) { 
                        const scale = this.fadeCycle / 120
                        const dmg = this.fadeCycle < 60 ? 0 : 0.1 * me.damageScale() * scale
                        me.lasers(me.vertices[0], me.angle + Math.PI / 6, dmg);
                        me.lasers(me.vertices[1], me.angle + 3 * Math.PI / 6, dmg);
                        me.lasers(me.vertices[2], me.angle + 5 * Math.PI / 6, dmg);
                        me.lasers(me.vertices[3], me.angle + 7 * Math.PI / 6, dmg);
                        me.lasers(me.vertices[4], me.angle + 9 * Math.PI / 6, dmg);
                        me.lasers(me.vertices[5], me.angle + 11 * Math.PI / 6, dmg);
                        ctx.strokeStyle = `rgba(85, 0, 255,${scale})`;
                        ctx.stroke();
                        ctx.strokeStyle = `rgba(80, 0, 255,${0.07 * scale})`
                    } else if (this.fadeCycle > 0) {
                        me.lasers(me.vertices[0], me.angle + Math.PI / 6);
                        me.lasers(me.vertices[1], me.angle + 3 * Math.PI / 6);
                        me.lasers(me.vertices[2], me.angle + 5 * Math.PI / 6);
                        me.lasers(me.vertices[3], me.angle + 7 * Math.PI / 6);
                        me.lasers(me.vertices[4], me.angle + 9 * Math.PI / 6);
                        me.lasers(me.vertices[5], me.angle + 11 * Math.PI / 6);
                        ctx.strokeStyle = "#50f";
                        ctx.stroke();
                        ctx.strokeStyle = "rgba(80,0,255,0.07)";
                    }
                    ctx.setLineDash([]);
                    ctx.lineWidth = 20;
                    ctx.stroke();
                }
            },
            enter() { this.fadeCycle = 0 },
            exit() { },
        },
        {
            name: "black hole",
            eventHorizon: 0,
            eventHorizonRadius: 1700,
            eventHorizonCycle: 0,
            do() {
                this.eventHorizonCycle++
                this.eventHorizon = Math.max(0, this.eventHorizonRadius * Math.sin(this.eventHorizonCycle * 0.007)) 
                ctx.beginPath();
                ctx.arc(me.position.x, me.position.y, this.eventHorizon * 0.2, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.3)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(me.position.x, me.position.y, this.eventHorizon * 0.4, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.25)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(me.position.x, me.position.y, this.eventHorizon * 0.6, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.2)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(me.position.x, me.position.y, this.eventHorizon * 0.8, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.15)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(me.position.x, me.position.y, this.eventHorizon, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,0,0,0.1)";
                ctx.fill();
                if (Vector.magnitude(Vector.sub(me.position, player.position)) < this.eventHorizon) {
                    if (m.immuneCycle < m.cycle) {
                        if (m.energy > 0) m.energy -= 0.018
                        if (m.energy < 0.05 && m.immuneCycle < m.cycle) m.takeDamage(0.0003 * me.damageScale());
                    }
                    const angle = Math.atan2(player.position.y - me.position.y, player.position.x - me.position.x);
                    player.force.x -= 0.0017 * Math.cos(angle) * player.mass * (m.onGround ? 1.7 : 1);
                    player.force.y -= 0.0017 * Math.sin(angle) * player.mass;
                    ctx.beginPath();
                    ctx.moveTo(me.position.x, me.position.y);
                    ctx.lineTo(m.pos.x, m.pos.y);
                    ctx.lineWidth = Math.min(60, me.radius * 2);
                    ctx.strokeStyle = "rgba(0,0,0,0.5)";
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(m.pos.x, m.pos.y, 40, 0, 2 * Math.PI);
                    ctx.fillStyle = "rgba(0,0,0,0.3)";
                    ctx.fill();
                }
                me.curl(this.eventHorizon);
            },
            enter() { this.eventHorizonCycle = 0 },
            exit() { },
        },
        {
            name: "oscillation",
            waveCycle: 0,
            whereX: simulation.isHorizontalFlipped ? -3000 : 3000,
            do() {
                this.waveCycle += !me.isStunned + !me.isSlowed
                me.constraint.pointA = {
                    x: this.whereX + 600 * Math.sin(this.waveCycle * 0.005),
                    y: me.constraint.pointA.y
                }
            },
            enter() {
                spawn.shield(me, me.position.x, me.position.y, 1);
            },
            exit() { this.waveCycle = 0 },
        },
        {
            name: "slow zone",
            waveCycle: 0,
            whereX: simulation.isHorizontalFlipped ? -3000 : 3000,
            width: 1200,
            cycle: 0,
            cycleDuration: 150,
            zone: 0,
            isMovingRight: true,
            playerSlowTime: 0,
            do() {
                this.cycle++
                if (this.cycle % this.cycleDuration === 0) { 
                    this.zone += this.isMovingRight ? 1 : -1
                    if (this.zone > 0) this.isMovingRight = false
                    if (this.zone < -1) this.isMovingRight = true
                    this.whereX = (simulation.isHorizontalFlipped ? -3000 : 3000) + this.width * this.zone
                }
                if (this.cycle % this.cycleDuration > 0.45 * this.cycleDuration) {
                    ctx.fillStyle = `rgba(0, 100, 255, ${0.19 + 0.015 * Math.sin(simulation.cycle * 0.36)})`;
                    ctx.fillRect(this.whereX, -1500, this.width, 1500);
                    if (player.position.x > this.whereX && player.position.x < this.whereX + this.width) {
                        this.playerSlowTime = 180
                        const dmg = 0.0001 * me.damageScale()
                        m.takeDamage(dmg);
                    }
                } else { 
                    ctx.fillStyle = `rgba(0, 100, 255, ${0.2 + 0.25 * Math.random()})`;
                    ctx.fillRect(this.whereX, -1500, this.width, 12);
                    ctx.fillRect(this.whereX, -12, this.width, 12);
                }
                if (this.playerSlowTime > 0) {
                    this.playerSlowTime-- 
                    Matter.Body.setVelocity(player, { x: Math.max(0.05, 1 - 0.01 * Math.max(10, this.playerSlowTime)) * player.velocity.x, y: Math.max(0.2, 1 - 0.0025 * this.playerSlowTime) * player.velocity.y });
                    ctx.beginPath();
                    ctx.arc(m.pos.x, m.pos.y, 45, 0, 2 * Math.PI);
                    ctx.fillStyle = `rgba(0,100,255,${(0.003 * Math.max(10, this.playerSlowTime))})`;
                    ctx.fill();
                }
            },
            enter() {
            },
            exit() { },
        },
        {
            name: "antigravity",
            cycle: 0,
            startCycle: 420,
            totalCycles: 600,
            rectX: simulation.isHorizontalFlipped ? -5400 : -150, 
            do() {
                this.cycle++
                if (this.cycle > this.totalCycles) this.cycle = 0
                if (this.cycle === this.startCycle) {
                    for (let i = 0, len = body.length; i < len; ++i) {
                        body[i].force.y -= 0.05 * body[i].mass
                    }
                    for (let i = 0, len = powerUp.length; i < len; ++i) {
                        powerUp[i].force.y -= 0.07 * powerUp[i].mass
                    }
                    for (let i = 0, len = bullet.length; i < len; ++i) {
                        bullet[i].force.y -= 0.05 * bullet[i].mass
                    }
                    for (let i = 0, len = mob.length; i < len; ++i) {
                        mob[i].force.y -= 0.15 * mob[i].mass
                    }
                    player.force.y -= 0.04 * player.mass
                } else if (this.cycle > this.startCycle) { 
                    for (let i = 0, len = body.length; i < len; ++i) {
                        body[i].force.y -= simulation.g * body[i].mass
                        Matter.Body.setVelocity(body[i], Vector.mult(body[i].velocity, 0.98)); 
                    }
                    for (let i = 0, len = powerUp.length; i < len; ++i) {
                        powerUp[i].force.y -= simulation.g * powerUp[i].mass
                    }
                    player.force.y -= simulation.g * player.mass 
                    Matter.Body.setVelocity(player, Vector.mult(player.velocity, 0.985)); 
                    ctx.fillStyle = `rgba(0, 0, 0, ${0.03 + 0.03 * Math.random()})`;
                    ctx.fillRect(this.rectX, -1500, 5650, 1500); 
                } else if (this.cycle > this.startCycle - 60) {
                    ctx.fillStyle = `rgba(0, 0, 0, ${0.2 + 0.25 * Math.random()})`;
                    ctx.fillRect(this.rectX, -25, 5650, 25); 
                }
            },
            enter() { spawn.shield(me, me.position.x, me.position.y, 1); },
            exit() { this.cycle = 0 },
        },
        ]
        me.mode.sort(() => Math.random() - 0.5);

        me.healthBarFinal = function () {
            const HEX_DIRS = [{ x: 0, y: -1 }, { x: 0.8660254, y: -0.5 }, { x: 0.8660254, y: 0.5 }, { x: 0, y: 1 }, { x: -0.8660254, y: 0.5 }, { x: -0.8660254, y: -0.5 }];

            function drawSierpinskiHex(ctx, x, y, radius, depth, num, scale) {
                if (depth === 0) {
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) ctx.lineTo(x + radius * HEX_DIRS[i].x, y + radius * HEX_DIRS[i].y);
                    ctx.fill();
                    return;
                }
                const r2 = radius * scale;
                const offset = radius - r2;
                for (let i = 0; i < num; i++) {
                    const d = HEX_DIRS[i];
                    const subNum = 6 
                    drawSierpinskiHex(ctx, x + offset * d.x, y + offset * d.y, r2, depth - 1, subNum, scale);
                }
            }

            const scale = 0.47 + 0.05 * Math.sin(simulation.cycle * 0.0037);
            const num = 1 + Math.min(6, Math.floor((this.health % 0.25) * 24));
            ctx.fillStyle = `hsla(${360 * Math.sin(this.cycle * 0.011 + Math.PI)},${50 + 20 * Math.sin(this.cycle * 0.004 + Math.PI)}%,${65 + 20 * Math.sin(this.cycle * 0.009 + Math.PI)}%,0.25)`;
            ctx.save();
            ctx.translate(this.position.x, this.position.y);
            ctx.rotate(this.angle);
            drawSierpinskiHex(ctx, 0, 0, this.radius, 1 + Math.floor(this.health * 4), num, scale);
            ctx.restore();
        }
        me.do = function () {
            this.fill = `hsl(${360 * Math.sin(this.cycle * 0.011)},${50 + 20 * Math.sin(this.cycle * 0.004)}%,${30 + 20 * Math.sin(this.cycle * 0.009)}%)`
            if (this.health < 1) {
                if (this.seePlayer.recall) {
                    if (localSettings.isHideHUD) {
                        this.healthBar1()
                    } else {
                        this.healthBarFinal()
                    }
                }
                this.cycle++;
                this.checkStatus();
                this.invulnerable();
                this.spawnBoss();
                this.damageReductionDecay();
                for (let i = 0; i < this.totalModes; i++) this.mode[i].do()
            }
        };
        me.spawnRate = 5800 - 30 * simulation.difficultyMode * simulation.difficultyMode
        me.spawnBoss = function () { 
            if (!(me.cycle % this.spawnRate) && this.health < 1) {
                this.spawnRate = Math.max(300, this.spawnRate - 10 * simulation.difficultyMode * simulation.difficultyMode) 
                spawn.randomLevelBoss(3000 * (simulation.isHorizontalFlipped ? -1 : 1) + 2000 * (Math.random() - 0.5), -1100 + 200 * (Math.random() - 0.5))
            }
        }
        me.pushAway = function (magX = 0.13, magY = 0.05) {
            for (let i = 0, len = body.length; i < len; ++i) {
                body[i].force.x += magX * body[i].mass * (body[i].position.x > this.position.x ? 1 : -1)
                body[i].force.y -= magY * body[i].mass
            }
            for (let i = 0, len = bullet.length; i < len; ++i) {
                bullet[i].force.x += magX * bullet[i].mass * (bullet[i].position.x > this.position.x ? 1 : -1)
                bullet[i].force.y -= magY * bullet[i].mass
            }
            for (let i = 0, len = powerUp.length; i < len; ++i) {
                powerUp[i].force.x += magX * powerUp[i].mass * (powerUp[i].position.x > this.position.x ? 1 : -1)
                powerUp[i].force.y -= magY * powerUp[i].mass
            }
            player.force.x += magX * player.mass * (player.position.x > this.position.x ? 1 : -1)
            player.force.y -= magY * player.mass
        }
        me.boulder = function (x, y) {
            mobs.spawn(x, y, 6, Math.floor(50 + 50 * Math.random()), this.fill);
            let boss = this
            let me = mob[mob.length - 1];
            me.stroke = "transparent";
            me.onHit = function () {
                this.timeLeft = 0
            };
            me.explodeRange = 500
            me.onDeath = function () { 
                simulation.drawList.push({ 
                    x: this.position.x,
                    y: this.position.y,
                    radius: this.explodeRange,
                    color: this.fill,
                    time: 8
                });
                let sub, knock
                sub = Vector.sub(player.position, this.position);
                if (Vector.magnitude(sub) < this.explodeRange) { 
                    m.takeDamage(0.05);
                    knock = Vector.mult(Vector.normalise(sub), player.mass * 0.1);
                    player.force.x += knock.x;
                    player.force.y += knock.y;
                }
                for (let i = 0, len = powerUp.length; i < len; ++i) { 
                    sub = Vector.sub(powerUp[i].position, this.position);
                    if (Vector.magnitude(sub) < this.explodeRange) {
                        knock = Vector.mult(Vector.normalise(sub), powerUp[i].mass * 0.1);
                        powerUp[i].force.x += knock.x;
                        powerUp[i].force.y += knock.y;
                    }
                }
                for (let i = 0, len = body.length; i < len; ++i) { 
                    sub = Vector.sub(body[i].position, this.position);
                    if (Vector.magnitude(sub) < this.explodeRange) {
                        knock = Vector.mult(Vector.normalise(sub), body[i].mass * 0.1);
                        body[i].force.x += knock.x;
                        body[i].force.y += knock.y;
                    }
                }
            }
            Matter.Body.setDensity(me, 0.003); 
            me.timeLeft = 300;
            me.g = 0.0005; 
            me.frictionAir = 0.005;
            me.friction = 1;
            me.frictionStatic = 1
            me.restitution = 0;
            me.leaveBody = false;
            me.isDropPowerUp = false;
            me.isBadTarget = true;
            me.isMobBullet = true;
            me.collisionFilter.category = cat.mobBullet;
            me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet;
            me.spin = me.inertia * 0.000005 * (1 + Math.random()) * (m.pos.x > me.position.x ? 1 : -1)
            Matter.Body.setAngularVelocity(me, 0.1 * (1 + 0.3 * Math.random()) * (m.pos.x > me.position.x ? 1 : -1));
            Matter.Body.setVelocity(me, { x: 0, y: 10 });
            me.do = function () {
                this.fill = boss.fill
                this.torque += this.spin;
                this.gravity();
                this.timeLimit();
                if (this.timeLeft < 60) {
                    ctx.beginPath();
                    ctx.arc(this.position.x, this.position.y, this.explodeRange, 0, 2 * Math.PI);
                    ctx.fillStyle = `rgba(255,255,255,0.15)`;
                    ctx.fill();
                }
            };
        }
        me.orbitalNoVelocity = function (who, radius, phase, speed) { 
            let boss = this
            mobs.spawn(who.position.x, who.position.y, 6, 20, "rgb(255,0,150)");
            let me = mob[mob.length - 1];
            me.stroke = "transparent";
            Matter.Body.setDensity(me, 0.001); 
            me.leaveBody = false;
            me.isDropPowerUp = false;
            me.isBadTarget = true;
            me.isUnstable = true; 
            me.isOrbital = true;
            me.collisionFilter.category = cat.mobBullet;
            me.collisionFilter.mask = cat.bullet; 
            me.do = function () {
                this.fill = boss.fill
                const time = simulation.cycle * speed + phase
                const orbit = { x: Math.cos(time), y: Math.sin(time) }
                Matter.Body.setPosition(this, Vector.add(who.position, Vector.mult(orbit, radius)))
                if (Matter.Query.collides(this, [player]).length > 0 && !(m.isCloak && tech.isIntangible) && m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                    const dmg = 0.13 * me.damageScale()
                    m.takeDamage(dmg);
                    simulation.drawList.push({ 
                        x: this.position.x,
                        y: this.position.y,
                        radius: Math.sqrt(dmg) * 200,
                        color: simulation.mobDmgColor,
                        time: simulation.drawTime
                    });
                    this.death();
                }
            };
        }
        me.lasers = function (where, angle, dmg = 0.1 * me.damageScale()) {
            const seeRange = 7000;
            best = {
                x: null,
                y: null,
                dist2: Infinity,
                who: null,
                v1: null,
                v2: null
            };
            const look = {
                x: where.x + seeRange * Math.cos(angle),
                y: where.y + seeRange * Math.sin(angle)
            };
            best = vertexCollision(where, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);
            if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                if (m.immuneCycle < m.cycle + 60 + m.collisionImmuneCycles) m.immuneCycle = m.cycle + 60 + m.collisionImmuneCycles; 
                m.takeDamage(dmg);
                simulation.drawList.push({ 
                    x: best.x,
                    y: best.y,
                    radius: dmg * 1500,
                    color: "rgba(80,0,255,0.5)",
                    time: 20
                });
            }
            if (best.dist2 === Infinity) best = look;
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
        }
        me.onDeath = function () {
            if (m.health < 0) {
                m.death() 
                if (m.alive) m.death() 
                return
            }
            if (!this.hasRunDeathScript) {
                this.hasRunDeathScript = true
                if (!simulation.isCheating) {
                    localSettings.difficultyCompleted[simulation.difficultyMode] = true
                    localStorage.setItem("localSettings", JSON.stringify(localSettings)); 
                }

                const len = body.length;
                const v = Matter.Vertices.hull(Matter.Vertices.clockwiseSort(this.vertices)) 
                body[len] = Matter.Bodies.fromVertices(this.position.x, this.position.y, v);
                Matter.Body.setVelocity(body[len], { x: 0, y: -3 });
                Matter.Body.setAngularVelocity(body[len], this.angularVelocity);
                body[len].collisionFilter.category = cat.body;
                body[len].collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob | cat.mobBullet;
                body[len].classType = "body";
                Composite.add(engine.world, body[len]); 
                const expand = function (that, massLimit) {
                    const scale = 1.05;
                    Matter.Body.scale(that, scale, scale);
                    if (that.mass < massLimit) setTimeout(expand, 20, that, massLimit);
                };
                expand(body[len], 200)

                function unlockExit() {
                    if (simulation.isHorizontalFlipped) {
                        level.exit.x = -5500 - 100;
                    } else {
                        level.exit.x = 5500;
                    }
                    level.exit.y = -330;
                    Matter.Composite.remove(engine.world, map[map.length - 1]);
                    map.splice(map.length - 1, 1);
                    simulation.draw.setPaths(); 
                }

                if (lore.techCount > (lore.techGoal - 1) && !simulation.isCheating) {
                    simulation.inGameConsole(`<span class="lore-text">undefined</span> <span class='color-symbol'>=</span> ${lore.techCount}/${lore.techGoal}`, 360);
                    setTimeout(function () {
                        simulation.inGameConsole(`level.levels.push("<span class='lore-text'>null</span>")`, 720);
                        unlockExit()
                        level.levels.push("null")
                    }, 4000);
                } else { 
                    let count = 0

                    function loop() {
                        if (!simulation.paused && !simulation.onTitlePage) {
                            count++
  if (count === 1260) {
                                document.getElementById("health").style.display = "none"
                                document.getElementById("health-bg").style.display = "none"
                                document.getElementById("defense-bar").style.display = "none"
                                document.getElementById("damage-bar").style.display = "none"
                                document.getElementById("text-log").style.display = "none"
                                document.getElementById("fade-out").style.opacity = 1; 
                                setTimeout(function () {
                                    if (!simulation.onTitlePage) {
                                        m.alive = false
                                        simulation.paused = true;
                                        engine.world.bodies.forEach((body) => { Matter.Composite.remove(engine.world, body) })
                                        Engine.clear(engine);
                                        simulation.splashReturn();
                                    }
                                }, 6000);
                                return
                            }
                        }
                        if (simulation.testing || simulation.difficultyMode > 6) {
                            unlockExit()
                            setTimeout(function () {
                                simulation.inGameConsole(`level.levels.length <span class='color-symbol'>=</span> <strong>Infinite</strong>`);
                            }, 1500);
                        } else {
                            if (!simulation.onTitlePage) requestAnimationFrame(loop);
                        }
                    }
                    requestAnimationFrame(loop);
                }
                function removeAll(array) {
                    for (let i = 0; i < array.length; ++i) Matter.Composite.remove(engine.world, array[i]);
                }
                removeAll(powerUp);
                powerUp = [];

                for (let i = 0, len = body.length; i < len; ++i) {
                    const velocity = Vector.mult(Vector.normalise(Vector.sub(this.position, body[i].position)), 65)
                    const pushUp = Vector.add(velocity, { x: 0, y: -0.5 })
                    Matter.Body.setVelocity(body[i], Vector.add(body[i].velocity, pushUp));
                }
                for (let j = 0; j < 8; j++) { 
                    for (let i = 0, len = mob.length; i < len; ++i) {
                        if (mob[i] !== this) {
                            if (mob[i].isInvulnerable) { 
                                mob[i].isInvulnerable = false
                                mob[i].damageReduction = 1
                            }
                            mob[i].damage(Infinity, true);
                        }
                    }
                }

                for (let i = 0, len = 22; i < len; i++) {
                    simulation.drawList.push({ 
                        x: this.position.x,
                        y: this.position.y,
                        radius: (i + 1) * 150,
                        color: `rgba(255,255,255,0.17)`,
                        time: 5 * (len - i + 1)
                    });
                }
            }
        };
    },
    zombie(x, y, radius = 20, sides = 4, color = "#000") { 
        mobs.spawn(x, y, sides, radius, color);
        let me = mob[mob.length - 1];
        me.damageReduction = 0 
        Matter.Body.setDensity(me, 0.0001) 
        me.isZombie = true
        me.isBadTarget = true;
        me.isSlowed = true
        me.isDropPowerUp = false;
        me.stroke = "#83a"
        me.accelMag = 0.003
        me.frictionAir = 0.005
        me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.mob
        me.seeAtDistance2 = 1000000 
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.zombieHealthBar();
            this.lookForMobTargets();
            this.attack();
        };
        me.mobSearchIndex = 0;
        me.target = null
        me.lookForMobTargets = function () {
            if (this.target === null && mob.length > 1 && !(simulation.cycle % this.seePlayerFreq)) { 
                let closeDist = Infinity;
                for (let i = 0, len = mob.length; i < len; ++i) {
                    if (
                        !mob[i].isZombie &&
                        !mob[i].isUnblockable &&
                        !mob[i].isMobBullet &&
                        Matter.Query.ray(map, this.position, mob[i].position).length === 0 &&
                        Matter.Query.ray(body, this.position, mob[i].position).length === 0
                    ) {
                        const DIST = Vector.magnitude(Vector.sub(this.position, mob[i].position));
                        if (DIST < closeDist) {
                            closeDist = DIST;
                            this.target = mob[i]
                        }
                    }
                }
            } else if (
                !(simulation.cycle % this.memory) &&
                this.target &&
                (!this.target.alive || Matter.Query.ray(map, this.position, this.target.position).length !== 0)
            ) {
                this.target = null 
            }
        }
        me.zombieHealthBar = function () {
            this.health -= 0.0003 
            if ((this.health < 0.01 || isNaN(this.health)) && this.alive) this.death();
            const h = this.radius * 0.3;
            const w = this.radius * 2;
            const x = this.position.x - w / 2;
            const y = this.position.y - w * 0.7;
            ctx.fillStyle = "rgba(100, 100, 100, 0.3)";
            ctx.fillRect(x, y, w, h);
            ctx.fillStyle = "rgba(136, 51, 170,0.7)";
            ctx.fillRect(x, y, w * this.health, h);
        }
        me.hitCD = 0
        me.attack = function () { 
            if (this.hitCD < simulation.cycle) {
                if (this.target) {
                    this.force = Vector.mult(Vector.normalise(Vector.sub(this.target.position, this.position)), this.accelMag * this.mass)
                } else {
                    this.torque += 0.0000003 * this.inertia;
                    const mag = 0.0003 * this.mass
                    this.force.x += mag * Math.cos(this.angle)
                    this.force.y += mag * Math.sin(this.angle)
                }
                if (this.speed > 15) { 
                    Matter.Body.setVelocity(this, { x: this.velocity.x * 0.96, y: this.velocity.y * 0.96 });
                } else if (this.speed < 10) {
                    Matter.Body.setVelocity(this, { x: this.velocity.x * 0.98, y: this.velocity.y * 0.98 });
                } else if (this.speed < 8) {
                    Matter.Body.setVelocity(this, { x: this.velocity.x * 0.99, y: this.velocity.y * 0.99 });
                }
                const hit = (who) => {
                    if (!who.isZombie && who.damageReduction && !who.isDarkMatter) {
                        this.hitCD = simulation.cycle + 15
                        const force = Vector.mult(Vector.normalise(Vector.sub(who.position, this.position)), 0.03 * this.mass)
                        this.force.x -= force.x;
                        this.force.y -= force.y;
                        this.target = null 

                        const dmg = 1.5 * who.damageReduction / Math.sqrt(who.mass)
                        who.health -= dmg
                        who.onDamage(dmg); 
                        who.locatePlayer();
                        if ((who.health < 0.01 || isNaN(who.health)) && who.alive) who.death();

                        simulation.drawList.push({
                            x: this.position.x,
                            y: this.position.y,
                            radius: Math.log(dmg + 1.1) * 40 * who.damageReduction + 3,
                            color: simulation.playerDmgColor,
                            time: simulation.drawTime
                        });
                    }
                }
                const collide = Matter.Query.collides(this, mob) 
                if (collide.length > 1) { 
                    for (let i = 0, len = collide.length; i < len; i++) {
                        hit(collide[i].bodyA)
                        hit(collide[i].bodyB)
                    }
                }

                if (m.immuneCycle < m.cycle && Matter.Query.collides(this, [player]).length) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 10;
                    m.takeDamage(0.04);
                    simulation.drawList.push({ 
                        x: this.position.x,
                        y: this.position.y,
                        radius: 5,
                        color: "rgba(136, 51, 170,0.5)",
                        time: 20
                    });

                    this.hitCD = simulation.cycle + 15
                    const force = Vector.mult(Vector.normalise(Vector.sub(player.position, this.position)), 0.1 * this.mass)
                    this.force.x -= force.x;
                    this.force.y -= force.y;
                    this.target = null 
                }
            }
        }
    },
    starter(x, y, radius = Math.floor(15 + 20 * Math.random())) { 
        mobs.spawn(x, y, 8, radius, "#9ccdc6");
        let me = mob[mob.length - 1];
        me.tier = 0
        me.accelMag = 0.0002
        me.repulsionRange = 400000 + radius * radius; 
        me.seeAtDistance2 = 2000000 
        Matter.Body.setDensity(me, 0.0005) 
        me.do = function () {
            this.seePlayerByLookingAt();
            this.attraction();
            this.repulsion();
            this.checkStatus();
            if (this.seePlayer.recall) this.healthBar1()
        };
    },
    hallucinationMob(x = 0, y = 0, radius = Math.floor(11 + 60 * Math.random() * Math.random())) { 
        mobs.spawn(x, y, 3 + Math.floor(5 * Math.random()), radius, "#fff");
        let me = mob[mob.length - 1];
        me.tier = 0
        me.accelMag = 0.0001 + 0.0004 * Math.random()
        me.repulsionRange = 400000 + radius * radius; 
        me.seeAtDistance2 = 2000000 
        Matter.Body.setDensity(me, 0.00001) 
        me.collisionFilter.mask = 0

        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;

        me.matchMob = function () {
            if (mob.length > 1) {
                let i = Math.floor(Math.random() * mob.length);
                if (mob[i] !== this) {
                    this.fill = mob[i].fill
                } else {
                    i = Math.floor(Math.random() * mob.length);
                    if (mob[i] !== this) {
                        this.fill = mob[i].fill
                    } else {
                        i = Math.floor(Math.random() * mob.length);
                        if (mob[i] !== this) {
                            this.fill = mob[i].fill
                        }
                    }
                }
            }
        }
        me.matchMob()
        me.onDeath = function () {
            spawn.hallucinationMob()
        }

        const t = Math.max(1, Math.min(Math.ceil(0.3333 * level.levelsCleared), 4))
        me.hBar = me[`healthBar${t}`]

        const unit = Vector.rotate({ x: 1, y: 0 }, Math.random() * 6.28)
        const where = Vector.add(m.pos, Vector.mult(unit, 1200 + 3000 * Math.random() * Math.random()))
        Matter.Body.setPosition(me, where)

        me.do = function () {
            this.hBar();
            this.alwaysSeePlayer();
            this.attraction();
            if (Matter.Query.region([...bullet, player], this.bounds).length > 0) {
                this.death()
            }
        };
    },
    blockGroup(x, y, num = 3 + Math.random() * 8) {
        for (let i = 0; i < num; i++) {
            const radius = 25 + Math.floor(Math.random() * 20)
            spawn.blockGroupMob(x + Math.random() * radius, y + Math.random() * radius, radius);
        }
    },
    blockGroupMob(x, y, radius = 25 + Math.floor(Math.random() * 20)) {
        mobs.spawn(x, y, 4, radius, "#999");
        let me = mob[mob.length - 1];
        me.g = 0.00015; 
        me.accelMag = 0.0008 * simulation.accelScale;
        me.groupingRangeMax = 250000 + Math.random() * 100000;
        me.groupingRangeMin = (radius * 8) * (radius * 8);
        me.groupingStrength = 0.0005
        me.memory = 200;
        me.isGrouper = true;
        me.seeAtDistance2 = 600 * 600
        me.seePlayerFreq = Math.floor(50 + 50 * Math.random())
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.gravity();
            this.checkStatus();
            this.seePlayerCheck();
            if (this.seePlayer.recall) {
                this.attraction();
                ctx.beginPath();
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isGrouper && mob[i] != this && mob[i].isDropPowerUp) { 
                        const distance2 = Vector.magnitudeSquared(Vector.sub(this.position, mob[i].position))
                        if (distance2 < this.groupingRangeMax) {
                            if (!mob[i].seePlayer.recall) mob[i].seePlayerCheck(); 
                            if (distance2 > this.groupingRangeMin) {
                                const angle = Math.atan2(mob[i].position.y - this.position.y, mob[i].position.x - this.position.x);
                                const forceMag = this.groupingStrength * mob[i].mass;
                                mob[i].force.x -= forceMag * Math.cos(angle);
                                mob[i].force.y -= forceMag * Math.sin(angle);
                            }
                            ctx.moveTo(this.position.x, this.position.y);
                            ctx.lineTo(mob[i].position.x, mob[i].position.y);
                        }
                    }
                }
                ctx.strokeStyle = "#0ff";
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    },
    blockBoss(x, y, radius = 60) {
        const activeBeams = []; 
        const beamTotalDuration = 60
        mobs.spawn(x, y, 4, radius, "#999"); 
        const me = mob[mob.length - 1];
        me.tier = 2
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.002); 
        me.damageReduction = 0.04
        me.frictionAir = 0.01;
        me.accelMag = 0.0002;
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y);
            for (const who of mob) {
                if (who.isNecroMob) { 
                    who.leaveBody = true
                    who.damage(Infinity)
                }
            }
        }
        me.target = player; 
        me.do = function () {
            this.checkStatus();
            this.seePlayerCheck();
            if (this.target) { 
                const force = Vector.mult(Vector.normalise(Vector.sub(this.target.position, this.position)), this.accelMag * this.mass)
                this.force.x += force.x;
                this.force.y += force.y;
            }

            if (!(simulation.cycle % 30)) {
                for (let i = 0; i < body.length; i++) {
                    if (Vector.magnitude(Vector.sub(this.position, body[i].position)) < 700 && !body[i].isNotHoldable && !body[i].isInvulnerable) { 
                        Matter.Composite.remove(engine.world, body[i]);
                        this.target = null 
                        spawn.blockMob(body[i].position.x, body[i].position.y, body[i], 0);
                        body.splice(i, 1);
                        activeBeams.push([beamTotalDuration, mob[mob.length - 1]]);
                    }
                }

                if (this.distanceToPlayer() > 1500 && this.target === null) {
                    this.target = player; 
                } else {
                    if (body.length) { 
                        let min = Infinity;
                        let closestBlock = null;
                        for (const block of body) {
                            const dist = Vector.magnitudeSquared(Vector.sub(this.position, block.position))
                            if (dist < min && Matter.Query.ray(map, this.position, block.position).length === 0) {
                                min = dist;
                                closestBlock = block;
                            }
                        }
                        this.target = closestBlock;
                    }
                }

                if (!(simulation.cycle % 90)) {
                    let count = 0
                    for (let i = 0, len = mob.length; i < len; i++) {
                        if (mob[i].isNecroMob) count++
                    }
                    if (count < 20 * Math.random() * Math.random()) { 
                        const unit = Vector.normalise(Vector.sub(player.position, this.position))
                        for (let i = 0, len = 3 * Math.random(); i < len; i++) {
                            this.damageReduction += 0.001; 
                            const scale = 0.99; 
                            Matter.Body.scale(this, scale, scale);
                            this.radius *= scale;

                            const where = Vector.add(Vector.mult(unit, radius + 200 * Math.random()), this.position)
                            spawn.blockMob(where.x + 100 * (Math.random() - 0.5), where.y + 100 * (Math.random() - 0.5), null);
                            this.torque += 0.000035 * this.inertia; 
                            activeBeams.push([beamTotalDuration, mob[mob.length - 1]]);
                        }
                    }
                }

            }
            for (let i = 0; i < activeBeams.length; i++) { 
                const [duration, newBlockMob] = activeBeams[i];
                if (duration === 0) {
                    activeBeams.splice(i, 1);
                    continue;
                }
                if (newBlockMob.alive) {
                    const vertexIndex = Math.floor((newBlockMob.vertices.length - 1) * duration / beamTotalDuration)
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    ctx.lineTo(newBlockMob.vertices[vertexIndex].x, newBlockMob.vertices[vertexIndex].y);

                    ctx.moveTo(newBlockMob.vertices[0].x, newBlockMob.vertices[0].y);
                    for (let j = 1; j < newBlockMob.vertices.length; j++) {
                        ctx.lineTo(newBlockMob.vertices[j].x, newBlockMob.vertices[j].y);
                    }
                    ctx.lineTo(newBlockMob.vertices[0].x, newBlockMob.vertices[0].y);

                    ctx.strokeStyle = "#0ff";
                    ctx.lineWidth = 3;
                    ctx.stroke();
                }
                activeBeams[i][0]--; 
            }
        }
    },
    iceBlockBoss(x, y, radius = 60) {
        const activeBeams = []; 
        const beamTotalDuration = 60
        mobs.spawn(x, y, 4, radius, "#999"); 
        const me = mob[mob.length - 1];
        me.tier = 4
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.003);
        me.damageReduction = 0.02
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.frictionAir = 0.01;
        me.accelMag = 0.00025;
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y);
            for (const who of mob) {
                if (who.isNecroMob) { 
                    who.leaveBody = true
                    who.damage(Infinity)
                }
            }
        }
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 50
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        me.target = player; 
        me.do = function () {
            this.checkStatus();
            this.seePlayerCheck();
            if (this.target) { 
                const force = Vector.mult(Vector.normalise(Vector.sub(this.target.position, this.position)), this.accelMag * this.mass)
                this.force.x += force.x;
                this.force.y += force.y;
            }
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    const unit = Vector.normalise(Vector.sub(player.position, this.position))
                    for (let i = 0, len = 10; i < len; i++) {
                        this.damageReduction += 0.001;
                        this.startingDamageReduction += 0.001; 

                        const where = Vector.add(Vector.mult(unit, 60 + 300 * Math.random()), this.position)
                        spawn.blockMob(where.x + 150 * (Math.random() - 0.5), where.y + 150 * (Math.random() - 0.5), null, 60, true);
                        this.torque += 0.000035 * this.inertia; 
                        activeBeams.push([beamTotalDuration, mob[mob.length - 1]]);
                    }
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else if (!(simulation.cycle % 30)) {
                if (!(simulation.cycle % 210)) {
                    simulation.ephemera.push({
                        count: 210,
                        position: {
                            x: this.position.x,
                            y: this.position.y
                        },
                        level: level.levelsCleared,
                        radius: 120,
                        do() {
                            this.count--
                            if (this.count < 0 || this.level !== level.levelsCleared) simulation.removeEphemera(this);
                            this.radius *= 0.99

                            if (Vector.magnitude(Vector.sub(player.position, this.position)) < this.radius + 40) {
                                Matter.Body.setVelocity(player, { x: 0.7 * player.velocity.x, y: 0.94 * player.velocity.y });
                                ctx.beginPath();
                                ctx.arc(m.pos.x, m.pos.y, 34, 0, 2 * Math.PI);
                                ctx.strokeStyle = `rgba(0,0,255,0.2)`;
                                ctx.lineWidth = 8
                                ctx.stroke();
                                if (m.immuneCycle < m.cycle) m.takeDamage(0.00023 * spawn.dmgToPlayerByLevelsCleared());
                            }
                            for (let i = 0; i < bullet.length; i++) {
                                if (Vector.magnitude(Vector.sub(bullet[i].position, this.position)) < this.radius + 40) {
                                    Matter.Body.setVelocity(bullet[i], { x: 0.95 * bullet[i].velocity.x, y: 0.97 * bullet[i].velocity.y });
                                }
                            }
                            ctx.beginPath();
                            ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
                            ctx.fillStyle = `rgba(0,0,255,${0.2 + 0.1 * Math.random()})`;
                            ctx.fill();
                        },
                    })
                }
                for (let i = 0; i < body.length; i++) {
                    if (Vector.magnitude(Vector.sub(this.position, body[i].position)) < 700 && !body[i].isNotHoldable && !body[i].isInvulnerable) { 
                        Matter.Composite.remove(engine.world, body[i]);
                        this.target = null 
                        spawn.blockMob(body[i].position.x, body[i].position.y, body[i], 0, true);
                        body.splice(i, 1);
                        activeBeams.push([beamTotalDuration, mob[mob.length - 1]]);
                    }
                }

                if (this.distanceToPlayer() > 1500 && this.target === null) {
                    this.target = player; 
                } else {
                    if (body.length) { 
                        let min = Infinity;
                        let closestBlock = null;
                        for (const block of body) {
                            const dist = Vector.magnitudeSquared(Vector.sub(this.position, block.position))
                            if (dist < min && Matter.Query.ray(map, this.position, block.position).length === 0) {
                                min = dist;
                                closestBlock = block;
                            }
                        }
                        this.target = closestBlock;
                    }
                }

                if (!(simulation.cycle % 90)) {
                    let count = 0
                    for (let i = 0, len = mob.length; i < len; i++) {
                        if (mob[i].isNecroMob) count++
                    }
                    if (count < 20 * Math.random() * Math.random()) { 
                        const unit = Vector.normalise(Vector.sub(player.position, this.position))
                        for (let i = 0, len = 3 * Math.random(); i < len; i++) {
                            this.damageReduction += 0.001; 
                            const scale = 0.99; 
                            Matter.Body.scale(this, scale, scale);
                            this.radius *= scale;

                            const where = Vector.add(Vector.mult(unit, radius + 200 * Math.random()), this.position)
                            spawn.blockMob(where.x + 100 * (Math.random() - 0.5), where.y + 100 * (Math.random() - 0.5), null, 60, true);
                            this.torque += 0.000035 * this.inertia; 
                            activeBeams.push([beamTotalDuration, mob[mob.length - 1]]);
                        }
                    }
                }

            }
            for (let i = 0; i < activeBeams.length; i++) { 
                const [duration, newBlockMob] = activeBeams[i];
                if (duration === 0) {
                    activeBeams.splice(i, 1);
                    continue;
                }
                if (newBlockMob.alive) {
                    const vertexIndex = Math.floor((newBlockMob.vertices.length - 1) * duration / beamTotalDuration)
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    ctx.lineTo(newBlockMob.vertices[vertexIndex].x, newBlockMob.vertices[vertexIndex].y);

                    ctx.moveTo(newBlockMob.vertices[0].x, newBlockMob.vertices[0].y);
                    for (let j = 1; j < newBlockMob.vertices.length; j++) {
                        ctx.lineTo(newBlockMob.vertices[j].x, newBlockMob.vertices[j].y);
                    }
                    ctx.lineTo(newBlockMob.vertices[0].x, newBlockMob.vertices[0].y);

                    ctx.strokeStyle = "rgba(0,0,255,0.3)";
                    ctx.lineWidth = 20;
                    ctx.stroke();
                }
                activeBeams[i][0]--; 
            }
        }
    },
    blockMob(x, y, host, growCycles = 60, isIce = false) {
        if (host === null) {
            mobs.spawn(x, y, 4, 1.25 + 3.5 * Math.random(), "#999");
        } else {
            const sideLength = Vector.magnitude(Vector.sub(host.vertices[0], host.vertices[1])) + Vector.magnitude(Vector.sub(host.vertices[1], host.vertices[2])) / 2 
            mobs.spawn(x, y, 4, Math.min(70, sideLength), "#999");
            if (host.bounds.max.x - host.bounds.min.x < 150 && host.bounds.max.y - host.bounds.min.y < 150) {
                Matter.Body.setVertices(mob[mob.length - 1], host.vertices) 
            }
        }
        const me = mob[mob.length - 1];
        me.damageReduction = 0.5; 
        me.isNecroMob = true
        me.g = 0.00012; 
        me.accelMag = 0.0003 * Math.sqrt(simulation.accelScale);
        me.memory = 120;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.cycle = 0
        me.onDeath = function () {
            if (isIce) {
                simulation.ephemera.push({
                    count: 200,
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    level: level.levelsCleared,
                    radius: 130,
                    do() {
                        this.count--
                        if (this.count < 0 || this.level !== level.levelsCleared) simulation.removeEphemera(this);
                        this.radius *= 0.99

                        if (Vector.magnitude(Vector.sub(player.position, this.position)) < this.radius + 40) {
                            Matter.Body.setVelocity(player, { x: 0.7 * player.velocity.x, y: 0.94 * player.velocity.y });
                            ctx.beginPath();
                            ctx.arc(m.pos.x, m.pos.y, 34, 0, 2 * Math.PI);
                            ctx.strokeStyle = `rgba(0,0,255,0.2)`;
                            ctx.lineWidth = 8
                            ctx.stroke();
                            if (m.immuneCycle < m.cycle) m.takeDamage(0.00023 * spawn.dmgToPlayerByLevelsCleared());
                        }
                        for (let i = 0; i < bullet.length; i++) {
                            if (Vector.magnitude(Vector.sub(bullet[i].position, this.position)) < this.radius + 40) {
                                Matter.Body.setVelocity(bullet[i], { x: 0.95 * bullet[i].velocity.x, y: 0.97 * bullet[i].velocity.y });
                            }
                        }
                        ctx.beginPath();
                        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
                        ctx.fillStyle = `rgba(0,0,255,${0.2 + 0.1 * Math.random()})`;
                        ctx.fill();
                    },
                })
            }
        }
        me.do = function () { 
            this.checkStatus();
            this.seePlayerCheck();
            this.cycle++
            if (this.cycle > growCycles) {
                this.damageReduction = 1.8 
                this.do = this.normalDo
            } else {
                const scale = 1.04; 
                Matter.Body.scale(this, scale, scale);
                this.radius *= scale;
            }
        }
        me.normalDo = function () {
            this.gravity();
            this.checkStatus();
            this.seePlayerCheck();
            this.attraction();
        }
    },
    cellBossCulture(x, y, radius = 20, num = 5) {
        const cellID = Math.random()
        for (let i = 0; i < num; i++) {
            spawn.cellBoss(x, y, radius, cellID)
        }
    },
    cellBoss(x, y, radius = 20, cellID) {
        mobs.spawn(x + Math.random(), y + Math.random(), 20, radius * (1 + 1.2 * Math.random()), "rgba(0,80,125,0.3)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.stroke = "transparent"
        me.isBoss = true;
        me.isCell = true;
        me.cellID = cellID
        me.accelMag = 0.000165 * simulation.accelScale;
        me.memory = Infinity;
        me.leaveBody = false;
        me.isVerticesChange = true
        me.frictionAir = 0.012
        me.seePlayerFreq = Math.floor(11 + 7 * Math.random())
        me.seeAtDistance2 = 1400000;
        me.cellMassMax = 70
        me.collisionFilter.mask = cat.player | cat.bullet | cat.body
        Matter.Body.setDensity(me, 0.00012 + 0.000008 * simulation.difficulty) 
        me.damageReduction = 0.17

        const k = 642 
        me.split = function () {
            const scale = 0.45
            Matter.Body.scale(this, scale, scale);
            this.radius *= scale;
            spawn.cellBoss(this.position.x, this.position.y, this.radius, this.cellID);
            mob[mob.length - 1].health = this.health
        }
        me.onHit = function () { 
            this.health = 1;
            this.split();
        };
        me.onDamage = function (dmg) {
            if (Math.random() < 0.34 * dmg * Math.sqrt(this.mass) && this.health > dmg) this.split();
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerByDistOrLOS();
            this.checkStatus();
            this.attraction();

            if (this.seePlayer.recall && this.mass < this.cellMassMax) { 
                const scale = 1 + 0.0002 * this.cellMassMax / this.mass;
                Matter.Body.scale(this, scale, scale);
                this.radius *= scale;
            }
            if (!(simulation.cycle % this.seePlayerFreq)) { 
                const repelRange = 150
                const attractRange = 700
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isCell && mob[i].id !== this.id) {
                        const sub = Vector.sub(this.position, mob[i].position)
                        const dist = Vector.magnitude(sub)
                        if (dist < repelRange) {
                            this.force = Vector.mult(Vector.normalise(sub), this.mass * 0.002)
                        } else if (dist > attractRange) {
                            this.force = Vector.mult(Vector.normalise(sub), -this.mass * 0.003)
                        }
                    }
                }
            }
        };
        me.onDeath = function () {
            this.isCell = false;
            let count = 0 
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isCell && mob[i].cellID === this.cellID) count++
            }
            if (count < 1) { 
                powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            } else {
                this.isDropPowerUp = false;
            }
        }
    },
    spawnerBossCulture(x, y, radius = 50, num = 8 + Math.min(20, simulation.difficulty * 0.4)) {
        tech.deathSpawnsFromBoss += 0.4
        const spawnID = Math.random()
        for (let i = 0; i < num; i++) spawn.spawnerBoss(x, y, radius, spawnID)
    },
    spawnerBoss(x, y, radius, spawnID) {
        mobs.spawn(x + Math.random(), y + Math.random(), 4, radius, "rgba(255,0,70,1)") 
        let me = mob[mob.length - 1];
        me.tier = 2
        me.isBoss = true;

        me.isSpawnBoss = true;
        me.spawnID = spawnID
        me.accelMag = 0.00022 * simulation.accelScale;
        me.memory = Infinity;
        me.isVerticesChange = true
        me.frictionAir = 0.011
        me.seePlayerFreq = Math.floor(14 + 7 * Math.random())
        me.seeAtDistance2 = 200000 
        me.stroke = "transparent"
        me.collisionFilter.mask = cat.player | cat.bullet | cat.body | cat.map 
        Matter.Body.setAngularVelocity(me, 0.12 * (Math.random() - 0.5))

        me.onHit = function () { 
            this.explode(2 * this.mass);
        };
        me.damageReduction = 0.14
        me.doAwake = function () {
            ctx.beginPath();
            const vertices = this.vertices;
            ctx.moveTo(vertices[0].x, vertices[0].y);
            for (let j = 1, len = vertices.length; j < len; ++j) ctx.lineTo(vertices[j].x, vertices[j].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.strokeStyle = `rgba(255,0,70,${0.2 + 0.4 * Math.random()})`
            ctx.lineWidth = Math.floor(5 + 30 * this.health)
            ctx.stroke();

            this.alwaysSeePlayer();
            this.checkStatus();
            this.attraction();

            if (!(simulation.cycle % this.seePlayerFreq)) { 
                const repelRange = 40
                const attractRange = 240
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isSpawnBoss && mob[i].id !== this.id) {
                        const sub = Vector.sub(this.position, mob[i].position)
                        const dist = Vector.magnitude(sub)
                        if (dist < repelRange) {
                            this.force = Vector.mult(Vector.normalise(sub), this.mass * 0.002)
                        } else if (dist > attractRange) {
                            this.force = Vector.mult(Vector.normalise(sub), -this.mass * 0.002)
                        }
                    }
                }
            }
        }
        me.do = function () {
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.do = this.doAwake
                this.fill = `transparent`
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isSpawnBoss && mob[i].spawnID === this.spawnID) mob[i].seePlayer.recall = 1
                }
            }
        };
        me.onDeath = function () {
            this.isSpawnBoss = false;
            let count = 0 
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isSpawnBoss && mob[i].spawnID === this.spawnID) count++
            }
            if (count < 1) { 
                powerUps.spawnBossPowerUp(this.position.x, this.position.y)
                tech.deathSpawnsFromBoss -= 0.4
            } else {
                this.leaveBody = false;
                this.isDropPowerUp = false;
            }

            const spawns = tech.deathSpawns + tech.deathSpawnsFromBoss
            const len = Math.min(12, spawns * Math.ceil(Math.random() * simulation.difficulty * spawns))
            for (let i = 0; i < len; i++) {
                spawn.spawns(this.position.x + (Math.random() - 0.5) * radius * 2.5, this.position.y + (Math.random() - 0.5) * radius * 2.5, this.tier);
                Matter.Body.setVelocity(mob[mob.length - 1], {
                    x: this.velocity.x + (Math.random() - 0.5) * 10,
                    y: this.velocity.x + (Math.random() - 0.5) * 10
                });
            }

        }
    },
    centipedeBoss(x, y, radius = 20, gridX = 16, gridY = 2, flipHead = false) {
        const meArray = [];
        const softID = Math.random();
        const spacing = 24 + radius
        const stiffness = 0.2;
        const stiffnessDiagonal = 0.05;
        const stiffnessBending = 0.1;
        const damping = 0;
        if (flipHead) x += spacing * gridX

        spawn.allowShields = false; 
        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {
                const spawnX = x + col * spacing * (flipHead ? -1 : 1);
                const spawnY = y + row * spacing * (flipHead ? -1 : 1);
                if (col === gridX - 1) { 
                    spawn.softStinger(spawnX, spawnY, radius, softID);
                    mob[mob.length - 1].accelMag = 0.005
                } else {
                    spawn.softBody(spawnX, spawnY, radius, softID);  
                }
                if (col > 2) {
                    mob[mob.length - 1].isInvulnerable = true
                    mob[mob.length - 1].damageReductionMemory = mob[mob.length - 1].damageReduction
                    mob[mob.length - 1].damageReduction = 0

                } else {
                    mob[mob.length - 1].fill = '#fff'
                }
                mob[mob.length - 1].tier = 1
                mob[mob.length - 1].col = col
                meArray.push(mob[mob.length - 1]);
            }
        }
        spawn.allowShields = true;

        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {

                const currentIndex = row * gridX + col;

                if (col < gridX - 1) {
                    const rightIndex = currentIndex + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[rightIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1) {
                    const bottomIndex = currentIndex + gridX;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col < gridX - 1) {
                    const bottomRightIndex = currentIndex + gridX + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomRightIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col > 0) {
                    const bottomLeftIndex = currentIndex + gridX - 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomLeftIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (col < gridX - 2) {
                    const right2Index = currentIndex + 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[right2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 2) {
                    const bottom2Index = currentIndex + gridX * 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottom2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }
            }
        }
    },
    caterpillarBoss(x, y, radius = 22, gridX = 14, gridY = 2, flipHead = false) {
        const meArray = [];
        const softID = Math.random();
        const spacing = 40
        const stiffness = 0.2;
        const stiffnessDiagonal = 0.05;
        const stiffnessBending = 0.1;
        const damping = 0;
        if (flipHead) x += spacing * gridX

        spawn.allowShields = false; 
        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {
                const spawnX = x + col * spacing * (flipHead ? -1 : 1);
                const spawnY = y + row * spacing * (flipHead ? -1 : 1);
                if (col === gridX - 1) { 
                    spawn.softSlicer(spawnX, spawnY, radius, softID);
                    mob[mob.length - 1].accelMag = 0.0013;
                } else {
                    spawn.softBody(spawnX, spawnY, radius, softID);
                    mob[mob.length - 1].damageReduction = 0.11
                }
                if (col > 2) {
                    mob[mob.length - 1].isInvulnerable = true
                    mob[mob.length - 1].damageReductionMemory = mob[mob.length - 1].damageReduction
                    mob[mob.length - 1].damageReduction = 0
                } else {
                    mob[mob.length - 1].fill = '#fff'
                }
                mob[mob.length - 1].tier = 2
                mob[mob.length - 1].col = col
                meArray.push(mob[mob.length - 1]);
            }
        }
        spawn.allowShields = true;

        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {

                const currentIndex = row * gridX + col;

                if (col < gridX - 1) {
                    const rightIndex = currentIndex + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[rightIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1) {
                    const bottomIndex = currentIndex + gridX;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col < gridX - 1) {
                    const bottomRightIndex = currentIndex + gridX + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomRightIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col > 0) {
                    const bottomLeftIndex = currentIndex + gridX - 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomLeftIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (col < gridX - 2) {
                    const right2Index = currentIndex + 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[right2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 2) {
                    const bottom2Index = currentIndex + gridX * 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottom2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }
            }
        }
    },
    mayflyBoss(x, y, radius = 15, gridX = 35, gridY = 2, flipHead = false) {
        const meArray = [];
        const softID = Math.random();
        const spacing = 30
        const stiffness = 0.6;
        const stiffnessDiagonal = 0.15;
        const stiffnessBending = 0.3;
        const damping = 0;
        if (flipHead) x += spacing * gridX

        spawn.allowShields = false; 
        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {
                const spawnX = x + col * spacing * (flipHead ? -1 : 1);
                const spawnY = y + row * spacing * (flipHead ? -1 : 1);
                if (col === gridX - 1) { 
                    spawn.softSlicer(spawnX, spawnY, radius, softID);
                    mob[mob.length - 1].swordRadiusMax = 400
                    mob[mob.length - 1].swordRadiusGrowRateInitial = 1.09
                    mob[mob.length - 1].accelMag = 0.0008;
                } else if (col === gridX - 6 || col === 3) { 
                    spawn.softFlutter(spawnX, spawnY, radius, softID);
                    mob[mob.length - 1].damageReduction = 0.18
                } else {
                    spawn.softBody(spawnX, spawnY, radius, softID);
                    mob[mob.length - 1].damageReduction = 0.12
                    Matter.Body.setDensity(mob[mob.length - 1], 0.0002);
                }
                if (col > 2) {
                    mob[mob.length - 1].isInvulnerable = true
                    mob[mob.length - 1].damageReductionMemory = mob[mob.length - 1].damageReduction
                    mob[mob.length - 1].damageReduction = 0
                } else {
                    mob[mob.length - 1].fill = '#fff'
                }
                mob[mob.length - 1].tier = 2
                mob[mob.length - 1].col = col
                meArray.push(mob[mob.length - 1]);
            }
        }
        spawn.allowShields = true;

        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {

                const currentIndex = row * gridX + col;

                if (col < gridX - 1) {
                    const rightIndex = currentIndex + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[rightIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1) {
                    const bottomIndex = currentIndex + gridX;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col < gridX - 1) {
                    const bottomRightIndex = currentIndex + gridX + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomRightIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col > 0) {
                    const bottomLeftIndex = currentIndex + gridX - 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomLeftIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (col < gridX - 2) {
                    const right2Index = currentIndex + 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[right2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 2) {
                    const bottom2Index = currentIndex + gridX * 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottom2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }
            }
        }

        const ringRadius = (gridX * spacing) / (2 * Math.PI);
        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {
                const body = meArray[row * gridX + col];
                const angle = (col / gridX) * 2 * Math.PI;
                const currentRadius = ringRadius + (row * spacing);
                const newX = x + Math.cos(angle) * currentRadius;
                const newY = y + Math.sin(angle) * currentRadius;
                Matter.Body.setPosition(body, { x: newX, y: newY });
            }
        }
    },
    myriapodsBoss(where, radius = 18, gridX = 14, gridY = 2) {

        const softID = Math.random();
        const spacing = 1.6 * radius
        const stiffness = 0.2;
        const stiffnessDiagonal = 0.05;
        const stiffnessBending = 0.1;
        const damping = 0;


        spawn.allowShields = false; 
        for (let i = 0; i < where.length; i++) {
            const meArray = [];
            for (let row = 0; row < gridY; row++) {
                for (let col = 0; col < gridX; col++) {
                    const spawnX = where[i].x + col * spacing
                    const spawnY = where[i].y + row * spacing
                    if (col === gridX - 1) { 
                        spawn.softSlicer(spawnX, spawnY, radius, softID);
                        mob[mob.length - 1].accelMag = 0.0013;
                    } else {
                        spawn.softBody(spawnX, spawnY, radius, Math.random());
                        mob[mob.length - 1].damageReduction = 0.09
                        mob[mob.length - 1].isInvulnerable = false
                        mob[mob.length - 1].onDeath = function () {
                            this.isSoftBoss = false;
                            let count = 0 
                            for (let i = 0, len = mob.length; i < len; i++) {
                                if (mob[i].isSoftBoss && mob[i].softID === this.softID) count++
                            }
                        }
                    }
                    mob[mob.length - 1].tier = 3
                    mob[mob.length - 1].col = col
                    meArray.push(mob[mob.length - 1]);
                }
            }
            for (let row = 0; row < gridY; row++) {
                for (let col = 0; col < gridX; col++) {

                    const currentIndex = row * gridX + col;

                    if (col < gridX - 1) {
                        const rightIndex = currentIndex + 1;
                        consBB[consBB.length] = Constraint.create({
                            bodyA: meArray[currentIndex],
                            bodyB: meArray[rightIndex],
                            stiffness: stiffness,
                            damping: damping
                        });
                        Composite.add(engine.world, consBB[consBB.length - 1]);
                    }

                    if (row < gridY - 1) {
                        const bottomIndex = currentIndex + gridX;
                        consBB[consBB.length] = Constraint.create({
                            bodyA: meArray[currentIndex],
                            bodyB: meArray[bottomIndex],
                            stiffness: stiffness,
                            damping: damping
                        });
                        Composite.add(engine.world, consBB[consBB.length - 1]);
                    }

                    if (row < gridY - 1 && col < gridX - 1) {
                        const bottomRightIndex = currentIndex + gridX + 1;
                        consBB[consBB.length] = Constraint.create({
                            bodyA: meArray[currentIndex],
                            bodyB: meArray[bottomRightIndex],
                            stiffness: stiffnessDiagonal,
                            damping: damping
                        });
                        Composite.add(engine.world, consBB[consBB.length - 1]);
                    }

                    if (row < gridY - 1 && col > 0) {
                        const bottomLeftIndex = currentIndex + gridX - 1;
                        consBB[consBB.length] = Constraint.create({
                            bodyA: meArray[currentIndex],
                            bodyB: meArray[bottomLeftIndex],
                            stiffness: stiffnessDiagonal,
                            damping: damping
                        });
                        Composite.add(engine.world, consBB[consBB.length - 1]);
                    }

                    if (col < gridX - 2) {
                        const right2Index = currentIndex + 2;
                        consBB[consBB.length] = Constraint.create({
                            bodyA: meArray[currentIndex],
                            bodyB: meArray[right2Index],
                            stiffness: stiffnessBending,
                            damping: damping
                        });
                        Composite.add(engine.world, consBB[consBB.length - 1]);
                    }

                    if (row < gridY - 2) {
                        const bottom2Index = currentIndex + gridX * 2;
                        consBB[consBB.length] = Constraint.create({
                            bodyA: meArray[currentIndex],
                            bodyB: meArray[bottom2Index],
                            stiffness: stiffnessBending,
                            damping: damping
                        });
                        Composite.add(engine.world, consBB[consBB.length - 1]);
                    }
                }
            }
        }
        spawn.allowShields = true;
    },
    larvaBoss(x, y, radius = 10, gridX = 17, gridY = 2, flipHead = false) {
        const meArray = [];
        const softID = Math.random();
        const spacing = 25
        const stiffness = 0.2;
        const stiffnessDiagonal = 0.05;
        const stiffnessBending = 0.1;
        const damping = 0;
        if (flipHead) x += spacing * gridX

        spawn.allowShields = false; 
        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {
                const spawnX = x + col * spacing * (flipHead ? -1 : 1);
                const spawnY = y + row * spacing * (flipHead ? -1 : 1);
                if (col === gridX - 1) { 
                    spawn.softStinger(spawnX, spawnY, radius, softID);
                    mob[mob.length - 1].accelMag = 0.0025
                } else {
                    spawn.softBody(spawnX, spawnY, radius, softID);  
                    mob[mob.length - 1].damageReduction = 0.15
                }
                if (col > 2) {
                    mob[mob.length - 1].isInvulnerable = true
                    mob[mob.length - 1].damageReductionMemory = mob[mob.length - 1].damageReduction
                    mob[mob.length - 1].damageReduction = 0
                } else {
                    mob[mob.length - 1].fill = '#fff'
                }
                mob[mob.length - 1].tier = 3
                mob[mob.length - 1].col = col
                meArray.push(mob[mob.length - 1]);
            }
        }
        spawn.allowShields = true;

        for (let row = 0; row < gridY; row++) {
            for (let col = 0; col < gridX; col++) {

                const currentIndex = row * gridX + col;

                if (col < gridX - 1) {
                    const rightIndex = currentIndex + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[rightIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1) {
                    const bottomIndex = currentIndex + gridX;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomIndex],
                        stiffness: stiffness,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col < gridX - 1) {
                    const bottomRightIndex = currentIndex + gridX + 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomRightIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 1 && col > 0) {
                    const bottomLeftIndex = currentIndex + gridX - 1;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottomLeftIndex],
                        stiffness: stiffnessDiagonal,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (col < gridX - 2) {
                    const right2Index = currentIndex + 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[right2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }

                if (row < gridY - 2) {
                    const bottom2Index = currentIndex + gridX * 2;
                    consBB[consBB.length] = Constraint.create({
                        bodyA: meArray[currentIndex],
                        bodyB: meArray[bottom2Index],
                        stiffness: stiffnessBending,
                        damping: damping
                    });
                    Composite.add(engine.world, consBB[consBB.length - 1]);
                }
            }
        }
    },
    roundwormBoss(x, y) {
        const sides = 5
        const radius = 14
        const color = "#5bc"

        mobs.spawn(x, y, 7, radius + 6, color); 
        let me = mob[mob.length - 1];
        me.tier = 1
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.softID = Math.random();
        me.isBoss = true;
        me.isSoftBoss = false;
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.damageReduction = 0.07  
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.accelMag = 0.004;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0;
        me.restitution = 1

        me.segmentNumber = 20
        me.ringRadius = 100
        me.ring = function (num, ringRadius) {
            const stiffness = 1;
            const damping = 0;

            spawn.allowShields = false; 
            const dx = player.position.x - this.position.x;
            const dy = player.position.y - this.position.y;
            const angleToPlayer = Math.atan2(dy, dx);
            const centerX = this.position.x + ringRadius * Math.cos(angleToPlayer);
            const centerY = this.position.y + ringRadius * Math.sin(angleToPlayer);
            const headAngleOnCircle = angleToPlayer + Math.PI;

            for (let i = 1; i < num; i++) {
                const currentAngle = headAngleOnCircle + (i / num) * 2 * Math.PI;
                const spawnX = centerX + ringRadius * Math.cos(currentAngle);
                const spawnY = centerY + ringRadius * Math.sin(currentAngle);
                spawn.softBody(spawnX, spawnY, radius, this.softID);
                mob[mob.length - 1].isInvulnerable = true
                mob[mob.length - 1].damageReduction = 0
                mob[mob.length - 1].collisionFilter.mask = cat.player | cat.bullet | cat.body 
                const unit = Vector.rotate({ x: 1, y: 0 }, Math.random() * 6.28)
                Matter.Body.setVelocity(mob[mob.length - 1], Vector.mult(unit, 30))
            }
            spawn.allowShields = true;
            spawn.constrain2AdjacentMobs(num - 1, stiffness, true, damping); 
            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - 1],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - 2],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);

            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - num + 1],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - num + 2],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        me.ring(me.segmentNumber, me.ringRadius)
        me.onDeath = function () {
            this.isSoftBoss = false;
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                    mob[i].isDropPowerUp = false;
                    mob[i].onDeath = () => { }
                    mob[i].death()
                }
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        }
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 90
                this.isInvulnerable = true
                this.damageReduction = 0
                this.accelMag = -Math.abs(this.accelMag)

                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                        mob[i].isDropPowerUp = false;
                        mob[i].onDeath = () => { }
                        mob[i].death()
                    }
                }
            }
        }
        me.do = function () {
            this.seePlayerByHistory()
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.healthBar1()
                this.force.x += Math.cos(this.angle) * this.accelMag * this.mass
                this.force.y += Math.sin(this.angle) * this.accelMag * this.mass

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                    const mod = (a, n) => a - Math.floor(a / n) * n
                    const sub = Vector.sub(m.pos, this.position) 
                    const diff = mod(Math.atan2(sub.y, sub.x) - this.angle + Math.PI, 2 * Math.PI) - Math.PI
                    if (Math.abs(diff) > 2.8) this.torque += 0.0002 * this.inertia * Math.random();
                }

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.4;
                const turn = 0.00002 * this.inertia
                if (c > threshold) {
                    this.torque += turn;
                } else if (c < -threshold) {
                    this.torque -= turn;
                }
                this.frictionAir = 0.11

                if (this.distanceToPlayer() < 2000) {
                    best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const seeRangeRandom = 350 - 70 * Math.random()
                    const look = { x: this.position.x + seeRangeRandom * Math.cos(this.angle), y: this.position.y + seeRangeRandom * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        const dmg = 0.003 * this.damageScale();
                        m.takeDamage(dmg);
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(best.x, best.y, 5 + dmg * 1500, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    const vertex = 3
                    if (best.dist2 === Infinity) best = look;
                    ctx.beginPath();
                    ctx.moveTo(this.vertices[vertex].x, this.vertices[vertex].y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
            if (this.isInvulnerable) {
                Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.5))
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.accelMag = Math.abs(this.accelMag)

                    me.ring(this.segmentNumber + 30 - Math.floor(30 * this.nextHealthThreshold), this.ringRadius + Math.floor(200 - 200 * this.nextHealthThreshold))
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();

                const size = 150 + 100 * Math.random()
                const where = Vector.add(this.position, Vector.mult(Vector.normalise(Vector.sub(m.pos, this.position)), size))
                ctx.strokeStyle = "rgba(255,255,255,0.3)"
                ctx.lineWidth = radius
                ctx.beginPath();
                ctx.arc(where.x, where.y, size, 0, 2 * Math.PI);
                ctx.stroke();
            }
        };

        me.delay = 50 + Math.floor(20 * Math.random())
        me.cd = Infinity;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 580
        me.swordRadiusGrowRateInitial = 1.1
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.02 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        me.fireDir = { x: 0, y: 0 }
        me.swordWaiting = function () {
            this.cd = simulation.cycle + 74;
            let dist = 0
            for (let i = 0, len = this.vertices.length; i < len; i++) {
                const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                if (D > dist) {
                    dist = D
                    this.swordVertex = i
                }
            }
            this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
            this.sword = this.swordGrow
            this.isSlashing = true
            this.cycle = 0
            this.swordRadius = this.swordRadiusInitial

            Matter.Body.setAngularVelocity(this, 0)
            const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
            const playerVector = Vector.sub(this.position, m.pos)
            const cross = Matter.Vector.cross(laserStartVector, playerVector)
            this.torque = 0.0003 * this.inertia * (cross > 0 ? 1 : -1)
        }
        me.sword = () => { } 
        me.swordGrow = function () {
            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.98))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = () => { }
                this.isSlashing = false
                this.swordRadius = 0
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(255, 0, 76, 0.1)";
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgb(255, 0, 77)";
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    roundwormBoss4(x, y) {
        const sides = 5
        const radius = 16

        mobs.spawn(x, y, sides, radius + 6, "rgba(182, 99, 124, 1)");
        let me = mob[mob.length - 1];
        me.tier = 4
        me.softID = Math.random();
        me.isBoss = true;
        me.isSoftBoss = false;
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.damageReduction = 0.1  
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.accelMag = 0.002;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0;
        me.restitution = 1

        me.segmentNumber = 20
        me.ringRadius = 100


        me.ring = function (num, ringRadius) {
            const stiffness = 1;
            const damping = 0;

            spawn.allowShields = false; 
            const dx = player.position.x - this.position.x;
            const dy = player.position.y - this.position.y;
            const angleToPlayer = Math.atan2(dy, dx);
            const centerX = this.position.x + ringRadius * Math.cos(angleToPlayer);
            const centerY = this.position.y + ringRadius * Math.sin(angleToPlayer);
            const headAngleOnCircle = angleToPlayer + Math.PI;

            for (let i = 1; i < num; i++) {
                const currentAngle = headAngleOnCircle + (i / num) * 2 * Math.PI;
                const spawnX = centerX + ringRadius * Math.cos(currentAngle);
                const spawnY = centerY + ringRadius * Math.sin(currentAngle);
                spawn.softBody(spawnX, spawnY, radius, this.softID);
                mob[mob.length - 1].isInvulnerable = true
                mob[mob.length - 1].damageReduction = 0
                mob[mob.length - 1].collisionFilter.mask = cat.player | cat.bullet | cat.body 
                const unit = Vector.rotate({ x: 1, y: 0 }, Math.random() * 6.28)
                Matter.Body.setVelocity(mob[mob.length - 1], Vector.mult(unit, 30))
            }
            spawn.allowShields = true;
            spawn.constrain2AdjacentMobs(num - 1, stiffness, true, damping); 
            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - 1],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - 2],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);

            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - num + 1],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
            consBB[consBB.length] = Constraint.create({
                bodyA: this,
                bodyB: mob[mob.length - num + 2],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        me.ring(me.segmentNumber, me.ringRadius)
        me.onDeath = function () {
            this.isSoftBoss = false;
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                    mob[i].isDropPowerUp = false;
                    mob[i].onDeath = () => { }
                    mob[i].death()
                }
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        }
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 120
                this.isInvulnerable = true
                this.damageReduction = 0

                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                        mob[i].isDropPowerUp = false;
                        mob[i].onDeath = () => { }
                        mob[i].death()
                    }
                }
            }
        }
        me.do = function () {
            this.seePlayerByHistory()
            this.checkStatus();
            if (this.seePlayer.recall) this.healthBar4()

            if (this.distanceToPlayer() < 500) {
                if (!this.isSlashing && m.immuneCycle < m.cycle && Matter.Query.ray(map, this.position, m.pos).length === 0) this.sword = this.swordWaiting
            }
            this.attraction();
            this.sword() 
            if (this.isInvulnerable) {
                Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.93))
                this.delay++
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction

                    me.ring(this.segmentNumber + 40 - Math.floor(40 * this.nextHealthThreshold), this.ringRadius + Math.floor(266 - 266 * this.nextHealthThreshold))
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();

                const size = 150 + 100 * Math.random()
                const where = Vector.add(this.position, Vector.mult(Vector.normalise(Vector.sub(m.pos, this.position)), size))
                ctx.strokeStyle = "rgba(255,255,255,0.3)"
                ctx.lineWidth = radius
                ctx.beginPath();
                ctx.arc(where.x, where.y, size, 0, 2 * Math.PI);
                ctx.stroke();
            }
        };

        me.delay = 50 + Math.floor(20 * Math.random())
        me.cd = Infinity;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 580
        me.swordRadiusGrowRateInitial = 1.1
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.02 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5

        me.swordWaiting = function () {
            this.cd = simulation.cycle + 74;
            let dist = 0
            for (let i = 0, len = this.vertices.length; i < len; i++) {
                const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                if (D > dist) {
                    dist = D
                    this.swordVertex = i
                }
            }
            this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
            this.sword = this.swordGrow
            this.isSlashing = true
            this.cycle = 0
            this.swordRadius = this.swordRadiusInitial

            Matter.Body.setAngularVelocity(this, 0)
            const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
            const playerVector = Vector.sub(this.position, m.pos)
            const cross = Matter.Vector.cross(laserStartVector, playerVector)
            this.torque = 0.0003 * this.inertia * (cross > 0 ? 1 : -1)
        }
        me.sword = () => { } 
        me.swordGrow = function () {
            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.98))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = () => { }
                this.isSlashing = false
                this.swordRadius = 0
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(255, 0, 76, 0.1)";
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgb(255, 0, 77)";
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    softBody(x, y, radius, softID, color = "hsl(0, 0%, 100%)") {
        mobs.spawn(x + Math.random(), y + Math.random(), 5, radius, color) 
        const lineWidth = Math.floor(radius / 2)
        let me = mob[mob.length - 1];
        me.isBoss = true;
        me.isDropPowerUp = false
        me.isSoftBoss = true;
        me.softID = softID
        me.memory = Infinity;
        me.isVerticesChange = true
        me.frictionAir = 0
        me.friction = 0
        me.frictionStatic = 0
        me.seePlayerFreq = Math.floor(11 + 7 * Math.random())
        me.seeAtDistance2 = 200000 
        me.accelMag = 0.0003;
        me.restitution = 1
        me.inertia = Infinity
        me.isInvulnerable = false
        me.damageReduction = 0.24
        me.damageReductionMemory = me.damageReduction

        me.collisionFilter.mask = cat.player | cat.bullet | cat.body | cat.map
        me.leaveBody = false;
        me.onDamage = function () {
            for (let i = 0; i < mob.length; i++) { 
                if (mob[i].softID === this.softID) mob[i].locatePlayer();
            }
        }
        me.onDeath = function () {
            this.isSoftBoss = false;
            let count = 0 
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isSoftBoss && mob[i].softID === this.softID) count++
            }
            if (count < 3) { 
                for (let i = 0, len = mob.length; i < len; i++) { 
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                        mob[i].onDeath = () => { }
                        mob[i].isDropPowerUp = false
                        mob[i].death()
                    }
                }
                powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            }
            requestAnimationFrame(() => {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID && (mob[i].col === this.col + 1 || mob[i].col === this.col + 2 || mob[i].col === this.col + 3)) {
                        mob[i].isInvulnerable = false
                        mob[i].damageReduction = mob[i].damageReductionMemory
                    }
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID && mob[i].col === this.col - 1) {
                        mob[i].isDecay = true
                    }
                }
            })
        }
        me.do = function () {
            Matter.Body.setAngularVelocity(this, this.angularVelocity * 0.9)

            this.checkStatus();
            if (this.isDecay) {
                this.health -= 0.001
                if ((this.health < 0.01 || isNaN(this.health)) && this.alive) this.death();
                this.alwaysSeePlayer();
                this.attraction();
            }
            if (this.isInvulnerable) {
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = lineWidth + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }

        }
    },
    softFlutter(x, y, radius, softID, isLeftWing) {
        mobs.spawn(x, y, 7, radius, "hsl(0, 0%, 100%)");
        const lineWidth = Math.floor(radius / 2)
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.isDropPowerUp = false
        me.inertia = Infinity
        me.isSoftBoss = true;
        me.softID = softID
        me.memory = Infinity;
        me.isInvulnerable = false
        me.damageReduction = 0.24
        me.damageReductionMemory = me.damageReduction

        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.0007
        me.frictionAir = 0.04;
        me.memory = 240;
        me.restitution = 1;
        me.frictionStatic = 0;
        me.friction = 0;
        me.leaveBody = false;
        me.onDamage = function () {
            for (let i = 0; i < mob.length; i++) { 
                if (mob[i].softID === this.softID) mob[i].locatePlayer();
            }
        }
        me.onDeath = function () {
            this.isSoftBoss = false;
            let count = 0 
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isSoftBoss && mob[i].softID === this.softID) count++
            }
            if (count < 3) { 
                for (let i = 0, len = mob.length; i < len; i++) { 
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                        mob[i].onDeath = () => { }
                        mob[i].isDropPowerUp = false
                        mob[i].death()
                    }
                }
                powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            }
            requestAnimationFrame(() => {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID && (mob[i].col === this.col + 1 || mob[i].col === this.col + 2 || mob[i].col === this.col + 2)) {
                        mob[i].isInvulnerable = false
                        mob[i].damageReduction = mob[i].damageReductionMemory
                    }
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID && mob[i].col === this.col - 1) {
                        mob[i].isDecay = true
                    }
                }
            })
        }
        me.flapRadius = 100 + radius * 3
        me.flapRate = 0.13
        me.do = function () {
            this.checkStatus();
            ctx.fillStyle = `hsla(${160 + 40 * Math.random()}, 100%, ${25 + 25 * Math.random() * Math.random()}%, 0.2)`; 

            this.wing(this.angle + 0.3 * Math.sin(simulation.cycle * this.flapRate), this.flapRadius)

            if (this.isDecay) {
                this.health -= 0.001
                if ((this.health < 0.01 || isNaN(this.health)) && this.alive) this.death();
                this.alwaysSeePlayer();
                this.attraction();
            }
            if (this.isInvulnerable) {
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = lineWidth + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };
    },
    softStinger(x, y, radius, softID) {
        const color = '#5bc'
        mobs.spawn(x, y, 7, radius, color);
        let me = mob[mob.length - 1];
        me.tier = 1
        me.softID = softID
        me.isBoss = true;
        me.isSoftBoss = true;
        Matter.Body.setDensity(me, 0.0036); 
        me.isInvulnerable = false
        me.damageReduction = 0.13

        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.008
        me.frictionAir = 0;
        me.friction = 0
        me.frictionStatic = 0
        me.memory = 240;
        me.restitution = 1;
        me.frictionStatic = 0;
        me.friction = 0;
        me.fireDir = { x: 0, y: 0 }

        me.onDeath = function () {
            this.isSoftBoss = false;
            let count = 0 
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isSoftBoss && mob[i].softID === this.softID) count++
            }
            if (count < 3) { 
                for (let i = 0, len = mob.length; i < len; i++) { 
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                        mob[i].onDeath = () => { }
                        mob[i].isDropPowerUp = false
                        mob[i].death()
                    }
                }
                powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            } else {
                this.isDropPowerUp = false;
                powerUps.spawnRandomPowerUp(this.position.x, this.position.y) 
            }
        }
        me.healthDisplay = function () {
            if (this.seePlayer.recall) this.healthBar1()
        }
        me.do = function () {
            this.healthDisplay()
            this.seePlayerByHistory()
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.force.x += Math.cos(this.angle) * this.accelMag * this.mass
                this.force.y += Math.sin(this.angle) * this.accelMag * this.mass

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                    const mod = (a, n) => a - Math.floor(a / n) * n
                    const sub = Vector.sub(m.pos, this.position) 
                    const diff = mod(Math.atan2(sub.y, sub.x) - this.angle + Math.PI, 2 * Math.PI) - Math.PI
                    if (Math.abs(diff) > 2.8) this.torque += 0.0002 * this.inertia * Math.random();
                }

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.4;
                const turn = 0.00002 * this.inertia
                if (c > threshold) {
                    this.torque += turn;
                } else if (c < -threshold) {
                    this.torque -= turn;
                }
                this.frictionAir = 0.11

                if (this.distanceToPlayer() < 2000) {
                    best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const seeRangeRandom = 350 - 70 * Math.random()
                    const look = { x: this.position.x + seeRangeRandom * Math.cos(this.angle), y: this.position.y + seeRangeRandom * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        const dmg = 0.003 * this.damageScale();
                        m.takeDamage(dmg);
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(best.x, best.y, 5 + dmg * 1500, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    const vertex = 3
                    if (best.dist2 === Infinity) best = look;
                    ctx.beginPath();
                    ctx.moveTo(this.vertices[vertex].x, this.vertices[vertex].y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
            if (this.isInvulnerable) {
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };
    },
    softSlicer(x, y, radius, softID) {
        const sides = 5
        mobs.spawn(x, y, sides, radius, "rgba(182, 99, 124, 1)");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.softID = softID
        me.isBoss = true;
        me.isSoftBoss = true;
        Matter.Body.setDensity(me, 0.0036); 
        me.isInvulnerable = false
        me.damageReduction = 0.1

        me.accelMag = 0.002;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0;
        me.restitution = 1
        me.delay = 50 + Math.floor(20 * Math.random())
        me.cd = Infinity;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 580
        me.swordRadiusGrowRateInitial = 1.1
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.02 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5

        me.onDeath = function () {
            this.isSoftBoss = false;
            let count = 0 
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isSoftBoss && mob[i].softID === this.softID) count++
            }
            if (count < 3) { 
                for (let i = 0, len = mob.length; i < len; i++) { 
                    if (mob[i].isSoftBoss && mob[i].softID === this.softID) {
                        mob[i].onDeath = () => { }
                        mob[i].isDropPowerUp = false
                        mob[i].death()
                    }
                }
                powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            } else {
                this.isDropPowerUp = false;
                powerUps.spawnRandomPowerUp(this.position.x, this.position.y) 
            }
        }
        me.do = function () {
            this.seePlayerByHistory()
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.healthBar2()
                if (this.distanceToPlayer() < 500) {
                    if (!this.isSlashing && m.immuneCycle < m.cycle && Matter.Query.ray(map, this.position, m.pos).length === 0) this.sword = this.swordWaiting
                }
            }
            this.attraction();
            this.sword() 
            if (this.isInvulnerable) {
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };
        me.swordWaiting = function () {
            this.cd = simulation.cycle + 74;
            let dist = 0
            for (let i = 0, len = this.vertices.length; i < len; i++) {
                const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                if (D > dist) {
                    dist = D
                    this.swordVertex = i
                }
            }
            this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
            this.sword = this.swordGrow
            this.isSlashing = true
            this.cycle = 0
            this.swordRadius = this.swordRadiusInitial

            Matter.Body.setAngularVelocity(this, 0)
            const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
            const playerVector = Vector.sub(this.position, m.pos)
            const cross = Matter.Vector.cross(laserStartVector, playerVector)
            this.torque = 0.0003 * this.inertia * (cross > 0 ? 1 : -1)
        }
        me.sword = () => { } 
        me.swordGrow = function () {
            Matter.Body.setAngularVelocity(this, 0.99 * this.angularVelocity)

            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.98))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = () => { }
                this.isSlashing = false
                this.swordRadius = 0
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(255, 0, 76, 0.1)";
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgb(255, 0, 77)";
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    growBossCulture(x, y, radius = 17, nodes = 12 + Math.min(10, simulation.difficulty * 0.25)) {
        const buffID = Math.random()
        const sideLength = 200 + 50 * Math.sqrt(nodes) 
        for (let i = 0; i < nodes; ++i) {
            const angle = 2 * Math.PI * Math.random()
            const mag = Math.max(radius, sideLength * (1 - Math.pow(Math.random(), 1.5))) 
            spawn.growBoss(x + mag * Math.cos(angle), y + mag * Math.sin(angle), radius, buffID);
        }
        spawn.constrain2AdjacentMobs(nodes, 0.0001, false); 
    },
    growBoss(x, y, radius, buffID) {
        mobs.spawn(x + Math.random(), y + Math.random(), 6, radius, "hsl(144, 15%, 50%)") 
        let me = mob[mob.length - 1];
        me.tier = 2
        me.isBoss = true;
        me.isBuffBoss = true;
        me.buffID = buffID
        me.memory = Infinity;
        me.isVerticesChange = true
        me.frictionAir = 0.012
        me.seePlayerFreq = Math.floor(11 + 7 * Math.random())
        me.seeAtDistance2 = 200000 
        me.stroke = "transparent"
        me.collisionFilter.mask = cat.player | cat.bullet | cat.body 

        me.buffCount = 0
        me.accelMag = 0.00005 
        me.setBuffed = function () {
            this.buffCount++
            this.accelMag += 0.000024 
            this.fill = `hsl(144, ${5 + 10 * this.buffCount}%, 50%)`
            const scale = 1.135;
            Matter.Body.scale(this, scale, scale);
            this.radius *= scale;

        }
        me.onDeath = function () {
            this.isBuffBoss = false;
            let count = 0 
            for (let i = 0, len = mob.length; i < len; i++) {
                if (mob[i].isBuffBoss && mob[i].buffID === this.buffID) {
                    count++
                    mob[i].setBuffed()
                }
            }
            if (count < 1) { 
                powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            } else {
                this.leaveBody = false;
                this.isDropPowerUp = false;
                powerUps.spawnRandomPowerUp(this.position.x, this.position.y) 
            }
        }
        me.damageReduction = 0.2
        me.invulnerabilityCountDown = 0
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.alwaysSeePlayer();
            this.checkStatus();
            this.attraction();
            if (!(simulation.cycle % this.seePlayerFreq)) { 
                const repelRange = 100 + 4 * this.radius
                const attractRange = 240
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].isBuffBoss && mob[i].id !== this.id) {
                        const sub = Vector.sub(this.position, mob[i].position)
                        const dist = Vector.magnitude(sub)
                        if (dist < repelRange) {
                            this.force = Vector.mult(Vector.normalise(sub), this.mass * 0.002)
                        } else if (dist > attractRange) {
                            this.force = Vector.mult(Vector.normalise(sub), -this.mass * 0.002)
                        }
                    }
                }
            }
        }
    },
    powerUpBossBaby(x, y, vertices = 9, radius = 60) {
        mobs.spawn(x, y, vertices, radius, "rgba(225,240,245,0.4)"); 
        let me = mob[mob.length - 1];
        me.tier = 2
        me.isBoss = true;
        me.frictionAir = 0.006
        me.seeAtDistance2 = 1000000;
        me.accelMag = 0.0004 + 0.0003 * simulation.accelScale;
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map
        me.memory = Infinity;
        me.seePlayerFreq = 17
        me.lockedOn = null;
        if (vertices === 9) {
            powerUps.spawnBossPowerUp(me.position.x, me.position.y)
            powerUps.spawn(me.position.x, me.position.y, "heal");
            powerUps.spawn(me.position.x, me.position.y, "ammo");
            powerUps.spawn(me.position.x, me.position.y, "ammo");
        } else if (!m.isCloak) {
            me.foundPlayer();
        }
        me.damageReduction = 0.21
        me.isInvulnerable = true
        me.startingDamageReduction = me.damageReduction
        me.damageReduction = 0
        me.invulnerabilityCountDown = 30 + simulation.difficulty
        me.onHit = function () { 
            if (powerUps.ejectTech()) {
                powerUps.ejectGraphic("150, 138, 255");
                this.accelMag *= 1.4
                Matter.Body.setDensity(this, this.density * 1.4); 
            }
        };
        me.onDeath = function () {
            this.leaveBody = false;
            if (vertices > 3) {
                this.isDropPowerUp = false;
                spawn.powerUpBossBaby(this.position.x, this.position.y, vertices - 1)
                Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x, y: this.velocity.y })
            }
            for (let i = 0; i < powerUp.length; i++) powerUp[i].collisionFilter.mask = cat.map | cat.powerUp
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            if (this.isInvulnerable) {
                if (this.invulnerabilityCountDown > 0) {
                    this.invulnerabilityCountDown--
                    ctx.beginPath();
                    let vertices = this.vertices;
                    ctx.moveTo(vertices[0].x, vertices[0].y);
                    for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                    ctx.lineTo(vertices[0].x, vertices[0].y);
                    ctx.lineWidth = 13 + 5 * Math.random();
                    ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                    ctx.stroke();
                } else {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
            }

            if (this.alive) {
                for (let i = 0; i < Math.min(powerUp.length, this.vertices.length); i++) {
                    powerUp[i].collisionFilter.mask = 0
                    Matter.Body.setPosition(powerUp[i], this.vertices[i])
                    Matter.Body.setVelocity(powerUp[i], { x: 0, y: 0 })
                }
            }
            this.seePlayerByHistory(50);
            this.attraction();
            this.checkStatus();
        };
    },
    powerUpBoss(x, y, vertices = 9, radius = 130) {
        mobs.spawn(x, y, vertices, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.isBoss = true;
        me.frictionAir = 0.01
        me.seeAtDistance2 = 1000000;
        me.accelMag = 0.0002 + 0.0004 * simulation.accelScale;
        Matter.Body.setDensity(me, 0.0003); 
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body
        me.memory = Infinity;
        me.seePlayerFreq = 30
        me.lockedOn = null;
        if (vertices === 9) {
            powerUps.spawnBossPowerUp(me.position.x, me.position.y)
            powerUps.spawn(me.position.x, me.position.y, "heal");
            powerUps.spawn(me.position.x, me.position.y, "ammo");
            powerUps.spawn(me.position.x, me.position.y, "ammo");
            powerUps.spawn(me.position.x, me.position.y, "ammo");
        } else if (!m.isCloak) {
            me.foundPlayer();
        }

        me.damageReduction = 0.23
        me.isInvulnerable = true
        me.startingDamageReduction = me.damageReduction
        me.damageReduction = 0
        me.invulnerabilityCountDown = 30 + simulation.difficulty

        me.onHit = function () { 
            if (powerUps.ejectTech()) {
                powerUps.ejectGraphic("150, 138, 255");
                this.accelMag *= 1.4
                Matter.Body.setDensity(this, this.density * 1.4); 
            }
        };
        me.onDeath = function () {
            this.leaveBody = false;
            if (vertices > 3) {
                this.isDropPowerUp = false;
                spawn.powerUpBoss(this.position.x, this.position.y, vertices - 1)
                Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x, y: this.velocity.y })
            }
            for (let i = 0; i < powerUp.length; i++) powerUp[i].collisionFilter.mask = cat.map | cat.powerUp
            for (let i = 0; i < 40; i++) this.colors();
        };
        me.colors = function () {
            const unit = Vector.rotate({ x: 1, y: 0 }, Math.random() * 6.28)
            const where = Vector.add(this.position, Vector.mult(unit, 700 - 500 * Math.random() * Math.random()))
            const colors = ["#0ae", "#f55", "#f7b", "#0eb", "#467", "hsl(246,100%,77%)", "#0cf", "#26a"]
            simulation.drawList.push({ 
                x: where.x,
                y: where.y,
                radius: 5 + 10 * Math.random(),
                color: colors[Math.floor(Math.random() * colors.length)], 
                time: 17
            });
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.stroke = `hsl(0,0%,${80 + 25 * Math.sin(simulation.cycle * 0.01)}%)`
            if (this.isInvulnerable) {
                if (this.invulnerabilityCountDown > 0) {
                    this.invulnerabilityCountDown--
                    ctx.beginPath();
                    let vertices = this.vertices;
                    ctx.moveTo(vertices[0].x, vertices[0].y);
                    for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                    ctx.lineTo(vertices[0].x, vertices[0].y);
                    ctx.lineWidth = 13 + 5 * Math.random();
                    ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                    ctx.stroke();
                } else {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
            }
            if (this.alive) {
                for (let i = 0; i < Math.min(powerUp.length, this.vertices.length); i++) {
                    powerUp[i].collisionFilter.mask = 0
                    Matter.Body.setPosition(powerUp[i], this.vertices[i])
                    Matter.Body.setVelocity(powerUp[i], { x: 0, y: 0 })
                }
            }

            this.seePlayerCheckByDistance();
            this.attraction();
            this.checkStatus();

            if (!(simulation.cycle % 5)) this.colors();
        };
    },
    grower(x, y, radius = 15) {
        mobs.spawn(x, y, 7, radius, "hsl(144, 15%, 50%)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.isVerticesChange = true
        me.big = false; 
        me.accelMag = 0.00045 * simulation.accelScale;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.player 
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.attraction();
            this.grow();
        };
    },
    springer(x, y, radius = 20 + Math.ceil(Math.random() * 35)) {
        mobs.spawn(x, y, 10, radius, "#b386e8");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.friction = 0;
        me.frictionAir = 0.006;
        me.lookTorque = 0.0000008; 
        me.g = 0.0002; 
        me.seePlayerFreq = Math.floor((40 + 25 * Math.random()));
        const springStiffness = 0.00014;
        const springDampening = 0.0005;

        me.springTarget = { x: me.position.x, y: me.position.y };
        const len = cons.length;
        cons[len] = Constraint.create({
            pointA: me.springTarget,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening
        });
        Composite.add(engine.world, cons[cons.length - 1]);

        cons[len].length = 100 + 1.5 * radius;
        me.cons = cons[len];

        me.springTarget2 = { x: me.position.x, y: me.position.y };
        const len2 = cons.length;
        cons[len2] = Constraint.create({
            pointA: me.springTarget2,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len2].length = 100 + 1.5 * radius;
        me.cons2 = cons[len2];
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.gravity();
            this.searchSpring();
            this.checkStatus();
            this.springAttack();
        };
        me.onDeath = function () {
            this.removeCons();
        };
        spawn.shield(me, x, y);
    },
    hopsploder(x, y, radius = 35) {
        mobs.spawn(x, y, 5, radius, "rgb(33, 174, 160)");
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.004); 
        me.accelMag = 0.05;
        me.g = 0.0032; 
        me.frictionAir = 0.01;
        me.friction = 1
        me.frictionStatic = 1
        me.restitution = 0;
        me.delay = 100
        me.randomHopFrequency = 210 + Math.floor(Math.random() * 60);
        me.randomHopCD = simulation.cycle + me.randomHopFrequency;
        Matter.Body.rotate(me, Math.random() * Math.PI);
        spawn.shield(me, x, y);
        me.onDeath = function () {
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            if (this.seePlayer.recall) {
                if (this.cd < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.cd = simulation.cycle + this.delay;
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass;
                    const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - (Math.random() * 0.06 + 0.1) * this.mass; 

                    spawn.grenade(this.position.x, this.position.y + radius, this.tier, 30, 350, 6);
                }
            } else {
                if (this.randomHopCD < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.randomHopCD = simulation.cycle + this.randomHopFrequency;
                    this.randomHopFrequency = Math.max(100, this.randomHopFrequency + (0.5 - Math.random()) * 200);
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass * (0.1 + Math.random() * 0.3);
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - 0.07 * this.mass; 
                }
            }
        };
    },
    hopper(x, y, radius = 35 + Math.ceil(Math.random() * 30)) {
        mobs.spawn(x, y, 5, radius, "rgb(0,200,180)");
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.setDensity(me, 0.0015); 
        me.accelMag = 0.05;
        me.g = 0.0032; 
        me.frictionAir = 0.01;
        me.friction = 1
        me.frictionStatic = 1
        me.restitution = 0;
        me.delay = 120 * simulation.CDScale;
        me.randomHopFrequency = 200 + Math.floor(Math.random() * 150);
        me.randomHopCD = simulation.cycle + me.randomHopFrequency;
        Matter.Body.rotate(me, Math.random() * Math.PI);
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            if (this.seePlayer.recall) {
                if (this.cd < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.cd = simulation.cycle + this.delay;
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass;
                    const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - (Math.random() * 0.06 + 0.1) * this.mass; 
                }
            } else {
                if (this.randomHopCD < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.randomHopCD = simulation.cycle + this.randomHopFrequency;
                    this.randomHopFrequency = Math.max(100, this.randomHopFrequency + (0.5 - Math.random()) * 200);
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass * (0.1 + Math.random() * 0.3);
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - 0.07 * this.mass; 
                }
            }
        };
    },
    hopperBaby(x, y, radius = 20 + Math.ceil(Math.random() * 15)) {
        mobs.spawn(x, y, 5, radius, "rgba(0, 220, 198, 1)");
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.setDensity(me, 0.0015); 
        me.g = 0.01; 
        me.frictionAir = 0.01;
        me.friction = 1
        me.frictionStatic = 1
        me.restitution = 0;
        me.randomHopFrequency = 40 + Math.floor(Math.random() * 260);
        me.randomHopCD = simulation.cycle + me.randomHopFrequency;
        me.hopCount = 0
        me.delay = 32 + Math.floor(4 * Math.random())
        Matter.Body.rotate(me, Math.random() * Math.PI);
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            if (this.seePlayer.recall) {
                if (this.cd < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.hopCount++
                    if (this.hopCount > 6) { 
                        this.hopCount = 0
                        this.cd = simulation.cycle + 120;
                        const forceMag = 0.07 * this.mass;
                        const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                        this.force.x += forceMag * Math.cos(angle);
                        this.force.y += forceMag * Math.sin(angle) - (0.2) * this.mass; 
                    } else { 
                        this.cd = simulation.cycle + this.delay;
                        const forceMag = 0.04 * this.mass;
                        const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                        this.force.x += forceMag * Math.cos(angle);
                        this.force.y += forceMag * Math.sin(angle) - (0.08) * this.mass; 
                    }
                }
            } else {
                if (this.randomHopCD < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.randomHopCD = simulation.cycle + this.randomHopFrequency;
                    this.randomHopFrequency = Math.max(80, this.randomHopFrequency + (0.5 - Math.random()) * 150);

                    this.hopCount++
                    if (this.hopCount > 6) { 
                        this.hopCount = 0
                        this.cd = simulation.cycle + 120;
                        const forceMag = 0.07 * this.mass;
                        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
                        this.force.x += forceMag * Math.cos(angle);
                        this.force.y += forceMag * Math.sin(angle) - (0.2) * this.mass; 
                    } else { 
                        this.cd = simulation.cycle + this.delay;
                        const forceMag = 0.04 * this.mass;
                        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
                        this.force.x += forceMag * Math.cos(angle);
                        this.force.y += forceMag * Math.sin(angle) - (0.1) * this.mass; 
                    }
                }
            }
        };
    },
    hopMother(x, y, radius = 20 + Math.ceil(Math.random() * 20)) {
        mobs.spawn(x, y, 5, radius, "rgb(50,170,200)");
        let me = mob[mob.length - 1];
        me.tier = 3
        Matter.Body.setDensity(me, 0.00096); 
        me.accelMag = 0.05;
        me.g = 0.0032; 
        me.frictionAir = 0.01;
        me.friction = 1
        me.frictionStatic = 1
        me.restitution = 0;
        me.delay = 120 + 110 * simulation.CDScale;
        me.randomHopFrequency = 300 + Math.floor(Math.random() * 150);
        me.randomHopCD = simulation.cycle + me.randomHopFrequency;
        Matter.Body.rotate(me, Math.random());
        spawn.shield(me, x, y);
        me.dropEgg = function () {
            if (mob.length < 360 * (localSettings.isHideHUD ? 0.5 : 1)) {
                let where = { x: this.position.x, y: this.position.y + 0.3 * radius }
                for (let i = 0; i < 30; i++) { 
                    if (Matter.Query.point(map, where).length > 0 || Matter.Query.point(body, where).length > 0) break
                    where.y += 1
                }
                spawn.hopEgg(where.x, where.y - 10, this.tier)
            }
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            if (this.seePlayer.recall) {
                if (this.cd < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.cd = simulation.cycle + this.delay;
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass;
                    const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - (Math.random() * 0.06 + 0.1) * this.mass; 
                    this.dropEgg();
                }
            } else {
                if (this.randomHopCD < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.randomHopCD = simulation.cycle + this.randomHopFrequency;
                    this.randomHopFrequency = Math.max(100, this.randomHopFrequency + (0.5 - Math.random()) * 200);
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass * (0.1 + Math.random() * 0.3);
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - 0.07 * this.mass; 
                    if (Math.random() < 0.2) this.dropEgg();
                }
            }
        };
    },
    hopEgg(x, y, tier) {
        mobs.spawn(x, y, 10, 9 + Math.floor(3 * Math.random()), "rgba(50, 150, 150,0.3)"); 
        let me = mob[mob.length - 1];
        me.tier = tier
        me.stroke = "transparent";
        Matter.Body.setDensity(me, 0.0001); 
        me.frictionAir = 1
        me.damageReduction = 2
        me.collisionFilter.mask = cat.bullet | cat.body
        me.isMine = true
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.isUnstable = true; 
        me.explodeRange = 210 + 140 * Math.random()
        me.isExploding = false
        me.countDown = Math.ceil(4 * Math.random())
        me.hatchTimer = 440 + Math.floor(120 * Math.random())
        me.isInvulnerable = true 
        me.do = function () {
            this.checkStatus();
            this.hatchTimer--
            if (this.hatchTimer < 1) {
                spawn.hopBullet(this.position.x, this.position.y, this.tier)
                this.death();
            }
            if (Matter.Query.collides(this, [player]).length > 0 && !(m.isCloak && tech.isIntangible) && m.immuneCycle < m.cycle) this.isExploding = true
            if (this.isExploding) {
                if (this.countDown-- < 0) { 
                    this.death();
                    if (Vector.magnitude(Vector.sub(this.position, player.position)) < this.explodeRange && m.immuneCycle < m.cycle) {
                        m.takeDamage(0.01 * this.damageScale() * (tech.isRadioactiveResistance ? 0.2 : 1));
                        m.energy -= 0.1 * (tech.isRadioactiveResistance ? 0.2 : 1)
                        if (m.energy < 0) m.energy = 0
                    }
                    const range = this.explodeRange + 50 
                    for (let i = 0, len = mob.length; i < len; ++i) {
                        if (mob[i].alive && Vector.magnitude(Vector.sub(this.position, mob[i].position)) < range && mob[i].isMine) {
                            mob[i].isExploding = true 
                        }
                    }
                    simulation.drawList.push({ 
                        x: this.position.x,
                        y: this.position.y,
                        radius: this.explodeRange,
                        color: "rgba(50,180,180,0.45)",
                        time: 16
                    });
                }
            }
        };
    },
    hopBullet(x, y, tier, radius = 10 + Math.ceil(Math.random() * 8)) {
        mobs.spawn(x, y, 5, radius, "rgb(0,200,180)");
        let me = mob[mob.length - 1];
        me.tier = tier
        me.stroke = "transparent";
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isMobBullet = true;
        me.timeLeft = 1020 + Math.floor(480 * Math.random());

        me.isRandomMove = Math.random() < 0.3 
        me.accelMag = 0.01; 
        me.g = 0.0015; 
        me.frictionAir = 0.01;
        me.friction = 1
        me.frictionStatic = 1
        me.restitution = 0;
        me.delay = 100 + 50 * simulation.CDScale;
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet;
        me.onHit = function () {
            this.explode(0.5 * this.mass);
        };
        me.do = function () {
            this.gravity();
            this.checkStatus();
            if (this.cd < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                this.cd = simulation.cycle + this.delay;
                if (this.isRandomMove || Math.random() < 0.2) {
                    this.force.x += (0.01 + 0.03 * Math.random()) * this.mass * (Math.random() < 0.5 ? 1 : -1); 
                } else {
                    this.force.x += (0.01 + 0.03 * Math.random()) * this.mass * (player.position.x > this.position.x ? 1 : -1); 
                }
                this.force.y -= (0.04 + 0.04 * Math.random()) * this.mass
            }
            this.timeLimit();
        };
    },
    hopMotherBoss(x, y, radius = 120) {
        mobs.spawn(x, y, 5, radius, "rgb(0,200,180)");
        let me = mob[mob.length - 1];
        me.isBoss = true;
        me.damageReduction = 0.15
        me.accelMag = 0.05; 
        me.g = 0.003; 
        me.frictionAir = 0.01;
        me.friction = 1
        me.frictionStatic = 1
        me.restitution = 0;
        me.delay = 130 + 40 * simulation.CDScale;
        Matter.Body.rotate(me, Math.random() * Math.PI);
        spawn.shield(me, x, y, 1);
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.do = function () {
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            if (this.cd < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                this.cd = simulation.cycle + this.delay;
                for (let i = 0, len = 1 + 0.05 * simulation.difficulty; i < len; ++i) spawn.hopBullet(this.position.x + 100 * (Math.random() - 0.5), this.position.y + 100 * (Math.random() - 0.5), this.tier)

                this.force.x += (0.02 + 0.06 * Math.random()) * this.mass * (player.position.x > this.position.x ? 1 : -1);
                this.force.y -= (0.08 + 0.08 * Math.random()) * this.mass
            }
        };
    },
    spinner(x, y, radius = 30 + Math.ceil(Math.random() * 35)) {
        mobs.spawn(x, y, 5, radius, "#28b");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.cd = 0;
        me.burstDir = { x: 0, y: 0 };
        me.frictionAir = 0.022;
        me.lookTorque = 0.0000014;
        me.restitution = 0;
        spawn.shield(me, x, y);
        me.look = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.seePlayerByLookingAt();
            this.checkStatus();
            if (this.seePlayer.recall && this.cd < simulation.cycle) {
                this.burstDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                this.cd = simulation.cycle + 40;
                this.do = this.spin
            }
        }
        me.do = me.look
        me.spin = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.checkStatus();
            this.torque += 0.000035 * this.inertia;
            const mag = this.radius * 2.5 + 50;
            ctx.strokeStyle = "rgba(0,0,0,0.2)";
            ctx.lineWidth = 3;
            ctx.setLineDash([10, 20]); 
            const dir = Vector.add(this.position, Vector.mult(this.burstDir, mag));
            ctx.beginPath();
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(dir.x, dir.y);
            ctx.stroke();
            ctx.setLineDash([]);
            if (this.cd < simulation.cycle) {
                this.cd = simulation.cycle + 180 * simulation.CDScale
                this.do = this.look
                this.force = Vector.mult(this.burstDir, this.mass * 0.25);
            }
        }
    },
    pitcher(x, y, radius = 35 + Math.ceil(Math.random() * 25)) {
        mobs.spawn(x, y, 3, radius, "#28b");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.revolutions = 0;
        me.isDotNeg = false
        me.cd = 0
        me.fireDir = { x: 0, y: 0 };
        me.frictionAir = 0.02;
        me.accelMag = 0.00017 * simulation.accelScale;
        me.lookTorque = 0.0000014;
        me.restitution = 0;
        me.myBall = null
        spawn.shield(me, x, y);
        me.onDeath = function () {
            if (this.myBall) {
                this.myBall.timeLeft = 0
                powerUps.directSpawn(this.vertices[1].x, this.vertices[1].y, "boost");
            }
        };
        me.look = function () {
            this.attraction();
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByLookingAt();
            this.checkStatus();
            if (this.seePlayer.recall && this.cd < simulation.cycle) {
                this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                this.revolutions = 0
                this.do = this.spin

                spawn.ball(this.vertices[1].x, this.vertices[1].y, 8);
                this.myBall = mob[mob.length - 1]
                this.myBall.drawOutline = false
            }
        }
        me.do = me.look
        me.spin = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.checkStatus();
            this.torque += 0.000017 * this.inertia;

            const dot = Vector.dot({
                x: Math.cos(this.angle),
                y: Math.sin(this.angle)
            }, this.fireDir);
            if (dot > 0) {
                this.isDotNeg = false
            } else if (!this.isDotNeg) {
                this.isDotNeg = true
                this.revolutions++
            }

            Matter.Body.setPosition(this.myBall, this.vertices[1])
            if (this.revolutions > 3) {
                this.cd = simulation.cycle + 300 * simulation.CDScale
                this.do = this.look

                this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                this.force.x -= 0.005 * this.fireDir.x * this.mass;
                this.force.y -= 0.005 * this.fireDir.y * this.mass;
                if (this.myBall) {
                    const v = 11
                    Matter.Body.setVelocity(this.myBall, {
                        x: this.velocity.x + this.fireDir.x * v + 5 * (Math.random() - 0.5),
                        y: this.velocity.y + this.fireDir.y * v + 5 * (Math.random() - 0.5)
                    });
                    this.myBall.drawOutline = true
                    this.myBall = null
                }
            }
        }
    },
    pitcher3(x, y, radius = 25 + Math.ceil(Math.random() * 15)) {
        mobs.spawn(x, y, 3, radius, "rgba(41, 49, 197, 1)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.revolutions = 0;
        me.isDotNeg = false
        me.cd = 0
        me.fireDir = { x: 0, y: 0 };
        me.frictionAir = 0.02;
        me.accelMag = 0.0003 * simulation.accelScale;
        me.lookTorque = 0.0000017;
        me.restitution = 0;
        me.myBall = null
        spawn.shield(me, x, y);
        me.onDeath = function () {
            if (this.myBall) {
                this.myBall.timeLeft = 0
                powerUps.directSpawn(this.vertices[1].x, this.vertices[1].y, "boost");
            }
        };
        me.look = function () {
            this.attraction();
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerByLookingAt();
            this.checkStatus();
            if (this.seePlayer.recall && this.cd < simulation.cycle) {
                this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                this.revolutions = 0
                this.do = this.spin

                spawn.ball(this.vertices[1].x, this.vertices[1].y, 12, 540 + 240);
                this.myBall = mob[mob.length - 1]
                this.myBall.drawOutline = false
            }
        }
        me.do = me.look
        me.spin = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.checkStatus();
            this.torque += 0.00002 * this.inertia;

            const dot = Vector.dot({
                x: Math.cos(this.angle),
                y: Math.sin(this.angle)
            }, this.fireDir);
            if (dot > 0) {
                this.isDotNeg = false
            } else if (!this.isDotNeg) {
                this.isDotNeg = true
                this.revolutions++
            }

            Matter.Body.setPosition(this.myBall, this.vertices[1])
            if (this.revolutions > 1) {
                this.cd = simulation.cycle + 120 * simulation.CDScale
                this.do = this.look

                this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                this.force.x -= 0.01 * this.fireDir.x * this.mass;
                this.force.y -= 0.01 * this.fireDir.y * this.mass;
                if (this.myBall) {
                    const v = 20 + Math.floor(10 * Math.random())
                    Matter.Body.setVelocity(this.myBall, {
                        x: this.velocity.x + this.fireDir.x * v + (Math.random() - 0.5),
                        y: this.velocity.y + this.fireDir.y * v + (Math.random() - 0.5)
                    });
                    this.myBall.drawOutline = true
                    this.myBall = null
                }
            }
        }
    },
    pitcher4(x, y, radius = 20 + Math.ceil(Math.random() * 10)) {
        mobs.spawn(x, y, 3, radius, "rgba(99, 106, 237, 1)");
        let me = mob[mob.length - 1];
        me.tier = 4
        me.revolutions = 0;
        me.vertexAngleCount = -1 
        me.isDotNeg = false
        me.cd = 0
        me.fireDir = { x: 0, y: 0 };
        me.frictionAir = 0.02;
        me.accelMag = 0.0003 * simulation.accelScale;
        me.lookTorque = 0.0000017;
        me.torqueMag = (0.000015 + 0.000003 * (Math.random() - 0.5)) * me.inertia
        me.restitution = 0;
        me.myBall = [null, null, null]
        spawn.shield(me, x, y);
        me.onDeath = function () {
            for (let i = 0; i < 3; i++) {
                if (this.myBall[i] !== null) {
                    this.myBall[i].timeLeft = 0
                    powerUps.directSpawn(this.vertices[i].x, this.vertices[i].y, "boost");
                }
            }
        };
        me.look = function () {
            this.attraction();
            if (this.seePlayer.recall) this.healthBar4()
            this.seePlayerByLookingAt();
            this.checkStatus();
            if (this.seePlayer.recall && this.cd < simulation.cycle) {
                this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                this.revolutions = 0
                this.vertexAngleCount = -1
                this.do = this.spin

                for (let i = 0; i < 3; i++) {
                    spawn.ball(this.vertices[i].x, this.vertices[i].y, 12, 540 + 420);
                    this.myBall[i] = mob[mob.length - 1]
                    this.myBall[i].drawOutline = false
                }
            }
        }
        me.do = me.look
        me.spin = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.checkStatus();
            this.torque += this.torqueMag;

            const a = this.angle + 2 / 3 * Math.PI * this.vertexAngleCount
            const dot = Vector.dot({
                x: Math.cos(a),
                y: Math.sin(a)
            }, this.fireDir);
            if (dot > 0) {
                this.isDotNeg = false
            } else if (!this.isDotNeg) {
                this.isDotNeg = true
                this.revolutions++
            }

            for (let i = 0; i < 3; i++) {

                if (this.myBall[i] !== null) {
                    Matter.Body.setPosition(this.myBall[i], this.vertices[i])

                    if (this.revolutions > i + 1) {
                        this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                        this.force.x -= 0.003 * this.fireDir.x * this.mass;
                        this.force.y -= 0.003 * this.fireDir.y * this.mass;

                        if (this.myBall) {
                            const v = 23 + Math.floor(18 * Math.random())
                            Matter.Body.setVelocity(this.myBall[i], {
                                x: this.velocity.x + this.fireDir.x * v + 6 * (Math.random() - 0.5),
                                y: this.velocity.y + this.fireDir.y * v + 6 * (Math.random() - 0.5)
                            });
                            this.myBall[i].drawOutline = true
                            this.myBall[i] = null
                            this.vertexAngleCount++
                        }
                    }
                }
            }

            if (this.revolutions > 3) {
                this.cd = simulation.cycle + 120 * simulation.CDScale
                this.do = this.look
            }
        }
    },
    ball(x, y, radius = 20, time = 660) { 
        mobs.spawn(x, y, 7, radius, "#f55");
        let me = mob[mob.length - 1];
        me.stroke = "transparent";
        me.onHit = function () {
            this.explode(this.mass * 20);
        };
        Matter.Body.setDensity(me, 0.00005); 
        me.timeLeft = time;
        me.frictionAir = 0;
        me.friction = 0
        me.frictionStatic = 0
        me.restitution = 1.01;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet;
        me.velocitySmooth = { x: 0, y: 0 }
        me.do = function () {
            this.timeLimit();

            if (this.leaveBody && this.speed < 0.1) {
                this.timeLeft -= 20
            }

            if (this.drawOutline) {
                ctx.save();
                ctx.translate(this.position.x, this.position.y);
                this.velocitySmooth = Vector.add(Vector.mult(this.velocitySmooth, 0.8), Vector.mult(this.velocity, 0.2))
                ctx.rotate(Math.atan2(this.velocitySmooth.y, this.velocitySmooth.x))
                ctx.beginPath();
                const r = 15 + radius
                const mag = r * 4
                ctx.arc(0, 0, r, -Math.PI / 2, Math.PI / 2);
                ctx.bezierCurveTo(-r, r, -r, 0, -mag, 0); 
                ctx.bezierCurveTo(-r, 0, -r, -r, 0, -r);

                const time = Math.min(60, this.timeLeft) / 60
                ctx.fillStyle = `rgba(255,0,200,${0.04 + 0.3 * time})`
                ctx.fill()
                ctx.restore();
            }
        };
    },
    bigSucker(x, y, radius = 10) {
        mobs.spawn(x, y, 9, radius, "#fff");
        let me = mob[mob.length - 1];
        Matter.Body.setDensity(me, 0.009); 
        me.tier = 4
        me.isVerticesChange = true
        me.big = false; 
        me.accelMag = 0.00014
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.player 
        me.eventHorizon = radius * 8; 
        me.memory = 300
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.seePlayerCheck()
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall) {
                if (this.radius < 75) {
                    const scale = 1.008;
                    Matter.Body.scale(this, scale, scale);
                    this.radius *= scale;
                    this.eventHorizon *= scale
                    if (this.isShielded) { 
                        this.isShielded = false;
                        this.removeConsBB();
                    }
                }
            } else {
                if (this.radius > 5) {
                    const scale = 0.986;
                    Matter.Body.scale(this, scale, scale);
                    this.radius *= scale;
                    this.eventHorizon *= scale
                }
            }

            const eventHorizon = this.eventHorizon 
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, eventHorizon * 0.25, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0,0,0,0.7)";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, eventHorizon * 0.55, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0,0,0,0.4)";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, eventHorizon, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0,0,0,0.08)";
            ctx.fill();

            if (Vector.magnitude(Vector.sub(this.position, player.position)) < eventHorizon) {
                if (m.immuneCycle < m.cycle) {
                    if (m.energy > 0) m.energy -= 0.005
                    if (m.energy < 0.1) m.takeDamage(0.0001 * this.damageScale());
                }
                const angle = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
                player.force.x -= 0.00125 * player.mass * Math.cos(angle) * (m.onGround ? 1.8 : 1);
                player.force.y -= 0.0001 * player.mass * Math.sin(angle);
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                ctx.lineTo(m.pos.x, m.pos.y);
                ctx.lineWidth = Math.min(60, this.radius * 2);
                ctx.strokeStyle = "rgba(0,0,0,0.5)";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(m.pos.x, m.pos.y, 40, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,0,0,0.3)";
                ctx.fill();
            }
        };
    },
    sucker(x, y, radius = 30 + Math.ceil(Math.random() * 25)) {
        radius = 9 + radius / 8; 
        mobs.spawn(x, y, 6, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.stroke = "transparent"; 
        me.eventHorizon = radius * 30; 
        me.seeAtDistance2 = (me.eventHorizon + 400) * (me.eventHorizon + 400); 
        me.accelMag = 0.00012 * simulation.accelScale;
        me.frictionAir = 0.025;
        me.collisionFilter.mask = cat.player | cat.bullet | cat.body
        me.memory = Infinity;
        Matter.Body.setDensity(me, 0.015); 
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            if (this.speed > 5) {
                Matter.Body.setVelocity(this, {
                    x: this.velocity.x * 0.99,
                    y: this.velocity.y * 0.99
                });
            }
            this.seePlayerCheckByDistance()
            this.checkStatus();
            if (this.seePlayer.recall) {
                const forceMag = this.accelMag * this.mass;
                const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                this.force.x += forceMag * Math.cos(angle);
                this.force.y += forceMag * Math.sin(angle);
            }
            const eventHorizon = this.eventHorizon * (0.93 + 0.17 * Math.sin(simulation.cycle * 0.011))
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, eventHorizon * 0.25, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0,0,0,0.9)";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, eventHorizon * 0.55, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, eventHorizon, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.fill();

            if (Vector.magnitude(Vector.sub(this.position, player.position)) < eventHorizon) {
                if (m.immuneCycle < m.cycle) {
                    if (m.energy > 0) m.energy -= 0.005
                    if (m.energy < 0.1) m.takeDamage(0.0001 * this.damageScale());
                }
                const angle = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
                player.force.x -= 0.00125 * player.mass * Math.cos(angle) * (m.onGround ? 1.8 : 1);
                player.force.y -= 0.0001 * player.mass * Math.sin(angle);
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                ctx.lineTo(m.pos.x, m.pos.y);
                ctx.lineWidth = Math.min(60, this.radius * 2);
                ctx.strokeStyle = "rgba(0,0,0,0.5)";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(m.pos.x, m.pos.y, 40, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,0,0,0.3)";
                ctx.fill();
            }
        }
        if (level.isMobShields) spawn.shield(me, x, y);
    },
    suckerBoss(x, y, radius = 25) {
        mobs.spawn(x, y, 12, radius, "#000");
        let me = mob[mob.length - 1];
        me.isBoss = true;

        me.stroke = "transparent"; 
        me.eventHorizon = 1100; 
        me.seeAtDistance2 = (me.eventHorizon + 3000) * (me.eventHorizon + 3000); 
        me.accelMag = 0.00004 * simulation.accelScale;
        me.collisionFilter.mask = cat.player | cat.bullet 
        me.memory = 1600;
        Matter.Body.setDensity(me, 0.06); 
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            if (simulation.difficulty > 5) {
                function toMe(who, where, range) {
                    for (let i = 0, len = who.length; i < len; i++) {
                        if (!who[i].isNotHoldable) {
                            const SUB = Vector.sub(who[i].position, where)
                            const DISTANCE = Vector.magnitude(SUB)
                            if (DISTANCE < range) {
                                Matter.Body.setPosition(who[i], where)
                            }
                        }
                    }
                }
                toMe(body, this.position, this.eventHorizon)
                toMe(mob, this.position, this.eventHorizon)
            }
        };
        me.damageReduction = 0.3
        me.do = function () {
            if (this.speed > 1) {
                Matter.Body.setVelocity(this, {
                    x: this.velocity.x * 0.95,
                    y: this.velocity.y * 0.95
                });
            }
            if (!(simulation.cycle % this.seePlayerFreq)) {
                if (this.distanceToPlayer2() < this.seeAtDistance2) { 
                    this.locatePlayer();
                    if (!this.seePlayer.yes) this.seePlayer.yes = true;
                } else if (this.seePlayer.recall) {
                    this.lostPlayer();
                }
            }
            this.checkStatus();
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % 90)) {
                    spawn.seeker(this.position.x, this.position.y, this.tier, 15 * (0.7 + 0.5 * Math.random()), 7); 
                    const who = mob[mob.length - 1]
                    Matter.Body.setDensity(who, 0.00001); 
                    who.timeLeft = 600
                    who.accelMag = 0.0002 * simulation.accelScale; 
                    who.frictionAir = 0.01 
                    const velocity = Vector.mult(Vector.normalise(Vector.sub(m.pos, this.position)), -20); 
                    Matter.Body.setVelocity(who, {
                        x: this.velocity.x + velocity.x,
                        y: this.velocity.y + velocity.y
                    });
                }
                const forceMag = this.accelMag * this.mass;
                const dx = this.seePlayer.position.x - this.position.x
                const dy = this.seePlayer.position.y - this.position.y
                const mag = Math.sqrt(dx * dx + dy * dy)
                this.force.x += forceMag * dx / mag;
                this.force.y += forceMag * dy / mag;
                const eventHorizon = this.eventHorizon * (1 + 0.2 * Math.sin(simulation.cycle * 0.008)) 
                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, eventHorizon * 0.2, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.6)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, eventHorizon * 0.4, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.4)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, eventHorizon * 0.6, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.3)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, eventHorizon * 0.8, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,20,40,0.2)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.position.x, this.position.y, eventHorizon, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(0,0,0,0.05)";
                ctx.fill();
                if (Vector.magnitude(Vector.sub(this.position, player.position)) < eventHorizon) {
                    if (m.immuneCycle < m.cycle) {
                        if (m.energy > 0) m.energy -= 0.008
                        if (m.energy < 0.1) m.takeDamage(0.00015 * this.damageScale());
                    }
                    const angle = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
                    player.force.x -= 0.0013 * Math.cos(angle) * player.mass * (m.onGround ? 1.7 : 1);
                    player.force.y -= 0.0013 * Math.sin(angle) * player.mass;
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    ctx.lineTo(m.pos.x, m.pos.y);
                    ctx.lineWidth = Math.min(60, this.radius * 2);
                    ctx.strokeStyle = "rgba(0,0,0,0.5)";
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(m.pos.x, m.pos.y, 40, 0, 2 * Math.PI);
                    ctx.fillStyle = "rgba(0,0,0,0.3)";
                    ctx.fill();
                }
                this.curl(eventHorizon);
                for (let i = 0; i < powerUp.length; i++) { 
                    const sub = Vector.sub(this.position, powerUp[i].position)
                    const mag = 0.0015 * Math.min(1, (Vector.magnitude(sub) - 200) / this.eventHorizon)
                    const attract = Vector.mult(Vector.normalise(sub), mag * powerUp[i].mass)
                    powerUp[i].force.x += attract.x;
                    powerUp[i].force.y += attract.y - powerUp[i].mass * simulation.g; 
                }
            }
        }
    },
    spiderBoss(x, y, radius = 60) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "#b386e8");
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.setDensity(me, 0.0025); 
        me.isBoss = true;
        me.damageReduction = 0.1  

        targets.push(me.id) 
        me.friction = 0;
        me.frictionAir = 0.002;
        me.lookTorque = 0.0000008; 
        me.g = 0.0002; 
        me.seePlayerFreq = 90
        const springStiffness = 0.00006;
        const springDampening = 0.0005;

        me.springTarget = { x: me.position.x, y: me.position.y };
        const len = cons.length;
        cons[len] = Constraint.create({
            pointA: me.springTarget,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len].length = 100 + 1.5 * radius;
        me.cons = cons[len];

        me.springTarget2 = {
            x: me.position.x,
            y: me.position.y
        };
        const len2 = cons.length;
        cons[len2] = Constraint.create({
            pointA: me.springTarget2,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening,
            length: 0
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len2].length = 100 + 1.5 * radius;
        me.cons2 = cons[len2];
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.gravity();
            this.searchSpring();
            this.checkStatus();
            this.springAttack();
        };

        me.onDeath = function () {
            this.removeCons();
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].id === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
        };

        radius = 22 
        const sideLength = 100 
        const nodes = 6
        const angle = 2 * Math.PI / nodes

        spawn.allowShields = false; 

        for (let i = 0; i < nodes; ++i) {
            spawn.stabber(x + sideLength * Math.sin(i * angle), y + sideLength * Math.cos(i * angle), radius, 12);
            Matter.Body.setDensity(mob[mob.length - 1], 0.003); 
            mob[mob.length - 1].damageReduction = 0.15
            mob[mob.length - 1].isDropPowerUp = false
            targets.push(mob[mob.length - 1].id) 
        }

        const attachmentStiffness = 0.02
        spawn.constrain2AdjacentMobs(nodes, attachmentStiffness, true); 

        for (let i = 0; i < nodes; ++i) { 
            consBB[consBB.length] = Constraint.create({
                bodyA: me,
                bodyB: mob[mob.length - i - 1],
                stiffness: attachmentStiffness,
                damping: 0.03
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        spawn.groupShield(targets, x, y, sideLength + 1 * radius + nodes * 5 - 25);
        spawn.allowShields = true;
    },
    spiderBoss2(x, y, radius = 55) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "rgba(182, 99, 124, 1)");
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.setDensity(me, 0.003); 
        me.isBoss = true;
        me.damageReduction = 0.047  

        targets.push(me.id) 
        me.friction = 0;
        me.frictionAir = 0.0015;
        me.lookTorque = 0.0000008; 
        me.g = 0.0002; 
        me.seePlayerFreq = 90
        const springStiffness = 0.00002;
        const springDampening = 0.0005;

        me.springTarget = { x: me.position.x, y: me.position.y };
        const len = cons.length;
        cons[len] = Constraint.create({
            pointA: me.springTarget,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len].length = 100 + 1.5 * radius;
        me.cons = cons[len];

        me.springTarget2 = {
            x: me.position.x,
            y: me.position.y
        };
        const len2 = cons.length;
        cons[len2] = Constraint.create({
            pointA: me.springTarget2,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening,
            length: 0
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len2].length = 100 + 1.5 * radius;
        me.cons2 = cons[len2];
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.gravity();
            this.searchSpring();
            this.checkStatus();
            this.springAttack();
        };

        me.onDeath = function () {
            this.removeCons();
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].id === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
        };

        radius = 22 
        const sideLength = 100 
        const nodes = 6
        const angle = 2 * Math.PI / nodes

        spawn.allowShields = false; 
        for (let i = 0; i < nodes; ++i) {
            spawn.sliceSpiderLeg(x + sideLength * Math.sin(i * angle), y + sideLength * Math.cos(i * angle), radius, 12);
            mob[mob.length - 1].isBoss = false
            targets.push(mob[mob.length - 1].id) 
        }

        const attachmentStiffness = 0.1
        spawn.constrain2AdjacentMobs(nodes, attachmentStiffness, true, 0.3); 

        for (let i = 0; i < nodes; ++i) { 
            consBB[consBB.length] = Constraint.create({
                bodyA: me,
                bodyB: mob[mob.length - i - 1],
                stiffness: attachmentStiffness,
                damping: 0.3
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        spawn.groupShield(targets, x, y, sideLength + 1 * radius + nodes * 5);
        spawn.allowShields = true;
    },
    spiderBoss3(x, y, radius = 45) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "#446");
        let me = mob[mob.length - 1];
        me.tier = 3
        Matter.Body.setDensity(me, 0.0025); 
        me.isBoss = true;
        me.damageReduction = 0.12  

        targets.push(me.id) 
        me.friction = 0;
        me.frictionAir = 0.0015;
        me.lookTorque = 0.0000008; 
        me.g = 0.0002; 
        me.seePlayerFreq = 70
        const springStiffness = 0.00006;
        const springDampening = 0.0005;

        me.springTarget = { x: me.position.x, y: me.position.y };
        const len = cons.length;
        cons[len] = Constraint.create({
            pointA: me.springTarget,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len].length = 100 + 1.5 * radius;
        me.cons = cons[len];

        me.springTarget2 = {
            x: me.position.x,
            y: me.position.y
        };
        const len2 = cons.length;
        cons[len2] = Constraint.create({
            pointA: me.springTarget2,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening,
            length: 0
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len2].length = 100 + 1.5 * radius;
        me.cons2 = cons[len2];
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.gravity();
            this.searchSpring();
            this.checkStatus();
            this.springAttack();
        };

        me.onDeath = function () {
            this.removeCons();
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].id === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
        };

        radius = 14 
        const sideLength = 125 
        const nodes = 10
        const angle = 2 * Math.PI / nodes

        spawn.allowShields = false; 

        for (let i = 0; i < nodes; ++i) {
            if (i === 0 || i === 5) {
                spawn.sliceSpiderLeg(x + sideLength * Math.sin(i * angle), y + sideLength * Math.cos(i * angle), radius);
                mob[mob.length - 1].tier = 3
            } else {
                spawn.sniperSpiderLeg(x + sideLength * Math.sin(i * angle), y + sideLength * Math.cos(i * angle), radius);
            }
            mob[mob.length - 1].isDropPowerUp = false
            mob[mob.length - 1].isBoss = false
            targets.push(mob[mob.length - 1].id) 
        }

        const attachmentStiffness = 0.05
        spawn.constrain2AdjacentMobs(nodes, attachmentStiffness, true, 0.9); 

        for (let i = 0; i < nodes; ++i) { 
            consBB[consBB.length] = Constraint.create({
                bodyA: me,
                bodyB: mob[mob.length - i - 1],
                stiffness: attachmentStiffness,
                damping: 0.9
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        spawn.groupShield(targets, x, y, sideLength + 1 * radius + nodes * 5 - 35);
        spawn.allowShields = true;
    },
    spiderBoss4(x, y, radius = 55) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "#446");
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.001); 
        me.isBoss = true;
        me.damageReduction = 0.2  

        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 60
                this.isInvulnerable = true
                this.damageReduction = 0

                this.ring()
            }
        };

        targets.push(me.id) 
        me.friction = 0;
        me.frictionAir = 0.0015;
        me.lookTorque = 0.0000008; 
        me.g = 0.0002; 
        me.seePlayerFreq = 70
        const springStiffness = 0.00004;
        const springDampening = 0.0005;

        me.springTarget = { x: me.position.x, y: me.position.y };
        const len = cons.length;
        cons[len] = Constraint.create({
            pointA: me.springTarget,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len].length = 100 + 1.5 * radius;
        me.cons = cons[len];

        me.springTarget2 = {
            x: me.position.x,
            y: me.position.y
        };
        const len2 = cons.length;
        cons[len2] = Constraint.create({
            pointA: me.springTarget2,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening,
            length: 0
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len2].length = 100 + 1.5 * radius;
        me.cons2 = cons[len2];
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.gravity();
            this.searchSpring();
            this.checkStatus();
            this.springAttack();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };

        me.onDeath = function () {
            this.removeCons();
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].id === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };

        const mobRadius = 14 
        const sideLength = 115 
        const nodes = 10
        const angle = 2 * Math.PI / nodes
        me.ring = function () {
            spawn.allowShields = false; 
            const unit = Vector.rotate({ x: 1, y: 0 }, Math.random() * 6.28)
            const where = Vector.add(this.position, Vector.mult(unit, 40))
            for (let i = 0; i < nodes; ++i) {
                if (i === 0 || i === 5) {
                    spawn.sliceSpiderLeg(where.x + sideLength * Math.sin(i * angle), where.y + sideLength * Math.cos(i * angle), mobRadius + 5);
                    mob[mob.length - 1].tier = 3
                } else {
                    spawn.slasherSpiderLeg(where.x + sideLength * Math.sin(i * angle), where.y + sideLength * Math.cos(i * angle), mobRadius);
                    mob[mob.length - 1].tier = 4
                }
                mob[mob.length - 1].isDropPowerUp = false
                mob[mob.length - 1].isBoss = false
                targets.push(mob[mob.length - 1].id) 
            }
            const attachmentStiffness = 0.02
            spawn.constrain2AdjacentMobs(nodes, attachmentStiffness, true); 
            for (let i = 0; i < nodes; ++i) { 
                consBB[consBB.length] = Constraint.create({
                    bodyA: this,
                    bodyB: mob[mob.length - i - 1],
                    stiffness: attachmentStiffness,
                    damping: 0.03
                });
                Composite.add(engine.world, consBB[consBB.length - 1]);
            }
        }
        me.ring()
        spawn.groupShield(targets, x, y, sideLength + 1 * mobRadius + nodes * 5 - 25);
        spawn.allowShields = true;
    },
    tendrilBoss(x, y, radius = 35) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "#6b1616ff");
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.damageReduction = 0.1 

        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 60
                this.isInvulnerable = true
                this.damageReduction = 0

                this.ring()
            }
        };

        targets.push(me) 
        me.friction = 0;
        me.frictionAir = 0.0012;
        me.lookTorque = 0.0000008; 
        me.g = 0.0002; 
        me.accelMag = 0.0002
        me.seePlayerFreq = 70

        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.attraction();
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };

        me.onDeath = function () {
            this.removeCons();
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i] === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };

        const mobRadius = 12 
        const attachmentStiffness = 0.02
        me.ring = function () {
            const attach = function (mob1, mob2) {
                consBB[consBB.length] = Constraint.create({
                    bodyA: mob1,
                    bodyB: mob2,
                    stiffness: attachmentStiffness,
                    damping: 0.03
                });
                Composite.add(engine.world, consBB[consBB.length - 1]);
            }

            const tendrils = 7
            spawn.allowShields = false; 
            for (let i = 0; i < tendrils; ++i) {
                spawn.dodger(this.position.x + 1.5 * radius + i * 40, this.position.y, mobRadius);
                mob[mob.length - 1].tier = 1
                mob[mob.length - 1].isDropPowerUp = false
                targets.push(mob[mob.length - 1]) 

            }
            attach(mob[mob.length - tendrils], this)
            attach(mob[mob.length - tendrils + 1], this)
            spawn.constrain2AdjacentMobs(tendrils, attachmentStiffness, false); 


            for (let i = 0; i < tendrils; ++i) {
                spawn.striker(this.position.x, this.position.y + 1.5 * radius + i * 40, mobRadius);
                mob[mob.length - 1].tier = 1
                mob[mob.length - 1].isDropPowerUp = false
                targets.push(mob[mob.length - 1]) 
            }
            attach(mob[mob.length - tendrils], this)
            attach(mob[mob.length - tendrils + 1], this)
            spawn.constrain2AdjacentMobs(tendrils, attachmentStiffness, false); 

            spawn.allowShields = true;
        }
        me.ring()
    },
    hydraBoss(x, y, radius = 35, tier = 1) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "#378e9dff");
        let me = mob[mob.length - 1];
        me.tier = tier
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.damageReduction = 0.03  
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.tendrilHeads = []
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 60
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };

        targets.push(me) 
        me.friction = 0;
        me.frictionAir = 0.0035;
        me.lookTorque = 0.0000008; 
        me.accelMag = 0.0006
        me.seePlayerFreq = Math.floor((30 + 20 * Math.random()));
        me.seePlayerFreq = 70

        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerCheck();

            this.attraction();
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.ring()
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
            for (let i = 0; i < this.tendrilHeads.length; i++) {
                if (!this.tendrilHeads[i][this.tendrilHeads[i].length - 1].alive) {
                    for (let j = 0, len = this.tendrilHeads[i].length; j < len; j++) {
                        if (this.tendrilHeads[i][j].alive) this.tendrilHeads[i][j].death()
                    }
                }
            }
        };

        me.onDeath = function () {
            this.removeCons();
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i] === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };

        me.transparentArray = []
        me.ring = function (turn = 0.3) {
            const mobRadius = 14 
            const attachmentStiffness = 0.08
            const attach = function (mob1, mob2) {
                consBB[consBB.length] = Constraint.create({
                    bodyA: mob1,
                    bodyB: mob2,
                    stiffness: attachmentStiffness,
                    damping: 0
                });
                Composite.add(engine.world, consBB[consBB.length - 1]);
            }

            this.transparentArray = []
            let angle = 0
            const tendrils = Math.floor(9 + 20 - 20 * this.health)
            let spacing = 24
            spawn.allowShields = false; 
            this.tendrilHeads.push([])
            for (let i = 0; i < tendrils; ++i) {
                angle = angle + turn
                d = i * spacing
                spacing *= 0.9
                const unit = Vector.rotate({ x: 1, y: 0 }, angle)
                const pos = Vector.add(this.position, { x: 1.2 * radius, y: 0 })
                const where = Vector.add(pos, Vector.mult(unit, d))
                if (i === tendrils - 1) {
                    spawn.flutter(where.x, where.y, mobRadius);
                } else {
                    spawn.tendrilBody(where.x, where.y, mobRadius);
                    mob[mob.length - 1].fill = 'transparent'
                    this.transparentArray.push(mob[mob.length - 1])
                }
                this.tendrilHeads[this.tendrilHeads.length - 1].push(mob[mob.length - 1])
                mob[mob.length - 1].tier = this.tier
                targets.push(mob[mob.length - 1]) 
            }
            attach(mob[mob.length - tendrils], this)
            attach(mob[mob.length - tendrils + 1], this)
            spawn.constrain2AdjacentMobs(tendrils, attachmentStiffness, false); 
            spawn.allowShields = true;

            simulation.ephemera.push({ 
                count: 0, 
                array: this.transparentArray,
                do() {
                    if (this.array[this.count]) {
                        this.array[this.count].fill = "#444"
                        this.count++
                        if (this.count > this.array.length - 1) simulation.removeEphemera(this)
                    } else {
                        simulation.removeEphemera(this)
                    }
                },
            })
        }
        me.ring()
    },
    hydraBoss2(x, y, radius = 35) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "rgba(227, 77, 122, 1)");
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.damageReduction = 0.045  

        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.tendrilHeads = []
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 60
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };

        targets.push(me) 
        me.friction = 0;
        me.frictionAir = 0.004;
        me.lookTorque = 0.0000008; 
        me.accelMag = 0.0006
        me.seePlayerFreq = Math.floor((30 + 20 * Math.random()));
        me.seePlayerFreq = 70

        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.seePlayerCheck();

            this.attraction();
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.ring()
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
            for (let i = 0; i < this.tendrilHeads.length; i++) {
                if (!this.tendrilHeads[i][this.tendrilHeads[i].length - 1].alive) {
                    for (let j = 0, len = this.tendrilHeads[i].length; j < len; j++) {
                        if (this.tendrilHeads[i][j].alive) this.tendrilHeads[i][j].death()
                    }
                }
            }
        };

        me.onDeath = function () {
            this.removeCons();
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i] === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };

        me.ring = function (turn = 0.3) {
            const mobRadius = 14 
            const attachmentStiffness = 0.08
            const attach = function (mob1, mob2) {
                consBB[consBB.length] = Constraint.create({
                    bodyA: mob1,
                    bodyB: mob2,
                    stiffness: attachmentStiffness,
                    damping: 0
                });
                Composite.add(engine.world, consBB[consBB.length - 1]);
            }

            this.transparentArray = []
            let angle = 0
            const tendrils = Math.floor(9 + 20 - 20 * this.health)
            let spacing = 24
            spawn.allowShields = false; 
            this.tendrilHeads.push([])
            for (let i = 0; i < tendrils; ++i) {
                angle = angle + turn
                d = i * spacing
                spacing *= 0.9
                const unit = Vector.rotate({ x: 1, y: 0 }, angle)
                const pos = Vector.add(this.position, { x: 1.2 * radius, y: 0 })
                const where = Vector.add(pos, Vector.mult(unit, d))
                if (i === tendrils - 1) {
                    spawn.sliceSpiderLeg(where.x, where.y, mobRadius);
                    mob[mob.length - 1].frictionAir = 0;
                } else {
                    spawn.tendrilBody(where.x, where.y, mobRadius);
                    mob[mob.length - 1].fill = 'transparent'
                    mob[mob.length - 1].frictionAir = 0;
                    this.transparentArray.push(mob[mob.length - 1])
                }
                this.tendrilHeads[this.tendrilHeads.length - 1].push(mob[mob.length - 1])
                mob[mob.length - 1].tier = 1
                targets.push(mob[mob.length - 1]) 
            }
            attach(mob[mob.length - tendrils], this)
            attach(mob[mob.length - tendrils + 1], this)
            spawn.constrain2AdjacentMobs(tendrils, attachmentStiffness, false); 
            spawn.allowShields = true;

            simulation.ephemera.push({ 
                count: 0, 
                array: this.transparentArray,
                do() {
                    if (this.array[this.count]) {
                        this.array[this.count].fill = "#444"
                        this.count++
                        if (this.count > this.array.length - 1) simulation.removeEphemera(this)
                    } else {
                        simulation.removeEphemera(this)
                    }
                },
            })
        }
        me.ring()
    },








    tendrilBody(x, y, tier, radius = 10) {
        mobs.spawn(x, y, 6, radius, "#444");
        let me = mob[mob.length - 1];
        me.tier = tier
        me.collisionFilter.mask = cat.bullet | cat.body | cat.player
        me.damageReduction = 0
        Matter.Body.setDensity(me, 0.001); 

        me.leaveBody = false;
        m.isBadTarget = true;
        me.inertia = Infinity 
        me.isDropPowerUp = false;
        me.frictionAir = 0;
        me.stroke = "#fff"
        me.do = function () {
        };
    },
    tendrilBoss3(x, y, radius = 35, tier = 3) {
        let targets = [] 
        mobs.spawn(x, y, 6, radius, "#378e9dff");
        let me = mob[mob.length - 1];
        me.tier = tier
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.damageReduction = 0.15  

        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 90
                this.isInvulnerable = true
                this.damageReduction = 0

                this.ring()
            }
        };

        targets.push(me) 
        me.friction = 0;
        me.frictionAir = 0.004;
        me.lookTorque = 0.0000008; 
        me.accelMag = 0.0004
        me.seePlayerFreq = Math.floor((30 + 20 * Math.random()));
        me.seePlayerFreq = 70

        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerCheck();

            this.attraction();
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };

        me.onDeath = function () {
            this.removeCons();
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i] === targets[j] && mob[i].alive && mob[i] !== this) mob[i].death()
                }
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };

        const mobRadius = 12 
        const attachmentStiffness = 0.02
        me.ring = function () {
            const attach = function (mob1, mob2) {
                consBB[consBB.length] = Constraint.create({
                    bodyA: mob1,
                    bodyB: mob2,
                    stiffness: attachmentStiffness,
                    damping: 0.03
                });
                Composite.add(engine.world, consBB[consBB.length - 1]);
            }

            const tendrils = 9
            spawn.allowShields = false; 
            for (let i = 0; i < tendrils; ++i) {
                spawn.hopMother(this.position.x + 1.5 * radius + i * 40, this.position.y, mobRadius);
                mob[mob.length - 1].tier = this.tier
                mob[mob.length - 1].isDropPowerUp = false
                targets.push(mob[mob.length - 1]) 
            }
            attach(mob[mob.length - tendrils], this)
            attach(mob[mob.length - tendrils + 1], this)
            spawn.constrain2AdjacentMobs(tendrils, attachmentStiffness, false); 

            for (let i = 0; i < tendrils; ++i) {
                spawn.flutter(this.position.x, this.position.y + 1.5 * radius + i * 40, mobRadius);
                mob[mob.length - 1].tier = this.tier
                mob[mob.length - 1].isDropPowerUp = false
                targets.push(mob[mob.length - 1]) 
            }
            attach(mob[mob.length - tendrils], this)
            attach(mob[mob.length - tendrils + 1], this)
            spawn.constrain2AdjacentMobs(tendrils, attachmentStiffness, false); 

            spawn.allowShields = true;
        }
        me.ring()
    },
    slasherSpiderLeg(x, y, radius = 33 + Math.ceil(Math.random() * 30)) {
        const sides = 6
        mobs.spawn(x, y, sides, radius, "rgb(95, 61, 188)");
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        Matter.Body.setDensity(me, 0.0022); 
        me.accelMag = 0.0007
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.02;
        me.delay = 180
        me.cd = 0;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 900
        me.swordRadiusGrowRateInitial = 1.05
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.03 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        const seeDistance2 = me.swordRadiusMax * me.swordRadiusMax
        me.onDamage = function () { };
        me.do = function () {
            this.checkStatus();
            this.seePlayerByHistory(15);
            this.sword() 
        };
        me.swordWaiting = function () {
            this.attraction();
            if (
                this.seePlayer.recall &&
                this.cd < simulation.cycle &&
                this.distanceToPlayer2() < seeDistance2 &&
                Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
            ) {
                let dist = Infinity
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                    if (D < dist) {
                        dist = D
                        this.swordVertex = i
                    }
                }
                this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
                this.sword = this.swordGrow
                this.cycle = 0
                this.swordRadius = this.swordRadiusInitial
                const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
                const playerVector = Vector.sub(this.position, m.pos)
                const cross = Matter.Vector.cross(laserStartVector, playerVector)
                this.torque = 0.00002 * this.inertia * (cross > 0 ? 1 : -1)
            }
        }
        me.sword = me.swordWaiting 
        me.swordGrow = function () {
            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = this.swordWaiting
                this.swordRadius = 0
                this.cd = simulation.cycle + this.delay;
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(100,100,255,0.1)"; 
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgba(100,100,255,0.5)"; 
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    sniperSpiderLeg(x, y, radius = 35 + Math.ceil(Math.random() * 30)) {
        mobs.spawn(x, y, 3, radius, "#446"); 
        let me = mob[mob.length - 1];
        me.tier = 3
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.isVerticesChange = true
        me.frictionStatic = 0;
        me.friction = 0;
        me.isNotCloaked = false; 
        me.isBadTarget = true;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 

        Matter.Body.setDensity(me, 0.002); 
        me.damageReduction = 0.1

        me.memory = 60 
        me.fireFreq = 0.01 + Math.random() * 0.002 
        me.noseLength = 0;
        me.fireAngle = 0;
        me.accelMag = 0.0009 * simulation.accelScale;
        me.frictionAir = 0.05;
        me.torque = 0.00012 * me.inertia;
        me.fireDir = { x: 0, y: 0 };
        me.onDeath = function () { 
        }
        me.do = function () {
            this.seePlayerCheck();
            this.checkStatus();

            const setNoseShape = () => {
                const mag = this.radius + this.radius * this.noseLength;
                this.vertices[1].x = this.position.x + Math.cos(this.angle) * mag;
                this.vertices[1].y = this.position.y + Math.sin(this.angle) * mag;
            };
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                }
                const angle = this.angle + Math.PI / 2;
                const dot = Vector.dot({ x: Math.cos(angle), y: Math.sin(angle) }, this.fireDir)
                const threshold = 0.05;
                const noseMaxLength = 2
                if (dot > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (dot < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                } else if (this.noseLength > noseMaxLength && dot > -0.2 && dot < 0.2) {
                    spawn.sniperBullet(this.vertices[1].x, this.vertices[1].y, 7 + Math.ceil(this.radius / 15), 5);
                    const v = 14 + Math.floor(5 * Math.random())
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + this.fireDir.x * v + Math.random(),
                        y: this.velocity.y + this.fireDir.y * v + Math.random()
                    });
                    this.noseLength = 0;
                    this.force.x -= 0.004 * this.fireDir.x * this.mass;
                    this.force.y -= 0.004 * this.fireDir.y * this.mass;
                }
                if (this.noseLength < noseMaxLength) this.noseLength += this.fireFreq;
                setNoseShape();
            } else if (this.noseLength > 0.1) {
                this.noseLength -= this.fireFreq / 2;
                setNoseShape();
            }
        };
    },
    sliceSpiderLeg(x, y, radius = 12 + Math.ceil(Math.random() * 15)) {
        const sides = 5
        mobs.spawn(x, y, sides, radius, "rgba(182, 99, 124, 1)");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.isDropPowerUp = false
        me.accelMag = 0.00015;
        me.frictionStatic = 0;
        me.friction = 0;
        me.restitution = 1
        me.delay = 50 + Math.floor(20 * Math.random())
        me.cd = Infinity;
        me.cycle = 0;
        me.swordVertex = 1
        me.isDropPowerUp = false
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 580
        me.swordRadiusGrowRateInitial = 1.1
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.02 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5

        Matter.Body.setDensity(me, 0.002); 
        me.damageReduction = 0.06

        me.onDamage = function () {
            this.cd = simulation.cycle + this.delay * 2;
        };
        me.onHit = function () {
            this.accelMag = 0.0004
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, -0.9)) 
        };
        me.do = function () {
            if (!(simulation.cycle % this.seePlayerFreq)) { 
                if (
                    this.distanceToPlayer2() < this.seeAtDistance2 &&
                    Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                    !m.isCloak
                ) {
                    this.foundPlayer();
                    if (this.cd === Infinity) this.cd = simulation.cycle + this.delay * 0.7;
                } else if (this.seePlayer.recall) {
                    this.lostPlayer();
                    this.cd = Infinity
                }
            }
            this.checkStatus();
            if (this.distanceToPlayer() < 500) {
                this.accelMag = 0.0015 
                if (!this.isSlashing && m.immuneCycle < m.cycle && Matter.Query.ray(map, this.position, m.pos).length === 0) this.sword = this.swordWaiting
            } else {
                this.accelMag = 0.0004
            }
            this.attraction();
            this.sword() 
        };
        me.swordWaiting = function () {
            this.cd = simulation.cycle + 74;
            let dist = 0
            for (let i = 0, len = this.vertices.length; i < len; i++) {
                const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                if (D > dist) {
                    dist = D
                    this.swordVertex = i
                }
            }
            this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
            this.sword = this.swordGrow
            this.isSlashing = true
            this.cycle = 0
            this.swordRadius = this.swordRadiusInitial

            Matter.Body.setAngularVelocity(this, 0)
            const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
            const playerVector = Vector.sub(this.position, m.pos)
            const cross = Matter.Vector.cross(laserStartVector, playerVector)
            this.torque = 0.0003 * this.inertia * (cross > 0 ? 1 : -1)
        }
        me.sword = () => { } 
        me.swordGrow = function () {
            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.98))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = () => { }
                this.isSlashing = false
                this.swordRadius = 0
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(255, 0, 76, 0.1)";
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgb(255, 0, 77)";
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    mantisBoss(x, y, radius = 35, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 5, radius, "#6ba");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.babyList = [] 
        Matter.Body.setDensity(me, 0.0015); 
        me.damageReduction = 0.14  
        me.isBoss = true;

        me.friction = 0;
        me.frictionAir = 0.006;
        me.g = 0.0002; 
        me.seePlayerFreq = 31;
        const springStiffness = 0.00003; 
        const springDampening = 0.0002;
        me.springTarget = { x: me.position.x, y: me.position.y };
        const len = cons.length;
        cons[len] = Constraint.create({
            pointA: me.springTarget,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len].length = 100 + 1.5 * radius;
        me.cons = cons[len];
        me.springTarget2 = { x: me.position.x, y: me.position.y };
        const len2 = cons.length;
        cons[len2] = Constraint.create({
            pointA: me.springTarget2,
            bodyB: me,
            stiffness: springStiffness,
            damping: springDampening,
            length: 0
        });
        Composite.add(engine.world, cons[cons.length - 1]);
        cons[len2].length = 100 + 1.5 * radius;
        me.cons2 = cons[len2];
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.invulnerabilityCountDown = 0
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.checkStatus();
            this.gravity();
            ctx.beginPath();
            ctx.arc(this.cons.pointA.x, this.cons.pointA.y, 6, 0, 2 * Math.PI);
            ctx.arc(this.cons2.pointA.x, this.cons2.pointA.y, 6, 0, 2 * Math.PI);
            ctx.fillStyle = "#222";
            ctx.fill();
            this.seePlayerByHistory()
            this.invulnerabilityCountDown--
            if (this.isInvulnerable) {
                if (this.invulnerabilityCountDown > 90 || this.invulnerabilityCountDown % 20 > 10) {
                    ctx.beginPath();
                    let vertices = this.vertices;
                    ctx.moveTo(vertices[0].x, vertices[0].y);
                    for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                    ctx.lineTo(vertices[0].x, vertices[0].y);
                    for (let i = 0; i < this.babyList.length; i++) {
                        if (this.babyList[i].alive) {
                            let vertices = this.babyList[i].vertices;
                            ctx.moveTo(vertices[0].x, vertices[0].y);
                            for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                            ctx.lineTo(vertices[0].x, vertices[0].y);
                        }
                    }
                    ctx.lineWidth = 3 + 0.2 * Math.min(this.invulnerabilityCountDown, 90) + 5 * Math.random()
                    ctx.strokeStyle = `rgba(255,255,255,${0.4 + 0.4 * Math.random()})`;
                    ctx.stroke();
                }
                if (this.invulnerabilityCountDown < 0) {
                    this.invulnerabilityCountDown = 110
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    for (let i = 0; i < this.babyList.length; i++) {
                        if (this.babyList[i].alive) {
                            this.babyList[i].isInvulnerable = false
                            this.babyList[i].damageReduction = this.startingDamageReduction
                        }
                    }
                }
            } else if (this.invulnerabilityCountDown < 0) {
                this.invulnerabilityCountDown = 240 + 5 * simulation.difficulty
                this.isInvulnerable = true
                if (this.damageReduction) this.startingDamageReduction = this.damageReduction
                this.damageReduction = 0
                for (let i = 0; i < this.babyList.length; i++) {
                    if (this.babyList[i].alive) {
                        this.babyList[i].isInvulnerable = true
                        this.babyList[i].damageReduction = 0
                    }
                }
            }
            const stepRange = 700
            if (this.seePlayer.recall && Matter.Query.ray(map, this.position, this.seePlayer.position).length === 0) {
                if (!(simulation.cycle % (this.seePlayerFreq * 2))) {
                    const unit = Vector.normalise(Vector.sub(this.seePlayer.position, this.position))
                    const goal = Vector.add(this.position, Vector.mult(unit, stepRange))
                    this.springTarget.x = goal.x;
                    this.springTarget.y = goal.y;
                    this.cons.length = -200;
                    this.cons2.length = 100 + 1.5 * this.radius;
                } else if (!(simulation.cycle % this.seePlayerFreq)) {
                    const unit = Vector.normalise(Vector.sub(this.seePlayer.position, this.position))
                    const goal = Vector.add(this.position, Vector.mult(unit, stepRange))
                    this.springTarget2.x = goal.x;
                    this.springTarget2.y = goal.y;
                    this.cons.length = 100 + 1.5 * this.radius;
                    this.cons2.length = -200;
                }
            } else {
                this.torque = this.lookTorque * this.inertia;
                if (!(simulation.cycle % (this.seePlayerFreq))) {
                    best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const seeRange = 3000;
                    const look = { x: this.position.x + seeRange * Math.cos(this.angle), y: this.position.y + seeRange * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, [map]);
                    if (best.dist2 != Infinity) {
                        this.springTarget.x = best.x;
                        this.springTarget.y = best.y;
                        this.cons.length = 100 + 1.5 * this.radius;
                        this.cons2.length = 100 + 1.5 * this.radius;
                    }
                }
            }
        };
        me.onDeath = function () {
            this.removeCons();
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let i = 0; i < this.babyList.length; i++) {
                if (this.babyList[i].alive) {
                    this.babyList[i].collisionFilter.mask = cat.map | cat.bullet | cat.player
                    this.babyList[i].isInvulnerable = false
                    this.babyList[i].damageReduction = this.startingDamageReduction
                    this.babyList[i].collisionFilter.mask = cat.bullet | cat.player | cat.map | cat.body
                }
            }
        };
        const sideLength = 80 
        const nodes = 3
        const angle = 2 * Math.PI / nodes
        spawn.allowShields = false; 
        for (let i = 0; i < nodes; ++i) {
            spawn.striker(x + sideLength * Math.sin(i * angle), y + sideLength * Math.cos(i * angle), 20, 12);
            const babyMob = mob[mob.length - 1]
            me.babyList.push(babyMob)
            babyMob.fill = "rgb(68, 102, 119)"
            babyMob.isBoss = true;
            babyMob.damageReduction = this.startingDamageReduction * 0.8
            babyMob.collisionFilter.mask = cat.bullet | cat.player 
            babyMob.delay = 60 + 55 * simulation.CDScale + Math.floor(Math.random() * 20);
            babyMob.strikeRange = 400
            babyMob.onHit = function () {
                this.cd = simulation.cycle + this.delay;
                if (b.inventory.length) {
                    let isRemovedAmmo = false
                    const numRemoved = 3
                    for (let j = 0; j < numRemoved; j++) {
                        for (let i = 0; i < b.inventory.length; i++) {
                            const gun = b.guns[b.inventory[i]]
                            if (gun.ammo > 0 && gun.ammo !== Infinity) {
                                gun.ammo -= Math.ceil((Math.random() + Math.random()) * gun.ammoPack)
                                if (gun.ammo < 0) gun.ammo = 0
                                isRemovedAmmo = true
                            }
                        }
                    }
                    if (isRemovedAmmo) {
                        simulation.updateGunHUD();
                        for (let j = 0; j < numRemoved; j++) powerUps.directSpawn(this.position.x + 10 * Math.random(), this.position.y + 10 * Math.random(), "ammo");
                        powerUps.ejectGraphic();
                    }
                }
            };
        }
        const stiffness = 0.01
        const damping = 0.1
        for (let i = 1; i < nodes; ++i) { 
            consBB[consBB.length] = Constraint.create({
                bodyA: mob[mob.length - i],
                bodyB: mob[mob.length - i - 1],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        consBB[consBB.length] = Constraint.create({
            bodyA: mob[mob.length - 1],
            bodyB: mob[mob.length - nodes],
            stiffness: stiffness,
            damping: damping
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
        for (let i = 0; i < nodes; ++i) { 
            consBB[consBB.length] = Constraint.create({
                bodyA: me,
                bodyB: mob[mob.length - i - 1],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        spawn.allowShields = true;
    },
    beamer(x, y, radius = 15 + Math.ceil(Math.random() * 15)) {
        mobs.spawn(x, y, 4, radius, "rgb(255,0,190)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.repulsionRange = 73000; 
        me.laserRange = 370;
        me.accelMag = 0.0005 * simulation.accelScale;
        me.frictionStatic = 0;
        me.friction = 0;
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.attraction();
            this.repulsion();
            this.harmZone();
        };
    },
    historyBoss(x, y, radius = 30) {
        mobs.spawn(x, y, 0, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 3
        Matter.Body.setDensity(me, 0.21); 
        me.laserRange = 350;
        me.seeAtDistance2 = 2000000;
        me.isBoss = true;
        me.damageReduction = 0.38  
        me.delayLimit = 60 + Math.floor(30 * Math.random());
        me.followDelay = 600 - Math.floor(90 * Math.random())
        me.stroke = "transparent";
        me.collisionFilter.mask = cat.bullet | cat.body
        me.memory = Infinity
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    ctx.setTransform(1, 0, 0, 1, 0, 0); 
                    if (simulation.isInvertedVertical) { 
                        ctx.translate(0, canvas.height); 
                        ctx.scale(1, -1); 
                        simulation.isInvertedVertical = true
                        mouseMove.reset()
                    }
                    ctx.setLineDash([]) 
                })
            })
        };
        me.warpIntensity = 0
        me.awake = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.checkStatus();

            const unit = Vector.normalise(Vector.sub(m.pos, this.position))
            const eye = Vector.add(Vector.mult(unit, 15), this.position)
            ctx.beginPath();
            ctx.arc(eye.x, eye.y, 4, 0, 2 * Math.PI);
            ctx.moveTo(this.position.x + 20 * unit.x, this.position.y + 20 * unit.y);
            ctx.lineTo(this.position.x + 30 * unit.x, this.position.y + 30 * unit.y);
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.setLineDash([125 * Math.random(), 125 * Math.random()]); 
            if (this.distanceToPlayer() < this.laserRange) {
                if (m.immuneCycle < m.cycle) {
                    if (m.energy > 0.002) {
                        m.energy -= 0.004
                    } else {
                        m.takeDamage(0.0004 * this.damageScale())
                    }
                }
                this.warpIntensity += 0.0004
                requestAnimationFrame(() => {
                    if (!simulation.paused && m.alive) {
                        ctx.transform(1, this.warpIntensity * (Math.random() - 0.5), this.warpIntensity * (Math.random() - 0.5), 1, 0, 0); 
                    }
                })
                ctx.beginPath();
                ctx.moveTo(eye.x, eye.y);
                ctx.lineTo(m.pos.x, m.pos.y);
                ctx.lineTo(m.pos.x + (Math.random() - 0.5) * 3000, m.pos.y + (Math.random() - 0.5) * 3000);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "rgb(150,0,255)";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(m.pos.x, m.pos.y, 40, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(150,0,255,0.1)";
                ctx.fill();
            } else {
                this.warpIntensity = 0;
            }

            const rotation = simulation.cycle * 0.015
            const phase = simulation.cycle * 0.021
            ctx.lineWidth = 1;
            ctx.fillStyle = "rgba(150,0,255,0.05)"
            ctx.strokeStyle = "#70f"
            for (let i = 0, len = 6; i < len; i++) {
                ctx.beginPath();
                ctx.ellipse(this.position.x, this.position.y, this.laserRange * Math.abs(Math.sin(phase + i / len * Math.PI)), this.laserRange, rotation, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }

            if (!this.isStunned && !this.isSlowed) {
                if (this.followDelay > this.delayLimit) this.followDelay -= 0.15;
                let history = m.history[(simulation.cycle - Math.floor(this.followDelay)) % 600]
                Matter.Body.setPosition(this, { x: history.position.x, y: history.position.y - history.yOff + 24.2859 }) 
            }
        }
        me.do = function () {
            if (this.seePlayer.recall || (!(simulation.cycle % this.seePlayerFreq) && this.distanceToPlayer2() < this.seeAtDistance2 && !m.isCloak)) {
                setTimeout(() => {
                    this.do = this.awake
                    this.stroke = "rgba(205,0,255,0.5)"
                    this.fill = "rgba(205,0,255,0.1)"
                    this.seePlayer.yes = true
                    if (!this.isStunned && !this.isSlowed) {
                        if (this.followDelay > this.delayLimit) this.followDelay -= 0.15;
                        let history = m.history[(simulation.cycle - Math.floor(this.followDelay)) % 600]
                        Matter.Body.setPosition(this, { x: history.position.x, y: history.position.y - history.yOff + 24.2859 }) 
                    }
                }, 2000);
            }
            this.checkStatus();
        };
    },
    focuser(x, y, radius = 30 + Math.ceil(Math.random() * 10)) {
        radius = Math.ceil(radius * 0.7);
        mobs.spawn(x, y, 4, radius, "rgb(0,0,255)");
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.setDensity(me, 0.003); 
        me.restitution = 0;
        me.laserPos = me.position; 
        me.repulsionRange = 1200000; 
        me.accelMag = 0.00009 * simulation.accelScale;
        me.frictionStatic = 0;
        me.friction = 0;
        me.onDamage = function () {
            this.laserPos = this.position;
        };
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.attraction();
            const dist2 = this.distanceToPlayer2();
            if (this.seePlayer.yes && dist2 < 4000000) {
                const rangeWidth = 2000; 
                this.laserPos = Vector.add(this.laserPos, Vector.mult(Vector.sub(player.position, this.laserPos), 0.03));
                let targetDist = Vector.magnitude(Vector.sub(this.laserPos, m.pos));
                const r = 12;
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                if (targetDist < r + 16) {
                    targetDist = r + 10;
                    if (m.immuneCycle < m.cycle) {
                        m.takeDamage(0.0003 * this.damageScale());
                        if (m.energy > 0.1) m.energy -= 0.003
                    }
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    ctx.lineTo(m.pos.x, m.pos.y);
                    ctx.lineTo(m.pos.x + (Math.random() - 0.5) * 3000, m.pos.y + (Math.random() - 0.5) * 3000);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "rgb(0,0,255)";
                    ctx.setLineDash([125 * Math.random(), 125 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    ctx.beginPath();
                    ctx.arc(m.pos.x, m.pos.y, 40, 0, 2 * Math.PI);
                    ctx.fillStyle = "rgba(0,0,255,0.1)";
                    ctx.fill();
                } else {
                    const laserWidth = 0.0005;
                    let laserOffR = Vector.rotateAbout(this.laserPos, (targetDist - r) * laserWidth, this.position);
                    let sub = Vector.normalise(Vector.sub(laserOffR, this.position));
                    laserOffR = Vector.add(laserOffR, Vector.mult(sub, rangeWidth));
                    ctx.lineTo(laserOffR.x, laserOffR.y);

                    let laserOffL = Vector.rotateAbout(this.laserPos, (targetDist - r) * -laserWidth, this.position);
                    sub = Vector.normalise(Vector.sub(laserOffL, this.position));
                    laserOffL = Vector.add(laserOffL, Vector.mult(sub, rangeWidth));
                    ctx.lineTo(laserOffL.x, laserOffL.y);
                    ctx.fillStyle = `rgba(0,0,255,${Math.max(0, 0.6 * r / targetDist)})`
                    ctx.fill();
                }
            } else {
                this.laserPos = this.position;
            }
        }
    },
    flutter(x, y, radius = 20 + 6 * Math.random()) {
        mobs.spawn(x, y, 7, radius, '#16576b');
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.setDensity(me, 0.002); 

        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.0007
        me.frictionAir = 0.04;
        me.memory = 240;
        me.restitution = 1;
        me.frictionStatic = 0;
        me.friction = 0;
        me.fireDir = { x: 0, y: 0 }
        spawn.shield(me, x, y);

        me.flapRate = 0.3 + Math.floor(3 * Math.random()) / 10 + 100 * me.accelMag
        me.flapRadius = 75 + radius * 3
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByHistory()
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.force.x += Math.cos(this.angle) * this.accelMag * this.mass
                this.force.y += Math.sin(this.angle) * this.accelMag * this.mass

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                    const mod = (a, n) => {
                        return a - Math.floor(a / n) * n
                    }
                    const sub = Vector.sub(m.pos, this.position) 
                    const diff = mod(Math.atan2(sub.y, sub.x) - this.angle + Math.PI, 2 * Math.PI) - Math.PI
                    if (Math.abs(diff) > 2.8) this.torque += 0.0002 * this.inertia * Math.random();
                }

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.4;
                const turn = 0.000025 * this.inertia
                if (c > threshold) {
                    this.torque += turn;
                } else if (c < -threshold) {
                    this.torque -= turn;
                }

                const flapArc = 0.7 
                ctx.fillStyle = `hsla(${160 + 40 * Math.random()}, 100%, ${25 + 25 * Math.random() * Math.random()}%, 0.2)`; 
                this.wing(this.angle + Math.PI / 2 + flapArc * Math.sin(simulation.cycle * this.flapRate), this.flapRadius)
                this.wing(this.angle - Math.PI / 2 - flapArc * Math.sin(simulation.cycle * this.flapRate), this.flapRadius)
            }
        };
    },
    stinger(x, y, radius = 18 + 4 * Math.random()) {
        const color = '#5bc'
        mobs.spawn(x, y, 7, radius, color);
        let me = mob[mob.length - 1];
        me.tier = 3
        Matter.Body.setDensity(me, 0.0036); 

        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.0022 + 0.0005 * Math.sqrt(simulation.accelScale);
        me.frictionAir = 0.03;
        me.memory = 240;
        me.restitution = 1;
        me.frictionStatic = 0;
        me.friction = 0;
        me.fireDir = { x: 0, y: 0 }
        spawn.shield(me, x, y);

        me.flapRate = 0.06 + 0.03 * Math.random()
        me.flapRadius = 10 + radius * 2
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerByHistory()
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.force.x += Math.cos(this.angle) * this.accelMag * this.mass
                this.force.y += Math.sin(this.angle) * this.accelMag * this.mass

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                    const mod = (a, n) => a - Math.floor(a / n) * n
                    const sub = Vector.sub(m.pos, this.position) 
                    const diff = mod(Math.atan2(sub.y, sub.x) - this.angle + Math.PI, 2 * Math.PI) - Math.PI
                    if (Math.abs(diff) > 2.8) this.torque += 0.0002 * this.inertia * Math.random();
                }

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.4;
                const turn = 0.00002 * this.inertia
                if (c > threshold) {
                    this.torque += turn;
                } else if (c < -threshold) {
                    this.torque -= turn;
                }

                this.frictionAir = 0.11 + 0.09 * Math.sin(simulation.cycle * this.flapRate - Math.PI / 2)

                const flapArc = 0.8 
                const color = `hsla(${160 + 40 * Math.random()}, 100%, ${25 + 25 * Math.random() * Math.random()}%, 0.7)`;
                ctx.fillStyle = color                
                this.wing(this.angle + 2.1 + flapArc * Math.sin(simulation.cycle * this.flapRate), this.flapRadius, 0.5)
                this.wing(this.angle - 2.1 - flapArc * Math.sin(simulation.cycle * this.flapRate), this.flapRadius, 0.5)

                if (this.distanceToPlayer() < 2000) {
                    best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const seeRangeRandom = 400 - 100 * Math.random()
                    const look = { x: this.position.x + seeRangeRandom * Math.cos(this.angle), y: this.position.y + seeRangeRandom * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        const dmg = 0.003 * this.damageScale();
                        m.takeDamage(dmg);
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(best.x, best.y, 5 + dmg * 1500, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    const vertex = 3
                    if (best.dist2 === Infinity) best = look;
                    ctx.beginPath();
                    ctx.moveTo(this.vertices[vertex].x, this.vertices[vertex].y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        };
    },
    stingWinger(x, y, radius = 18 + 4 * Math.random()) {
        const color = 'rgb(0, 76, 89)'
        mobs.spawn(x, y, 14, radius, color);
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.005); 
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.accelMag = 0.0017
        me.frictionAir = 0.03;
        me.memory = 240;
        me.restitution = 0.1;
        me.frictionStatic = 0;
        me.friction = 0;
        me.fireDir = { x: 0, y: 0 }
        spawn.shield(me, x, y);

        me.flapRate = 0.06 + 0.03 * Math.random()
        me.flapArc = 0.25 
        me.wingLength = 100
        me.ellipticity = 0.2
        me.angleOff = 0.4

        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.seePlayerByHistory()
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.force.x += Math.cos(this.angle) * this.accelMag * this.mass
                this.force.y += Math.sin(this.angle) * this.accelMag * this.mass

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                    const mod = (a, n) => a - Math.floor(a / n) * n
                    const sub = Vector.sub(m.pos, this.position) 
                    const diff = mod(Math.atan2(sub.y, sub.x) - this.angle + Math.PI, 2 * Math.PI) - Math.PI
                    if (Math.abs(diff) > 2.8) this.torque += 0.0002 * this.inertia * Math.random();
                }

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.4;
                const turn = 0.00002 * this.inertia
                if (c > threshold) {
                    this.torque += turn;
                } else if (c < -threshold) {
                    this.torque -= turn;
                }

                this.frictionAir = 0.08 + 0.09 * Math.sin(simulation.cycle * this.flapRate - Math.PI / 2)

                let a = Math.atan2(this.velocity.y, this.velocity.x)
                const color = `hsla(${160 + 40 * Math.random()}, 100%, ${25 + 25 * Math.random() * Math.random()}%, 0.9)`;
                ctx.fillStyle = color
                this.wing(a + Math.PI / 2 + this.angleOff + this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity, 0.002)
                this.wing(a - Math.PI / 2 - this.angleOff - this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity, 0.002)
                this.wing(a - Math.PI / 2 + this.angleOff + this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity, 0.002)
                this.wing(a + Math.PI / 2 - this.angleOff - this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity, 0.002)
                if (this.distanceToPlayer() < 3000) {
                    best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const seeRangeRandom = 450 - 50 * Math.random()
                    const look = { x: this.position.x + seeRangeRandom * Math.cos(this.angle), y: this.position.y + seeRangeRandom * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        const dmg = 0.005 * this.damageScale();
                        m.takeDamage(dmg);
                        ctx.beginPath();
                        ctx.arc(best.x, best.y, 5 + dmg * 1500, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    const vertex = 7
                    if (best.dist2 === Infinity) best = look;
                    ctx.beginPath();
                    ctx.moveTo(this.vertices[vertex].x, this.vertices[vertex].y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 4;
                    ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    if (!(simulation.cycle % 30)) {
                        const sub = Vector.sub(best, this.position)
                        const mag = Vector.magnitude(sub)
                        const shaft = Vector.mult(Vector.normalise(sub), mag * Math.random())
                        const shaft2 = Vector.add(shaft, this.position)
                        simulation.drawList.push({
                            x: shaft2.x,
                            y: shaft2.y,
                            radius: 5,
                            color: color,
                            time: 20
                        });
                    }
                }
            }
        };
    },
    beetleBoss(x, y, radius = 50) {
        mobs.spawn(x, y, 7, radius, '#16576b');
        let me = mob[mob.length - 1];
        me.tier = 3
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.005); 
        me.damageReduction = 0.08
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.flapRate = 0.2
        me.wingSize = 0
        me.wingGoal = 250 + simulation.difficulty
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.00045 + 0.0005 * Math.sqrt(simulation.accelScale);
        me.frictionAir = 0.05;
        me.seePlayerFreq = 13
        me.memory = 420;
        me.restitution = 1;
        me.frictionStatic = 0;
        me.friction = 0;
        me.fireDir = { x: 0, y: 0 }
        spawn.shield(me, x, y);
        me.pushAway = function (magX = 0.13, magY = 0.05) {
            for (let i = 0, len = body.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(body[i].position, this.position)) < 4000000) { 
                    body[i].force.x += magX * body[i].mass * (body[i].position.x > this.position.x ? 1 : -1)
                    body[i].force.y -= magY * body[i].mass
                }
            }
            for (let i = 0, len = bullet.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(bullet[i].position, this.position)) < 4000000) { 
                    bullet[i].force.x += magX * bullet[i].mass * (bullet[i].position.x > this.position.x ? 1 : -1)
                    bullet[i].force.y -= magY * bullet[i].mass
                }
            }
            for (let i = 0, len = powerUp.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(powerUp[i].position, this.position)) < 4000000) { 
                    powerUp[i].force.x += magX * powerUp[i].mass * (powerUp[i].position.x > this.position.x ? 1 : -1)
                    powerUp[i].force.y -= magY * powerUp[i].mass
                }
            }
            if (Vector.magnitudeSquared(Vector.sub(player.position, this.position)) < 4000000) { 
                player.force.x += magX * player.mass * (player.position.x > this.position.x ? 1 : -1)
                player.force.y -= magY * player.mass
            }
        }
        me.babies = function (len) {
            const delay = Math.max(3, Math.floor(15 - len / 2))
            let i = 0
            let spawnFlutters = () => {
                if (i < len) {
                    if (!(simulation.cycle % delay) && !simulation.paused && !simulation.isChoosing && m.alive) {
                        const unit = Vector.normalise(Vector.sub(player.position, this.position))
                        const velocity = Vector.mult(unit, 10 + 10 * Math.random())
                        const where = Vector.add(this.position, Vector.mult(unit, radius * 1.2))
                        spawn.allowShields = false
                        spawn.flutter(where.x, where.y, Math.floor(7 + 8 * Math.random()))
                        const who = mob[mob.length - 1]
                        Matter.Body.setDensity(who, 0.01); 
                        Matter.Body.setVelocity(who, velocity);
                        Matter.Body.setAngle(who, Math.atan2(velocity.y, velocity.x))

                        this.alertNearByMobs();
                        spawn.allowShields = true
                        i++
                    }
                    requestAnimationFrame(spawnFlutters);
                }
            }
            requestAnimationFrame(spawnFlutters);
        }
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            me.babies(0.05 * simulation.difficulty + 1)
        };
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 90 + Math.floor(30 * Math.random())
                this.isInvulnerable = true
                this.damageReduction = 0
                this.frictionAir = 0
                this.wingGoal = 0
                this.wingSize = 0
                this.flapRate += 0.13
                this.accelMag *= 1.4
            }
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerByHistory(50)
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.frictionAir = 0.05
                    this.wingGoal = 250
                    this.pushAway(Math.sqrt(this.flapRate) * 0.13, Math.sqrt(this.flapRate) * 0.06) 
                    me.babies(0.05 * simulation.difficulty + 1)
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else if (this.seePlayer.recall) {
                this.force.x += Math.cos(this.angle) * this.accelMag * this.mass
                this.force.y += Math.sin(this.angle) * this.accelMag * this.mass

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                    const mod = (a, n) => {
                        return a - Math.floor(a / n) * n
                    }
                    const sub = Vector.sub(m.pos, this.position)
                    const diff = mod(Math.atan2(sub.y, sub.x) - this.angle + Math.PI, 2 * Math.PI) - Math.PI
                    if (Math.abs(diff) > 2.8) this.torque += 0.0002 * this.inertia * Math.random();
                }

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.4;
                const turn = 0.00003 * this.inertia
                if (c > threshold) {
                    this.torque += turn;
                } else if (c < -threshold) {
                    this.torque -= turn;
                }
                const flapArc = 0.7 
                this.wingSize = 0.97 * this.wingSize + 0.03 * this.wingGoal
                ctx.fillStyle = this.fill = `hsla(${160 + 40 * Math.random()}, 100%, ${25 + 25 * Math.random() * Math.random()}%, 0.9)`; 
                this.wing(this.angle + Math.PI / 2 + flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingSize, 0.5, 0.006)
                this.wing(this.angle - Math.PI / 2 - flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingSize, 0.5, 0.006)
            } else {
                this.wingSize = 0.96 * this.wingSize + 0 
            }
        };
    },
    stagBeetleBoss(x, y, radius = 60) {
        const color = '#000'
        mobs.spawn(x, y, 15, radius, '#000');
        let me = mob[mob.length - 1];
        me.tier = 4
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.006); 
        me.damageReduction = 0.08
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.flapRate = 0.4
        me.wingSize = 0
        me.wingGoal = 150
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.accelMag = 0.0014
        me.frictionAir = 0.02;
        me.seePlayerFreq = 13
        me.memory = 420;
        me.restitution = 1;
        me.frictionStatic = 0;
        me.friction = 0;
        me.fireDir = { x: 0, y: 0 }
        me.pushAway = function (magX = 0.13, magY = 0.05) {
            for (let i = 0, len = body.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(body[i].position, this.position)) < 4000000) { 
                    body[i].force.x += magX * body[i].mass * (body[i].position.x > this.position.x ? 1 : -1)
                    body[i].force.y -= magY * body[i].mass
                }
            }
            for (let i = 0, len = bullet.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(bullet[i].position, this.position)) < 4000000) { 
                    bullet[i].force.x += magX * bullet[i].mass * (bullet[i].position.x > this.position.x ? 1 : -1)
                    bullet[i].force.y -= magY * bullet[i].mass
                }
            }
            for (let i = 0, len = powerUp.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(powerUp[i].position, this.position)) < 4000000) { 
                    powerUp[i].force.x += magX * powerUp[i].mass * (powerUp[i].position.x > this.position.x ? 1 : -1)
                    powerUp[i].force.y -= magY * powerUp[i].mass
                }
            }
            if (Vector.magnitudeSquared(Vector.sub(player.position, this.position)) < 4000000) { 
                player.force.x += magX * player.mass * (player.position.x > this.position.x ? 1 : -1)
                player.force.y -= magY * player.mass
            }
        }
        me.babies = function (len) {
            const delay = Math.max(3, Math.floor(15 - len / 2))
            let i = 0
            let spawnBabies = () => {
                if (i < len) {
                    if (!(simulation.cycle % delay) && !simulation.paused && !simulation.isChoosing && m.alive) {
                        const unit = Vector.normalise(Vector.sub(player.position, this.position))
                        const velocity = Vector.mult(unit, 10 + 10 * Math.random())
                        const where = Vector.add(this.position, Vector.mult(unit, radius * 1.2))
                        spawn.allowShields = false
                        spawn.stinger(where.x, where.y, Math.floor(7 + 8 * Math.random()))
                        const who = mob[mob.length - 1]
                        Matter.Body.setDensity(who, 0.01); 
                        Matter.Body.setVelocity(who, velocity);
                        Matter.Body.setAngle(who, Math.atan2(velocity.y, velocity.x))

                        this.alertNearByMobs();
                        spawn.allowShields = true
                        i++
                    }
                    requestAnimationFrame(spawnBabies);
                }
            }
            requestAnimationFrame(spawnBabies);
        }
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            me.babies(0.05 * simulation.difficulty + 1)
        };
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 40
                this.isInvulnerable = true
                this.damageReduction = 0
                this.frictionAir = 0
                this.wingGoal = 0
                this.wingSize = 0
                this.flapRate += 0.1
                this.accelMag *= 1.2
            }
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.seePlayerByHistory(50)
            this.checkStatus();
            ctx.fillStyle = `hsla(${160 + 40 * Math.random()}, 100%, ${25 + 25 * Math.random() * Math.random()}%, 0.7)`;

            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.frictionAir = 0.05
                    this.wingGoal = 150
                    this.pushAway(Math.sqrt(this.flapRate) * 0.13, Math.sqrt(this.flapRate) * 0.06) 
                    me.babies(0.05 * simulation.difficulty + 1)
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else if (this.seePlayer.recall) {
                this.force.x += Math.cos(this.angle) * this.accelMag * this.mass
                this.force.y += Math.sin(this.angle) * this.accelMag * this.mass

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                    const mod = (a, n) => {
                        return a - Math.floor(a / n) * n
                    }
                    const sub = Vector.sub(m.pos, this.position)
                    const diff = mod(Math.atan2(sub.y, sub.x) - this.angle + Math.PI, 2 * Math.PI) - Math.PI
                    if (Math.abs(diff) > 2.8) this.torque += 0.0002 * this.inertia * Math.random();
                }

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.1;
                const turn = 0.000005 * this.inertia
                if (c > threshold) {
                    this.torque += turn;
                } else if (c < -threshold) {
                    this.torque -= turn;
                }
                const flapArc = 0.7 
                this.wingSize = 0.97 * this.wingSize + 0.03 * this.wingGoal
                this.wing(this.angle + Math.PI / 2 + flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingSize, 0.5, 0.02)
                this.wing(this.angle - Math.PI / 2 - flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingSize, 0.5, 0.02)
            } else {
                this.wingSize = 0.96 * this.wingSize + 0 
            }

            if (this.distanceToPlayer() < 3000) {
                best = {
                    x: null,
                    y: null,
                    dist2: Infinity,
                    who: null,
                    v1: null,
                    v2: null
                };
                const seeRangeRandom = 500 - 50 * Math.random()
                const look = { x: this.position.x + seeRangeRandom * Math.cos(this.angle), y: this.position.y + seeRangeRandom * Math.sin(this.angle) };
                best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                    const dmg = 0.004 * this.damageScale();
                    m.takeDamage(dmg);
                    ctx.beginPath();
                    ctx.arc(best.x, best.y, 5 + dmg * 1500, 0, 2 * Math.PI);
                    ctx.fill();
                }
                const vertex = 7
                if (best.dist2 === Infinity) best = look;
                ctx.beginPath();
                ctx.moveTo(this.vertices[vertex].x, this.vertices[vertex].y);
                ctx.lineTo(best.x, best.y);
                ctx.strokeStyle = color;
                ctx.lineWidth = 4;
                ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                ctx.stroke();
                ctx.setLineDash([]);

                if (!(simulation.cycle % 10)) {
                    const sub = Vector.sub(best, this.position)
                    const mag = Vector.magnitude(sub)
                    const shaft = Vector.mult(Vector.normalise(sub), mag * Math.random())
                    const shaft2 = Vector.add(shaft, this.position)
                    simulation.drawList.push({
                        x: shaft2.x,
                        y: shaft2.y,
                        radius: 5,
                        color: color,
                        time: 20
                    });
                }
            }

            ctx.beginPath();
            const unit = { x: Math.cos(this.angle), y: Math.sin(this.angle) }
            const spot = Vector.add(this.position, Vector.mult(unit, 30))
            ctx.arc(spot.x, spot.y, 10, 0, 2 * Math.PI);
            ctx.fill();
        };
    },
    laserTargetingBoss(x, y, radius = 80) {
        const color = "#07f"
        mobs.spawn(x, y, 3, radius, color);
        let me = mob[mob.length - 1];
        me.tier = 2
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.004); 
        me.damageReduction = 0.12

        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.00018 * Math.sqrt(simulation.accelScale);
        me.seePlayerFreq = 30
        me.memory = 420;
        me.restitution = 1;
        me.frictionAir = 0.01;
        me.frictionStatic = 0;
        me.friction = 0;
        me.lookTorque = 0.000001 * (Math.random() > 0.5 ? -1 : 1);
        me.fireDir = { x: 0, y: 0 }
        spawn.shield(me, x, y, 1);
        for (let i = 0, len = 2 + 0.3 * Math.sqrt(simulation.difficulty); i < len; i++) spawn.spawnOrbitals(me, radius + 40 + 10 * i, 1);
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.laserInterval = 100
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.attraction();

            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.4;
                if (c > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (c < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                }
                if (simulation.cycle % this.laserInterval > this.laserInterval / 2) {
                    const seeRange = 8000;
                    best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const look = { x: this.position.x + seeRange * Math.cos(this.angle), y: this.position.y + seeRange * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        const dmg = 0.006 * this.damageScale();
                        m.takeDamage(dmg);
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(best.x, best.y, dmg * 1500, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    if (best.dist2 === Infinity) best = look;
                    ctx.beginPath();
                    ctx.moveTo(this.vertices[1].x, this.vertices[1].y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 3;
                    ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    ctx.beginPath();
                    ctx.arc(this.vertices[1].x, this.vertices[1].y, 1 + 0.3 * (this.laserInterval - simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                    ctx.fillStyle = color;
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(this.vertices[1].x, this.vertices[1].y, 1 + 0.3 * (simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                    ctx.fillStyle = color;
                    ctx.fill();
                }
            }
        };
    },
    laserBombingBoss(x, y, radius = 80) {
        mobs.spawn(x, y, 3, radius, "rgb(0,235,255)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.isBoss = true;
        me.damageReduction = 0.27
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.00055 * Math.sqrt(simulation.accelScale);
        me.seePlayerFreq = 30;
        me.memory = 420;
        me.restitution = 1;
        me.frictionAir = 0.05;
        me.frictionStatic = 0;
        me.friction = 0;
        me.lookTorque = 0.0000055 * (Math.random() > 0.5 ? -1 : 1) * (1 + 0.1 * Math.sqrt(simulation.difficulty))
        me.fireDir = { x: 0, y: 0 }
        Matter.Body.setDensity(me, 0.01); 
        spawn.shield(me, x, y, 1);
        spawn.spawnOrbitals(me, radius + 200 + 300 * Math.random())
        me.onHit = function () { };
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.targetingCount = 0;
        me.targetingTime = 60 - Math.min(58, 3 * simulation.difficulty)
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.attraction();

            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                const angle = this.angle + Math.PI / 2;
                const d = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                const threshold = 0.02;
                if (d > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (d < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                }

                const seeRange = 8000;
                best = {
                    x: null,
                    y: null,
                    dist2: Infinity,
                    who: null,
                    v1: null,
                    v2: null
                };
                const look = { x: this.position.x + seeRange * Math.cos(this.angle), y: this.position.y + seeRange * Math.sin(this.angle) };
                best = vertexCollision(this.position, look, m.isCloak ? [map] : [map, [playerBody, playerHead]]);

                if (best.who === playerBody || best.who === playerHead) {
                    this.targetingCount++
                    if (this.targetingCount > this.targetingTime) {
                        this.targetingCount -= 10;
                        const sub = Vector.sub(player.position, this.position)
                        const dist = Vector.magnitude(sub)
                        const speed = Math.min(55, 5 + 20 * simulation.accelScale)
                        const velocity = Vector.mult(Vector.normalise(sub), speed)
                        spawn.grenade(this.vertices[1].x, this.vertices[1].y, this.tier, dist / speed, Math.min(550, 250 + simulation.difficulty * 3), 6);
                        Matter.Body.setVelocity(mob[mob.length - 1], velocity);
                    }
                } else if (this.targetingCount > 0) {
                    this.targetingCount--
                }
                if (best.dist2 === Infinity) best = look;
                ctx.beginPath();
                ctx.moveTo(this.vertices[1].x, this.vertices[1].y);
                ctx.lineTo(best.x, best.y);
                ctx.strokeStyle = "rgba(0,235,255,1)";
                ctx.lineWidth = 3
                ctx.stroke();
                if (this.targetingCount / this.targetingTime > 0.33) {
                    ctx.strokeStyle = "rgba(0,235,255,0.45)";
                    ctx.lineWidth = 10
                    ctx.stroke();
                    if (this.targetingCount / this.targetingTime > 0.66) {
                        ctx.strokeStyle = "rgba(0,235,255,0.25)";
                        ctx.lineWidth = 30
                        ctx.stroke();
                    }
                }

            }
        };
    },
    blinkBoss(x, y) {
        mobs.spawn(x, y, 5, 50, "rgb(0,235,255)"); 
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.rotate(me, Math.PI * 0.1);
        Matter.Body.setDensity(me, 0.002); 
        me.isBoss = true;
        me.damageReduction = 0.038

        me.frictionStatic = 0;
        me.friction = 0;
        me.memory = 240
        me.seePlayerFreq = 55
        me.blinkRange = 250
        if (0.5 < Math.random()) {
            me.grenadeDelay = 260
            me.blinkRange *= 1.5
        } else {
            me.grenadeDelay = 100
        }
        me.pulseRadius = 1.5 * Math.min(550, 200 + simulation.difficulty * 2)
        me.delay = 55 + 35 * simulation.CDScale;
        me.nextBlinkCycle = me.delay;
        spawn.shield(me, x, y, 1);
        me.onDamage = function () {
        };
        me.onDeath = function () {
            const offAngle = Math.PI * Math.random()
            for (let i = 0, len = 3; i < len; i++) {
                spawn.grenade(this.position.x, this.position.y, this.tier, this.grenadeDelay);
                const who = mob[mob.length - 1]
                const speed = 5 * simulation.accelScale;
                const angle = 2 * Math.PI * i / len + offAngle
                Matter.Body.setVelocity(who, { x: speed * Math.cos(angle), y: speed * Math.sin(angle) });
            }
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.seePlayerByHistory(40)
            if (this.nextBlinkCycle < simulation.cycle && this.seePlayer.yes) { 
                this.nextBlinkCycle = simulation.cycle + this.delay;
                const dist = Vector.sub(this.seePlayer.position, this.position);
                const distMag = Vector.magnitude(dist);
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                if (distMag < this.blinkRange) { 
                    Matter.Body.setPosition(this, this.seePlayer.position);
                } else {
                    Matter.Body.translate(this, Vector.mult(Vector.normalise(dist), this.blinkRange));
                }
                spawn.grenade(this.position.x, this.position.y, this.tier, this.grenadeDelay, this.pulseRadius); 
                ctx.lineTo(this.position.x, this.position.y);
                ctx.lineWidth = this.radius * 2.1;
                ctx.strokeStyle = this.fill; 
                ctx.stroke();
                Matter.Body.setVelocity(this, { x: 0, y: 0 });
                this.torque += (0.00004 + 0.00003 * Math.random()) * this.inertia * (Math.round(Math.random()) * 2 - 1) 
            }
            this.checkStatus();
        };
    },
    snakeBoss(x, y) {
        mobs.spawn(x, y, 0, 15, `rgba(255,0,200)`); 
        let me = mob[mob.length - 1];
        me.tier = 1
        me.stroke = "transparent";
        me.isUnblockable = true;
        Matter.Body.setDensity(me, 0.06); 
        me.isBoss = true;
        me.damageReduction = 0.5
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.history = []
        for (let i = 0; i < 20; i++) {
            me.history.push({ x: me.position.x + i, y: me.position.y })
        }
        me.frictionStatic = 0;
        me.friction = 0;
        me.memory = 900;
        me.seePlayerFreq = 41
        me.delay = 3 + 2 * simulation.CDScale;
        me.nextBlinkCycle = me.delay;
        me.JumpDistance = 0
        me.collisionFilter.mask = cat.bullet | cat.map
        me.powerUpNames = []
        me.redMode = function () {
            this.color = `rgba(255,0,200,`
            this.fill = this.color + '1)'
            this.JumpDistance = 13
            let cycle = () => {
                if (this.radius < 25) {
                    if (m.alive && this.JumpDistance === 20) requestAnimationFrame(cycle);
                    if (!simulation.paused && !simulation.isChoosing) {
                        const scale = 1.01;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                    }
                }
            }
            requestAnimationFrame(cycle);
        }
        me.redMode();
        me.blueMode = function () {
            this.color = `rgba(0,0,255,`
            this.fill = this.color + '1)'
            this.JumpDistance = 30 
            let cycle = () => {
                if (this.radius > 14) {
                    if (m.alive && this.JumpDistance === 37) requestAnimationFrame(cycle);
                    if (!simulation.paused && !simulation.isChoosing) {
                        const scale = 0.96;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                    }
                }
            }
            requestAnimationFrame(cycle);
        }
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 
                this.invulnerableCount = 200
                this.isInvulnerable = true
                this.damageReduction = 0
                if (this.history.length < 200) for (let i = 0; i < 9; i++) this.history.unshift(this.history[0])
                this.blueMode()
            }
        };
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)

            let i = 0
            let cycle = () => {
                if (i < this.powerUpNames.length) {
                    if (m.alive) requestAnimationFrame(cycle);
                    if (!simulation.paused && !simulation.isChoosing && powerUp.length < 300) {
                        const index = Math.floor(Math.random() * this.history.length) 
                        const where = { x: this.history[index].x + 25 * (Math.random() - 0.5), y: this.history[index].y + 25 * (Math.random() - 0.5) }
                        powerUps.spawn(where.x, where.y, this.powerUpNames[i]);
                        i++
                    }
                }
            }
            requestAnimationFrame(cycle);
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            const color = this.color + (0.35 + 0.25 * Math.random()) + ')'
            if (m.immuneCycle < m.cycle) {
                for (let i = 0; i < this.history.length - 1; i++) {
                    if (Matter.Query.ray([player], this.history[i], this.history[i + 1], 10).length > 0) {
                        m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60
                        const dmg = 0.15 * this.damageScale()
                        m.takeDamage(dmg);
                        simulation.drawList.push({ 
                            x: m.pos.x,
                            y: m.pos.y,
                            radius: dmg * 1500,
                            color: color,
                            time: 20
                        });

                        for (let i = 0, len = this.history.length; i < len; i++) {
                            this.history[i] = { x: this.position.x, y: this.position.y }
                        }
                        break
                    }
                }
            }

            if (this.nextBlinkCycle < simulation.cycle) { 
                this.nextBlinkCycle = simulation.cycle + this.delay;
                if (this.isSlowed || this.isStunned) this.nextBlinkCycle += this.delay

                let move = (target = this.seePlayer.position) => {
                    const dist = Vector.sub(target, this.position);
                    this.force = { x: 0, y: 0 }
                    Matter.Body.translate(this, Vector.mult(Vector.normalise(dist), this.JumpDistance));
                    Matter.Body.setVelocity(this, { x: 0, y: 0 });
                    Matter.Body.setAngularVelocity(this, 0)
                    this.history.push({ x: this.position.x, y: this.position.y }) 
                    this.history.shift() 




                    for (let i = 0; i < body.length; i++) {
                        if (!body[i].isInvulnerable && !body[i].isNotHoldable) {
                            const diff = Vector.sub(this.position, body[i].position);
                            const distance = Vector.magnitude(diff);
                            if (distance < 150) {
                                const savedVertices = body[i].vertices.map(v => ({ x: v.x, y: v.y }));
                                simulation.ephemera.push({
                                    count: 60,
                                    v: savedVertices,
                                    do() {
                                        this.count--;
                                        if (this.count < 0) simulation.removeEphemera(this);
                                        ctx.beginPath();
                                        let vertices = this.v;
                                        ctx.moveTo(vertices[0].x, vertices[0].y);
                                        for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                                        ctx.lineTo(vertices[0].x, vertices[0].y);
                                        ctx.lineWidth = 2;
                                        ctx.strokeStyle = `rgba(0,0,0,${this.count / 60})`;
                                        ctx.stroke();
                                        ctx.fillStyle = `rgba(255,0,200,${Math.max(0.01, this.count / 200)})`;
                                        ctx.fill()
                                    }
                                });

                                Matter.Composite.remove(engine.world, body[i]);
                                body.splice(i, 1);

                                this.health += 0.25;
                                if (this.health > 1) this.health = 1;
                            }
                        }
                    }

                }
                let close = {
                    dist: Infinity,
                    targetPos: null,
                    index: null,
                }
                for (let i = 0; i < powerUp.length; i++) {
                    if (Matter.Query.ray(map, this.position, powerUp[i].position).length === 0) {
                        const dist = Vector.magnitude(Vector.sub(this.position, powerUp[i].position))
                        if (dist < close.dist) {
                            close = {
                                dist: dist,
                                target: powerUp[i],
                                index: i,
                            }
                        }
                    }
                }
                if (close.dist < 3000) { 
                    move(close.target.position)

                    if (close.dist < this.JumpDistance + 2 * this.radius) {
                        this.powerUpNames.push(close.target.name)  
                        Matter.Composite.remove(engine.world, close.target);
                        powerUp.splice(close.index, 1);
                        this.health += 0.25 
                        if (this.health > 1) this.health = 1
                        if (this.history.length < 200) for (let i = 0; i < 4; i++) this.history.unshift(this.history[0])
                        ctx.beginPath();
                        ctx.moveTo(this.position.x, this.position.y);
                        ctx.lineTo(close.target.position.x, close.target.position.y);
                        ctx.strokeStyle = "#000"
                        ctx.lineWidth = 4
                        ctx.stroke();
                    }


                } else if (Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 && !m.isCloak) { 
                    this.seePlayer.yes = true;
                    this.locatePlayer();
                    if (!this.seePlayer.yes) this.seePlayer.yes = true;
                    move()
                } else if (this.seePlayer.recall) { 
                    this.lostPlayer();
                    if (m.isCloak) {
                        move(this.seePlayer.position) 
                    } else {
                        for (let i = 0; i < 55; i++) { 
                            let history = m.history[(simulation.cycle - 10 * i) % 600]
                            if (Matter.Query.ray(map, this.position, history.position).length === 0) {
                                move(history.position) 
                                break
                            }
                        }
                    }
                } else {

                    Matter.Body.setVelocity(this, { x: 0, y: 0 });
                    Matter.Body.setAngularVelocity(this, 0)
                }
            }
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.redMode()
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
            ctx.beginPath();
            for (let i = 0, len = this.history.length; i < len; i++) {
                ctx.lineTo(this.history[i].x, this.history[i].y)
            }
            ctx.lineWidth = this.radius * 2;
            ctx.strokeStyle = color 
            ctx.stroke();
        };
        simulation.ephemera.push({
            cycle: 30,
            do() {
                this.cycle--
                if (this.cycle < 1) simulation.removeEphemera(this);
                for (let i = 0, len = me.history.length; i < len; i++) {
                    me.history[i] = { x: me.position.x, y: me.position.y }
                }
            },
        })
    },
    kingSnakeBoss(x, y) {
        mobs.spawn(x, y, 0, 35, `rgba(255,255,255)`); 
        let me = mob[mob.length - 1];
        me.tier = 4
        me.stroke = "transparent";
        me.isUnblockable = true;
        Matter.Body.setDensity(me, 0.08); 
        me.isBoss = true;
        me.damageReduction = 0.4
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.history = []
        for (let i = 0; i < 20; i++) {
            me.history.push({ x: me.position.x + i, y: me.position.y })
        }
        me.frictionStatic = 0;
        me.friction = 0;
        me.memory = 900;
        me.seePlayerFreq = 41
        me.delay = 3 + 2 * simulation.CDScale;
        me.nextBlinkCycle = me.delay;
        me.JumpDistance = 0
        me.collisionFilter.mask = cat.bullet | cat.map 
        me.powerUpNames = []
        me.redMode = function () {
            this.color = `rgba(255,255,0,`
            this.fill = this.color + '1)'
            this.JumpDistance = 12
            let cycle = () => {
                if (this.radius < 25) {
                    if (m.alive && this.JumpDistance === 20) requestAnimationFrame(cycle);
                    if (!simulation.paused && !simulation.isChoosing) {
                        const scale = 1.01;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                    }
                }
            }
            requestAnimationFrame(cycle);
        }
        me.redMode();
        me.blueMode = function () {
            this.color = `rgba(255,0,0,`
            this.fill = this.color + '1)'
            this.JumpDistance = 33 
            let cycle = () => {
                if (this.radius > 14) {
                    if (m.alive && this.JumpDistance === 37) requestAnimationFrame(cycle);
                    if (!simulation.paused && !simulation.isChoosing) {
                        const scale = 0.96;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                    }
                }
            }
            requestAnimationFrame(cycle);
        }
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 170
                this.isInvulnerable = true
                this.damageReduction = 0
                if (this.history.length < 200) for (let i = 0; i < 10; i++) this.history.unshift(this.history[0])
                this.blueMode()
            }
        };
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)

            let i = 0
            let cycle = () => {
                if (i < this.powerUpNames.length) {
                    if (m.alive) requestAnimationFrame(cycle);
                    if (!simulation.paused && !simulation.isChoosing && powerUp.length < 300) {
                        const index = Math.floor(Math.random() * this.history.length) 
                        const where = { x: this.history[index].x + 25 * (Math.random() - 0.5), y: this.history[index].y + 25 * (Math.random() - 0.5) }
                        powerUps.spawn(where.x, where.y, this.powerUpNames[i]);
                        i++
                    }
                }
            }
            requestAnimationFrame(cycle);
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            const color = this.color + (0.35 + 0.25 * Math.random()) + ')'
            if (m.immuneCycle < m.cycle) {
                for (let i = 0; i < this.history.length - 1; i++) {
                    if (Matter.Query.ray([player], this.history[i], this.history[i + 1], 10).length > 0) {
                        m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60
                        const dmg = 0.15 * this.damageScale()
                        m.takeDamage(dmg);
                        simulation.drawList.push({ 
                            x: m.pos.x,
                            y: m.pos.y,
                            radius: dmg * 1500,
                            color: color,
                            time: 20
                        });

                        for (let i = 0, len = this.history.length; i < len; i++) {
                            this.history[i] = { x: this.position.x, y: this.position.y }
                        }
                        break
                    }
                }
            }

            if (this.nextBlinkCycle < simulation.cycle) { 
                this.nextBlinkCycle = simulation.cycle + this.delay;
                if (this.isSlowed || this.isStunned) this.nextBlinkCycle += this.delay

                let move = (target = this.seePlayer.position) => {
                    const dist = Vector.sub(target, this.position);
                    this.force = { x: 0, y: 0 }
                    Matter.Body.translate(this, Vector.mult(Vector.normalise(dist), this.JumpDistance));
                    Matter.Body.setVelocity(this, { x: 0, y: 0 });
                    Matter.Body.setAngularVelocity(this, 0)
                    this.history.push({ x: this.position.x, y: this.position.y }) 
                    this.history.shift() 



                    for (let i = 0; i < body.length; i++) {
                        if (!body[i].isInvulnerable && !body[i].isNotHoldable) {
                            const diff = Vector.sub(this.position, body[i].position);
                            const distance = Vector.magnitude(diff);
                            if (distance < 150) {
                                const savedVertices = body[i].vertices.map(v => ({ x: v.x, y: v.y }));
                                simulation.ephemera.push({
                                    count: 60,
                                    v: savedVertices,
                                    do() {
                                        this.count--;
                                        if (this.count < 0) simulation.removeEphemera(this);
                                        ctx.beginPath();
                                        let vertices = this.v;
                                        ctx.moveTo(vertices[0].x, vertices[0].y);
                                        for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                                        ctx.lineTo(vertices[0].x, vertices[0].y);
                                        ctx.lineWidth = 2;
                                        ctx.strokeStyle = `rgba(0,0,0,${this.count / 60})`;
                                        ctx.stroke();
                                        ctx.fillStyle = `rgba(255,255,0,${Math.max(0.01, this.count / 200)})`;
                                        ctx.fill()
                                    }
                                });

                                Matter.Composite.remove(engine.world, body[i]);
                                body.splice(i, 1);

                                this.health += 0.25;
                                if (this.health > 1) this.health = 1;

                            }
                        }
                    }
                }
                let close = {
                    dist: Infinity,
                    targetPos: null,
                    index: null,
                }
                for (let i = 0; i < powerUp.length; i++) {
                    if (Matter.Query.ray(map, this.position, powerUp[i].position).length === 0) {
                        const dist = Vector.magnitude(Vector.sub(this.position, powerUp[i].position))
                        if (dist < close.dist) {
                            close = {
                                dist: dist,
                                target: powerUp[i],
                                index: i,
                            }
                        }
                    }
                }
                if (close.dist < 3000) { 
                    move(close.target.position)

                    if (close.dist < this.JumpDistance + 2 * this.radius) {
                        this.powerUpNames.push(close.target.name)  
                        Matter.Composite.remove(engine.world, close.target);
                        powerUp.splice(close.index, 1);
                        this.health = 1 
                        if (this.history.length < 200) for (let i = 0; i < 4; i++) this.history.unshift(this.history[0])
                        ctx.beginPath();
                        ctx.moveTo(this.position.x, this.position.y);
                        ctx.lineTo(close.target.position.x, close.target.position.y);
                        ctx.strokeStyle = "#000"
                        ctx.lineWidth = 4
                        ctx.stroke();
                    }
                } else if (Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 && !m.isCloak) { 
                    this.seePlayer.yes = true;
                    this.locatePlayer();
                    if (!this.seePlayer.yes) this.seePlayer.yes = true;
                    move()
                } else if (this.seePlayer.recall) { 
                    this.lostPlayer();
                    if (m.isCloak) {
                        move(this.seePlayer.position) 
                    } else {
                        for (let i = 0; i < 55; i++) { 
                            let history = m.history[(simulation.cycle - 10 * i) % 600]
                            if (Matter.Query.ray(map, this.position, history.position).length === 0) {
                                move(history.position) 
                                break
                            }
                        }
                    }
                } else {

                    Matter.Body.setVelocity(this, { x: 0, y: 0 });
                    Matter.Body.setAngularVelocity(this, 0)
                }
            }
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.redMode()
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 15 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
            ctx.beginPath();
            for (let i = 0, len = this.history.length; i < len; i++) {
                ctx.lineTo(this.history[i].x, this.history[i].y)
            }
            ctx.lineWidth = this.radius * 2;
            ctx.strokeStyle = color 
            ctx.stroke();
        };
        simulation.ephemera.push({
            cycle: 30,
            do() {
                this.cycle--
                if (this.cycle < 1) simulation.removeEphemera(this);
                for (let i = 0, len = me.history.length; i < len; i++) {
                    me.history[i] = { x: me.position.x, y: me.position.y }
                }
            },
        })
    },
    pulsarBoss(x, y, radius = 90, isNonCollide = false) {
        mobs.spawn(x, y, 3, radius, "#a0f");
        let me = mob[mob.length - 1];
        me.tier = 2
        if (isNonCollide) me.collisionFilter.mask = cat.bullet | cat.player
        setTimeout(() => { 
            me.constraint = Constraint.create({
                pointA: {
                    x: me.position.x,
                    y: me.position.y
                },
                bodyB: me,
                stiffness: 0.0001,
                damping: 0.3
            });
            Composite.add(engine.world, me.constraint);
        }, 2000); 

        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.radius *= 1.5
        me.vertices[1].x = me.position.x + Math.cos(me.angle) * me.radius; 
        me.vertices[1].y = me.position.y + Math.sin(me.angle) * me.radius;
        me.fireCycle = 0
        me.fireTarget = { x: 0, y: 0 }
        me.pulseRadius = Math.min(500, 230 + simulation.difficulty * 3)
        me.fireDelay = Math.max(60, 150 - simulation.difficulty * 2)
        me.isFiring = false
        Matter.Body.setDensity(me, 0.01); 
        me.isBoss = true;
        spawn.shield(me, x, y, 1);
        spawn.spawnOrbitals(me, radius + 200 + 300 * Math.random(), 1)
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.onHit = function () { };
        me.do = function () {
            if (player.speed > 5) this.do = this.fire 
        }
        me.damageReduction = 0.29
        me.fire = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.checkStatus();
            if (!this.isStunned) {
                if (this.isFiring) {
                    if (this.fireCycle > this.fireDelay) { 
                        this.isFiring = false
                        this.fireCycle = 0
                        this.torque += (0.00008 + 0.00007 * Math.random()) * this.inertia * (Math.round(Math.random()) * 2 - 1) 
                        if (Matter.Query.ray([player], this.fireTarget, this.position).length) {
                            unit = Vector.mult(Vector.normalise(Vector.sub(this.vertices[1], this.position)), this.distanceToPlayer() - 100)
                            this.fireTarget = Vector.add(this.vertices[1], unit)
                        }
                        if (Vector.magnitude(Vector.sub(player.position, this.fireTarget)) < this.pulseRadius && m.immuneCycle < m.cycle) {
                            m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                            m.takeDamage(0.045 * this.damageScale());
                        }
                        simulation.drawList.push({
                            x: this.fireTarget.x,
                            y: this.fireTarget.y,
                            radius: this.pulseRadius,
                            color: "rgba(120,0,255,0.6)",
                            time: simulation.drawTime
                        });
                        ctx.beginPath();
                        ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                        ctx.lineTo(this.fireTarget.x, this.fireTarget.y)
                        ctx.lineWidth = 20;
                        ctx.strokeStyle = "rgba(120,0,255,0.3)";
                        ctx.stroke();
                        ctx.lineWidth = 5;
                        ctx.strokeStyle = "rgba(120,0,255,1)";
                        ctx.stroke();
                    } else { 
                        this.fireCycle++
                        ctx.beginPath();
                        ctx.arc(this.fireTarget.x, this.fireTarget.y, this.fireCycle / this.fireDelay * this.pulseRadius, 0, 2 * Math.PI); 
                        ctx.fillStyle = "rgba(120,0,255,0.09)";
                        ctx.fill();
                        ctx.setLineDash([40 * Math.random(), 200 * Math.random()]);
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "rgba(120,0,255,0.4)";

                        ctx.beginPath();
                        ctx.arc(this.fireTarget.x, this.fireTarget.y, this.pulseRadius, 0, 2 * Math.PI); 
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                        ctx.lineTo(this.fireTarget.x, this.fireTarget.y)
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else { 
                    this.fireCycle++
                    const whereIsPlayer = m.isCloak ? m.history[(simulation.cycle - 180) % 600].position : m.pos
                    this.fireDir = Vector.normalise(Vector.sub(whereIsPlayer, this.position)); 
                    const angle = this.angle + Math.PI / 2;
                    const c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                    const threshold = 0.04;
                    if (c > threshold) {
                        this.torque += 0.0000015 * this.inertia;
                    } else if (c < -threshold) {
                        this.torque -= 0.0000015 * this.inertia;
                    } else if (this.fireCycle > 45) { 
                        unit = Vector.mult(Vector.normalise(Vector.sub(this.vertices[1], this.position)), this.distanceToPlayer() - 100)
                        this.fireTarget = Vector.add(this.vertices[1], unit)
                        if (Vector.magnitude(Vector.sub(whereIsPlayer, this.fireTarget)) < 1000) { 
                            Matter.Body.setAngularVelocity(this, 0)
                            this.fireLockCount = 0
                            this.isFiring = true
                            this.fireCycle = 0
                        }
                    }
                }
            } else {
                this.isFiring = false
            }
        };
    },
    quasarBoss(x, y, radius = 50, isNonCollide = false) {
        mobs.spawn(x, y, 3, radius, "#a0f");
        let me = mob[mob.length - 1];
        me.tier = 4
        if (isNonCollide) me.collisionFilter.mask = cat.bullet | cat.player
        setTimeout(() => { 
            me.constraint = Constraint.create({
                pointA: { x: me.position.x, y: me.position.y },
                bodyB: me,
                stiffness: 0.0001,
                damping: 0.3
            });
            Composite.add(engine.world, me.constraint);
        }, 2000); 

        me.isBoss = true;
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.radius *= 1.5
        me.vertices[1].x = me.position.x + Math.cos(me.angle) * me.radius; 
        me.vertices[1].y = me.position.y + Math.sin(me.angle) * me.radius;
        me.fireCycle = 0
        me.fireTarget = { x: 0, y: 0 }
        me.pulseRadius = 290
        me.fireDelay = 110
        me.isFiring = false
        Matter.Body.setDensity(me, 0.03); 

        me.damageReduction = 0.3
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        spawn.shield(me, x, y, 1);
        spawn.spawnOrbitals(me, radius + 200 + 500 * Math.random(), 1)
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 90
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        me.onHit = function () { };
        me.do = function () {
            if (player.speed > 5) this.do = this.fire 
        }
        me.fire = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.checkStatus();
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
            if (this.isStunned) {
                this.isFiring = false
            } else {
                if (this.isFiring) {
                    if (this.fireCycle > this.fireDelay) { 
                        this.isFiring = false
                        this.fireCycle = 0
                        this.torque += (0.00008 + 0.00007 * Math.random()) * this.inertia * (Math.round(Math.random()) * 2 - 1) 
                        if (Matter.Query.ray([player], this.fireTarget, this.position).length) {
                            unit = Vector.mult(Vector.normalise(Vector.sub(this.vertices[1], this.position)), this.distanceToPlayer() - 100)
                            this.fireTarget = Vector.add(this.vertices[1], unit)
                        }

                        simulation.ephemera.push({
                            count: 360,
                            position: this.fireTarget,
                            level: level.levelsCleared,
                            radius: this.pulseRadius,
                            do() {
                                this.count--
                                if (this.count < 180) this.radius *= 0.983
                                if (this.count < 0 || this.level !== level.levelsCleared) simulation.removeEphemera(this);

                                if (Vector.magnitude(Vector.sub(player.position, this.position)) < this.radius && m.immuneCycle < m.cycle) {
                                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 30; 
                                    m.takeDamage(0.045 * spawn.dmgToPlayerByLevelsCleared());
                                }

                                const unit = Vector.rotate({ x: 1, y: 0 }, Math.random() * 6.28)
                                this.position = Vector.add(this.position, Vector.mult(unit, 10))

                                ctx.beginPath();
                                ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI); 
                                ctx.fillStyle = `rgba(120,0,255,${0.5 + 0.2 * Math.random()})`;
                                ctx.fill();
                            },
                        })

                        if (Vector.magnitude(Vector.sub(player.position, this.fireTarget)) < this.pulseRadius && m.immuneCycle < m.cycle) {
                            m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                            m.takeDamage(0.045 * this.damageScale());
                        }
                        ctx.beginPath();
                        ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                        ctx.lineTo(this.fireTarget.x, this.fireTarget.y)
                        ctx.lineWidth = 20;
                        ctx.strokeStyle = "rgba(120,0,255,0.3)";
                        ctx.stroke();
                        ctx.lineWidth = 5;
                        ctx.strokeStyle = "rgba(120,0,255,1)";
                        ctx.stroke();
                    } else { 
                        this.fireCycle++
                        ctx.beginPath();
                        ctx.arc(this.fireTarget.x, this.fireTarget.y, this.fireCycle / this.fireDelay * this.pulseRadius, 0, 2 * Math.PI); 
                        ctx.fillStyle = "rgba(120,0,255,0.09)";
                        ctx.fill();
                        ctx.setLineDash([40 * Math.random(), 200 * Math.random()]);
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "rgba(120,0,255,0.4)";

                        ctx.beginPath();
                        ctx.arc(this.fireTarget.x, this.fireTarget.y, this.pulseRadius, 0, 2 * Math.PI); 
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                        ctx.lineTo(this.fireTarget.x, this.fireTarget.y)
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else { 
                    this.fireCycle++
                    const whereIsPlayer = m.isCloak ? m.history[(simulation.cycle - 180) % 600].position : m.pos
                    this.fireDir = Vector.normalise(Vector.sub(whereIsPlayer, this.position)); 
                    const angle = this.angle + Math.PI / 2;
                    const c = Math.cos(angle) * this.fireDir.x + Math.sin(angle) * this.fireDir.y;
                    const threshold = 0.04;
                    if (c > threshold) {
                        this.torque += 0.0000015 * this.inertia;
                    } else if (c < -threshold) {
                        this.torque -= 0.0000015 * this.inertia;
                    } else if (this.fireCycle > 45) { 
                        unit = Vector.mult(Vector.normalise(Vector.sub(this.vertices[1], this.position)), this.distanceToPlayer() - 100)
                        this.fireTarget = Vector.add(this.vertices[1], unit)
                        if (Vector.magnitude(Vector.sub(whereIsPlayer, this.fireTarget)) < 1000) { 
                            Matter.Body.setAngularVelocity(this, 0)
                            this.fireLockCount = 0
                            this.isFiring = true
                            this.fireCycle = 0
                        }
                    }
                }
            }
        };
    },
    pulsar(x, y, radius = 40) {
        mobs.spawn(x, y, 3, radius, "#f08");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.radius *= 2
        me.vertices[1].x = me.position.x + Math.cos(me.angle) * me.radius; 
        me.vertices[1].y = me.position.y + Math.sin(me.angle) * me.radius;
        Matter.Body.setDensity(me, 0.002); 
        me.fireCycle = Infinity
        me.fireTarget = { x: 0, y: 0 }
        me.pulseRadius = Math.min(400, 170 + simulation.difficulty * 3)
        me.fireDelay = Math.max(75, 140 - simulation.difficulty * 0.5)
        me.isFiring = false
        spawn.shield(me, x, y);
        me.onHit = function () { };
        me.canSeeTarget = function () {
            const angle = this.angle + Math.PI / 2;
            const dot = Vector.dot({
                x: Math.cos(angle),
                y: Math.sin(angle)
            }, Vector.normalise(Vector.sub(this.fireTarget, this.position)));
            if (
                dot > 0.03 || 
                Matter.Query.ray(map, this.fireTarget, this.position).length || Matter.Query.ray(body, this.fireTarget, this.position).length || 
                Vector.magnitude(Vector.sub(m.pos, this.fireTarget)) > 1000 
            ) {
                this.isFiring = false
                return false
            } else {
                return true
            }
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            if (this.speed > 6) Matter.Body.setVelocity(this, { x: this.velocity.x * 0.8, y: this.velocity.y * 0.8 }); 
            Matter.Body.setVelocity(this, { x: this.velocity.x * 0.97, y: this.velocity.y * 0.97 }); 

            this.seePlayerByLookingAt();
            this.checkStatus();
            if (this.seePlayer.recall) {
                if (this.isFiring) {
                    if (this.fireCycle > this.fireDelay) { 
                        if (!this.canSeeTarget()) return
                        this.isFiring = false
                        this.fireCycle = 0
                        this.torque += (0.00002 + 0.0002 * Math.random()) * this.inertia * (Math.round(Math.random()) * 2 - 1) 
                        if (Matter.Query.ray([player], this.fireTarget, this.position).length) {
                            unit = Vector.mult(Vector.normalise(Vector.sub(this.vertices[1], this.position)), this.distanceToPlayer() - 100)
                            this.fireTarget = Vector.add(this.vertices[1], unit)
                        }
                        if (Vector.magnitude(Vector.sub(player.position, this.fireTarget)) < this.pulseRadius && m.immuneCycle < m.cycle) {
                            m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                            m.takeDamage(0.03 * this.damageScale());
                        }
                        simulation.drawList.push({
                            x: this.fireTarget.x,
                            y: this.fireTarget.y,
                            radius: this.pulseRadius,
                            color: "rgba(255,0,100,0.6)",
                            time: simulation.drawTime
                        });
                        ctx.beginPath();
                        ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                        ctx.lineTo(this.fireTarget.x, this.fireTarget.y)
                        ctx.lineWidth = 20;
                        ctx.strokeStyle = "rgba(255,0,100,0.3)";
                        ctx.stroke();
                        ctx.lineWidth = 5;
                        ctx.strokeStyle = "rgba(255,0,100,1)";
                        ctx.stroke();
                    } else { 
                        this.fireCycle++
                        ctx.beginPath();
                        ctx.arc(this.fireTarget.x, this.fireTarget.y, this.fireCycle / this.fireDelay * this.pulseRadius, 0, 2 * Math.PI); 
                        ctx.fillStyle = "rgba(255,0,100,0.09)";
                        ctx.fill();
                        ctx.setLineDash([40 * Math.random(), 200 * Math.random()]);
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "rgba(255,0,100,0.4)";

                        ctx.beginPath();
                        ctx.arc(this.fireTarget.x, this.fireTarget.y, this.pulseRadius, 0, 2 * Math.PI); 
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                        ctx.lineTo(this.fireTarget.x, this.fireTarget.y)
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else { 
                    this.fireCycle++
                    const angle = this.angle + Math.PI / 2;
                    const dot = Vector.dot({
                        x: Math.cos(angle),
                        y: Math.sin(angle)
                    }, Vector.normalise(Vector.sub(this.seePlayer.position, this.position)))
                    const threshold = 0.04;
                    if (dot > threshold) { 
                        this.torque += 0.0000015 * this.inertia;
                    } else if (dot < -threshold) {
                        this.torque -= 0.0000015 * this.inertia;
                    } else if (this.fireCycle > 60) { 
                        unit = Vector.mult(Vector.normalise(Vector.sub(this.vertices[1], this.position)), this.distanceToPlayer() - 100)
                        this.fireTarget = Vector.add(this.vertices[1], unit)
                        if (!this.canSeeTarget()) return
                        Matter.Body.setAngularVelocity(this, 0)
                        this.fireLockCount = 0
                        this.isFiring = true
                        this.fireCycle = 0
                    }
                }
            } else {
                this.isFiring = false
            }
        };
    },
    laserLayer(x, y, radius = 18 + Math.floor(6 * Math.random())) {
        mobs.spawn(x, y, 4, radius, "#f09");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        for (let i = 0; i < 4; i += 2) {
            let spike = Vector.mult(Vector.normalise(Vector.sub(me.vertices[i], me.position)), radius * 2)
            me.vertices[i].x = me.position.x + spike.x
            me.vertices[i].y = me.position.y + spike.y
        }
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        Matter.Body.setDensity(me, 0.0014); 
        me.accelMag = 0.0005;
        spawn.shield(me, x, y);

        me.laserArray = [] 
        me.laserLimit = simulation.difficultyMode < 3 ? 1 : 2
        me.fireDelay = 75
        me.cycle = 0
        me.laserDelay = 150 + Math.floor(Math.random() * 120)
        me.addLaser = function () {
            if (this.cycle > this.laserDelay) {
                this.cycle = 0
                const seeRange = 6000;
                const angle = this.angle + Math.PI / 4
                const v1 = { x: this.position.x + seeRange * Math.cos(angle), y: this.position.y + seeRange * Math.sin(angle) };
                const v2 = { x: this.position.x + seeRange * Math.cos(angle + Math.PI), y: this.position.y + seeRange * Math.sin(angle + Math.PI) };
                let best1 = vertexCollision(this.position, v1, [map]);
                let best2 = vertexCollision(this.position, v2, [map]);
                if (best2.who === null) {
                    best2.x = v2.x
                    best2.y = v2.y
                }
                if (best1.who === null) { 
                    best1.x = v1.x
                    best1.y = v1.y
                }
                if (best1.y > best2.y) { 
                    const save1X = best1.x
                    const save1Y = best1.y
                    best1.x = best2.x
                    best1.y = best2.y
                    best2.x = save1X
                    best2.y = save1Y
                }

                this.laserArray.push({ a: { x: best1.x, y: best1.y }, b: { x: best2.x, y: best2.y }, fade: 0 })
                Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.05));
                Matter.Body.setAngularVelocity(this, this.angularVelocity * 0.05)

                if (this.laserArray.length > this.laserLimit) this.laserArray.shift() 
                if (!this.seePlayer.recall && (Vector.magnitude(Vector.sub(this.position, this.driftGoal)) < 200 || 0.3 > Math.random())) {
                    const radius = Math.random() * 1000;
                    const angle = Math.random() * 2 * Math.PI;
                    this.driftGoal = Vector.add(this.driftCenter, { x: radius * Math.cos(angle), y: radius * Math.sin(angle) })
                }
            }
        }
        me.fireLaser = function () {
            for (let i = 0; i < this.laserArray.length; i++) { 
                let best = vertexCollision(this.laserArray[i].a, this.laserArray[i].b, m.isCloak ? [body] : [body, [playerBody, playerHead]]); 
                if (this.laserArray[i].fade > 0.99) {
                    if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) { 
                        m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                        const dmg = 0.03 * this.damageScale();
                        m.takeDamage(dmg);
                        simulation.drawList.push({
                            x: best.x,
                            y: best.y,
                            radius: dmg * 1500,
                            color: "rgba(255,0,255,0.5)",
                            time: 20
                        });
                        this.laserArray.splice(i, 1) 
                        if (this.distanceToPlayer < 1000) {                         
                            const forceMag = 0.03 * this.mass;
                            const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                            this.force.x -= 2 * forceMag * Math.cos(angle);
                            this.force.y -= 2 * forceMag * Math.sin(angle); 
                        }
                    } else if (best.who && best.who.classType === "body") { 
                        ctx.beginPath();
                        ctx.moveTo(best.x, best.y);
                        ctx.lineTo(this.laserArray[i].a.x, this.laserArray[i].a.y);
                        ctx.strokeStyle = `rgb(255,0,255)`;
                        ctx.lineWidth = 2;
                        ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                        ctx.stroke();
                        ctx.setLineDash([]);
                    } else { 
                        ctx.beginPath();
                        ctx.moveTo(this.laserArray[i].b.x, this.laserArray[i].b.y);
                        ctx.lineTo(this.laserArray[i].a.x, this.laserArray[i].a.y);
                        ctx.strokeStyle = `rgb(255,0,255)`;
                        ctx.lineWidth = 2;
                        ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else {
                    this.laserArray[i].fade += 0.01
                    ctx.beginPath();
                    ctx.moveTo(this.laserArray[i].a.x, this.laserArray[i].a.y);
                    ctx.lineTo(this.laserArray[i].b.x, this.laserArray[i].b.y);
                    ctx.lineWidth = 2 + 40 - 40 * this.laserArray[i].fade;
                    ctx.strokeStyle = `rgba(255,0,255,${0.02 + 0.1 * this.laserArray[i].fade})`;
                    ctx.stroke();
                }
            }
        }
        me.driftCenter = { ...me.position }; 
        const r = Math.random() * 100;
        const a = Math.random() * 2 * Math.PI;
        me.driftGoal = Vector.add(me.driftCenter, { x: r * Math.cos(a), y: r * Math.sin(a) }) 
        me.drift = function () {
            if (this.seePlayer.recall) {
                const force = Vector.mult(Vector.normalise(Vector.sub(this.seePlayer.position, this.position)), this.accelMag * this.mass)
                this.force.x += force.x;
                this.force.y += force.y;
            } else { 
                const force = Vector.mult(Vector.normalise(Vector.sub(this.driftGoal, this.position)), 0.00002 * this.mass)
                this.force.x += force.x;
                this.force.y += force.y;
            }
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.cycle++
            this.torque = this.lookTorque * this.inertia * 0.6;
            this.seePlayerCheck();
            this.checkStatus();
            this.drift();
            this.addLaser()
            this.fireLaser()
        };
    },
    laserLayerBoss(x, y, radius = 65) {
        mobs.spawn(x, y, 4, radius, "#f09");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        for (let i = 0; i < 4; i += 2) {
            let spike = Vector.mult(Vector.normalise(Vector.sub(me.vertices[i], me.position)), radius * 2)
            me.vertices[i].x = me.position.x + spike.x
            me.vertices[i].y = me.position.y + spike.y
        }
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.0001 * simulation.accelScale;
        me.isBoss = true;
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        Matter.Body.setDensity(me, 0.03); 
        me.damageReduction = 0.36
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 
                this.invulnerableCount = 90
                this.isInvulnerable = true
                this.damageReduction = 0
                this.laserDelay = 130
            }
        };
        me.laserArray = [] 
        me.laserLimit = 2 + (simulation.difficultyMode > 2) + (simulation.difficultyMode > 4)
        me.fireDelay = Math.max(75, 140 - simulation.difficulty * 0.5)
        me.cycle = 0
        me.laserDelay = 210
        me.addLaser = function () {
            if (this.cycle > this.laserDelay) {
                this.cycle = 0
                const seeRange = 6000;
                let add = (where, angle) => {
                    const v1 = { x: where.x + seeRange * Math.cos(angle), y: where.y + seeRange * Math.sin(angle) };
                    const v2 = { x: where.x + seeRange * Math.cos(angle + Math.PI), y: where.y + seeRange * Math.sin(angle + Math.PI) };
                    let best1 = vertexCollision(where, v1, [map]);
                    let best2 = vertexCollision(where, v2, [map]);
                    if (best2.who === null) {
                        best2.x = v2.x
                        best2.y = v2.y
                    }
                    if (best1.who === null) { 
                        best1.x = v1.x
                        best1.y = v1.y
                    }
                    if (best1.y > best2.y) { 
                        const save1X = best1.x
                        const save1Y = best1.y
                        best1.x = best2.x
                        best1.y = best2.y
                        best2.x = save1X
                        best2.y = save1Y
                    }
                    this.laserArray.push({ a: { x: best1.x, y: best1.y }, b: { x: best2.x, y: best2.y }, fade: 0 })
                }
                add(m.pos, this.angle + Math.PI / 4 + Math.PI / 2)
                add(this.position, this.angle + Math.PI / 4)
                Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.05));
                Matter.Body.setAngularVelocity(this, this.angularVelocity * 0.05)
                if (!this.seePlayer.recall && (Vector.magnitude(Vector.sub(this.position, this.driftGoal)) < 200 || 0.3 > Math.random())) {
                    const radius = Math.random() * 1000;
                    const angle = Math.random() * 2 * Math.PI;
                    this.driftGoal = Vector.add(this.driftCenter, { x: radius * Math.cos(angle), y: radius * Math.sin(angle) })
                }
            }
        }
        me.fireLaser = function () {
            for (let i = 0; i < this.laserArray.length; i++) { 
                let best = vertexCollision(this.laserArray[i].a, this.laserArray[i].b, m.isCloak ? [body] : [body, [playerBody, playerHead]]); 
                if (this.laserArray[i].fade > 0.99) {
                    if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) { 
                        m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                        const dmg = 0.03 * this.damageScale();
                        m.takeDamage(dmg);
                        simulation.drawList.push({
                            x: best.x,
                            y: best.y,
                            radius: dmg * 1500,
                            color: "rgba(255,0,255,0.5)",
                            time: 20
                        });
                        this.laserArray.splice(i, 1) 
                        if (this.distanceToPlayer < 1000) {                         
                            const forceMag = 0.03 * this.mass;
                            const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                            this.force.x -= 2 * forceMag * Math.cos(angle);
                            this.force.y -= 2 * forceMag * Math.sin(angle); 
                        }
                    } else if (best.who && best.who.classType === "body") { 
                        ctx.beginPath();
                        ctx.moveTo(best.x, best.y);
                        ctx.lineTo(this.laserArray[i].a.x, this.laserArray[i].a.y);
                        ctx.strokeStyle = `rgb(255,0,255)`;
                        ctx.lineWidth = 2;
                        ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                        ctx.stroke();
                        ctx.setLineDash([]);
                    } else { 
                        ctx.beginPath();
                        ctx.moveTo(this.laserArray[i].b.x, this.laserArray[i].b.y);
                        ctx.lineTo(this.laserArray[i].a.x, this.laserArray[i].a.y);
                        ctx.strokeStyle = `rgb(255,0,255)`;
                        ctx.lineWidth = 2;
                        ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                        ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else {
                    this.laserArray[i].fade += 0.007
                    ctx.beginPath();
                    ctx.moveTo(this.laserArray[i].a.x, this.laserArray[i].a.y);
                    ctx.lineTo(this.laserArray[i].b.x, this.laserArray[i].b.y);
                    ctx.lineWidth = 2 + 40 - 40 * this.laserArray[i].fade;
                    ctx.strokeStyle = `rgba(255,0,255,${0.02 + 0.1 * this.laserArray[i].fade})`;
                    ctx.stroke();
                    if (this.laserArray[i].fade > 0.99) {
                        this.laserArray[i].fade = 1;
                        if (this.laserArray.length > this.laserLimit) this.laserArray.shift() 
                        break
                    }
                }
            }
        }
        me.driftCenter = { ...me.position }; 
        const r = Math.random() * 100;
        const a = Math.random() * 2 * Math.PI;
        me.driftGoal = Vector.add(me.driftCenter, { x: r * Math.cos(a), y: r * Math.sin(a) }) 
        me.drift = function () {
            if (this.seePlayer.recall) {
                const force = Vector.mult(Vector.normalise(Vector.sub(this.seePlayer.position, this.position)), this.accelMag * this.mass)
                this.force.x += force.x;
                this.force.y += force.y;
            } else { 
                const force = Vector.mult(Vector.normalise(Vector.sub(this.driftGoal, this.position)), 0.00001 * this.mass)
                this.force.x += force.x;
                this.force.y += force.y;
            }
            this.torque = this.lookTorque * this.inertia * 0.9;
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.cycle++
            this.seePlayerCheck();
            this.checkStatus();
            this.drift();
            this.addLaser()
            this.fireLaser()
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };
    },
    laser(x, y, radius = 30) {
        const color = "#f00"
        mobs.spawn(x, y, 3, radius, color);
        let me = mob[mob.length - 1];
        me.tier = 1
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.0001 * simulation.accelScale;
        me.laserInterval = 100
        Matter.Body.setDensity(me, 0.0015); 
        spawn.shield(me, x, y);
        me.onHit = function () {
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.torque = this.lookTorque * this.inertia * 0.5;
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                if (simulation.cycle % this.laserInterval > this.laserInterval / 2) {
                    const seeRange = 8000;
                    let best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const look = { x: this.position.x + seeRange * Math.cos(this.angle), y: this.position.y + seeRange * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        const dmg = 0.003 * this.damageScale();
                        m.takeDamage(dmg);
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(best.x, best.y, dmg * 1500, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    if (best.dist2 === Infinity) best = look;
                    ctx.beginPath();
                    ctx.moveTo(this.vertices[1].x, this.vertices[1].y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 3;
                    ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    ctx.beginPath();
                    ctx.arc(this.vertices[1].x, this.vertices[1].y, 1 + 0.3 * (this.laserInterval - simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                    ctx.fillStyle = color;
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(this.vertices[1].x, this.vertices[1].y, 1 + 0.3 * (simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                    ctx.fillStyle = color;
                    ctx.fill();
                }
            }
        };
    },
    quadLaser(x, y, radius = 60) {
        const color = "rgb(255,0,50)"
        mobs.spawn(x, y, 4, radius, "rgb(255,0,50,0.7)");
        let me = mob[mob.length - 1];
        me.tier = 4
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        Matter.Body.rotate(me, Math.random() * Math.PI * 2);
        me.accelMag = 0.0003
        me.memory = 360;
        me.laserInterval = 300 + Math.floor(80 * Math.random())
        me.cycle = 0
        Matter.Body.setDensity(me, 0.005); 
        spawn.shield(me, x, y);
        me.onDamage = function () {
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.torque = this.lookTorque * this.inertia * 0.2;
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall) {
                this.cycle++

                if (this.cycle % this.laserInterval > 0.7 * this.laserInterval) {
                    for (let i = 0; i < 4; i++) {
                        const seeRange = 8000;
                        let best = {
                            x: null,
                            y: null,
                            dist2: Infinity,
                            who: null,
                            v1: null,
                            v2: null
                        };
                        const angle = this.angle + ((i + 2.5) * 1.57)
                        const look = { x: this.position.x + seeRange * Math.cos(angle), y: this.position.y + seeRange * Math.sin(angle) };
                        best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                        if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                            const dmg = 0.003 * this.damageScale();
                            m.takeDamage(dmg);
                            ctx.fillStyle = color;
                            ctx.beginPath();
                            ctx.arc(best.x, best.y, dmg * 1500, 0, 2 * Math.PI);
                            ctx.fill();
                        }
                        if (best.dist2 === Infinity) best = look;
                        ctx.beginPath();
                        ctx.moveTo(this.vertices[i].x, this.vertices[i].y);
                        ctx.lineTo(best.x, best.y);
                        ctx.strokeStyle = color;
                        ctx.lineWidth = 3;
                        ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                        ctx.stroke();
                        ctx.setLineDash([]);

                        ctx.beginPath();
                        ctx.arc(this.vertices[i].x, this.vertices[i].y, 1 + 0.1 * (this.laserInterval - this.cycle % this.laserInterval), 0, 2 * Math.PI); 
                        ctx.fillStyle = color;
                        ctx.fill();
                    }
                } else {
                    for (let i = 0; i < 4; i++) {
                        ctx.beginPath();
                        ctx.arc(this.vertices[i].x, this.vertices[i].y, 1 + 0.08 * (this.cycle % this.laserInterval), 0, 2 * Math.PI); 
                        ctx.fillStyle = color;
                        ctx.fill();
                    }
                }
            } else {
                this.cycle = 0
            }
        };
    },
    pentaLaserBoss(x, y, radius = 60) {
        const color = "rgb(255,255,255)"
        mobs.spawn(x, y, 5, radius, "rgb(255,255,255,0.7)");
        let me = mob[mob.length - 1];
        me.tier = 4
        me.isBoss = true;
        me.damageReduction = 0.22
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.857
        me.invulnerableCount = 0

        Matter.Body.setDensity(me, 0.004); 
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.accelMag = 0.0005
        me.frictionAir = 0.01
        me.laserInterval = 140
        me.memory = 480;
        spawn.shield(me, x, y);
        me.onDeath = function () { 
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)

            const colors = [
                '#FF0000', 
                '#FF7F00', 
                '#FFFF00', 
                '#00FF00', 
                '#0000FF', 
                '#8B00FF'  
            ];
            for (let i = 0; i < colors.length; ++i) {
                spawn.laserBaby(this.position.x + (Math.random() - 0.5) * radius * 2.5, this.position.y + (Math.random() - 0.5) * radius * 2.5, this.tier, colors[i]);
                Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x + (Math.random() - 0.5) * 15, y: this.velocity.x + (Math.random() - 0.5) * 15 });
            }
        };
        me.colorIndex = 0
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 7) / 7 
                this.invulnerableCount = 60
                this.isInvulnerable = true
                this.damageReduction = 0


                const colors = [
                    '#FF0000', 
                    '#FF7F00', 
                    '#FFFF00', 
                    '#00FF00', 
                    '#0000FF', 
                    '#8B00FF'  
                ];

                spawn.laserBaby(this.position.x + (Math.random() - 0.5) * radius * 2.5, this.position.y + (Math.random() - 0.5) * radius * 2.5, this.tier, colors[this.colorIndex]);
                this.colorIndex++
                Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x + (Math.random() - 0.5) * 15, y: this.velocity.x + (Math.random() - 0.5) * 15 });
            }
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.torque = this.lookTorque * this.inertia * 0.1;
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                if (simulation.cycle % this.laserInterval > this.laserInterval / 2) {
                    for (let i = 0; i < 5; i++) {
                        const seeRange = 8000;
                        let best = {
                            x: null,
                            y: null,
                            dist2: Infinity,
                            who: null,
                            v1: null,
                            v2: null
                        };
                        const angle = this.angle + ((i + 3) * 1.25)
                        const look = { x: this.position.x + seeRange * Math.cos(angle), y: this.position.y + seeRange * Math.sin(angle) };
                        best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                        if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                            m.immuneCycle = m.cycle + m.collisionImmuneCycles + 30; 
                            const dmg = 0.05 * this.damageScale();
                            m.takeDamage(dmg);
                            simulation.drawList.push({
                                x: best.x,
                                y: best.y,
                                radius: dmg * 1500,
                                color: "rgba(255,255,255,1)",
                                time: 20
                            });
                        }
                        if (best.dist2 === Infinity) best = look;
                        ctx.beginPath();
                        ctx.moveTo(this.vertices[i].x, this.vertices[i].y);
                        ctx.lineTo(best.x, best.y);
                        ctx.strokeStyle = color;
                        ctx.lineWidth = 5;
                        ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                        ctx.stroke();
                        ctx.setLineDash([]);

                        ctx.beginPath();
                        ctx.arc(this.vertices[i].x, this.vertices[i].y, 1 + 0.2 * (this.laserInterval - simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                        ctx.fillStyle = color;
                        ctx.fill();
                    }
                } else {
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.arc(this.vertices[i].x, this.vertices[i].y, 1 + 0.2 * (simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                        ctx.fillStyle = color;
                        ctx.fill();
                    }
                }
            }
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 15 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };
    },
    laserBaby(x, y, tier, color = "#f00", radius = 23) {
        mobs.spawn(x, y, 3, radius, color);
        let me = mob[mob.length - 1];
        me.tier = tier
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.accelMag = 0.00015 * simulation.accelScale;
        me.laserInterval = 120
        Matter.Body.setDensity(me, 0.003); 
        me.do = function () {
            this.torque = this.lookTorque * this.inertia * 0.3;
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));

                if (simulation.cycle % this.laserInterval > this.laserInterval / 2) {
                    const seeRange = 8000;
                    let best = {
                        x: null,
                        y: null,
                        dist2: Infinity,
                        who: null,
                        v1: null,
                        v2: null
                    };
                    const look = { x: this.position.x + seeRange * Math.cos(this.angle), y: this.position.y + seeRange * Math.sin(this.angle) };
                    best = vertexCollision(this.position, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

                    if ((best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                        const dmg = 0.003 * this.damageScale();
                        m.takeDamage(dmg);
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(best.x, best.y, dmg * 1500, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    if (best.dist2 === Infinity) best = look;
                    ctx.beginPath();
                    ctx.moveTo(this.vertices[1].x, this.vertices[1].y);
                    ctx.lineTo(best.x, best.y);
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 3;
                    ctx.setLineDash([50 + 120 * Math.random(), 50 * Math.random()]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    ctx.beginPath();
                    ctx.arc(this.vertices[1].x, this.vertices[1].y, 1 + 0.3 * (this.laserInterval - simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                    ctx.fillStyle = color;
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(this.vertices[1].x, this.vertices[1].y, 1 + 0.3 * (simulation.cycle % this.laserInterval), 0, 2 * Math.PI); 
                    ctx.fillStyle = color;
                    ctx.fill();
                }
            }
        };
    },
    laserBoss(x, y, radius = 30) {
        mobs.spawn(x, y, 3, radius, "#f00");
        let me = mob[mob.length - 1];
        setTimeout(() => { 
            me.constraint = Constraint.create({
                pointA: { x: me.position.x, y: me.position.y },
                bodyB: me,
                stiffness: 1,
                damping: 1
            });
            Composite.add(engine.world, me.constraint);
        }, 2000); 
        me.count = 0;
        me.frictionAir = 0.03;
        spawn.spawnOrbitals(me, radius + 50 + 200 * Math.random())
        Matter.Body.setDensity(me, 0.03); 
        me.damageReduction = 0.25
        me.isBoss = true;
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.rotateVelocity = Math.min(0.0045, 0.0015 * simulation.accelScale * simulation.accelScale) * (level.levelsCleared > 8 ? 1 : -1) * (simulation.isHorizontalFlipped ? -1 : 1)
        me.do = function () {
            this.fill = '#' + Math.random().toString(16).substr(-6); 
            this.checkStatus();
            if (!this.isStunned) {
                let slowed = false
                for (let i = 0; i < this.status.length; i++) {
                    if (this.status[i].type === "slow") {
                        slowed = true
                        break
                    }
                }
                if (!slowed) {
                    this.count++
                    Matter.Body.setAngle(this, this.count * this.rotateVelocity)
                    Matter.Body.setAngularVelocity(this, 0)
                }
                ctx.beginPath();
                this.laserArray(this.vertices[0], this.angle + Math.PI / 3);
                this.laserArray(this.vertices[1], this.angle + Math.PI);
                this.laserArray(this.vertices[2], this.angle - Math.PI / 3);
                ctx.strokeStyle = "#50f";
                ctx.lineWidth = 1.5;
                ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
                ctx.stroke(); 
                ctx.setLineDash([]);
                ctx.lineWidth = 20;
                ctx.strokeStyle = "rgba(80,0,255,0.07)";
                ctx.stroke(); 
            }
        };
        me.laserArray = function (where, angle) {
            const seeRange = 7000;
            best = {
                x: null,
                y: null,
                dist2: Infinity,
                who: null,
                v1: null,
                v2: null
            };
            const look = { x: where.x + seeRange * Math.cos(angle), y: where.y + seeRange * Math.sin(angle) };
            best = vertexCollision(where, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles + 30; 
                const dmg = 0.13 * this.damageScale();
                m.takeDamage(dmg);
                simulation.drawList.push({
                    x: best.x,
                    y: best.y,
                    radius: dmg * 1500,
                    color: "rgba(80,0,255,0.5)",
                    time: 20
                });
            }
            if (best.dist2 === Infinity) best = look;
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
        }
    },
    stabber(x, y, radius = 25 + Math.ceil(Math.random() * 12), spikeMax = 7) {
        if (radius > 80) radius = 65;
        mobs.spawn(x, y, 6, radius, "rgb(220,50,205)"); 
        let me = mob[mob.length - 1];
        me.tier = 2
        me.isVerticesChange = true
        me.accelMag = 0.0006 * simulation.accelScale;
        me.delay = 360 * simulation.CDScale;
        me.spikeVertex = 0;
        me.spikeLength = 0;
        me.isSpikeGrowing = false;
        me.spikeGrowth = 0;
        me.isSpikeReset = true;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.player 
        Matter.Body.rotate(me, Math.PI * 0.1);
        spawn.shield(me, x, y);
        me.onDeath = function () {
            if (this.spikeLength > 4) {
                this.spikeLength = 4
                const spike = Vector.mult(Vector.normalise(Vector.sub(this.vertices[this.spikeVertex], this.position)), this.radius * this.spikeLength)
                this.vertices[this.spikeVertex].x = this.position.x + spike.x
                this.vertices[this.spikeVertex].y = this.position.y + spike.y
            }
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.attraction();
            if (this.isSpikeReset) {
                if (this.seePlayer.recall) {
                    const dist = Vector.sub(this.seePlayer.position, this.position);
                    const distMag = Vector.magnitude(dist);
                    if (distMag < radius * spikeMax) {
                        let nearestDistance = Infinity
                        for (let i = 0, len = this.vertices.length; i < len; i++) {
                            const dist = Vector.sub(this.seePlayer.position, this.vertices[i]);
                            const distMag = Vector.magnitude(dist);
                            if (distMag < nearestDistance) {
                                this.spikeVertex = i
                                nearestDistance = distMag
                            }
                        }
                        this.spikeLength = 1
                        this.isSpikeGrowing = true;
                        this.isSpikeReset = false;
                        Matter.Body.setAngularVelocity(this, 0)
                    }
                }
            } else {
                if (this.isSpikeGrowing) {
                    this.spikeLength += Math.pow(this.spikeGrowth += 0.02, 8)
                    if (this.spikeLength > spikeMax) {
                        this.isSpikeGrowing = false;
                        this.spikeGrowth = 0
                    }
                } else {
                    Matter.Body.setAngularVelocity(this, this.angularVelocity * 0.8) 
                    this.spikeLength -= 0.3
                    if (this.spikeLength < 1) {
                        this.spikeLength = 1
                        this.isSpikeReset = true
                        this.radius = radius
                    }
                }
                const spike = Vector.mult(Vector.normalise(Vector.sub(this.vertices[this.spikeVertex], this.position)), radius * this.spikeLength)
                this.vertices[this.spikeVertex].x = this.position.x + spike.x
                this.vertices[this.spikeVertex].y = this.position.y + spike.y
            }
        };
    },
    striker(x, y, radius = 14 + Math.ceil(Math.random() * 25)) {
        mobs.spawn(x, y, 5, radius, "rgb(221,102,119)");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.accelMag = 0.00034 * simulation.accelScale;
        me.g = 0.00015; 
        me.frictionStatic = 0;
        me.friction = 0;
        me.delay = 30 + 60 * simulation.CDScale;
        me.cd = Infinity;
        me.strikeRange = 300
        Matter.Body.rotate(me, Math.PI * 0.1);
        spawn.shield(me, x, y);
        me.onDamage = function () {
            this.cd = simulation.cycle + this.delay;
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.gravity();
            if (!(simulation.cycle % this.seePlayerFreq)) { 
                if (
                    this.distanceToPlayer2() < this.seeAtDistance2 &&
                    Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                    !m.isCloak
                ) {
                    this.foundPlayer();
                    if (this.cd === Infinity) this.cd = simulation.cycle + this.delay * 0.7;
                } else if (this.seePlayer.recall) {
                    this.lostPlayer();
                    this.cd = Infinity
                }
            }
            this.checkStatus();
            this.attraction();
            if (this.cd < simulation.cycle && this.seePlayer.recall) {
                const dist = Vector.sub(this.seePlayer.position, this.position);
                const distMag = Vector.magnitude(dist);
                this.cd = simulation.cycle + this.delay;
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                if (distMag < 400) {
                    Matter.Body.translate(this, Vector.mult(Vector.normalise(dist), distMag - 20 - radius));
                } else {
                    Matter.Body.translate(this, Vector.mult(Vector.normalise(dist), this.strikeRange));
                }
                ctx.lineTo(this.position.x, this.position.y);
                ctx.lineWidth = radius * 2.15;
                ctx.strokeStyle = this.fill; 
                ctx.stroke();
                Matter.Body.setVelocity(this, {
                    x: this.velocity.x * 0.5,
                    y: this.velocity.y * 0.5
                });
            }
        };
    },
    dodger(x, y, radius = 20 + Math.ceil(Math.random() * 15)) {
        mobs.spawn(x, y, 5, radius, "rgba(89, 89, 89, 1)");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.accelMag = 0.00035;
        me.frictionStatic = 0;
        me.friction = 0;
        me.restitution = 1
        me.delay = 30 + Math.floor(10 * Math.random())
        me.cd = Infinity;
        spawn.shield(me, x, y);
        me.onDamage = function () {
            this.cd = simulation.cycle + this.delay * 2;
        };
        me.onHit = function () {
            this.accelMag = 0.00035
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, -0.9)) 
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            if (!(simulation.cycle % this.seePlayerFreq)) { 
                if (
                    this.distanceToPlayer2() < this.seeAtDistance2 &&
                    Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                    !m.isCloak
                ) {
                    this.foundPlayer();
                    if (this.cd === Infinity) this.cd = simulation.cycle + this.delay * 0.7;
                } else if (this.seePlayer.recall) {
                    this.lostPlayer();
                    this.cd = Infinity
                }
            }
            this.checkStatus();
            if (this.distanceToPlayer() < 500) {
                this.accelMag = 0.002 
            } else {
                this.accelMag = 0.00035
            }
            this.attraction();


            if (this.cd < simulation.cycle && this.seePlayer.recall && this.distanceToPlayer() > 500) {
                this.cd = simulation.cycle + this.delay;
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);

                let sub = Vector.sub(this.position, m.pos)
                const angle = 300 / Vector.magnitude(sub)
                let rotate = angle * (Math.random() < 0.5 ? 1 : -1)
                let where = Vector.add(m.pos, Vector.rotate(sub, rotate))
                if (Matter.Query.ray(map, this.position, where).length === 0) {
                    Matter.Body.setPosition(this, where)
                    ctx.lineTo(this.position.x, this.position.y);
                    ctx.lineWidth = radius * 2.1;
                    ctx.strokeStyle = this.fill;
                    ctx.stroke();
                } else { 
                    rotate *= -1
                    where = Vector.add(m.pos, Vector.rotate(sub, rotate)) 
                    if (Matter.Query.ray(map, this.position, where).length === 0) {
                        Matter.Body.setPosition(this, where)
                        ctx.lineTo(this.position.x, this.position.y);
                        ctx.lineWidth = radius * 2.1;
                        ctx.strokeStyle = this.fill;
                        ctx.stroke();
                    } else {
                        rotate *= 0.5 
                        where = Vector.add(m.pos, Vector.rotate(sub, rotate)) 
                        if (Matter.Query.ray(map, this.position, where).length === 0) {
                            Matter.Body.setPosition(this, where)
                            ctx.lineTo(this.position.x, this.position.y);
                            ctx.lineWidth = radius * 2.1;
                            ctx.strokeStyle = this.fill;
                            ctx.stroke();
                        } else {
                            rotate *= -1 
                            where = Vector.add(m.pos, Vector.rotate(sub, rotate)) 
                            if (Matter.Query.ray(map, this.position, where).length === 0) {
                                Matter.Body.setPosition(this, where)
                                ctx.lineTo(this.position.x, this.position.y);
                                ctx.lineWidth = radius * 2.1;
                                ctx.strokeStyle = this.fill;
                                ctx.stroke();
                            }
                        }
                    }
                }
                Matter.Body.setVelocity(this,
                    Vector.mult(Vector.rotate(this.velocity, rotate), 0.7)
                )
            }
        };
    },
    slicer(x, y, radius = 12 + Math.ceil(Math.random() * 15)) {
        const sides = 5
        mobs.spawn(x, y, sides, radius, "rgba(182, 99, 124, 1)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.accelMag = 0.00035;
        me.frictionStatic = 0;
        me.friction = 0;
        me.restitution = 1
        me.delay = 25 + Math.floor(10 * Math.random())
        me.cd = Infinity;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 400
        me.swordRadiusGrowRateInitial = 1.1
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.03 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5


        spawn.shield(me, x, y);
        me.onDamage = function () {
            this.cd = simulation.cycle + this.delay * 2;
        };
        me.onHit = function () {
            this.accelMag = 0.0004
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, -0.9)) 
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            if (!(simulation.cycle % this.seePlayerFreq)) { 
                if (
                    this.distanceToPlayer2() < this.seeAtDistance2 &&
                    Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                    !m.isCloak
                ) {
                    this.foundPlayer();
                    if (this.cd === Infinity) this.cd = simulation.cycle + this.delay * 0.7;
                } else if (this.seePlayer.recall) {
                    this.lostPlayer();
                    this.cd = Infinity
                }
            }
            this.checkStatus();
            if (this.distanceToPlayer() < 500) {
                this.accelMag = 0.0015 
                if (!this.isSlashing && m.immuneCycle < m.cycle && Matter.Query.ray(map, this.position, m.pos).length === 0) this.sword = this.swordWaiting
            } else {
                this.accelMag = 0.0004
            }
            this.attraction();
            this.sword() 


            if (this.cd < simulation.cycle && this.seePlayer.recall && this.distanceToPlayer() > 500) {
                this.cd = simulation.cycle + this.delay;
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);

                let sub = Vector.sub(this.position, m.pos)
                const angle = 300 / Vector.magnitude(sub)
                let rotate = angle * (Math.random() < 0.5 ? 1 : -1)
                let where = Vector.add(m.pos, Vector.rotate(sub, rotate))
                if (Matter.Query.ray(map, this.position, where).length === 0) {
                    Matter.Body.setPosition(this, where)
                    ctx.lineTo(this.position.x, this.position.y);
                    ctx.lineWidth = radius * 2.1;
                    ctx.strokeStyle = this.fill;
                    ctx.stroke();
                } else { 
                    rotate *= -1
                    where = Vector.add(m.pos, Vector.rotate(sub, rotate)) 
                    if (Matter.Query.ray(map, this.position, where).length === 0) {
                        Matter.Body.setPosition(this, where)
                        ctx.lineTo(this.position.x, this.position.y);
                        ctx.lineWidth = radius * 2.1;
                        ctx.strokeStyle = this.fill;
                        ctx.stroke();
                    } else {
                        rotate *= 0.5 
                        where = Vector.add(m.pos, Vector.rotate(sub, rotate)) 
                        if (Matter.Query.ray(map, this.position, where).length === 0) {
                            Matter.Body.setPosition(this, where)
                            ctx.lineTo(this.position.x, this.position.y);
                            ctx.lineWidth = radius * 2.1;
                            ctx.strokeStyle = this.fill;
                            ctx.stroke();
                        } else {
                            rotate *= -1 
                            where = Vector.add(m.pos, Vector.rotate(sub, rotate)) 
                            if (Matter.Query.ray(map, this.position, where).length === 0) {
                                Matter.Body.setPosition(this, where)
                                ctx.lineTo(this.position.x, this.position.y);
                                ctx.lineWidth = radius * 2.1;
                                ctx.strokeStyle = this.fill;
                                ctx.stroke();
                            }
                        }
                    }
                }
                Matter.Body.setVelocity(this,
                    Vector.mult(Vector.rotate(this.velocity, rotate), 0.7)
                )
            }
        };
        me.swordWaiting = function () {
            this.cd = simulation.cycle + 74;
            let dist = 0
            for (let i = 0, len = this.vertices.length; i < len; i++) {
                const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                if (D > dist) {
                    dist = D
                    this.swordVertex = i
                }
            }
            this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
            this.sword = this.swordGrow
            this.isSlashing = true
            this.cycle = 0
            this.swordRadius = this.swordRadiusInitial

            Matter.Body.setAngularVelocity(this, 0)
            const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
            const playerVector = Vector.sub(this.position, m.pos)
            const cross = Matter.Vector.cross(laserStartVector, playerVector)
            this.torque = 0.0003 * this.inertia * (cross > 0 ? 1 : -1)
        }
        me.sword = () => { } 
        me.swordGrow = function () {
            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.98))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = () => { }
                this.isSlashing = false
                this.swordRadius = 0
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(255, 0, 76, 0.1)";
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgb(255, 0, 77)";
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    revolutionBoss(x, y, radius = 70) {
        const sides = 9 + Math.floor(Math.min(12, 0.2 * simulation.difficulty))
        const coolBends = [-1.8, 0, 0, 0.9, 1.2]
        const bendFactor = coolBends[Math.floor(Math.random() * coolBends.length)];
        mobs.spawn(x, y, sides, radius, "rgb(201,202,225)");
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        me.accelMag = 0.00018 + 0.00018 * Math.sqrt(simulation.accelScale);
        me.frictionAir = 0.01;
        me.swordRadiusMax = 400 + 10 * simulation.difficulty;
        me.laserAngle = 0;
        me.swordDamage = 0.025 * me.damageScale()

        Matter.Body.setDensity(me, 0.005); 
        me.damageReduction = 0.13
        me.isBoss = true;
        me.onDamage = function () { };
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.isInvulnerable = false
        me.isNextInvulnerability = 0.75
        me.invulnerabilityCountDown = 0
        me.invulnerable = function () {
            if (this.health < this.isNextInvulnerability) {
                this.isNextInvulnerability = Math.floor(this.health * 4) / 4 
                this.isInvulnerable = true
                this.startingDamageReduction = this.damageReduction
                this.damageReduction = 0
                this.invulnerabilityCountDown = 106
            }
            if (this.isInvulnerable) {
                if (this.invulnerabilityCountDown > 0) {
                    this.invulnerabilityCountDown--
                    ctx.beginPath();
                    let vertices = this.vertices;
                    ctx.moveTo(vertices[0].x, vertices[0].y);
                    for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                    ctx.lineTo(vertices[0].x, vertices[0].y);
                    ctx.lineWidth = 13 + 5 * Math.random();
                    ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                    ctx.stroke();
                } else {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
            }
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.invulnerable();
            this.checkStatus();
            this.seePlayerByHistory(60);
            this.attraction();
            this.laserAngle += this.isInvulnerable ? 0.025 : 0.006
            for (let i = 0, len = this.vertices.length; i < len; i++) {
                const bend = bendFactor * Math.cos(this.laserAngle + 2 * Math.PI * i / len)
                const long = this.swordRadiusMax * Math.sin(this.laserAngle + 2 * Math.PI * i / len)
                if (long > 0) this.laserSword(this.vertices[i], bend + this.angle + (i + 0.5) / sides * 2 * Math.PI, Math.abs(long));
            }
        };
        me.laserSword = function (where, angle, length) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + length * Math.cos(angle), y: where.y + length * Math.sin(angle) };
            best = vertexCollision(where, look, [map, [playerBody, playerHead]]);
            if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                m.takeDamage(this.swordDamage);
                simulation.drawList.push({
                    x: best.x,
                    y: best.y,
                    radius: this.swordDamage * 1500,
                    color: "rgba(80,0,255,0.5)",
                    time: 20
                });
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(100,100,255,0.1)"; 
            ctx.lineWidth = 10;
            ctx.stroke();
            ctx.strokeStyle = "rgba(100,100,255,0.5)"; 
            ctx.lineWidth = 2;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    sprayBoss(x, y, radius = 40, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 16, radius, "rgb(255,255,255)");
        let me = mob[mob.length - 1];
        me.isBoss = true;
        me.isReactorBoss = true;
        me.inertia = Infinity; 
        me.burstFireFreq = 20
        me.burstTotalPhases = 7
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0;
        me.restitution = 1
        Matter.Body.setDensity(me, 0.002 + 0.00005 * Math.sqrt(simulation.difficulty)); 
        me.damageReduction = 0.25
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.onDeath = function () {
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 

                this.phaseCycle = -2
                this.do = this.burstFire
                this.frictionAir = 1
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };

        me.radialLines = function () {
            ctx.beginPath();
            for (let i = 0, len = this.vertices.length; i < len; i++) {
                ctx.moveTo(this.vertices[i].x, this.vertices[i].y)
                const unit = Vector.add(Vector.mult(Vector.normalise(Vector.sub(this.vertices[i], this.position)), 500), this.vertices[i])
                ctx.lineTo(unit.x, unit.y)
            }
            ctx.lineWidth = 10
            ctx.strokeStyle = "rgb(200,0,200,0.03)"
            ctx.stroke();
        }
        me.phaseCycle = 0
        me.normalDoStuff = function () {
            this.checkStatus();
            me.seePlayer.recall = 1
            if (this.speed < 0.01) {
                Matter.Body.setVelocity(this, Vector.mult(Vector.normalise(Vector.sub(player.position, this.position)), 0.1));
            } else {
                if (Math.abs(this.velocity.y) < 9) Matter.Body.setVelocity(this, { x: this.velocity.x, y: this.velocity.y * 1.03 });
                if (Math.abs(this.velocity.x) < 7) Matter.Body.setVelocity(this, { x: this.velocity.x * 1.03, y: this.velocity.y });
            }
        }
        me.burstFire = function () {
            this.normalDoStuff();
            this.radialLines()
            ctx.beginPath();
            let vertices = this.vertices;
            ctx.moveTo(vertices[0].x, vertices[0].y);
            for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.lineWidth = 11 + 3 * Math.random();
            ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
            ctx.stroke();

            if (!(simulation.cycle % this.burstFireFreq)) {
                this.phaseCycle++
                if (this.phaseCycle > this.burstTotalPhases) { 
                    this.do = this.normalDoStuff
                    this.frictionAir = 0;
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    Matter.Body.setVelocity(this, Vector.rotate({ x: 20, y: 0 }, 2 * Math.PI * Math.random()));
                    if (this.isShielded) { 
                        for (let i = 0; i < mob.length; i++) {
                            if (mob[i].shield) mob[i].death()
                        }
                    }
                }
                if (this.phaseCycle > -1) {
                    Matter.Body.rotate(this, 0.02)
                    for (let i = 0, len = this.vertices.length; i < len; i++) { 
                        spawn.sniperBullet(this.vertices[i].x, this.vertices[i].y, 6, 5);  
                        const velocity = Vector.mult(Vector.normalise(Vector.sub(this.position, this.vertices[i])), -15)
                        Matter.Body.setVelocity(mob[mob.length - 1], { x: velocity.x, y: velocity.y });
                    }
                }
            }
        };
        me.do = me.normalDoStuff
        Matter.Body.setVelocity(me, { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) });
    },
    bounceBoss(x, y, radius = 80, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 0, radius, "rgb(255,255,255)") 
        let me = mob[mob.length - 1];
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        me.isBoss = true;
        me.isReactorBoss = true;
        Matter.Body.setDensity(me, 0.003); 
        me.isVerticesChange = true
        me.damageReduction = 0.25
        me.startingDamageReduction = me.damageReduction
        me.inertia = Infinity;
        me.isInvulnerable = false
        me.frictionAir = 0.01
        me.restitution = 1
        me.friction = 0
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map | cat.mob
        Matter.Body.setVelocity(me, { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) });
        me.seePlayer.recall = 1;
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 
                this.fireCount = 60 + simulation.difficulty * 1.5
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        if (isSpawnBossPowerUp) me.onDeath = function () { powerUps.spawnBossPowerUp(this.position.x, this.position.y) };
        me.cycle = 0
        me.nextHealthThreshold = 0.75
        me.fireCount = 0

        me.do = function () {
            me.seePlayer.recall = 1
            if (this.speed < 0.01) {
                const unit = Vector.sub(player.position, this.position)
                Matter.Body.setVelocity(this, Vector.mult(Vector.normalise(unit), 0.1));
            } else {
                if (Math.abs(this.velocity.y) < 15) Matter.Body.setVelocity(this, { x: this.velocity.x, y: this.velocity.y * 1.03 });
                if (Math.abs(this.velocity.x) < 11) Matter.Body.setVelocity(this, { x: this.velocity.x * 1.03, y: this.velocity.y });
            }

            if (this.isInvulnerable) {
                this.fireCount--
                if (this.fireCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }

                if (this.mass > 10) Matter.Body.scale(this, 0.99, 0.99);

                const velocity = Vector.rotate(Vector.mult(Vector.normalise(this.velocity), -5 - 10 * Math.random()), 0.5 * (Math.random() - 0.5))
                spawn.bounceBullet(this.position.x, this.position.y, velocity)
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else if (this.mass < 100) {
                Matter.Body.scale(this, 1.01, 1.01); 
            }

            this.checkStatus();
        };
    },
    laserScanBoss(x, y, radius = 80, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 0, radius, "rgb(255,255,255)") 
        let me = mob[mob.length - 1];
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        me.isBoss = true;
        me.isReactorBoss = true;
        Matter.Body.setDensity(me, 0.003); 
        me.damageReduction = 0.25
        me.startingDamageReduction = me.damageReduction
        me.inertia = Infinity;
        me.isInvulnerable = false
        me.frictionAir = 0.01
        me.restitution = 1
        me.friction = 0
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map | cat.mob
        Matter.Body.setVelocity(me, { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) });
        me.seePlayer.recall = 1;
        me.lasers = []
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 5) / 5
                this.invulnerableCount = 180
                this.isInvulnerable = true
                this.damageReduction = 0


                const top = vertexCollision(this.position, { x: this.position.x, y: this.position.y - 3000 }, [map]);
                const bottom = vertexCollision(this.position, { x: this.position.x, y: this.position.y + 3000 }, [map]);
                this.lasers.push(level.laser({ x: this.position.x, y: top.y }, { x: this.position.x, y: bottom.y }))

                const left = vertexCollision(this.position, { x: this.position.x - 3000, y: this.position.y }, [map]);
                const right = vertexCollision(this.position, { x: this.position.x + 3000, y: this.position.y }, [map]);
                this.lasers.push(level.laser({ x: left.x, y: this.position.y }, { x: right.x, y: this.position.y }))

                spawn.seeker(this.position.x, top.y, this.tier);
                spawn.seeker(this.position.x, bottom.y, this.tier);
                spawn.seeker(left.x, this.position.y, this.tier);
                spawn.seeker(right.x, this.position.y, this.tier);
            }
        };
        if (isSpawnBossPowerUp) me.onDeath = function () { powerUps.spawnBossPowerUp(this.position.x, this.position.y) };
        me.cycle = 0
        me.nextHealthThreshold = 0.8
        me.invulnerableCount = 0

        me.do = function () {
            me.seePlayer.recall = 1
            if (this.speed < 0.01) {
                const unit = Vector.sub(player.position, this.position)
                Matter.Body.setVelocity(this, Vector.mult(Vector.normalise(unit), 0.1));
            } else {
                if (Math.abs(this.velocity.y) < 15) Matter.Body.setVelocity(this, { x: this.velocity.x, y: this.velocity.y * 1.03 });
                if (Math.abs(this.velocity.x) < 11) Matter.Body.setVelocity(this, { x: this.velocity.x * 1.03, y: this.velocity.y });
            }

            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else if (this.mass < 100) {
                Matter.Body.scale(this, 1.01, 1.01); 
            }

            this.checkStatus();

            for (let i = 0; i < this.lasers.length; i++) {
                this.lasers[i].motionQuery()
            }
        };
    },
    timeBoss(x, y, radius = 50, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 0, radius, `hsl(0, 100%, 50%)`) 
        let me = mob[mob.length - 1];
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        me.isBoss = true;
        me.isReactorBoss = true;
        me.inertia = Infinity;
        me.frictionAir = 0.01
        me.restitution = 1
        me.friction = 0
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map | cat.mob
        Matter.Body.setVelocity(me, { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) });
        me.seePlayer.recall = 1;
        for (let i = 0, len = 2 + 0.3 * Math.sqrt(simulation.difficulty); i < len; i++) spawn.spawnOrbitals(me, radius + 10 + 10 * i, 1);
        Matter.Body.setDensity(me, 0.001); 
        me.damageReduction = 0.1
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 
                this.invulnerableCount = 420 + simulation.difficulty * 5 
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        me.onDeath = function () {
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            requestAnimationFrame(() => { simulation.timePlayerSkip(60) }); 
        };

        me.cycle = Math.floor(360 * Math.random())
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.do = function () {
            this.cycle++
            this.fill = `hsl(${this.cycle * 0.5}, 100%, 80%)`;
            this.seePlayer.recall = 1
            if (this.speed < 0.01) {
                const unit = Vector.sub(player.position, this.position)
                Matter.Body.setVelocity(this, Vector.mult(Vector.normalise(unit), 0.1));
            } else {
                if (Math.abs(this.velocity.y) < 10) Matter.Body.setVelocity(this, { x: this.velocity.x, y: this.velocity.y * 1.02 });
                if (Math.abs(this.velocity.x) < 7) Matter.Body.setVelocity(this, { x: this.velocity.x * 1.02, y: this.velocity.y });
            }

            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                if (!simulation.isTimeSkipping) {
                    requestAnimationFrame(() => {
                        simulation.timePlayerSkip(2)
                        m.walk_cycle += m.flipLegs * m.Vx 
                    }); 


                    ctx.beginPath();
                    let vertices = this.vertices;
                    ctx.moveTo(vertices[0].x, vertices[0].y);
                    for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                    ctx.lineTo(vertices[0].x, vertices[0].y);
                    ctx.lineWidth = 15 + 6 * Math.random();
                    ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                    ctx.stroke();
                }
            }

            this.checkStatus();
        };
    },
    bounceBullet(x, y, velocity = { x: 0, y: 0 }, radius = 11, sides = 6) {
        mobs.spawn(x, y, sides, radius, "rgb(255,0,155)");
        let me = mob[mob.length - 1];
        me.stroke = "transparent";
        Matter.Body.setDensity(me, 0.00001); 
        me.timeLeft = 300 + Math.floor(120 * Math.random())
        me.inertia = Infinity;
        me.damageReduction = 1
        me.frictionAir = 0
        me.friction = 0
        me.restitution = 1
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map | cat.mob

        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.onHit = function () {
            this.explode(this.mass * 12);
        };
        me.do = function () {
            this.timeLimit();
        };
        Matter.Body.setVelocity(me, velocity);
    },
    mineBoss(x, y, radius = 120, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 0, radius, "rgba(255,255,255,0.5)") 
        let me = mob[mob.length - 1];
        me.isBoss = true;
        me.isReactorBoss = true;
        Matter.Body.setDensity(me, 0.001); 
        me.damageReduction = 0.056
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.cycle = 0
        me.inertia = Infinity;
        me.frictionAir = 0.01
        me.restitution = 1
        me.friction = 0
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map | cat.mob
        me.explodeRange = 400
        Matter.Body.setVelocity(me, { x: 10 * (Math.random() - 0.5), y: 10 * (Math.random() - 0.5) });
        me.seePlayer.recall = 1;
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 60 + simulation.difficulty * 1.5
                this.isInvulnerable = true
                this.damageReduction = 0

                for (let i = 0, len = mob.length; i < len; ++i) { 
                    if (mob[i].isMine && Vector.magnitude(Vector.sub(this.position, mob[i].position)) < this.explodeRange) mob[i].isExploding = true
                }
                simulation.drawList.push({
                    x: this.position.x,
                    y: this.position.y,
                    radius: this.explodeRange,
                    color: "rgba(255,25,0,0.6)",
                    time: simulation.drawTime * 2
                });

            }
        };
        me.onDeath = function () {
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let i = 0, len = mob.length; i < len; ++i) { 
                if (mob[i].isMine && Vector.magnitude(Vector.sub(this.position, mob[i].position)) < this.explodeRange) mob[i].isExploding = true
            }
        };
        me.do = function () {
            me.seePlayer.recall = 1
            if (this.speed < 0.01) {
                const unit = Vector.sub(player.position, this.position)
                Matter.Body.setVelocity(this, Vector.mult(Vector.normalise(unit), 0.1));
            } else {
                if (Math.abs(this.velocity.y) < 10) {
                    Matter.Body.setVelocity(this, { x: this.velocity.x, y: this.velocity.y * 1.03 });
                }
                if (Math.abs(this.velocity.x) < 7) {
                    Matter.Body.setVelocity(this, { x: this.velocity.x * 1.03, y: this.velocity.y });
                }
            }
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
            this.checkStatus();
            if (!(simulation.cycle % 15) && mob.length < 360 * (localSettings.isHideHUD ? 0.5 : 1)) spawn.mine(this.position.x, this.position.y)
        };
    },
    mine(x, y) {
        mobs.spawn(x, y, 8, 10, "rgb(255, 255, 255)"); 
        let me = mob[mob.length - 1];
        me.stroke = "transparent";
        Matter.Body.setDensity(me, 0.0001); 
        me.frictionAir = 1
        me.damageReduction = 2
        me.collisionFilter.mask = cat.bullet 
        me.isMine = true
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.isUnstable = true; 
        me.explodeRange = 210 + 140 * Math.random()
        me.isExploding = false
        me.countDown = 3 + Math.ceil(4 * Math.random())
        me.isInvulnerable = true 

        me.do = function () {
            this.checkStatus();

            if (Matter.Query.collides(this, [player]).length > 0 && !(m.isCloak && tech.isIntangible) && m.immuneCycle < m.cycle) this.isExploding = true

            if (this.isExploding) {
                if (this.countDown-- < 0) { 
                    this.death();
                    if (Vector.magnitude(Vector.sub(this.position, player.position)) < this.explodeRange && m.immuneCycle < m.cycle) {
                        m.takeDamage(0.02 * this.damageScale() * (tech.isRadioactiveResistance ? 0.2 : 1));
                        m.energy -= 0.2 * (tech.isRadioactiveResistance ? 0.2 : 1)
                        if (m.energy < 0) m.energy = 0
                    }
                    const range = this.explodeRange + 50 
                    for (let i = 0, len = mob.length; i < len; ++i) {
                        if (mob[i].alive && Vector.magnitude(Vector.sub(this.position, mob[i].position)) < range) {
                            if (mob[i].isMine) mob[i].isExploding = true 
                        }
                    }
                    simulation.drawList.push({
                        x: this.position.x,
                        y: this.position.y,
                        radius: this.explodeRange,
                        color: "rgba(80,220,190,0.45)",
                        time: 16
                    });
                }
            }
        };
    },
    trainBoss(x, y, radius = 50, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 0, radius, "rgba(255,0,155,1)") 
        let me = mob[mob.length - 1];
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.015); 
        me.damageReduction = 1
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.seeAtDistance2 = 4000000; 
        me.cycle = 0
        me.accelMag = 0.023 
        me.frictionAir = 1
        me.restitution = 1
        me.friction = 0
        me.collisionFilter.mask = cat.bullet 
        me.seePlayer.recall = 1;
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 50 + simulation.difficultyMode * 10
                this.isInvulnerable = true
                this.damageReduction = 0
                for (let i = 0, len = mob.length; i < len; ++i) { 
                    if (mob[i].isMine) mob[i].isExploding = true
                }
                this.ammo = 15 + simulation.difficultyMode * 6 + level.levelsCleared
            }
        };

        me.ammo = 20 + simulation.difficultyMode * 8 + level.levelsCleared * 2
        me.onDeath = function () {
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let i = 0, len = mob.length; i < len; ++i) { 
                if (mob[i].isMine && Vector.magnitude(Vector.sub(this.position, mob[i].position)) < this.explodeRange) mob[i].isExploding = true
            }
            if (level.levelsCleared > 6)
                for (let i = 0; i < 20; i++) {
                    const velocity = Vector.rotate(Vector.mult(Vector.normalise(this.velocity), -5 - 10 * Math.random()), 0.5 * (Math.random() - 0.5))
                    spawn.bounceBullet(this.position.x, this.position.y, velocity)
                }
        };
        me.trackIndex = 0
        me.track = [
            { x: -2750, y: 925 },
            { x: -2250, y: 925 },
            { x: -1750, y: 925 },
            { x: -1250, y: 925 },
            { x: -751, y: 925 },
            { x: -313.25, y: 925 },
            { x: 124.5, y: 925 },
            { x: 562.25, y: 925 },
            { x: 1000, y: 925 },
            { x: 1453.4, y: 925 },
            { x: 1906.8, y: 925 },
            { x: 2360.2, y: 925 },
            { x: 2813.6, y: 925 },
            { x: 3267, y: 925 },
            { x: 3500, y: 650 },
            { x: 3501, y: 266.67 },
            { x: 3502, y: -116.67 },
            { x: 3503, y: -500 },
            { x: 4000, y: -500 },
            { x: 4500, y: -500 },
            { x: 5000, y: -500 },
            { x: 5500, y: -500 },
            { x: 6000, y: -500 },
            { x: 6500, y: -500 },
            { x: 7000, y: -500 },
            { x: 7500, y: -500 },
            { x: 8000, y: -500 },
            { x: 8500, y: -500 },
            { x: 9000, y: -500 },
            { x: 9500, y: -500 },
            { x: 10000, y: -500 },
            { x: 10500, y: -500 },
            { x: 11000, y: -500 },
            { x: 11440, y: -500 },
            { x: 11880, y: -500 },
            { x: 12320, y: -500 },
            { x: 12760, y: -500 },
            { x: 13200, y: -500 },
            { x: 12843.67, y: -675 },
            { x: 12487.33, y: -850 },
            { x: 12131, y: -1025 },
            { x: 11638, y: -1025 },
            { x: 11145, y: -1025 },
            { x: 10739.33, y: -1083.33 },
            { x: 10333.67, y: -1141.67 },
            { x: 9928, y: -1200 },
            { x: 9471, y: -1200 },
            { x: 9014, y: -1200 },
            { x: 8557, y: -1200 },
            { x: 8100, y: -1200 },
            { x: 7950, y: -1412.5 },
            { x: 7800, y: -1625 },
            { x: 7350, y: -1625 },
            { x: 6900, y: -1625 },
            { x: 6450, y: -1625 },
            { x: 6000, y: -1625 },
            { x: 5500, y: -1625 },
            { x: 5000, y: -1625 },
            { x: 4500, y: -1625 },
            { x: 4000, y: -1625 },
            { x: 3500, y: -1625 },
            { x: 3000, y: -1625 },
            { x: 2500, y: -1625 },
            { x: 2000, y: -1625 },
            { x: 1500, y: -1625 },
            { x: 1000, y: -1625 },
            { x: 500, y: -1625 },
            { x: 0, y: -1625 },
            { x: -500, y: -1625 },
            { x: -1000, y: -1625 },
            { x: -1440, y: -1625 },
            { x: -1880, y: -1625 },
            { x: -2320, y: -1625 },
            { x: -2760, y: -1625 },
            { x: -3200, y: -1625 },
            { x: -3200, y: -1200 },
            { x: -3200, y: -775 },
            { x: -3200, y: -350 },
            { x: -3200, y: 75 },
            { x: -3200, y: 500 },
            { x: -3200, y: 925 }
        ]

        Matter.Body.setPosition(me, me.track[me.trackIndex])
        me.do = function () {

            const where = this.track[this.trackIndex]
            const sub = Vector.sub(where, this.position)
            const force = Vector.mult(Vector.normalise(sub), this.accelMag * this.mass)
            this.force.x += force.x;
            this.force.y += force.y;
            if (Vector.magnitude(sub) < 20) {
                this.trackIndex++
                if (this.trackIndex === this.track.length) this.trackIndex = 0
            }
            let index = this.trackIndex - 2
            if (index < 0) index = this.track.length - 1
            ctx.beginPath();
            ctx.moveTo(this.track[index].x, this.track[index].y);
            for (let i = 0; i < 5; i++) {
                index++
                if (index > this.track.length - 1) index = 0
                ctx.lineTo(this.track[index].x, this.track[index].y);
            }
            ctx.lineWidth = 5
            ctx.strokeStyle = "rgba(255,0,155,1)"
            ctx.stroke();

            index = this.trackIndex - 2
            if (index < 0) index = this.track.length - 1
            ctx.beginPath();
            ctx.arc(this.track[index].x, this.track[index].y, 7, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(255,0,155,1)"
            ctx.fill();
            for (let i = 0; i < 5; i++) {
                index++
                if (index > this.track.length - 1) index = 0
                ctx.beginPath();
                ctx.arc(this.track[index].x, this.track[index].y, 7, 0, 2 * Math.PI);
                ctx.fill();
            }
            if (this.distanceToPlayer2() < this.seeAtDistance2) { 
                me.accelMag = 0.023 
                if ((Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0) && !m.isCloak) this.foundPlayer();
            } else {
                me.accelMag = 0.1 
                if (this.seePlayer.recall) this.lostPlayer();
            }
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
                if (!(simulation.cycle % 12) && mob.length < 360 * (localSettings.isHideHUD ? 0.5 : 1) && level.levelsCleared > 5) {
                    spawn.mine(this.position.x, this.position.y)
                }
            } else if (this.seePlayer.recall && this.ammo && !(simulation.cycle % 7)) {
                this.ammo--
                const v = 8 + Math.floor(4 * Math.random()) + simulation.difficultyMode
                const sub = Vector.sub(m.pos, this.position)
                const fireDir = Vector.rotate(Vector.mult(Vector.normalise(sub), v), 0.12 * (Math.random() - 0.5))
                spawn.bounceBullet(this.position.x, this.position.y, Vector.add(fireDir, Vector.mult(this.velocity, 0.4)))
            }
            this.checkStatus();
        };
    },
    trainBoss2(x, y, radius = 50, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 0, radius, "rgba(255, 255, 0, 1)") 
        let me = mob[mob.length - 1];
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.015); 
        me.damageReduction = 1
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.seeAtDistance2 = 4000000; 
        me.cycle = 0
        me.accelMag = 0.03 
        me.frictionAir = 1
        me.restitution = 1
        me.friction = 0
        me.collisionFilter.mask = cat.bullet 
        me.seePlayer.recall = 1;
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 45 + simulation.difficultyMode * 6
                this.isInvulnerable = true
                this.damageReduction = 0
                for (let i = 0, len = mob.length; i < len; ++i) { 
                    if (mob[i].isMine) mob[i].isExploding = true
                }
                this.ammo = 15 + simulation.difficultyMode * 6 + level.levelsCleared
            }
        };
        me.ammo = 20 + simulation.difficultyMode * 8 + level.levelsCleared * 2
        me.onDeath = function () {
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.trackIndex = 0
        me.track = [
            { x: -3200, y: 925 },
            { x: -3200, y: 500 },
            { x: -3200, y: 75 },
            { x: -3200, y: -350 },
            { x: -3200, y: -775 },
            { x: -3200, y: -1200 },
            { x: -3200, y: -1625 },
            { x: -2760, y: -1625 },
            { x: -2320, y: -1625 },
            { x: -1880, y: -1625 },
            { x: -1440, y: -1625 },
            { x: -1000, y: -1625 },
            { x: -500, y: -1625 },
            { x: 0, y: -1625 },
            { x: 500, y: -1625 },
            { x: 1000, y: -1625 },
            { x: 1500, y: -1625 },
            { x: 2000, y: -1625 },
            { x: 2500, y: -1625 },
            { x: 3000, y: -1625 },
            { x: 3500, y: -1625 },
            { x: 4000, y: -1625 },
            { x: 4500, y: -1625 },
            { x: 5000, y: -1625 },
            { x: 5500, y: -1625 },
            { x: 6000, y: -1625 },
            { x: 6450, y: -1625 },
            { x: 6900, y: -1625 },
            { x: 7350, y: -1625 },
            { x: 7800, y: -1625 },
            { x: 7950, y: -1412.5 },
            { x: 8100, y: -1200 },
            { x: 8557, y: -1200 },
            { x: 9014, y: -1200 },
            { x: 9471, y: -1200 },
            { x: 9928, y: -1200 },
            { x: 10333.67, y: -1141.67 },
            { x: 10739.33, y: -1083.33 },
            { x: 11145, y: -1025 },
            { x: 11638, y: -1025 },
            { x: 12131, y: -1025 },
            { x: 12487.33, y: -850 },
            { x: 12843.67, y: -675 },
            { x: 13200, y: -500 },
            { x: 12760, y: -500 },
            { x: 12320, y: -500 },
            { x: 11880, y: -500 },
            { x: 11440, y: -500 },
            { x: 11000, y: -500 },
            { x: 10500, y: -500 },
            { x: 10000, y: -500 },
            { x: 9500, y: -500 },
            { x: 9000, y: -500 },
            { x: 8500, y: -500 },
            { x: 8000, y: -500 },
            { x: 7500, y: -500 },
            { x: 7000, y: -500 },
            { x: 6500, y: -500 },
            { x: 6000, y: -500 },
            { x: 5500, y: -500 },
            { x: 5000, y: -500 },
            { x: 4500, y: -500 },
            { x: 4000, y: -500 },
            { x: 3503, y: -500 },
            { x: 3502, y: -116.67 },
            { x: 3501, y: 266.67 },
            { x: 3500, y: 650 },
            { x: 3267, y: 925 },
            { x: 2813.6, y: 925 },
            { x: 2360.2, y: 925 },
            { x: 1906.8, y: 925 },
            { x: 1453.4, y: 925 },
            { x: 1000, y: 925 },
            { x: 562.25, y: 925 },
            { x: 124.5, y: 925 },
            { x: -313.25, y: 925 },
            { x: -751, y: 925 },
            { x: -1250, y: 925 },
            { x: -1750, y: 925 },
            { x: -2250, y: 925 },
            { x: -2750, y: 925 }
        ];
        me.smoothAngle = 0

        Matter.Body.setPosition(me, me.track[me.trackIndex])
        me.do = function () {
            const where = this.track[this.trackIndex]
            const sub = Vector.sub(where, this.position)
            const force = Vector.mult(Vector.normalise(sub), this.accelMag * this.mass)
            this.force.x += force.x;
            this.force.y += force.y;
            if (Vector.magnitude(sub) < 20) {
                this.trackIndex++
                if (this.trackIndex === this.track.length) this.trackIndex = 0
            }
            let index = this.trackIndex - 3

            index = this.trackIndex - 3
            if (index < 0) index = this.track.length - 1
            ctx.beginPath();
            ctx.arc(this.track[index].x, this.track[index].y, 7, 0, 2 * Math.PI);
            ctx.fillStyle = "#fff"
            ctx.fill();
            for (let i = 0; i < 7; i++) {
                index++
                if (index > this.track.length - 1) index = 0
                ctx.beginPath();
                ctx.arc(this.track[index].x, this.track[index].y, 7, 0, 2 * Math.PI);
                ctx.fill();
            }
            if (this.distanceToPlayer2() < this.seeAtDistance2) { 
                me.accelMag = 0.03 
                if ((Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0) && !m.isCloak) this.foundPlayer();
            } else {
                me.accelMag = 0.1 
                if (this.seePlayer.recall) this.lostPlayer();
            }
            if (!this.isStunned) {
                let slowed = false
                for (let i = 0; i < this.status.length; i++) {
                    if (this.status[i].type === "slow") {
                        slowed = true
                        break
                    }
                }
                if (!slowed) {
                    this.count++
                }

                let isResetAngle = false
                index = this.trackIndex - 3
                if (index < 0) index = this.track.length - 1
                const startPos = this.track[index]
                for (let i = 0; i < 6; i++) {
                    index++
                    if (index > this.track.length - 1) {
                        index = 0
                        isResetAngle = true
                    }
                }
                const a = Vector.angle(startPos, this.track[index])
                this.smoothAngle = 0.9 * this.smoothAngle + 0.1 * a
                if (isResetAngle) this.smoothAngle = a

                ctx.beginPath();
                index = this.trackIndex - 3
                if (index < 0) index = this.track.length - 1
                for (let i = 0; i < 8; i++) {
                    let dist = Vector.magnitude(Vector.sub(this.position, this.track[index]))
                    dist = 0.4 * Math.ceil(1300 - dist, 0)
                    if (dist > 10) {
                        this.laserArray(this.track[index], this.smoothAngle + Math.PI / 2, dist);
                        this.laserArray(this.track[index], this.smoothAngle - Math.PI / 2, dist);
                    }
                    index++
                    if (index > this.track.length - 1) index = 0
                }


                ctx.strokeStyle = "rgba(255, 255, 0, 1)";
                ctx.lineWidth = 3;
                ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
                ctx.stroke(); 
                ctx.setLineDash([]);
                ctx.lineWidth = 40;
                ctx.strokeStyle = "rgba(255, 255, 0, 0.15)";
                ctx.stroke(); 
            }
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
                const delay = Math.max(12, 150 - 11 * simulation.difficultyMode - 3 * level.levelsCleared)
                if (!(simulation.cycle % delay) && mob.length < (360 * (localSettings.isHideHUD ? 0.5 : 1))) {
                    index = this.trackIndex - 3
                    if (index < 0) index = this.track.length - 1
                    for (let i = 0; i < 6; i++) {
                        index++
                        if (index > this.track.length - 1) index = 0
                        spawn.freezeGrenade(this.track[index].x, this.track[index].y, null, 40, 80 + 20 * simulation.difficultyMode); 
                    }
                }
            }
            this.checkStatus();
        };
        me.laserArray = function (where, angle, seeRange = 1000) {
            best = {
                x: null,
                y: null,
                dist2: Infinity,
                who: null,
                v1: null,
                v2: null
            };
            const look = { x: where.x + seeRange * Math.cos(angle), y: where.y + seeRange * Math.sin(angle) };
            best = vertexCollision(where, look, m.isCloak ? [map, body] : [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles + 30; 
                const dmg = 0.06 * this.damageScale();
                m.takeDamage(dmg);
                simulation.drawList.push({
                    x: best.x,
                    y: best.y,
                    radius: dmg * 1500,
                    color: "rgba(80,0,255,0.5)",
                    time: 20
                });
            }
            if (best.dist2 === Infinity) best = look;
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
        }
    },
    slashBoss(x, y, radius = 80) {
        mobs.spawn(x, y, 5, radius, "rgb(201,202,225)");
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        me.isBoss = true;
        me.damageReduction = 0.11
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.frictionAir = 0.02
        me.seeAtDistance2 = 1000000;
        me.accelMag = 0.0006
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map
        me.memory = Infinity;
        me.seePlayerFreq = 20
        me.lockedOn = null;
        me.torqueMagnitude = 0.00024 * me.inertia * (Math.random() > 0.5 ? -1 : 1);
        me.delay = 150;
        me.cd = 0;
        me.swordRadius = 50;
        me.swordVertex = 1
        me.swordRadiusMax = 900 + 20 * simulation.difficulty;
        me.swordRadiusGrowRate = me.swordRadiusMax * (0.005 + 0.0003 * simulation.difficulty)
        me.isSlashing = false;
        me.swordDamage = 0.07 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        const seeDistance2 = 200000
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByHistory(40);
            this.attraction();
            this.checkStatus();
            this.sword() 

        };
        me.swordWaiting = function () {
            if (
                this.seePlayer.recall &&
                this.cd < simulation.cycle &&
                this.distanceToPlayer2() < seeDistance2 &&
                !m.isCloak &&
                Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
            ) {

                this.sword = this.swordGrow
                Matter.Body.setVelocity(this, { x: 0, y: 0 });
                Matter.Body.setAngularVelocity(this, 0)
                this.accelMag = 0
                this.damageReduction = 0
                this.isInvulnerable = true
                this.frictionAir = 1
            }
            this.laserSword(this.vertices[this.swordVertex], this.angle + this.laserAngle); 
        }
        me.sword = me.swordWaiting 
        me.swordGrow = function () {
            this.laserSword(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            this.swordRadius += this.swordRadiusGrowRate
            if (this.swordRadius > this.swordRadiusMax) {
                this.sword = this.swordSlash
                this.spinCount = 0
            }

            ctx.beginPath();
            let vertices = this.vertices;
            ctx.moveTo(vertices[0].x, vertices[0].y);
            for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.lineWidth = 13 + 5 * Math.random();
            ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
            ctx.stroke();
        }
        me.swordSlash = function () {
            this.laserSword(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            this.torque += this.torqueMagnitude;
            this.spinCount++
            if (this.spinCount > 80) {
                this.sword = this.swordWaiting
                this.swordRadius = 50
                this.accelMag = 0.001 * simulation.accelScale;
                this.cd = simulation.cycle + this.delay;
                this.damageReduction = this.startingDamageReduction
                this.isInvulnerable = false
                this.frictionAir = 0.01
            }
            ctx.beginPath();
            let vertices = this.vertices;
            ctx.moveTo(vertices[0].x, vertices[0].y);
            for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.lineWidth = 13 + 5 * Math.random();
            ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
            ctx.stroke();
        }
        me.laserSword = function (where, angle) {

            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                m.takeDamage(this.swordDamage);
                simulation.drawList.push({
                    x: best.x,
                    y: best.y,
                    radius: this.swordDamage * 1500,
                    color: "rgba(80,0,255,0.5)",
                    time: 20
                });
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(100,100,255,0.1)"; 
            ctx.lineWidth = 25;
            ctx.stroke();
            ctx.strokeStyle = "rgba(100,100,255,0.5)"; 
            ctx.lineWidth = 5;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    slasher(x, y, radius = 33 + Math.ceil(Math.random() * 30)) {
        mobs.spawn(x, y, 5, radius, "rgb(201,202,225)");
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        me.accelMag = 0.0008 * simulation.accelScale;
        me.torqueMagnitude = 0.00002 * me.inertia * (Math.random() > 0.5 ? -1 : 1);
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.035;
        me.delay = 120 * simulation.CDScale;
        me.cd = 0;
        me.swordRadius = 0;
        me.swordVertex = 1
        me.swordRadiusMax = 350 + 5 * simulation.difficulty;
        me.swordRadiusGrowRate = me.swordRadiusMax * (0.018 + 0.0006 * simulation.difficulty)
        me.isSlashing = false;
        me.swordDamage = 0.04 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        const seeDistance2 = 200000
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.checkStatus();
            this.seePlayerByHistory(15);
            this.attraction();
            this.sword() 
        };
        me.swordWaiting = function () {
            if (
                this.seePlayer.recall &&
                this.cd < simulation.cycle &&
                this.distanceToPlayer2() < seeDistance2 &&
                Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
            ) {
                let dist = 0
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                    if (D > dist) {
                        dist = D
                        this.swordVertex = i
                    }
                }
                this.laserAngle = this.swordVertex / 5 * 2 * Math.PI + 0.6283
                this.sword = this.swordGrow
                this.accelMag = 0
            }
        }
        me.sword = me.swordWaiting 
        me.swordGrow = function () {
            this.laserSword(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            this.swordRadius += this.swordRadiusGrowRate
            if (this.swordRadius > this.swordRadiusMax || this.isStunned) {
                this.sword = this.swordSlash
                this.spinCount = 0
            }
        }
        me.swordSlash = function () {
            this.laserSword(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            this.torque += this.torqueMagnitude;
            this.spinCount++
            if (this.spinCount > 60 || this.isStunned) {
                this.sword = this.swordWaiting
                this.swordRadius = 0
                this.accelMag = 0.001 * simulation.accelScale;
                this.cd = simulation.cycle + this.delay;
            }
        }
        me.laserSword = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);
            if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                m.takeDamage(this.swordDamage);
                simulation.drawList.push({
                    x: best.x,
                    y: best.y,
                    radius: this.swordDamage * 1500,
                    color: "rgba(80,0,255,0.5)",
                    time: 20
                });
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(100,100,255,0.1)"; 
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgba(100,100,255,0.5)"; 
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    slasher2(x, y, radius = 33 + Math.ceil(Math.random() * 30)) {
        mobs.spawn(x, y, 6, radius, "rgb(180,199,245)");
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        me.accelMag = 0.001 * simulation.accelScale;
        me.torqueMagnitude = -0.000012 * me.inertia 
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.035;
        me.delay = 140 * simulation.CDScale;
        me.cd = 0;
        me.swordRadius = 0;
        me.swordVertex = 1
        me.swordRadiusMax = 320 + 3.6 * simulation.difficulty;
        me.swordRadiusGrowRate = me.swordRadiusMax * (0.011 + 0.0002 * simulation.difficulty)
        me.isSlashing = false;
        me.swordDamage = 0.03 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        const seeDistance2 = 200000
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.checkStatus();
            this.seePlayerByHistory(15);
            this.attraction();
            this.sword() 
        };
        me.swordWaiting = function () {
            if (
                this.seePlayer.recall &&
                this.cd < simulation.cycle &&
                this.distanceToPlayer2() < seeDistance2 &&
                Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
            ) {
                this.laserAngle = -Math.PI / 6
                this.sword = this.swordGrow
                this.accelMag = 0
            }
        }
        me.sword = me.swordWaiting 
        me.swordGrow = function () {
            this.laserSword(this.vertices[0], this.angle + this.laserAngle);
            this.laserSword(this.vertices[3], this.angle + this.laserAngle + Math.PI);
            this.swordRadius += this.swordRadiusGrowRate
            if (this.swordRadius > this.swordRadiusMax || this.isStunned) {
                this.sword = this.swordSlash
                this.spinCount = 0
            }
        }
        me.swordSlash = function () {
            this.laserSword(this.vertices[0], this.angle + this.laserAngle);
            this.laserSword(this.vertices[3], this.angle + this.laserAngle + Math.PI);

            this.torque += this.torqueMagnitude;
            this.spinCount++
            if (this.spinCount > 100 || this.isStunned) {
                this.sword = this.swordWaiting
                this.swordRadius = 0
                this.accelMag = 0.001 * simulation.accelScale;
                this.cd = simulation.cycle + this.delay;
            }
        }
        me.laserSword = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);
            if (best.who && (best.who === playerBody || best.who === playerHead) && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                m.takeDamage(this.swordDamage);
                simulation.drawList.push({
                    x: best.x,
                    y: best.y,
                    radius: this.swordDamage * 1500,
                    color: "rgba(80,0,255,0.5)",
                    time: 20
                });
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(100,100,255,0.1)"; 
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgba(100,100,255,0.5)"; 
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    slasher3(x, y, radius = 33 + Math.ceil(Math.random() * 30)) {
        const sides = 6
        mobs.spawn(x, y, sides, radius, "rgb(95, 61, 188)");
        let me = mob[mob.length - 1];
        me.tier = 3
        Matter.Body.rotate(me, 2 * Math.PI * Math.random());
        Matter.Body.setDensity(me, 0.0012); 
        me.accelMag = 0.0007 * simulation.accelScale;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.02;
        me.delay = 120 * simulation.CDScale;
        me.cd = 0;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 800 + 6 * simulation.difficulty;
        me.swordRadiusGrowRateInitial = 1.15
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.03 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        const seeDistance2 = me.swordRadiusMax * me.swordRadiusMax
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.checkStatus();
            this.seePlayerByHistory(15);
            this.sword() 
        };
        me.swordWaiting = function () {
            this.attraction();
            if (
                this.seePlayer.recall &&
                this.cd < simulation.cycle &&
                this.distanceToPlayer2() < seeDistance2 &&
                Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
            ) {
                let dist = Infinity
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                    if (D < dist) {
                        dist = D
                        this.swordVertex = i
                    }
                }
                this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
                this.sword = this.swordGrow
                this.cycle = 0
                this.swordRadius = this.swordRadiusInitial
                Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.5))
                const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
                const playerVector = Vector.sub(this.position, m.pos)
                const cross = Matter.Vector.cross(laserStartVector, playerVector)
                this.torque = 0.00002 * this.inertia * (cross > 0 ? 1 : -1)
            }
        }
        me.sword = me.swordWaiting 
        me.swordGrow = function () {
            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.9))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = this.swordWaiting
                this.swordRadius = 0
                this.cd = simulation.cycle + this.delay;
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(100,100,255,0.1)"; 
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgba(100,100,255,0.5)"; 
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    slasher4(x, y, radius = 40) {
        const sides = 5
        mobs.spawn(x, y, sides, radius, "rgb(100, 100, 100)");
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.0065); 
        me.accelMag = 0.0004 * simulation.accelScale;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.02;
        me.delay = 110 * simulation.CDScale;
        me.cd = 0;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 600
        me.swordRadiusGrowRateInitial = 1.05
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.06 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        const seeDistance2 = me.swordRadiusMax * me.swordRadiusMax
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.checkStatus();
            this.seePlayerByHistory(25);
            this.sword() 
        };
        me.swordWaiting = function () {
            this.attraction();
            if (
                this.seePlayer.recall &&
                this.cd < simulation.cycle &&
                this.distanceToPlayer2() < seeDistance2 &&
                Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
            ) {
                let dist = Infinity
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                    if (D < dist) {
                        dist = D
                        this.swordVertex = i
                    }
                }
                this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
                this.sword = this.swordGrow
                this.cycle = 0
                this.swordRadius = this.swordRadiusInitial
                Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.7))
                const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
                const playerVector = Vector.sub(this.position, m.pos)
                const cross = Matter.Vector.cross(laserStartVector, playerVector)
                this.torque = 0.00002 * this.inertia * (cross > 0 ? 1 : -1)
            }
        }
        me.sword = me.swordWaiting 
        me.swordGrow = function () {

            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);

            const vertex1 = this.swordVertex === 0 ? this.vertices.length - 1 : this.swordVertex - 1
            this.laserSpear(this.vertices[vertex1], this.angle + this.laserAngle - 0.2);

            const vertex2 = this.swordVertex === this.vertices.length - 1 ? 0 : this.swordVertex + 1
            this.laserSpear(this.vertices[vertex2], this.angle + this.laserAngle + 0.2);

            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.98))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = this.swordWaiting
                this.swordRadius = 0
                this.cd = simulation.cycle + this.delay;
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(0, 162, 255, 0.1)"; 
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgba(0, 162, 255, 0.5)"; 
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    slasher5(x, y, radius = 45) {
        const sides = 6
        mobs.spawn(x, y, sides, radius, "rgb(255, 255, 255)");
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.009); 
        me.accelMag = 0.0006
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.04;
        me.swordDamage = 0.06 * me.damageScale()
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.swords = [
            { index: 0, long: 0, cycle: 262 },
            { index: 4, long: 0, cycle: 52 },
        ]
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.checkStatus();
            if (!this.isStunned) {
                this.seePlayerByHistory(40);
                this.attraction()
                this.torque = 0.0000004 * this.inertia
                const mag = 350
                for (let i = 0, len = this.swords.length; i < len; i++) {
                    this.swords[i].cycle++
                    this.swords[i].long = mag * Math.sin(this.swords[i].cycle * 0.007)
                    if (this.swords[i].long < 1) {
                        this.swords[i].cycle = 0
                        this.swords[i].index++
                        if (this.swords[i].index > sides - 1) this.swords[i].index = 0
                    }
                    this.laserSpear(this.vertices[this.swords[i].index], this.angle + this.swords[i].index / sides * 2 * Math.PI + Math.PI / sides, Math.max(10, this.swords[i].long));
                }
            }

        };
        me.laserSpear = function (where, angle, radius) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + radius * Math.cos(angle), y: where.y + radius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(255, 255, 255, 0.9)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"; 
            ctx.lineWidth = 25;
            ctx.stroke();
            ctx.strokeStyle = "rgba(255, 255, 255, 1)"; 
            ctx.lineWidth = 3;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    spiker(x, y, radius = 35 + Math.ceil(Math.random() * 30)) {
        const sides = 6

        mobs.spawn(x, y, sides, radius, "rgb(0,200,180)");
        let me = mob[mob.length - 1];
        Matter.Body.setDensity(me, 0.0015); 
        me.accelMag = 0.05;
        me.g = 0.0032; 
        me.frictionAir = 0.01;
        me.friction = 1
        me.frictionStatic = 1
        me.restitution = 0;
        me.delay = 120 * simulation.CDScale;
        me.randomHopFrequency = 200 + Math.floor(Math.random() * 150);
        me.randomHopCD = simulation.cycle + me.randomHopFrequency;
        me.cd = 0;
        me.cycle = 0;
        me.swordVertex = 1
        me.swordRadiusInitial = radius / 2;
        me.swordRadius = me.swordRadiusInitial;
        me.swordRadiusMax = 800 + 6 * simulation.difficulty;
        me.swordRadiusGrowRateInitial = 1.08
        me.swordRadiusGrowRate = me.swordRadiusGrowRateInitial
        me.isSlashing = false;
        me.swordDamage = 0.03 * me.damageScale()
        me.laserAngle = 3 * Math.PI / 5
        const seeDistance2 = me.swordRadiusMax * me.swordRadiusMax

        Matter.Body.rotate(me, Math.random() * Math.PI);
        spawn.shield(me, x, y);
        me.do = function () {
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            if (this.seePlayer.recall) {
                if (this.cd < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.cd = simulation.cycle + this.delay;
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass;
                    const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - (Math.random() * 0.06 + 0.1) * this.mass; 
                }
            } else {
                if (this.randomHopCD < simulation.cycle && (Matter.Query.collides(this, map).length || Matter.Query.collides(this, body).length)) {
                    this.randomHopCD = simulation.cycle + this.randomHopFrequency;
                    this.randomHopFrequency = Math.max(100, this.randomHopFrequency + (0.5 - Math.random()) * 200);
                    const forceMag = (this.accelMag + this.accelMag * Math.random()) * this.mass * (0.1 + Math.random() * 0.3);
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
                    this.force.x += forceMag * Math.cos(angle);
                    this.force.y += forceMag * Math.sin(angle) - 0.07 * this.mass; 
                }
            }
            this.sword() 
        };
        me.swordWaiting = function () {
            if (
                this.seePlayer.recall &&
                this.cd < simulation.cycle &&
                this.distanceToPlayer2() < seeDistance2 &&
                Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
            ) {
                let dist = Infinity
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    const D = Vector.magnitudeSquared(Vector.sub({ x: this.vertices[i].x, y: this.vertices[i].y }, m.pos))
                    if (D < dist) {
                        dist = D
                        this.swordVertex = i
                    }
                }
                this.laserAngle = this.swordVertex / sides * 2 * Math.PI + Math.PI / sides
                this.sword = this.swordGrow
                this.cycle = 0
                this.swordRadius = this.swordRadiusInitial
                Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.5))
                const laserStartVector = Vector.sub(this.position, this.vertices[this.swordVertex])
                const playerVector = Vector.sub(this.position, m.pos)
                const cross = Matter.Vector.cross(laserStartVector, playerVector)
                this.torque = 0.00002 * this.inertia * (cross > 0 ? 1 : -1)
            }
        }
        me.sword = me.swordWaiting 
        me.swordGrow = function () {
            this.laserSpear(this.vertices[this.swordVertex], this.angle + this.laserAngle);
            Matter.Body.setVelocity(this, Vector.mult(this.velocity, 0.9))
            this.cycle++
            this.swordRadius *= this.swordRadiusGrowRate

            if (this.swordRadius > this.swordRadiusMax) this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial
            if (this.swordRadius < this.swordRadiusInitial || this.isStunned) {
                this.swordRadiusGrowRate = this.swordRadiusGrowRateInitial
                this.sword = this.swordWaiting
                this.swordRadius = 0
                this.cd = simulation.cycle + this.delay;
            }
        }
        me.laserSpear = function (where, angle) {
            best = { x: null, y: null, dist2: Infinity, who: null, v1: null, v2: null };
            const look = { x: where.x + this.swordRadius * Math.cos(angle), y: where.y + this.swordRadius * Math.sin(angle) };
            best = vertexCollision(where, look, [map, body, [playerBody, playerHead]]);

            if (best.who && (best.who === playerBody || best.who === playerHead)) {
                this.swordRadiusGrowRate = 1 / this.swordRadiusGrowRateInitial 

                if (m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60; 
                    m.takeDamage(this.swordDamage);
                    simulation.drawList.push({ 
                        x: best.x,
                        y: best.y,
                        radius: this.swordDamage * 1500,
                        color: "rgba(80,0,255,0.5)",
                        time: 20
                    });
                }
            }
            if (best.dist2 === Infinity) best = look;
            ctx.beginPath(); 
            ctx.moveTo(where.x, where.y);
            ctx.lineTo(best.x, best.y);
            ctx.strokeStyle = "rgba(100,100,255,0.1)"; 
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.strokeStyle = "rgba(100,100,255,0.5)"; 
            ctx.lineWidth = 4;
            ctx.setLineDash([70 + 300 * Math.random(), 55 * Math.random()]);
            ctx.stroke(); 
            ctx.setLineDash([]);
        }
    },
    sneakBoss(x, y, radius = 70) {
        mobs.spawn(x, y, 5, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 2
        Matter.Body.setDensity(me, 0.001); 
        me.isBoss = true;
        me.damageReduction = 0.17

        me.accelMag = 0.0017 * Math.sqrt(simulation.accelScale);
        me.frictionAir = 0.01;
        me.g = 0.0001; 
        me.stroke = "transparent"; 
        me.alpha = 1; 
        me.isCloaked = true; 
        me.isBadTarget = true;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
        me.memory = 30;
        me.vanishesLeft = 3
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let i = 0; i < 2; i++) spawn.sneaker(this.position.x + 10 * Math.random(), this.position.y + 10 * Math.random())
        };
        me.onDamage = function () {
            if (this.vanishesLeft > 0 && this.health < 0.1) { 
                this.vanishesLeft--

                for (let i = 0; i < 8; i++) { 
                    simulation.drawList.push({
                        x: this.position.x,
                        y: this.position.y,
                        radius: 5000,
                        color: `rgba(0, 0, 0,${1 - 0.1 * i})`,
                        time: (i + 2) * 4
                    });
                }
                const index = Math.floor((m.history.length - 1) * (0.66 + 0.2 * Math.random()))
                let history = m.history[(simulation.cycle - index) % 600]
                Matter.Body.setPosition(this, history.position)
                Matter.Body.setVelocity(this, { x: 0, y: 0 });

                this.damageReduction = 0 
                this.seePlayer.recall = 0
                this.cloak();
                this.health = 1;
                for (let i = 0; i < 2; i++) spawn.sneaker(this.position.x + 10 * Math.random(), this.position.y + 10 * Math.random())
            }
        };
        me.cloak = function () {
            if (!this.isCloaked) { 
                this.alpha = 0;
                this.isCloaked = true;
                this.isBadTarget = true;
                this.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
                this.damageReduction = 0.04
            }
        }
        me.deCloak = function () {
            if (this.isCloaked) {
                this.damageReduction = 0.4
                this.isCloaked = false;
                this.isBadTarget = false;
                this.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob; 
            }
        }
        me.do = function () {
            if (this.damageReduction === 0) {
                this.damageReduction = 0.04
                let i = this.status.length 
                while (i--) {
                    if (this.status[i].type === "stun" || this.status[i].type === "dot") this.status.splice(i, 1);
                }
                this.isStunned = false;
            }
            this.gravity();
            this.seePlayerByHistory(55);
            this.checkStatus();
            if (this.alpha > 0.8) this.attraction();
            if (this.seePlayer.recall) {
                if (this.alpha < 1) this.alpha += 0.005 + 0.003 / simulation.CDScale;
            } else {
                if (this.alpha > 0) this.alpha -= 0.04;
            }
            if (this.alpha > 0) {
                if (this.alpha > 0.7) {
                    if (this.seePlayer.recall) this.healthBar2()
                    this.deCloak()
                }
                ctx.beginPath();
                const vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1, len = vertices.length; j < len; ++j) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.fillStyle = `rgba(0,0,0,${this.alpha * this.alpha})`;
                ctx.fill();
            } else {
                this.cloak()
            }
        };
    },
    sneaker(x, y, radius = 15 + Math.ceil(Math.random() * 10)) {
        mobs.spawn(x, y, 5, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 3
        Matter.Body.setDensity(me, 0.0012); 
        me.accelMag = 0.001 * Math.sqrt(simulation.accelScale);
        me.frictionAir = 0.01;
        me.g = 0.0002; 
        me.stroke = "transparent"; 
        me.alpha = 1; 
        me.isNotCloaked = false; 
        me.isBadTarget = true;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
        me.memory = 240;
        me.isVanished = false;

        me.onDamage = function () {
            if (!this.isVanished && this.health < 0.1 && !this.isStunned && !this.isSlowed) { 
                this.health = 1;
                this.isVanished = true
                this.cloak();
                Matter.Body.setPosition(this, m.history[Math.floor((m.history.length - 1) * (0.3 + 0.4 * Math.random()))].position)
                Matter.Body.setVelocity(this, { x: 0, y: 0 });
                this.damageReduction = 0 
            }
        };
        me.cloak = function () {
            if (this.isNotCloaked) { 
                this.alpha = 0;
                this.isNotCloaked = false;
                this.isBadTarget = true;
                this.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
            }
        }
        me.do = function () {
            if (this.damageReduction === 0) {
                this.damageReduction = 1 
                let i = this.status.length 
                while (i--) {
                    if (this.status[i].type === "stun" || this.status[i].type === "dot") this.status.splice(i, 1);
                }
                this.isStunned = false;
            }
            this.gravity();
            this.seePlayerByHistory(25);
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall) {
                if (this.alpha < 1) this.alpha += 0.003 + 0.003 / simulation.CDScale;
            } else {
                if (this.alpha > 0) this.alpha -= 0.03;
            }
            if (this.alpha > 0) {
                if (this.alpha > 0.7) {
                    if (this.seePlayer.recall) this.healthBar3()
                    if (!this.isNotCloaked) {
                        this.isNotCloaked = true;
                        this.isBadTarget = false;
                        this.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob; 
                    }
                }
                ctx.beginPath();
                const vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1, len = vertices.length; j < len; ++j) {
                    ctx.lineTo(vertices[j].x, vertices[j].y);
                }
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.fillStyle = `rgba(0,0,0,${this.alpha * this.alpha})`;
                ctx.fill();
            } else {
                this.cloak()
            }
        };
    },
    sneakyStriker(x, y, radius = 35) {
        mobs.spawn(x, y, 7, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.0045); 
        me.accelMag = 0.0008
        me.frictionAir = 0.01;
        me.g = 0.0002; 
        me.stroke = "transparent"; 
        me.alpha = 1; 
        me.isNotCloaked = false; 
        me.isBadTarget = true;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
        me.memory = 180;
        me.isVanished = false;

        me.delay = 40;
        me.cd = 0
        me.strikeRange = 500

        me.onDamage = function () {
            this.cd = simulation.cycle + this.delay;

            if (!this.isVanished && this.health < 0.1 && !this.isStunned && !this.isSlowed) { 
                this.health = 1;
                this.isVanished = true
                this.cloak();
                Matter.Body.setPosition(this, m.history[Math.floor((m.history.length - 1) * (0.3 + 0.4 * Math.random()))].position)
                Matter.Body.setVelocity(this, { x: 0, y: 0 });
                this.damageReduction = 0 
            }
        };
        me.cloak = function () {
            if (this.isNotCloaked) { 
                this.alpha = 0;
                this.isNotCloaked = false;
                this.isBadTarget = true;
                this.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
            }
        }
        me.do = function () {
            if (this.damageReduction === 0) {
                this.damageReduction = 1 
                let i = this.status.length 
                while (i--) {
                    if (this.status[i].type === "stun" || this.status[i].type === "dot") this.status.splice(i, 1);
                }
                this.isStunned = false;
            }
            this.gravity();
            if (!(simulation.cycle % this.seePlayerFreq)) {
                if (Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 && !m.isCloak) {
                    this.foundPlayer();
                } else if (this.seePlayer.recall) {
                    this.lostPlayer();
                    if (!m.isCloak) {
                        for (let i = 0; i < 20; i++) { 
                            let history = m.history[(simulation.cycle - 10 * i) % 600]
                            if (Matter.Query.ray(map, this.position, history.position).length === 0) {
                                this.seePlayer.recall = this.memory + Math.round(this.memory * Math.random()); 
                                this.seePlayer.position.x = history.position.x;
                                this.seePlayer.position.y = history.position.y;
                                this.seePlayer.yes = true;
                                if (this.cd === Infinity) this.cd = simulation.cycle + this.delay * 0.7;
                                break
                            }
                        }
                        if (!this.seePlayer.yes) this.cd = Infinity
                    }
                }
            }
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall) {
                if (this.alpha < 1) this.alpha += 0.003 + 0.003 / simulation.CDScale;
            } else {
                if (this.alpha > 0) this.alpha -= 0.03;
            }
            if (this.alpha > 0) {
                if (this.alpha > 0.7) {
                    if (this.seePlayer.recall) this.healthBar4()
                    if (!this.isNotCloaked) {
                        this.isNotCloaked = true;
                        this.isBadTarget = false;
                        this.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob; 
                    }
                    if (this.cd < simulation.cycle && this.seePlayer.recall) {
                        const dist = Vector.sub(this.seePlayer.position, this.position);
                        const distMagFinal = Vector.magnitude(dist) - 10 - radius
                        if (distMagFinal > 250) {
                            this.cd = simulation.cycle + this.delay;
                            ctx.beginPath();
                            ctx.moveTo(this.position.x, this.position.y);
                            let strikeMag = Math.min(distMagFinal - 10 - radius, this.strikeRange)
                            Matter.Body.translate(this, Vector.mult(Vector.normalise(dist), strikeMag));
                            ctx.lineTo(this.position.x, this.position.y);
                            ctx.lineWidth = radius * 2.2;
                            ctx.strokeStyle = "rgba(0,0,0,0.6)"; 
                            ctx.stroke();
                            Matter.Body.setVelocity(this, { x: this.velocity.x * 0.4, y: this.velocity.y * 0.4 });
                        }
                    }
                }
                ctx.beginPath();
                const vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1, len = vertices.length; j < len; ++j) {
                    ctx.lineTo(vertices[j].x, vertices[j].y);
                }
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.fillStyle = `rgba(0,0,0,${this.alpha * this.alpha})`;
                ctx.fill();
            } else {
                this.cloak()
            }
        };
    },
    ghoster(x, y, radius = 50 + Math.ceil(Math.random() * 90)) {
        mobs.spawn(x, y, 7, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.seeAtDistance2 = 500000;
        me.accelMag = 0.0002 + 0.0001 * simulation.accelScale;
        if (map.length) me.searchTarget = map[Math.floor(Math.random() * (map.length - 1))].position; 
        Matter.Body.setDensity(me, 0.00018); 
        me.damageReduction = 0.1
        me.stroke = "transparent";
        me.alpha = 1;
        me.isNotCloaked = false;
        me.isBadTarget = true;
        me.collisionFilter.mask = cat.bullet | cat.body
        me.memory = Infinity;
        me.delay = 60
        me.cd = 0;
        me.cycle = 0;
        me.onHit = function () {
            if (this.cd < simulation.cycle) {
                this.cd = simulation.cycle + this.delay;
                if (b.inventory.length) {
                    let isRemovedAmmo = false
                    const numRemoved = 3
                    for (let j = 0; j < numRemoved; j++) {
                        for (let i = 0; i < b.inventory.length; i++) {
                            const gun = b.guns[b.inventory[i]]
                            if (gun.ammo > 0 && gun.ammo !== Infinity) {
                                gun.ammo -= Math.ceil(1.1 * (Math.random() + Math.random()) * gun.ammoPack)
                                if (gun.ammo < 0) gun.ammo = 0
                                isRemovedAmmo = true
                            }
                        }
                    }
                    if (isRemovedAmmo) {
                        simulation.updateGunHUD();
                        for (let j = 0; j < numRemoved; j++) powerUps.directSpawn(this.position.x + 10 * Math.random(), this.position.y + 10 * Math.random(), "ammo");
                        powerUps.ejectGraphic();
                    }
                }
            }
        };
        me.onDamage = function () {
            if (this.health < 0.8) me.seeAtDistance2 = 2000000;
        }
        me.do = function () {
            this.cycle++
            if (this.speed > 6) Matter.Body.setVelocity(this, { x: this.velocity.x * 0.8, y: this.velocity.y * 0.8 }); 
            if (this.cycle < 600) {
                this.seePlayerCheckByDistance();
            } else {
                this.alwaysSeePlayer();
            }
            this.checkStatus();
            this.attraction();
            this.search();
            if (this.distanceToPlayer2() < this.seeAtDistance2) {
                if (this.alpha < 1) this.alpha += 0.011 * simulation.CDScale; 
            } else if (this.alpha > 0) {
                this.alpha -= 0.05; 
            }
            if (this.alpha > 0) {
                if (this.alpha > 0.7 && this.seePlayer.recall) {
                    if (this.seePlayer.recall) this.healthBar3()
                    if (!this.isNotCloaked) {
                        this.isNotCloaked = true;
                        this.isBadTarget = false;
                        this.collisionFilter.mask = cat.player | cat.bullet | cat.body
                    }
                }
                ctx.beginPath();
                const vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1, len = vertices.length; j < len; ++j) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.fillStyle = `rgba(255,255,255,${this.alpha * this.alpha})`;
                ctx.fill();
            } else if (this.isNotCloaked) {
                this.isNotCloaked = false;
                this.isBadTarget = true;
                this.collisionFilter.mask = cat.bullet | cat.body; 
            }
        };
    },
    bomberBoss(x, y, radius = 88) {
        mobs.spawn(x, y, 3, radius, "rgba(255,0,200,0.5)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.0025 + 0.00009 * Math.sqrt(simulation.difficulty)); 
        me.stroke = "transparent";
        me.seeAtDistance2 = 1500000;
        me.fireFreq = 10 + Math.floor(70 * simulation.CDScale);
        me.searchTarget = map[Math.floor(Math.random() * (map.length - 1))].position; 
        me.hoverElevation = 460 + (Math.random() - 0.5) * 200; 
        me.hoverXOff = (Math.random() - 0.5) * 100;
        me.accelMag = Math.floor(10 * (Math.random() + 4.5)) * 0.00001 * simulation.accelScale;
        me.g = 0.0002; 
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.01;
        me.memory = Infinity;
        me.collisionFilter.mask = cat.player | cat.bullet | cat.body
        spawn.shield(me, x, y, 1);

        const len = Math.floor(Math.min(15, 3 + Math.sqrt(simulation.difficulty)))
        const speed = (0.007 + 0.003 * Math.random() + 0.004 * Math.sqrt(simulation.difficulty))
        let radiusOrbitals = radius + 125 + 350 * Math.random()
        for (let i = 0; i < len; i++) spawn.orbital(me, radiusOrbitals, i / len * 2 * Math.PI, speed)
        radiusOrbitals = radius + 125 + 350 * Math.random()
        for (let i = 0; i < len; i++) spawn.orbital(me, radiusOrbitals, i / len * 2 * Math.PI, -speed)

        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.damageReduction = 0.22
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerCheckByDistance();
            this.checkStatus();
            if (this.seePlayer.recall) {
                this.hoverOverPlayer();
                this.bomb();
                this.search();
            }
        };
    },
    shooter(x, y, radius = 25 + Math.ceil(Math.random() * 50)) {
        mobs.spawn(x, y, 3, radius, "rgb(255,100,150)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.isVerticesChange = true
        me.memory = 120;
        me.fireFreq = 0.007 + Math.random() * 0.005;
        me.noseLength = 0;
        me.fireAngle = 0;
        me.accelMag = 0.0005 * simulation.accelScale;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.05;
        me.lookTorque = 0.0000025 * (Math.random() > 0.5 ? -1 : 1);
        me.fireDir = { x: 0, y: 0 };
        me.onDeath = function () { 
        }
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByLookingAt();
            this.checkStatus();
            this.fire();
        };
    },
    shooterBoss(x, y, radius = 110, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 3, radius, "rgb(255,70,180)");
        let me = mob[mob.length - 1];
        me.tier = 1
        setTimeout(() => { 
            me.constraint = Constraint.create({
                pointA: {
                    x: me.position.x,
                    y: me.position.y
                },
                bodyB: me,
                stiffness: 0.00004,
                damping: 0.2
            });
            Composite.add(engine.world, me.constraint);
        }, 2000); 

        me.isBoss = true;
        Matter.Body.setDensity(me, 0.01 + 0.0003 * Math.sqrt(simulation.difficulty)); 
        me.damageReduction = 0.22

        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.isVerticesChange = true
        me.memory = 240;
        me.fireFreq = 0.01 + 0.0005 * Math.min(40, simulation.difficulty); 
        me.noseLength = 0;
        me.fireAngle = 0;
        me.accelMag = 0.005 * simulation.accelScale;
        me.frictionAir = 0.05;
        me.lookTorque = 0.000006 * (Math.random() > 0.5 ? -1 : 1);
        me.fireDir = { x: 0, y: 0 };
        setTimeout(() => {
            for (let i = 0, len = 3 + 0.5 * Math.sqrt(simulation.difficulty); i < len; i++) spawn.spawnOrbitals(me, radius + 40 + 10 * i, 1);
        }, 100); 
        me.onDeath = function () {
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByLookingAt();
            this.checkStatus();
            const setNoseShape = () => {
                const mag = this.radius + this.radius * this.noseLength;
                this.vertices[1].x = this.position.x + Math.cos(this.angle) * mag;
                this.vertices[1].y = this.position.y + Math.sin(this.angle) * mag;
            };
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                    this.fireDir.y -= Math.abs(this.seePlayer.position.x - this.position.x) / 5000; 
                }
                const angle = this.angle + Math.PI / 2;
                const dot = Vector.dot({ x: Math.cos(angle), y: Math.sin(angle) }, this.fireDir)
                const threshold = 0.1;
                if (dot > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (dot < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                } else if (this.noseLength > 1.5 && dot > -0.2 && dot < 0.2) {
                    for (let i = 0, len = 2 + 0.07 * simulation.difficulty; i < len; i++) {
                        spawn.bullet(this.vertices[1].x, this.vertices[1].y, this.tier, 10 + Math.ceil(this.radius / 25));
                        const spread = Vector.rotate({ x: Math.sqrt(len) + 4, y: 0 }, 2 * Math.PI * Math.random())
                        const dir = Vector.add(Vector.mult(this.fireDir, 25), spread)
                        Matter.Body.setVelocity(mob[mob.length - 1], dir);
                    }
                    this.noseLength = 0;
                }
                if (this.noseLength < 1.5) this.noseLength += this.fireFreq;
                setNoseShape();
            } else if (this.noseLength > 0.1) {
                this.noseLength -= this.fireFreq / 2;
                setNoseShape();
            }
        };
    },
    bullet(x, y, tier, radius = 9, sides = 0) {
        mobs.spawn(x, y, sides, radius, "rgb(255,0,0)");
        let me = mob[mob.length - 1];
        me.tier = tier
        me.stroke = "transparent";
        me.onHit = function () {
            this.explode(this.mass * 15);
        };
        Matter.Body.setDensity(me, 0.00004); 
        me.timeLeft = 220;
        me.g = 0.001; 
        me.frictionAir = 0;
        me.restitution = 0.8;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet;
        me.do = function () {
            this.gravity();
            this.timeLimit();
        };
    },
    bomb(x, y, radius = 9, sides = 5) {
        mobs.spawn(x, y, sides, radius, "rgb(255,0,0)");
        let me = mob[mob.length - 1];
        me.stroke = "transparent";
        me.onHit = function () {
            this.explode(this.mass * 120);
        };
        me.onDeath = function () {
            spawn.bullet(this.position.x, this.position.y, this.tier, this.radius / 3, 5);
            spawn.bullet(this.position.x, this.position.y, this.tier, this.radius / 3, 5);
            spawn.bullet(this.position.x, this.position.y, this.tier, this.radius / 3, 5);
            const mag = 8
            const v1 = Vector.rotate({
                x: 1,
                y: 1
            }, 2 * Math.PI * Math.random())
            const v2 = Vector.rotate({
                x: 1,
                y: 1
            }, 2 * Math.PI * Math.random())
            const v3 = Vector.normalise(Vector.add(v1, v2)) 

            Matter.Body.setVelocity(mob[mob.length - 1], {
                x: mag * v1.x,
                y: mag * v1.y
            });
            Matter.Body.setVelocity(mob[mob.length - 2], {
                x: mag * v2.x,
                y: mag * v2.y
            });
            Matter.Body.setVelocity(mob[mob.length - 3], {
                x: -mag * v3.x,
                y: -mag * v3.y
            });
        }
        Matter.Body.setDensity(me, 0.00005); 
        me.timeLeft = 140 + Math.floor(Math.random() * 30);
        me.g = 0.001; 
        me.frictionAir = 0;
        me.restitution = 1;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet;
        me.do = function () {
            this.gravity();
            this.timeLimit();
        };
    },
    sniper(x, y, radius = 35 + Math.ceil(Math.random() * 30)) {
        mobs.spawn(x, y, 3, radius, "transparent"); 
        let me = mob[mob.length - 1];
        me.tier = 3
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.isVerticesChange = true
        Matter.Body.setDensity(me, 0.0012); 
        me.stroke = "transparent"; 
        me.alpha = 1; 
        me.frictionStatic = 0;
        me.friction = 0;
        me.isNotCloaked = false; 
        me.isBadTarget = true;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 

        me.memory = 60 
        me.fireFreq = 0.01 + Math.random() * 0.002 
        me.noseLength = 0;
        me.fireAngle = 0;
        me.accelMag = 0.0009 * simulation.accelScale;
        me.frictionAir = 0.05;
        me.torque = 0.00012 * me.inertia;
        me.fireDir = { x: 0, y: 0 };
        me.onDeath = function () { 
        }
        spawn.shield(me, x, y);
        me.do = function () {
            this.seePlayerCheck();
            this.checkStatus();

            const setNoseShape = () => {
                const mag = this.radius + this.radius * this.noseLength;
                this.vertices[1].x = this.position.x + Math.cos(this.angle) * mag;
                this.vertices[1].y = this.position.y + Math.sin(this.angle) * mag;
            };
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                }
                const angle = this.angle + Math.PI / 2;
                const dot = Vector.dot({
                    x: Math.cos(angle),
                    y: Math.sin(angle)
                }, this.fireDir)
                const threshold = 0.03;
                if (dot > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (dot < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                } else if (this.noseLength > 1.5 && dot > -0.2 && dot < 0.2) {
                    spawn.sniperBullet(this.vertices[1].x, this.vertices[1].y, 7 + Math.ceil(this.radius / 15), 5);
                    const v = 20 + Math.floor(20 * Math.random())
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + this.fireDir.x * v + Math.random(),
                        y: this.velocity.y + this.fireDir.y * v + Math.random()
                    });
                    this.noseLength = 0;
                    this.force.x -= 0.006 * this.fireDir.x * this.mass;
                    this.force.y -= 0.006 * this.fireDir.y * this.mass;
                }
                if (this.noseLength < 1.5) this.noseLength += this.fireFreq;
                setNoseShape();
            } else if (this.noseLength > 0.1) {
                this.noseLength -= this.fireFreq / 2;
                setNoseShape();
            }

            if (this.seePlayer.recall) {
                if (this.alpha < 1) this.alpha += 0.01;
            } else {
                if (this.alpha > 0) this.alpha -= 0.03;
            }
            if (this.alpha > 0) {
                if (this.alpha > 0.95) {
                    if (this.seePlayer.recall) this.healthBar3()
                    if (!this.isNotCloaked) {
                        this.isNotCloaked = true;
                        this.isBadTarget = false;
                        this.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob; 
                    }
                }
                ctx.beginPath();
                const vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1, len = vertices.length; j < len; ++j) {
                    ctx.lineTo(vertices[j].x, vertices[j].y);
                }
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.fillStyle = `rgba(25,0,50,${this.alpha * this.alpha})`;
                ctx.fill();
            } else if (this.isNotCloaked) {
                this.isNotCloaked = false;
                this.isBadTarget = true
                this.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
            }
        };
    },
    sniperBullet(x, y, radius = 9, sides = 5, isExplode = true) { 
        mobs.spawn(x, y, sides, radius, "rgb(255,0,155)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.stroke = "transparent";
        me.onHit = function () {
            this.explode(this.mass * 20);
        };
        Matter.Body.setDensity(me, 0.00005); 
        me.timeLeft = 120;
        me.frictionAir = 0;
        me.restitution = 0;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet;
        me.onDeath = function () {
            if (isExplode) {
                const radius = 100 + 50 * Math.random()
                if (m.immuneCycle < m.cycle && Vector.magnitude(Vector.sub(this.position, player.position)) < radius) m.takeDamage(0.0003 * radius * this.damageScale());
                simulation.drawList.push({ 
                    x: this.position.x,
                    y: this.position.y,
                    radius: radius,
                    color: "rgba(255,0,155,0.5)",
                    time: simulation.drawTime
                });
            }
        };
        me.do = function () {
            this.timeLimit();
            if (Matter.Query.collides(this, map).length > 0 || Matter.Query.collides(this, body).length > 0 && this.speed < 10) {
                this.isDropPowerUp = false;
                this.death(); 
            }
        };
    },
    launcherOne(x, y, radius = 30 + Math.ceil(Math.random() * 40)) {
        mobs.spawn(x, y, 3, radius, "rgb(150,150,255)");
        let me = mob[mob.length - 1];
        me.tier = 3
        Matter.Body.setDensity(me, 0.0012); 
        me.accelMag = 0.0001
        me.fireFreq = 330
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.01;
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall && !(simulation.cycle % this.fireFreq)) {
                Matter.Body.setAngularVelocity(this, 0.14)
                spawn.seeker(this.vertices[0].x, this.vertices[0].y, this.tier, 20, 9); 
                const who = mob[mob.length - 1]
                Matter.Body.setDensity(who, 0.00005);
                who.timeLeft = 840
                who.accelMag = 0.0005
                who.frictionAir = 0.01
                const velocity = Vector.mult(Vector.perp(Vector.normalise(Vector.sub(this.position, this.vertices[0]))), -6)
                Matter.Body.setVelocity(who, { x: this.velocity.x + velocity.x, y: this.velocity.y + velocity.y });
            }
        };
    },
    launcher(x, y, radius = 30 + Math.ceil(Math.random() * 40)) {
        mobs.spawn(x, y, 3, radius, "rgb(150,150,255)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.accelMag = 0.00004 * simulation.accelScale;
        me.fireFreq = Math.floor(420 + 90 * Math.random() * simulation.CDScale)
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.02;
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall && !(simulation.cycle % this.fireFreq)) {
                Matter.Body.setAngularVelocity(this, 0.14)
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    spawn.seeker(this.vertices[i].x, this.vertices[i].y, this.tier, 7)
                    const velocity = Vector.mult(Vector.perp(Vector.normalise(Vector.sub(this.position, this.vertices[i]))), -8)
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + velocity.x,
                        y: this.velocity.y + velocity.y
                    });
                }
            }
        };
    },
    launchPusher(x, y, radius = 30) {
        mobs.spawn(x, y, 5, radius, "rgb(150,150,255)");
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.0048); 
        me.accelMag = 0.0008
        me.fireFreq = 240 + Math.floor(30 * Math.random())
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.1;
        spawn.shield(me, x, y);
        me.onDamage = function () { };
        me.pushAway = function (magX = 0.03, magY = 0.02) {
            const range = 640000 
            for (let i = 0, len = body.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(body[i].position, this.position)) < range) {
                    body[i].force.x += magX * body[i].mass * (body[i].position.x > this.position.x ? 1 : -1)
                    body[i].force.y -= magY * body[i].mass
                }
            }
            for (let i = 0, len = mob.length; i < len; ++i) {
                if (mob[i].speed < 30 && mob[i].isMobBullet && Vector.magnitudeSquared(Vector.sub(mob[i].position, this.position)) < range) {
                    mob[i].force.x += 0.8 * magX * mob[i].mass * (mob[i].position.x > this.position.x ? 1 : -1)
                    mob[i].force.y -= 0.8 * magY * mob[i].mass
                }
            }
            for (let i = 0, len = powerUp.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(powerUp[i].position, this.position)) < range) {
                    powerUp[i].force.x += magX * powerUp[i].mass * (powerUp[i].position.x > this.position.x ? 1 : -1)
                    powerUp[i].force.y -= magY * powerUp[i].mass
                }
            }
            if (Vector.magnitudeSquared(Vector.sub(player.position, this.position)) < range) {
                player.force.x += magX * player.mass * (player.position.x > this.position.x ? 1 : -1)
                player.force.y -= magY * player.mass
            }
        }
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            if (this.seePlayer.recall && !(simulation.cycle % this.fireFreq)) {
                this.pushAway()
                Matter.Body.setAngularVelocity(this, 0.15)
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    spawn.seeker(this.vertices[i].x, this.vertices[i].y, this.tier, 7)
                    const velocity = Vector.mult(Vector.perp(Vector.normalise(Vector.sub(this.vertices[i], this.position))), 10 + Math.floor(3 * Math.random()))
                    Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x + velocity.x, y: this.velocity.y + velocity.y });
                }
                simulation.drawList.push({ 
                    x: this.position.x,
                    y: this.position.y,
                    radius: 1000,
                    color: "rgb(100,100,100,0.05)",
                    time: simulation.drawTime
                });
            }
        };
    },
    launcherBoss(x, y, radius = 90, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 6, radius, "rgb(150,150,255)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.0022 + 0.00015 * Math.sqrt(simulation.difficulty)); 
        me.damageReduction = 0.22

        me.accelMag = 0.0001 * simulation.accelScale;
        me.fireFreq = Math.floor(330 * simulation.CDScale)
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.02;
        me.memory = 420;
        me.repulsionRange = 1000000; 
        spawn.shield(me, x, y, 1);
        spawn.spawnOrbitals(me, radius + 50 + 200 * Math.random())

        me.onDeath = function () {
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.onDamage = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            this.repulsion();
            if (this.seePlayer.recall && !(simulation.cycle % this.fireFreq)) {
                Matter.Body.setAngularVelocity(this, 0.11)
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    spawn.seeker(this.vertices[i].x, this.vertices[i].y, this.tier, 8)
                    const velocity = Vector.mult(Vector.perp(Vector.normalise(Vector.sub(this.position, this.vertices[i]))), -10)
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + velocity.x,
                        y: this.velocity.y + velocity.y
                    });
                }
            }
        };
    },
    fabricatorBoss(x, y, radius = 90, isSpawnBossPowerUp = true) {
        mobs.spawn(x, y, 6, radius, "#000");
        let me = mob[mob.length - 1];
        me.tier = 4
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.0022 + 0.00015 * Math.sqrt(simulation.difficulty)); 
        me.damageReduction = 0.22
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0

        me.accelMag = 0.0003;
        me.fireFreq = 240
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.02;
        me.memory = 420;
        me.repulsionRange = 1000000; 
        spawn.shield(me, x, y, 1);

        me.onDeath = function () {
            for (let i = 0, len = 6; i < len; i++) {
                spawn.grenade(this.position.x, this.position.y, this.tier);
                const who = mob[mob.length - 1]
                const speed = 7;
                const angle = 2 * Math.PI * i / len + this.angle
                Matter.Body.setVelocity(who, { x: speed * Math.cos(angle), y: speed * Math.sin(angle) });
            }
            if (isSpawnBossPowerUp) powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 
                this.invulnerableCount = 60 + simulation.difficultyMode * 10
                this.isInvulnerable = true
                this.damageReduction = 0

                for (let i = 0, len = 6; i < len; i++) {
                    spawn.grenade(this.position.x, this.position.y, this.tier);
                    const who = mob[mob.length - 1]
                    const speed = 7;
                    const angle = 2 * Math.PI * i / len + this.angle
                    Matter.Body.setVelocity(who, { x: speed * Math.cos(angle), y: speed * Math.sin(angle) });
                }
            }
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            this.repulsion();
            if (this.seePlayer.recall && !(simulation.cycle % this.fireFreq) && mob.length < 300 * (localSettings.isHideHUD ? 0.5 : 1)) {
                for (let i = 0, len = 6; i < len; i++) spawn.orbital(me, 3 * this.radius, i / len * 2 * Math.PI + this.angle, 0.01)

                Matter.Body.setAngularVelocity(this, 0.11)
                for (let i = 0, len = this.vertices.length; i < len; i++) {
                    spawn.seeker(this.vertices[i].x, this.vertices[i].y, this.tier, 8)
                    const velocity = Vector.mult(Vector.perp(Vector.normalise(Vector.sub(this.position, this.vertices[i]))), -10)
                    Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x + velocity.x, y: this.velocity.y + velocity.y });
                }
            }
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 15 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };
    },
    grenadierBoss(x, y, radius = 95) {
        mobs.spawn(x, y, 6, radius, "rgb(0,235,255)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.isBoss = true;

        me.accelMag = 0.0001 * simulation.accelScale;
        me.fireFreq = Math.floor(360 * simulation.CDScale)
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.035;
        me.memory = 420;
        me.repulsionRange = 1200000; 
        spawn.spawnOrbitals(me, radius + 50, 1);
        spawn.spawnOrbitals(me, radius + 125, 1);
        spawn.spawnOrbitals(me, radius + 200, 1);
        Matter.Body.setDensity(me, 0.004 + 0.00015 * Math.sqrt(simulation.difficulty)); 
        me.onDeath = function () { 
            setTimeout(() => { 
                for (let i = 0, len = 6; i < len; i++) {
                    const speed = 2.25 * simulation.accelScale;
                    const angle = 2 * Math.PI * i / len
                    spawn.grenade(this.position.x, this.position.y, this.tier, 170 * simulation.CDScale);
                    const who = mob[mob.length - 1]
                    Matter.Body.setVelocity(who, {
                        x: speed * Math.cos(angle),
                        y: speed * Math.sin(angle)
                    });
                }
            }, 200);
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        }
        me.grenadeLimiter = 0
        me.onDamage = function () {
            if (this.grenadeLimiter < 240 && this.health > 0) {
                this.grenadeLimiter += 60
                spawn.grenade(this.position.x, this.position.y, this.tier, 80 + Math.floor(60 * Math.random()));
                who = mob[mob.length - 1]
                const velocity = Vector.mult(Vector.normalise(Vector.sub(player.position, who.position)), 3 * Math.sqrt(simulation.accelScale) + 4 * Math.random())
                Matter.Body.setVelocity(who, {
                    x: this.velocity.x + velocity.x,
                    y: this.velocity.y + velocity.y
                });
            }
        };
        me.damageReduction = 0.27
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            if (this.grenadeLimiter > 1) this.grenadeLimiter--
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
        };
    },
    grenadier(x, y, radius = 50) {
        mobs.spawn(x, y, 3, radius, "rgb(0,235,255)"); 
        let me = mob[mob.length - 1];
        me.tier = 1
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.isVerticesChange = true
        me.frictionStatic = 0;
        me.friction = 0;
        me.memory = 60 
        me.fireFreq = 0.0055 + Math.random() * 0.0015;
        me.noseLength = 0;
        me.fireAngle = 0;
        me.accelMag = 0.0006 * simulation.accelScale;
        me.frictionAir = 0.05;
        me.torque = 0.0001 * me.inertia * (Math.random() > 0.5 ? -1 : 1)
        me.fireDir = { x: 0, y: 0 };
        me.onDeath = function () { 
        }
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerCheck();
            this.checkStatus();

            const setNoseShape = () => {
                const mag = this.radius + this.radius * this.noseLength;
                this.vertices[1].x = this.position.x + Math.cos(this.angle) * mag;
                this.vertices[1].y = this.position.y + Math.sin(this.angle) * mag;
            };
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                }
                const angle = this.angle + Math.PI / 2;
                const dot = Vector.dot({
                    x: Math.cos(angle),
                    y: Math.sin(angle)
                }, this.fireDir)
                const threshold = 0.03;
                if (dot > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (dot < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                } else if (this.noseLength > 1.5 && dot > -0.2 && dot < 0.2) {
                    const v = 15;
                    const dist = Vector.magnitude(Vector.sub(this.position, player.position))
                    spawn.grenade(this.vertices[1].x, this.vertices[1].y, this.tier, Math.max(40, Math.min(dist / v, 240)));
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + this.fireDir.x * v + Math.random(),
                        y: this.velocity.y + this.fireDir.y * v + Math.random()
                    });
                    this.noseLength = 0;
                    this.force.x -= 0.005 * this.fireDir.x * this.mass;
                    this.force.y -= 0.005 * this.fireDir.y * this.mass;
                }
                if (this.noseLength < 1.5) this.noseLength += this.fireFreq;
                setNoseShape();
            } else if (this.noseLength > 0.1) {
                this.noseLength -= this.fireFreq / 2;
                setNoseShape();
            }
        };
    },
    freezer(x, y, radius = 40) {
        mobs.spawn(x, y, 3, radius, "rgb(0,0,255)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.isVerticesChange = true
        Matter.Body.setDensity(me, 0.0012); 
        me.frictionStatic = 0;
        me.friction = 0;
        me.memory = 60 
        me.fireFreq = 0.0055 + Math.random() * 0.0015;
        me.noseLength = 0;
        me.fireAngle = 0;
        me.accelMag = 0.0006 * simulation.accelScale;
        me.frictionAir = 0.05;
        me.torque = 0.0001 * me.inertia * (Math.random() > 0.5 ? -1 : 1)
        me.fireDir = { x: 0, y: 0 };
        me.onDeath = function () { 
            setTimeout(() => { 
                spawn.freezeGrenade(this.position.x, this.position.y, this.tier);
            }, 200);
        }
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerCheck();
            this.checkStatus();

            const setNoseShape = () => {
                const mag = this.radius + this.radius * this.noseLength;
                this.vertices[1].x = this.position.x + Math.cos(this.angle) * mag;
                this.vertices[1].y = this.position.y + Math.sin(this.angle) * mag;
            };
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                }
                const angle = this.angle + Math.PI / 2;
                const dot = Vector.dot({
                    x: Math.cos(angle),
                    y: Math.sin(angle)
                }, this.fireDir)
                const threshold = 0.03;
                if (dot > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (dot < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                } else if (this.noseLength > 1.5 && dot > -0.2 && dot < 0.2) {
                    const v = 10;
                    const dist = Vector.magnitude(Vector.sub(this.position, player.position))
                    spawn.freezeGrenade(this.vertices[1].x, this.vertices[1].y, this.tier, Math.max(40, Math.min(dist / v)));
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + this.fireDir.x * v + Math.random(),
                        y: this.velocity.y + this.fireDir.y * v + Math.random()
                    });
                    this.noseLength = 0;
                    this.force.x -= 0.005 * this.fireDir.x * this.mass;
                    this.force.y -= 0.005 * this.fireDir.y * this.mass;
                }
                if (this.noseLength < 1.5) this.noseLength += this.fireFreq;
                setNoseShape();
            } else if (this.noseLength > 0.1) {
                this.noseLength -= this.fireFreq / 2;
                setNoseShape();
            }
        };
    },
    mortar(x, y, radius = 40 + Math.ceil(Math.random() * 20)) {
        mobs.spawn(x, y, 3, radius, "transparent"); 
        let me = mob[mob.length - 1];
        me.tier = 4
        Matter.Body.setDensity(me, 0.0045); 
        me.vertices = Matter.Vertices.rotate(me.vertices, Math.PI, me.position); 
        me.isVerticesChange = true
        me.stroke = "transparent"; 
        me.alpha = 1; 
        me.isNotCloaked = false; 
        me.isBadTarget = true;
        me.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 

        me.frictionStatic = 0;
        me.friction = 0;
        me.memory = 60 
        me.fireFreq = 0.011;
        me.noseLength = 0;
        me.fireAngle = 0;
        me.accelMag = 0.001
        me.frictionAir = 0.05;
        me.torque = 0.0001 * me.inertia * (Math.random() > 0.5 ? -1 : 1)
        me.fireDir = { x: 0, y: 0 };
        me.onDeath = function () { 
            setTimeout(() => { 
                for (let i = 0, len = 3; i < len; i++) {
                    const speed = 6;
                    const angle = 2 * Math.PI * i / len
                    spawn.grenade(this.position.x, this.position.y, this.tier, 170 * simulation.CDScale);
                    const who = mob[mob.length - 1]
                    Matter.Body.setVelocity(who, { x: speed * Math.cos(angle), y: speed * Math.sin(angle) });
                }
            }, 200);
        }
        spawn.shield(me, x, y);
        me.do = function () {
            this.seePlayerCheck();
            this.checkStatus();

            const setNoseShape = () => {
                const mag = this.radius + this.radius * this.noseLength;
                this.vertices[1].x = this.position.x + Math.cos(this.angle) * mag;
                this.vertices[1].y = this.position.y + Math.sin(this.angle) * mag;
            };
            if (this.seePlayer.recall) {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                }
                const angle = this.angle + Math.PI / 2;
                const dot = Vector.dot({ x: Math.cos(angle), y: Math.sin(angle) }, this.fireDir)
                const threshold = 0.03;
                if (dot > threshold) {
                    this.torque += 0.000004 * this.inertia;
                } else if (dot < -threshold) {
                    this.torque -= 0.000004 * this.inertia;
                } else if (this.noseLength > 1.5 && dot > -0.2 && dot < 0.2) {
                    const dist = Vector.magnitude(Vector.sub(this.position, player.position))
                    for (let i = 0; i < 3; i++) {
                        const dir = Vector.rotate(Vector.mult(this.fireDir, 9 + 5 * Math.random()), 0.4 * (Math.random() - 0.5))
                        const speed = Vector.magnitude(dir)
                        spawn.grenade(this.vertices[1].x, this.vertices[1].y, this.tier, Math.max(40, Math.min(dist / speed, 240)));
                        Matter.Body.setVelocity(mob[mob.length - 1], Vector.add(this.velocity, dir));
                    }

                    this.noseLength = 0;
                    this.force.x -= 0.005 * this.fireDir.x * this.mass;
                    this.force.y -= 0.005 * this.fireDir.y * this.mass;
                }
                if (this.noseLength < 1.5) this.noseLength += this.fireFreq;
                setNoseShape();
            } else if (this.noseLength > 0.1) {
                this.noseLength -= this.fireFreq / 2;
                setNoseShape();
            }
            if (this.seePlayer.recall) {
                if (this.alpha < 1) this.alpha += 0.01;
            } else {
                if (this.alpha > 0) this.alpha -= 0.03;
            }
            if (this.alpha > 0) {
                if (this.alpha > 0.95) {
                    if (this.seePlayer.recall) this.healthBar4()

                    if (!this.isNotCloaked) {
                        this.isNotCloaked = true;
                        this.isBadTarget = false;
                        this.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob; 
                    }
                }
                ctx.beginPath();
                const vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1, len = vertices.length; j < len; ++j) {
                    ctx.lineTo(vertices[j].x, vertices[j].y);
                }
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.fillStyle = `rgba(25,0,50,${this.alpha * this.alpha})`;
                ctx.fill();
            } else if (this.isNotCloaked) {
                this.isNotCloaked = false;
                this.isBadTarget = true
                this.collisionFilter.mask = cat.map | cat.body | cat.bullet | cat.mob 
            }

        };
    },
    grenade(x, y, tier, lifeSpan = 90 + Math.ceil(60 / simulation.accelScale), pulseRadius = Math.min(550, 250 + simulation.difficulty * 3), size = 3) {
        mobs.spawn(x, y, 4, size, "rgb(215,0,190)"); 
        let me = mob[mob.length - 1];
        me.tier = tier
        me.stroke = "transparent";
        me.onHit = function () {
            this.explode(this.mass);
        };
        Matter.Body.setDensity(me, 0.00004); 

        me.lifeSpan = lifeSpan;
        me.timeLeft = me.lifeSpan;
        me.frictionAir = 0;
        me.restitution = 0.8;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.onDeath = function () {
            if (Vector.magnitude(Vector.sub(player.position, this.position)) < pulseRadius && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                m.takeDamage(0.015 * this.damageScale());
            }
            simulation.drawList.push({ 
                x: this.position.x,
                y: this.position.y,
                radius: pulseRadius,
                color: "rgba(255,0,220,0.4)",
                time: simulation.drawTime
            });
        };
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.map | cat.body | cat.player
        me.do = function () {
            this.timeLimit();
            ctx.beginPath(); 
            ctx.arc(this.position.x, this.position.y, pulseRadius * (1.01 - this.timeLeft / this.lifeSpan), 0, 2 * Math.PI); 
            ctx.fillStyle = "rgba(255,0,220,0.05)";
            ctx.fill();
            ctx.beginPath(); 
            ctx.arc(this.position.x, this.position.y, pulseRadius, 0, 2 * Math.PI); 
            ctx.fillStyle = "rgba(255,0,220,0.02)";
            ctx.fill();
            ctx.strokeStyle = "rgba(255,0,220,0.4)";
            ctx.lineWidth = 1
            ctx.stroke();
        };
    },
    freezeGrenade(x, y, tier = null, lifeSpan = 90, pulseRadius = 230 + 10 * tier, size = 3) {
        mobs.spawn(x, y, 4, size, "rgb(0,0,255)");
        let me = mob[mob.length - 1];
        me.tier = tier
        me.stroke = "transparent";
        me.onHit = function () {
            this.explode(this.mass);
        };
        Matter.Body.setDensity(me, 0.00004); 

        me.lifeSpan = lifeSpan;
        me.timeLeft = me.lifeSpan;
        me.frictionAir = 0;
        me.restitution = 0.8;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.onDeath = function () {
            simulation.ephemera.push({
                count: 260 + 10 * tier,
                position: {
                    x: me.position.x,
                    y: me.position.y,
                },
                level: level.levelsCleared,
                radius: pulseRadius,
                do() {
                    this.count--
                    if (this.count < 0 || this.level !== level.levelsCleared) simulation.removeEphemera(this);
                    this.radius *= 0.99

                    if (Vector.magnitude(Vector.sub(player.position, this.position)) < this.radius + 40) {
                        Matter.Body.setVelocity(player, { x: 0.7 * player.velocity.x, y: 0.94 * player.velocity.y });
                        ctx.beginPath();
                        ctx.arc(m.pos.x, m.pos.y, 34, 0, 2 * Math.PI);
                        ctx.strokeStyle = `rgba(0,0,255,0.2)`;
                        ctx.lineWidth = 8
                        ctx.stroke();
                        if (m.immuneCycle < m.cycle) m.takeDamage(0.00023 * spawn.dmgToPlayerByLevelsCleared());
                    }
                    for (let i = 0; i < bullet.length; i++) {
                        if (Vector.magnitude(Vector.sub(bullet[i].position, this.position)) < this.radius + 40) {
                            Matter.Body.setVelocity(bullet[i], { x: 0.95 * bullet[i].velocity.x, y: 0.97 * bullet[i].velocity.y });
                        }
                    }
                    ctx.beginPath();
                    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
                    ctx.fillStyle = `rgba(0,0,255,${0.2 + 0.1 * Math.random()})`;
                    ctx.fill();
                },
            })

        };
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.map | cat.body | cat.player
        me.do = function () {
            this.timeLimit();
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, pulseRadius * (1.01 - this.timeLeft / this.lifeSpan), 0, 2 * Math.PI); 
            ctx.fillStyle = "rgba(0,0,255,0.05)";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, pulseRadius, 0, 2 * Math.PI); 
            ctx.fillStyle = "rgba(0,0,255,0.02)";
            ctx.fill();
            ctx.strokeStyle = "rgba(0,0,255,0.4)";
            ctx.lineWidth = 1
            ctx.stroke();
        };
    },
    shieldingBoss(x, y, radius = 200) {
        mobs.spawn(x, y, 6, radius, "rgb(150, 150, 255)");
        let me = mob[mob.length - 1];
        me.tier = 1
        setTimeout(() => { 
            me.constraint = Constraint.create({
                pointA: {
                    x: me.position.x,
                    y: me.position.y
                },
                bodyB: me,
                stiffness: 0.0001,
                damping: 1
            });
            Composite.add(engine.world, me.constraint);
        }, 2000); 

        me.isBoss = true;
        me.cycle = 0
        me.maxCycles = 140;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 1;

        me.radius *= 1.5 
        spawn.shield(me, x, y, 1);
        me.radius /= 1.5

        spawn.spawnOrbitals(me, radius + 50 + 200 * Math.random())

        Matter.Body.setDensity(me, 0.006); 
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let i = 0; i < mob.length; i++) {
                if (mob[i].shield) mob[i].death()
            }
        };
        me.onDamage = function () {
            this.cycle = 0
        };
        me.damageReduction = 0.39
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.checkStatus();


            if (!this.isShielded) {
                ctx.beginPath();
                ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
                for (let i = 0; i < this.vertices.length; i++) {
                    ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
                }
                ctx.lineTo(this.vertices[0].x, this.vertices[0].y);

                ctx.moveTo(this.vertices[1].x, this.vertices[1].y);
                for (let i = 0; i < 3; i++) {
                    ctx.lineTo(this.position.x, this.position.y);
                    const vertex = (i * 2 + 1) % this.vertices.length
                    ctx.lineTo(this.vertices[vertex].x, this.vertices[vertex].y);
                }
                ctx.lineWidth = 3;
                ctx.strokeStyle = "#000";
                ctx.stroke();
            }


            ctx.beginPath(); 
            ctx.moveTo(this.vertices[this.vertices.length - 1].x, this.vertices[this.vertices.length - 1].y)
            const phase = (this.vertices.length + 1) * this.cycle / this.maxCycles
            if (phase > 1) ctx.lineTo(this.vertices[0].x, this.vertices[0].y)
            for (let i = 1; i < phase - 1; i++) ctx.lineTo(this.vertices[i].x, this.vertices[i].y)
            if (phase > 1) {
                ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                ctx.lineTo(this.position.x, this.position.y)
                if (phase > 3) {
                    ctx.moveTo(this.vertices[3].x, this.vertices[3].y)
                    ctx.lineTo(this.position.x, this.position.y)
                    if (phase > 5) {
                        ctx.moveTo(this.vertices[5].x, this.vertices[5].y)
                        ctx.lineTo(this.position.x, this.position.y)
                    }
                }
            }

            ctx.lineWidth = 5
            ctx.strokeStyle = "rgb(255,255,255)"
            ctx.stroke();

            this.cycle++
            if (this.cycle > this.maxCycles) {
                this.cycle = 0
                ctx.beginPath();
                for (let i = 0; i < mob.length; i++) {
                    if (!mob[i].isShielded && !mob[i].shield && mob[i].isDropPowerUp && mob[i].alive && !mob[i].isBoss && mob[i].team === this.team) {
                        ctx.moveTo(this.position.x, this.position.y)
                        ctx.lineTo(mob[i].position.x, mob[i].position.y)
                        spawn.shield(mob[i], mob[i].position.x, mob[i].position.y, 1, true);
                        mob[mob.length - 1].damageReduction = 0.5 * 0.075  
                    }
                }

                if (!this.isShielded && this.alive) {
                    me.radius *= 1.5 
                    spawn.shield(this, this.position.x, this.position.y, 1, true);
                    me.radius /= 1.5
                }

                ctx.lineWidth = 20
                ctx.strokeStyle = "rgb(200,200,255)"
                ctx.stroke();
            }
        };
    },
    defendingBoss(x, y, radius = 200) {
        mobs.spawn(x, y, 6, radius, "rgba(66, 66, 246, 1)");
        let me = mob[mob.length - 1];
        me.tier = 4
        setTimeout(() => { 
            me.constraint = Constraint.create({
                pointA: {
                    x: me.position.x,
                    y: me.position.y
                },
                bodyB: me,
                stiffness: 0.0001,
                damping: 1
            });
            Composite.add(engine.world, me.constraint);
        }, 2000); 

        Matter.Body.rotate(me, Math.random() * 2 * Math.PI)
        me.isBoss = true;
        me.cycle = 0
        me.maxCycles = 120;
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 1;

        me.radius *= 1.5 
        spawn.shield(me, x, y, 1);
        me.radius /= 1.5

        spawn.spawnOrbitals(me, radius + 50 + 200 * Math.random(), 1)
        Matter.Body.setDensity(me, 0.001);
        me.damageReduction = 0.3
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0


        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let i = 0; i < mob.length; i++) {
                if (mob[i].shield) mob[i].death()
            }
        };
        me.pushAway = function (magX = 0.13, magY = 0.05) {
            for (let i = 0, len = body.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(body[i].position, this.position)) < 4000000) { 
                    body[i].force.x += magX * body[i].mass * (body[i].position.x > this.position.x ? 1 : -1)
                    body[i].force.y -= magY * body[i].mass
                }
            }
            for (let i = 0, len = bullet.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(bullet[i].position, this.position)) < 4000000) { 
                    bullet[i].force.x += magX * bullet[i].mass * (bullet[i].position.x > this.position.x ? 1 : -1)
                    bullet[i].force.y -= magY * bullet[i].mass
                }
            }
            for (let i = 0, len = powerUp.length; i < len; ++i) {
                if (Vector.magnitudeSquared(Vector.sub(powerUp[i].position, this.position)) < 4000000) { 
                    powerUp[i].force.x += magX * powerUp[i].mass * (powerUp[i].position.x > this.position.x ? 1 : -1)
                    powerUp[i].force.y -= magY * powerUp[i].mass
                }
            }
            if (Vector.magnitudeSquared(Vector.sub(player.position, this.position)) < 4000000) { 
                player.force.x += magX * player.mass * (player.position.x > this.position.x ? 1 : -1)
                player.force.y -= magY * player.mass
            }
        }
        me.onDamage = function () {
            if (!this.isInvulnerable) this.cycle = 0
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 100
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar4()
            Matter.Body.rotate(this, 0.003) 
            this.checkStatus();

            if (!this.isShielded) {
                ctx.beginPath();
                ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
                for (let i = 0; i < this.vertices.length; i++) {
                    ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
                }
                ctx.lineTo(this.vertices[0].x, this.vertices[0].y);

                ctx.moveTo(this.vertices[1].x, this.vertices[1].y);
                for (let i = 0; i < 3; i++) {
                    ctx.lineTo(this.position.x, this.position.y);
                    const vertex = (i * 2 + 1) % this.vertices.length
                    ctx.lineTo(this.vertices[vertex].x, this.vertices[vertex].y);
                }
                ctx.lineWidth = 5;
                ctx.strokeStyle = "#000";
                ctx.stroke();
            }


            ctx.beginPath(); 
            ctx.moveTo(this.vertices[this.vertices.length - 1].x, this.vertices[this.vertices.length - 1].y)
            const phase = (this.vertices.length + 1) * this.cycle / this.maxCycles
            if (phase > 1) ctx.lineTo(this.vertices[0].x, this.vertices[0].y)
            for (let i = 1; i < phase - 1; i++) ctx.lineTo(this.vertices[i].x, this.vertices[i].y)
            if (phase > 1) {
                ctx.moveTo(this.vertices[1].x, this.vertices[1].y)
                ctx.lineTo(this.position.x, this.position.y)
                if (phase > 3) {
                    ctx.moveTo(this.vertices[3].x, this.vertices[3].y)
                    ctx.lineTo(this.position.x, this.position.y)
                    if (phase > 5) {
                        ctx.moveTo(this.vertices[5].x, this.vertices[5].y)
                        ctx.lineTo(this.position.x, this.position.y)
                    }
                }
            }
            ctx.lineWidth = 5
            ctx.strokeStyle = "rgb(255,255,255)"
            ctx.stroke();

            this.cycle++
            if (this.cycle > this.maxCycles) {
                this.cycle = 0
                ctx.beginPath();
                for (let i = 0; i < mob.length; i++) {
                    if (!mob[i].isShielded && !mob[i].shield && mob[i].isDropPowerUp && mob[i].alive && !mob[i].isBoss && mob[i].team === this.team) {
                        ctx.moveTo(this.position.x, this.position.y)
                        ctx.lineTo(mob[i].position.x, mob[i].position.y)
                        spawn.shield(mob[i], mob[i].position.x, mob[i].position.y, 1, true);
                        mob[mob.length - 1].damageReduction = 0.5 * 0.075  
                    }
                }
                if (!this.isShielded && this.alive) {
                    me.radius *= 1.5 
                    spawn.shield(this, this.position.x, this.position.y, 1, true);
                    me.radius /= 1.5
                }
                ctx.lineWidth = 20
                ctx.strokeStyle = "rgb(200,200,255)"
                ctx.stroke();
            }
            if (this.isInvulnerable) {
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.pushAway(0.1, 0.04)
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            }
        };
    },
    conductorBoss(x, y, radius = 100) {
        mobs.spawn(x, y, 4, radius, "rgb(68, 68, 68)");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.0045); 
        me.damageReduction = 0.39
        me.stroke = color.map;
        me.fill = color.map;
        me.cycle = 0
        me.maxCycles = 300 - 15 * simulation.difficultyMode;
        me.frictionStatic = 1;
        me.friction = 1;
        me.frictionAir = 1;
        me.g = 0.0032; 

        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.lastMapPLayerOn = null
        me.do = function () {
            this.cycle++
            this.gravity();
            if (this.seePlayer.recall) this.healthBar3()
            this.checkStatus();
            if (this.isStunned) {
                this.cycle = 0
            } else {
                simulation.ephemera.push({ 
                    opacity: Math.pow(this.cycle / this.maxCycles, 3),
                    do() {
                        simulation.removeEphemera(this)
                        ctx.fillStyle = `rgba(255,50,100,${this.opacity})`;
                        ctx.fill(simulation.draw.mapPath);
                    },
                })
            }
            if (this.cycle > this.maxCycles) {
                this.cycle = 0
                const touching = Matter.Query.collides(player, map)
                if (Matter.Query.collides(player, map).length && m.immuneCycle < m.cycle) {
                    m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                    const dmg = 0.03 * this.damageScale()
                    m.takeDamage(dmg);

                    const where = touching[0].supports[0]
                    simulation.drawList.push({ 
                        x: where.x,
                        y: where.y,
                        radius: Math.sqrt(dmg) * 200,
                        color: simulation.mobDmgColor,
                        time: simulation.drawTime
                    });
                }
            }
        };
    },
    timeSkipBoss(x, y, radius = 50) {
        mobs.spawn(x, y, 15, radius, "transparent");
        let me = mob[mob.length - 1];
        me.tier = 3
        me.isBoss = true;
        me.eventHorizon = 0; 
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.005;
        me.accelMag = 0.00008 + 0.00002 * simulation.accelScale
        spawn.shield(me, x, y, 1);
        spawn.spawnOrbitals(me, radius + 50 + 100 * Math.random())

        Matter.Body.setDensity(me, 0.0025); 
        me.damageReduction = 0.07
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.onDamage = function () { };
        me.do = function () {
            this.seePlayerByHistory(60);
            this.attraction();
            if (this.distanceToPlayer2() > 9000000) this.attraction(); 
            this.checkStatus();
            this.eventHorizon = 950 + 250 * Math.sin(simulation.cycle * 0.005)
            if (!simulation.isTimeSkipping) {
                if (Vector.magnitude(Vector.sub(this.position, m.pos)) < this.eventHorizon) {
                    if (this.seePlayer.recall) this.healthBar3()
                    this.attraction();
                    this.damageReduction = this.startingDamageReduction
                    this.isInvulnerable = false

                    requestAnimationFrame(() => {
                        simulation.timePlayerSkip(1)
                    }); 

                    m.walk_cycle += m.flipLegs * m.Vx 

                    ctx.beginPath();
                    ctx.arc(this.position.x, this.position.y, this.eventHorizon, 0, 2 * Math.PI);
                    ctx.fillStyle = "#fff";
                    ctx.globalCompositeOperation = "destination-in"; 
                    ctx.fill();
                    ctx.globalCompositeOperation = "source-over";
                    ctx.beginPath();
                    ctx.arc(this.position.x, this.position.y, this.eventHorizon, 0, 2 * Math.PI);
                    ctx.clip();
                } else {
                    this.damageReduction = 0
                    this.isInvulnerable = true
                    requestAnimationFrame(() => {
                        simulation.camera();
                        ctx.beginPath(); 
                        ctx.arc(this.position.x, this.position.y, this.eventHorizon, 0, 2 * Math.PI, false); 
                        ctx.fillStyle = document.body.style.backgroundColor;
                        ctx.fill();
                        ctx.restore();
                    })
                }
            }
        };
    },
    streamBoss(x, y, radius = 110) {
        mobs.spawn(x, y, 5, radius, "rgb(245,180,255)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.isBoss = true;
        me.accelMag = 0.0001
        me.canFire = false;
        me.closestVertex1 = 0;
        me.closestVertex2 = 1;
        me.cycle = 0
        me.frictionStatic = 0;
        me.friction = 0;
        me.frictionAir = 0.022;
        me.memory = 240;
        me.repulsionRange = 1200000; 
        spawn.shield(me, x, y, 1);
        spawn.spawnOrbitals(me, radius + 50 + 200 * Math.random())

        Matter.Body.setDensity(me, 0.01); 
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.onDamage = function () { };
        me.damageReduction = 0.28
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            this.repulsion();

            this.cycle++
            if (this.seePlayer.recall && ((this.cycle % 15) === 0)) {
                if (this.canFire) {
                    if (this.cycle > 100) {
                        this.cycle = 0
                        this.canFire = false
                    }
                    spawn.seeker(this.vertices[this.closestVertex1].x, this.vertices[this.closestVertex1].y, this.tier, 6)
                    Matter.Body.setDensity(mob[mob.length - 1], 0.000001); 
                    const velocity = Vector.mult(Vector.normalise(Vector.sub(this.position, this.vertices[this.closestVertex1])), -10)
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + velocity.x,
                        y: this.velocity.y + velocity.y
                    });
                    spawn.seeker(this.vertices[this.closestVertex2].x, this.vertices[this.closestVertex2].y, this.tier, 6)
                    Matter.Body.setDensity(mob[mob.length - 1], 0.000001); 
                    const velocity2 = Vector.mult(Vector.normalise(Vector.sub(this.position, this.vertices[this.closestVertex2])), -10)
                    Matter.Body.setVelocity(mob[mob.length - 1], {
                        x: this.velocity.x + velocity2.x,
                        y: this.velocity.y + velocity2.y
                    });
                } else if (this.cycle > 270) {
                    this.cycle = 0
                    this.canFire = true

                    let distance2 = Infinity
                    for (let i = 0; i < this.vertices.length; i++) {
                        const d = Vector.magnitudeSquared(Vector.sub(this.vertices[i], player.position))
                        if (d < distance2) {
                            distance2 = d
                            this.closestVertex2 = this.closestVertex1
                            this.closestVertex1 = i
                        }
                    }
                    if (this.closestVertex2 === this.closestVertex1) {
                        this.closestVertex2++
                        if (this.closestVertex2 === this.vertices.length) this.closestVertex2 = 0
                    }
                }
            }
        };
    },
    seeker(x, y, tier = 1, radius = 8, sides = 6) {
        mobs.spawn(x, y, sides, radius, "rgba(255,0,255,1)");
        let me = mob[mob.length - 1];
        me.tier = tier
        me.stroke = "transparent";
        me.onHit = function () {
            this.explode(this.mass * 20);
        };
        Matter.Body.setDensity(me, 0.000015); 
        me.timeLeft = 420 
        me.accelMag = 0.00017 * simulation.accelScale; 
        me.frictionAir = 0.01 
        me.restitution = 0.5;
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isMobBullet = true;
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet;
        me.do = function () {
            if (this.timeLeft < 90) this.fill = `rgba(255,0,255,${0.3 + 0.7 * Math.min(90, this.timeLeft) / 90})`
            this.alwaysSeePlayer()
            this.attraction();
            this.timeLimit();
        };
    },
    spawner(x, y, radius = 55 + Math.ceil(Math.random() * 50)) {
        mobs.spawn(x, y, 4, radius, "rgb(255,150,0)");
        let me = mob[mob.length - 1];
        me.tier = 2
        me.g = 0.0004; 
        me.leaveBody = false;
        me.onDeath = function () { 
            for (let i = 0; i < Math.ceil(this.mass * 0.15 + Math.random() * 2.5); ++i) {
                spawn.spawns(this.position.x + (Math.random() - 0.5) * radius * 2.5, this.position.y + (Math.random() - 0.5) * radius * 2.5, this.tier);
                Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x + (Math.random() - 0.5) * 15, y: this.velocity.x + (Math.random() - 0.5) * 15 });
            }
        };
        spawn.shield(me, x, y);
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar2()
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
        };
    },
    spawns(x, y, tier = 2, radius = 15) {
        mobs.spawn(x, y, 4, radius, "rgb(255,0,0)");
        let me = mob[mob.length - 1];
        me.onHit = function () { 
            this.explode();
        };
        me.collisionFilter.mask = cat.player | cat.bullet | cat.body | cat.map | cat.mob
        Matter.Body.setDensity(me, 0.0001); 
        me.g = 0.00002; 
        me.accelMag = 0.00012 * simulation.accelScale;
        me.isDropPowerUp = false
        me.leaveBody = false;
        me.seePlayerFreq = Math.floor((80 + 50 * Math.random()));
        me.frictionAir = 0.004;
        me.do = function () {
            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
        };
    },
    exploder(x, y, radius = 40 + Math.ceil(Math.random() * 50)) {
        mobs.spawn(x, y, 4, radius, "rgb(255,0,0)");
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.setDensity(me, 0.0013); 
        me.onHit = function () {
            this.explode(2.5 * this.mass);
        };
        me.g = 0.0004; 
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            ctx.beginPath();
            const vertices = this.vertices;
            ctx.moveTo(vertices[0].x, vertices[0].y);
            for (let j = 1, len = vertices.length; j < len; ++j) ctx.lineTo(vertices[j].x, vertices[j].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.strokeStyle = `rgba(255,0,50,${0.13 + 0.45 * Math.random()})`
            ctx.lineWidth = 30
            ctx.stroke();
            ctx.strokeStyle = "rgba(255,0,50,0.1)"
            ctx.lineWidth = 70
            ctx.stroke();

            this.gravity();
            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
        };
    },
    tubeWormBoss(x, y, radius = 40) {
        mobs.spawn(x, y, 0, radius, "rgb(167, 0, 114)");
        let me = mob[mob.length - 1];
        me.tier = 1
        Matter.Body.setDensity(me, 0.06); 
        me.isBoss = true;
        me.damageReduction = 0.35
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.accelMag = 0.00018
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4 
                this.invulnerableCount = 240
                this.isInvulnerable = true
                this.damageReduction = 0
                this.accelMag *= 3
                const who = tail.segments[tail.segments.length - 1]
                for (let i = 0; i < 4; i++) {
                    tail.segments.push({
                        x: who.x,
                        y: who.y,
                        vx: who.vx,
                        vy: who.vy
                    });
                }
            }
        };

        class Scarf {
            constructor(length = 5, dmg = 0.15 * me.damageScale()) {
                this.damage = dmg
                this.segments = [];
                this.friction = 0.4;   
                this.stiffness = 0.05;   
                for (let i = 0; i < length; i++) {
                    this.segments.push({ x: me.position.x, y: me.position.y, vx: 0, vy: 0 });
                }
            }
            update(anchorX, anchorY) {
                this.segments[0].x = anchorX;
                this.segments[0].y = anchorY;
                for (let i = 1; i < this.segments.length; i++) {
                    let seg = this.segments[i];
                    let prev = this.segments[i - 1];
                    seg.vx += (prev.x - seg.x) * this.stiffness;
                    seg.vy += (prev.y - seg.y) * this.stiffness;
                    seg.vx *= this.friction;
                    seg.vy *= this.friction;
                    seg.x += seg.vx;
                    seg.y += seg.vy;
                }
            }
            draw(strokeStyle) {
                ctx.beginPath();
                ctx.lineWidth = 2 * radius;
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.strokeStyle = strokeStyle

                ctx.moveTo(this.segments[0].x, this.segments[0].y);
                for (let i = 1; i < this.segments.length - 1; i++) {
                    const xc = (this.segments[i].x + this.segments[i + 1].x) / 2;
                    const yc = (this.segments[i].y + this.segments[i + 1].y) / 2;
                    ctx.quadraticCurveTo(this.segments[i].x, this.segments[i].y, xc, yc);
                }
                const last = this.segments[this.segments.length - 1];
                ctx.lineTo(last.x, last.y);

                ctx.stroke();
            }
            hits() {
                if (m.immuneCycle < m.cycle) {
                    for (let i = 1; i < this.segments.length - 1; i++) {
                        if (Matter.Query.ray([player], this.segments[i], this.segments[i + 1], radius).length > 0) {
                            m.immuneCycle = m.cycle + m.collisionImmuneCycles + 60
                            m.takeDamage(this.damage);
                            simulation.drawList.push({ 
                                x: m.pos.x,
                                y: m.pos.y,
                                radius: this.damage * 1500,
                                color: color,
                                time: 20
                            });

                            for (let i = 0; i < this.segments.length; i++) this.segments[i] = { x: me.position.x, y: me.position.y, vx: 0, vy: 0 }

                            break
                        }
                    }
                }
            }
        }
        me.do = function () { }
        const tail = new Scarf()

        simulation.ephemera.push({
            cycle: 30,
            do() {
                this.cycle--
                if (this.cycle < 1) {
                    simulation.removeEphemera(this);
                }
                for (let i = 0; i < tail.segments.length; i++) tail.segments[i] = { x: me.position.x, y: me.position.y, vx: 0, vy: 0 }
            },
        })

        me.onDeath = function () {
            simulation.ephemera.push({
                cycle: 60,
                do() {
                    this.cycle--
                    tail.draw(`rgba(255, 0, 98, ${0.3 * this.cycle / 100})`)
                    if (this.cycle < 1) simulation.removeEphemera(this);
                },
            })
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        }
        me.onHit = function () { };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()

            tail.update(this.position.x, this.position.y);
            tail.hits()

            this.seePlayerCheck();
            this.checkStatus();
            this.attraction();
            if (this.isInvulnerable) {
                tail.draw("rgba(255, 0, 98, 0.6)");
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.accelMag /= 3
                    this.damageReduction = this.startingDamageReduction
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else {
                tail.draw("rgba(255, 0, 98, 0.3)");
            }

        };
    },

    snakeSpitBoss(x, y, radius = 50) {
        let angle = Math.PI
        const tailRadius = 300

        const color1 = "rgb(235,180,255)"
        mobs.spawn(x + tailRadius * Math.cos(angle), y + tailRadius * Math.sin(angle), 8, radius, color1); 
        let me = mob[mob.length - 1];
        me.tier = 3
        me.isBoss = true;
        me.accelMag = 0.0001 + 0.0004 * Math.sqrt(simulation.accelScale)
        me.memory = 250;
        me.laserRange = 500;
        Matter.Body.setDensity(me, 0.0022 + 0.00022 * Math.sqrt(simulation.difficulty)); 
        me.startingDamageReduction = 0.14
        me.damageReduction = 0
        me.isInvulnerable = true

        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.canFire = false;
        me.closestVertex1 = 0;
        me.cycle = 0
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar3()
            this.seePlayerByHistory(40)
            this.checkStatus();
            this.attraction();
            this.cycle++
            if (this.seePlayer.recall && ((this.cycle % 10) === 0)) {
                if (this.canFire) {
                    if (this.cycle > 150) {
                        this.cycle = 0
                        this.canFire = false
                    }
                    spawn.seeker(this.vertices[this.closestVertex1].x, this.vertices[this.closestVertex1].y, this.tier, 6)
                    Matter.Body.setDensity(mob[mob.length - 1], 0.000001); 
                    const velocity = Vector.mult(Vector.normalise(Vector.sub(this.vertices[this.closestVertex1], this.position)), 20)
                    Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x + velocity.x, y: this.velocity.y + velocity.y });
                } else if (this.cycle > 150) {
                    this.cycle = 0
                    this.canFire = true
                    let distance2 = Infinity
                    for (let i = 0; i < this.vertices.length; i++) {
                        const d = Vector.magnitudeSquared(Vector.sub(this.vertices[i], player.position))
                        if (d < distance2) {
                            distance2 = d
                            this.closestVertex1 = i
                        }
                    }
                }
            }
            if (this.isInvulnerable) {
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 20;
                ctx.strokeStyle = "rgba(255,255,255,0.7)";
                ctx.stroke();
            }
        };
        angle -= 0.07
        let previousTailID = 0
        const nodes = Math.min(10 + Math.ceil(0.6 * simulation.difficulty), 60)
        for (let i = 0; i < nodes; ++i) {
            angle -= 0.1
            spawn.snakeBody(x + tailRadius * Math.cos(angle), y + tailRadius * Math.sin(angle), this.tier, i === 0 ? 25 : 20);
            if (i < 4) mob[mob.length - 1].snakeHeadID = me.id
            mob[mob.length - 1].previousTailID = previousTailID
            previousTailID = mob[mob.length - 1].id
        }
        const damping = 1
        const stiffness = 1
        this.constrain2AdjacentMobs(nodes, stiffness, false, damping);
        for (let i = mob.length - 1, len = i - nodes; i > len; i--) { 
            if (i % 2) {
                mob[i].fill = "#778"
            } else {
                mob[i].fill = color1
            }
        }
        consBB[consBB.length] = Constraint.create({
            bodyA: mob[mob.length - nodes],
            bodyB: mob[mob.length - 1 - nodes],
            stiffness: stiffness,
            damping: damping
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
        consBB[consBB.length] = Constraint.create({
            bodyA: mob[mob.length - nodes + 1],
            bodyB: mob[mob.length - 1 - nodes],
            stiffness: stiffness,
            damping: damping
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
        consBB[consBB.length] = Constraint.create({
            bodyA: mob[mob.length - nodes + 2],
            bodyB: mob[mob.length - 1 - nodes],
            stiffness: stiffness,
            damping: damping
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
    },
    dragonFlyBoss(x, y, radius = 42) { 
        let angle = Math.PI
        const tailRadius = 300
        mobs.spawn(x + tailRadius * Math.cos(angle), y + tailRadius * Math.sin(angle), 8, radius, "#000"); 
        let me = mob[mob.length - 1];
        me.tier = 1
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.002); 
        me.startingDamageReduction = 0.1
        me.damageReduction = 0
        me.isInvulnerable = true

        me.accelMag = 0.00055
        me.memory = 250;
        me.seePlayerFreq = 13
        me.flapRate = 0.4
        me.flapArc = 0.2 
        me.wingLength = 150
        me.ellipticity = 0.3
        me.angleOff = 0.4

        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            for (let i = 0, len = mob.length; i < len; i++) {
                if (this.id === mob[i].snakeHeadID && mob[i].alive) mob[i].death()
            }
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByHistory(40)
            this.checkStatus();
            this.attraction();

            let a 
            if (this.isInvulnerable) {
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 12;
                ctx.strokeStyle = "rgba(255,255,255,0.9)";
                ctx.stroke();
                const sub = Vector.sub(this.position, this.snakeBody1.position)
                a = Math.atan2(sub.y, sub.x)
            } else {
                a = Math.atan2(this.velocity.y, this.velocity.x)
            }

            ctx.fillStyle = `hsla(${160 + 40 * Math.random()}, 100%, ${25 + 25 * Math.random() * Math.random()}%, 0.9)`; 
            this.wing(a + Math.PI / 2 + this.angleOff + this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity)
            this.wing(a - Math.PI / 2 - this.angleOff - this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity)
            this.wing(a - Math.PI / 2 + this.angleOff + this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity)
            this.wing(a + Math.PI / 2 - this.angleOff - this.flapArc * Math.sin(simulation.cycle * this.flapRate), this.wingLength, this.ellipticity)
        };

        angle -= 0.07
        let previousTailID = 0
        const nodes = Math.min(10 + Math.ceil(0.6 * simulation.difficulty), 60)
        for (let i = 0; i < nodes; ++i) {
            angle -= 0.1
            spawn.snakeBody(x + tailRadius * Math.cos(angle), y + tailRadius * Math.sin(angle), this.tier, i === 0 ? 25 : 20);
            const who = mob[mob.length - 1]
            who.damageReduction = 0.05   
            who.fill = `hsl(${160 + 40 * Math.random()}, 100%, ${5 + 25 * Math.random() * Math.random()}%)`
            if (i < 4) who.snakeHeadID = me.id
            if (i === 0) me.snakeBody1 = who 
            who.previousTailID = previousTailID
            previousTailID = who.id
        }
        const damping = 1
        const stiffness = 1
        this.constrain2AdjacentMobs(nodes, stiffness, false, damping);
        consBB[consBB.length] = Constraint.create({
            bodyA: mob[mob.length - nodes],
            bodyB: mob[mob.length - 1 - nodes],
            stiffness: stiffness,
            damping: damping
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
        consBB[consBB.length] = Constraint.create({
            bodyA: mob[mob.length - nodes + 1],
            bodyB: mob[mob.length - 1 - nodes],
            stiffness: stiffness,
            damping: damping
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
        consBB[consBB.length] = Constraint.create({
            bodyA: mob[mob.length - nodes + 2],
            bodyB: mob[mob.length - 1 - nodes],
            stiffness: stiffness,
            damping: damping
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
    },
    snakeBody(x, y, tier, radius = 10) {
        mobs.spawn(x, y, 8, radius, "rgba(0,180,180,0.4)");
        let me = mob[mob.length - 1];
        me.tier = tier
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body 
        me.damageReduction = 0.031
        Matter.Body.setDensity(me, 0.0001); 

        me.leaveBody = Math.random() < 0.33 ? true : false;
        me.isDropPowerUp = false;
        me.frictionAir = 0;
        me.isSnakeTail = true;
        me.stroke = "transparent"
        me.onDeath = function () {
            setTimeout(() => {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (this.id === mob[i].previousTailID && mob[i].alive) mob[i].death()
                    if (this.snakeHeadID === mob[i].id) {
                        mob[i].isInvulnerable = false
                        mob[i].damageReduction = mob[i].startingDamageReduction
                    } else if (mob[i].isSnakeTail) {
                        mob[i].health *= 0.95
                    }
                }
            }, 500);
        };
        me.do = function () {
            this.checkStatus();
        };
    },
    tetherBoss(x, y, constraint, radius = 90) {
        mobs.spawn(x, y, 8, radius, "rgb(0,60,80)");
        let me = mob[mob.length - 1];
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.0006 + 0.0001 * Math.sqrt(simulation.difficulty)); 
        me.damageReduction = 0.27
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.g = 0.0001; 
        me.accelMag = 0.0012 + 0.0013 * simulation.accelScale;
        me.memory = 20;
        me.repulsionRange = 1800 * 1800

        const constraint1 = cons[cons.length] = Constraint.create({
            pointA: { x: constraint.x, y: constraint.y },
            bodyB: me,
            stiffness: 0.00012
        });
        Composite.add(engine.world, cons[cons.length - 1]);

        spawn.shield(me, x, y, 1);
        setTimeout(() => { spawn.spawnOrbitals(me, radius + 50 + 200 * Math.random()) }, 100); 
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            this.removeCons(); 
            me.babies(0.05 * simulation.difficulty + 1)
        };
        me.babies = function (len) {
            const delay = Math.max(3, Math.floor(15 - len / 2))
            let i = 0
            let spawnFlutters = () => {
                if (i < len) {
                    if (!(simulation.cycle % delay) && !simulation.paused && !simulation.isChoosing && m.alive) {
                        const unit = Vector.normalise(Vector.sub(player.position, this.position))
                        const velocity = Vector.mult(unit, 10 + 10 * Math.random())
                        const where = Vector.add(this.position, Vector.mult(unit, radius * 1.2))
                        spawn.allowShields = false
                        spawn.flutter(where.x, where.y, Math.floor(9 + 8 * Math.random()))
                        const who = mob[mob.length - 1]
                        Matter.Body.setDensity(who, 0.01); 
                        Matter.Body.setVelocity(who, velocity);
                        Matter.Body.setAngle(who, Math.atan2(velocity.y, velocity.x))

                        this.alertNearByMobs();
                        spawn.allowShields = true
                        i++
                    }
                    requestAnimationFrame(spawnFlutters);
                }
            }
            requestAnimationFrame(spawnFlutters);
        }
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive && this.health > 0) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 60 + Math.floor(30 * Math.random()) + simulation.difficultyMode * 10
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        me.do = function () {
            this.gravity();
            if (this.isInvulnerable) {
                this.repulsion();
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.frictionAir = 0.05
                    me.babies(0.07 * simulation.difficulty + 2)
                    if (this.radius > 15) {
                        const scale = 0.88;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                    }
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else {
                this.seePlayerCheck();
                this.checkStatus();
                this.attraction();
            }
            ctx.beginPath();
            ctx.moveTo(constraint1.pointA.x, constraint1.pointA.y);
            ctx.lineTo(constraint1.bodyB.position.x + constraint1.pointB.x, constraint1.bodyB.position.y + constraint1.pointB.y);
            ctx.lineWidth = 1
            ctx.strokeStyle = "rgba(0,0,0,0.2)";
            ctx.stroke();
        };
    },
    tetherBoss4(x, y, constraint, radius = 90) {
        mobs.spawn(x, y, 8, radius, "rgb(0,60,80)");
        let me = mob[mob.length - 1];
        me.isBoss = true;
        me.tier = 4
        Matter.Body.setDensity(me, 0.0006 + 0.0001 * Math.sqrt(simulation.difficulty)); 
        me.damageReduction = 0.27
        me.startingDamageReduction = me.damageReduction
        me.isInvulnerable = false
        me.nextHealthThreshold = 0.75
        me.invulnerableCount = 0
        me.g = 0.0001; 
        me.accelMag = 0.005
        me.memory = 20;
        me.repulsionRange = 3000 * 3000

        cons[cons.length] = Constraint.create({
            pointA: { x: constraint.x, y: constraint.y },
            bodyB: me,
            stiffness: 0.00006
        });
        Composite.add(engine.world, cons[cons.length - 1]);

        spawn.shield(me, x, y, 1);
        setTimeout(() => { spawn.spawnOrbitals(me, radius + 50 + 200 * Math.random()) }, 100); 
        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
            this.removeCons(); 
            me.babies(0.05 * simulation.difficulty + 1)
        };
        me.babies = function (len) {
            const delay = Math.max(3, Math.floor(15 - len / 2))
            let i = 0
            let spawnFlutters = () => {
                if (i < len) {
                    if (!(simulation.cycle % delay) && !simulation.paused && !simulation.isChoosing && m.alive) {
                        const unit = Vector.normalise(Vector.sub(player.position, this.position))
                        const velocity = Vector.mult(unit, 10 + 10 * Math.random())
                        const where = Vector.add(this.position, Vector.mult(unit, radius * 1.2))
                        spawn.allowShields = false
                        spawn.flutter(where.x, where.y, Math.floor(9 + 8 * Math.random()))
                        const who = mob[mob.length - 1]
                        who.tier = 4
                        Matter.Body.setDensity(who, 0.002); 
                        Matter.Body.setVelocity(who, velocity);
                        Matter.Body.setAngle(who, Math.atan2(velocity.y, velocity.x))

                        this.alertNearByMobs();
                        spawn.allowShields = true
                        i++
                    }
                    requestAnimationFrame(spawnFlutters);
                }
            }
            requestAnimationFrame(spawnFlutters);
        }
        me.onDamage = function () {
            if (this.health < this.nextHealthThreshold && this.alive) {
                this.health = this.nextHealthThreshold - 0.01
                this.nextHealthThreshold = Math.floor(this.health * 4) / 4
                this.invulnerableCount = 60 + Math.floor(30 * Math.random()) + simulation.difficultyMode * 10
                this.isInvulnerable = true
                this.damageReduction = 0
            }
        };
        me.do = function () {
            this.gravity();
            if (this.isInvulnerable) {
                this.repulsion();
                this.invulnerableCount--
                if (this.invulnerableCount < 0) {
                    this.isInvulnerable = false
                    this.damageReduction = this.startingDamageReduction
                    this.frictionAir = 0.05
                    me.babies(0.07 * simulation.difficulty + 2)
                    if (this.radius > 15) {
                        const scale = 0.88;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                    }
                }
                ctx.beginPath();
                let vertices = this.vertices;
                ctx.moveTo(vertices[0].x, vertices[0].y);
                for (let j = 1; j < vertices.length; j++) ctx.lineTo(vertices[j].x, vertices[j].y);
                ctx.lineTo(vertices[0].x, vertices[0].y);
                ctx.lineWidth = 13 + 5 * Math.random();
                ctx.strokeStyle = `rgba(255,255,255,${0.5 + 0.2 * Math.random()})`;
                ctx.stroke();
            } else {
                this.seePlayerCheck();
                this.checkStatus();
                this.attraction();
            }
        };
    },
    shield(target, x, y, chance = (level.isMobShields ? 4 : 1) * Math.min(0.02 + simulation.difficulty * 0.005, 0.2)) {
        if (this.allowShields && Math.random() < chance) {
            mobs.spawn(x, y, 6, target.radius + 30, "rgba(220,220,255,0.9)");
            let me = mob[mob.length - 1];
            Matter.Body.rotate(me, Math.random() * Math.PI);
            Matter.Body.setDensity(me, 0.00001) 
            me.stroke = "transparent";
            me.shield = true;
            me.team = target.team;
            me.damageReduction = 0.073
            me.torqueMag = (0.00000005 + 0.00000001 * (Math.random() - 0.5)) * me.inertia
            me.isUnblockable = true
            me.collisionFilter.category = cat.mobShield
            me.collisionFilter.mask = cat.bullet;
            consBB[consBB.length] = Constraint.create({
                bodyA: me,
                bodyB: target, 
                stiffness: 0.4,
                damping: 0.1
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);

            me.onDamage = function () {
                this.alertNearByMobs();
                this.fill = `rgba(220,220,255,${0.3 + 0.6 * this.health})`
            };
            me.leaveBody = false;
            me.isDropPowerUp = false;
            me.shieldTargetID = target.id
            target.isShielded = true;
            if (target.shieldCount > 0) {
                target.shieldCount++
            } else {
                target.shieldCount = 1
            }
            me.shieldCount = target.shieldCount 
            target.shieldID = me.id

            me.onDeath = function () {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].id === this.shieldTargetID) mob[i].isShielded = false;
                }
            };
            me.do = function () {
                this.checkStatus();

                this.torque += this.torqueMag;

                ctx.beginPath();
                ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
                for (let i = 0; i < this.vertices.length; i++) {
                    ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
                }
                ctx.lineTo(this.vertices[0].x, this.vertices[0].y);

                ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
                for (let i = 0; i < 3; i++) {
                    ctx.lineTo(this.position.x, this.position.y);
                    const vertex = (i * 2) % this.vertices.length
                    ctx.lineTo(this.vertices[vertex].x, this.vertices[vertex].y);
                }
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = "#222";
                ctx.stroke();
            };

            mob.unshift(me); 

        }
    },
    groupShield(targets, x, y, radius, stiffness = 0.4) {
        const nodes = targets.length
        mobs.spawn(x, y, 9, radius, "rgba(220,220,255,0.9)");
        let me = mob[mob.length - 1];
        me.stroke = "rgb(220,220,255)";
        Matter.Body.setDensity(me, 0.00001) 
        me.frictionAir = 0;
        me.shield = true;
        me.team = mob[mob.length - 2] ? mob[mob.length - 2].team : me.team;
        me.shieldTargetIDs = targets.slice();
        me.damageReduction = 0.075
        me.collisionFilter.category = cat.mobShield
        me.collisionFilter.mask = cat.bullet;
        for (let i = 0; i < nodes; ++i) {
            mob[mob.length - i - 2].isShielded = true;
            consBB[consBB.length] = Constraint.create({
                bodyA: me,
                bodyB: mob[mob.length - i - 2],
                stiffness: stiffness,
                damping: 0.1
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        me.onDamage = function () {
            this.alertNearByMobs(); 
            this.fill = `rgba(220,220,255,${0.3 + 0.6 * this.health})`
        };
        me.onDeath = function () {
            for (let j = 0; j < targets.length; j++) {
                for (let i = 0, len = mob.length; i < len; i++) {
                    if (mob[i].id === targets[j]) mob[i].isShielded = false;
                }
            }
        };
        me.leaveBody = false;
        me.isDropPowerUp = false;
        mob[mob.length - 1] = mob[mob.length - 1 - nodes];
        mob[mob.length - 1 - nodes] = me;
        me.do = function () {
            this.checkStatus();
        };
    },
    spawnOrbitals(who, radius, chance = Math.min(0.25 + simulation.difficulty * 0.005)) {
        if (Math.random() < chance) {
            const len = Math.floor(Math.min(15, 3 + Math.sqrt(simulation.difficulty)))
            const speed = (0.003 + 0.004 * Math.random() + 0.002 * Math.sqrt(simulation.difficulty)) * ((Math.random() < 0.5) ? 1 : -1)
            const offSet = 6.28 * Math.random()
            for (let i = 0; i < len; i++) spawn.orbital(who, radius, i / len * 2 * Math.PI + offSet, speed)
        }
    },
    orbital(who, radius, phase, speed) {
        mobs.spawn(who.position.x, who.position.y, 8, 12, "rgb(255,0,150)");
        let me = mob[mob.length - 1];
        me.stroke = "transparent";
        Matter.Body.setDensity(me, 0.01); 
        me.leaveBody = false;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isUnstable = true; 
        me.isOrbital = true;
        me.collisionFilter.category = cat.mobBullet;
        me.collisionFilter.mask = cat.bullet; 
        me.do = function () {
            if (!who || !who.alive) {
                this.death();
                return
            }
            const time = simulation.cycle * speed + phase
            const orbit = {
                x: Math.cos(time),
                y: Math.sin(time)
            }
            Matter.Body.setPosition(this, Vector.add(Vector.add(who.position, who.velocity), Vector.mult(orbit, radius)))
            if (Matter.Query.collides(this, [player]).length > 0 && !(m.isCloak && tech.isIntangible) && m.immuneCycle < m.cycle) {
                m.immuneCycle = m.cycle + m.collisionImmuneCycles; 
                const dmg = 0.03 * this.damageScale()
                m.takeDamage(dmg);
                simulation.drawList.push({ 
                    x: this.position.x,
                    y: this.position.y,
                    radius: Math.sqrt(dmg) * 200,
                    color: simulation.mobDmgColor,
                    time: simulation.drawTime
                });
                this.death();
            }
        };
    },
    orbitalBoss(x, y, radius = 70) {
        const nodeBalance = Math.random()
        const nodes = Math.min(15, Math.floor(2 + 4 * nodeBalance + 0.75 * Math.sqrt(simulation.difficulty)))
        mobs.spawn(x, y, nodes, radius, "rgb(255,0,150)");
        let me = mob[mob.length - 1];
        me.tier = 1
        me.isBoss = true;
        Matter.Body.setDensity(me, 0.0018 + 0.00015 * Math.sqrt(simulation.difficulty)); 
        me.damageReduction = 0.11

        me.stroke = "transparent";
        me.seeAtDistance2 = 2000000;
        me.collisionFilter.mask = cat.bullet | cat.player | cat.body | cat.map
        me.memory = Infinity;
        me.frictionAir = 0.04;
        me.accelMag = 0.0002 + 0.00015 * simulation.accelScale
        spawn.shield(me, x, y, 1);

        const rangeInnerVsOuter = Math.random()
        let speed = (0.006 + 0.001 * Math.sqrt(simulation.difficulty)) * ((Math.random() < 0.5) ? 1 : -1)
        let range = radius + 350 + 200 * rangeInnerVsOuter + nodes * 7
        for (let i = 0; i < nodes; i++) spawn.orbital(me, range, i / nodes * 2 * Math.PI, speed)
        const orbitalIndexes = [] 
        for (let i = 0; i < nodes; i++) orbitalIndexes.push(mob.length - 1 - i)
        range = Math.max(60, 100 + 100 * Math.random() - nodes * 3 - rangeInnerVsOuter * 80)
        speed = speed * (1.25 + 2 * Math.random())
        const subNodes = Math.max(2, Math.floor(6 - 5 * nodeBalance + 0.5 * Math.sqrt(simulation.difficulty)))
        for (let j = 0; j < nodes; j++) {
            for (let i = 0, len = subNodes; i < len; i++) spawn.orbital(mob[orbitalIndexes[j]], range, i / len * 2 * Math.PI, speed)
        }
        for (let i = 0, len = 3 + 0.5 * Math.sqrt(simulation.difficulty); i < len; i++) spawn.spawnOrbitals(me, radius + 40 + 10 * i, 1);

        me.onDeath = function () {
            powerUps.spawnBossPowerUp(this.position.x, this.position.y)
        };
        me.do = function () {
            if (this.seePlayer.recall) this.healthBar1()
            this.seePlayerByHistory();
            this.checkStatus();
            this.attraction();
        };
    },
    allowShields: true,
    nodeGroup(
        x,
        y,
        spawn = "striker",
        nodes = Math.min(2 + Math.ceil(Math.random() * (simulation.difficulty + 2)), 8),
        radius = Math.ceil(Math.random() * 10) + 18, 
        sideLength = Math.ceil(Math.random() * 100) + 70, 
        stiffness = Math.random() * 0.03 + 0.005
    ) {
        const angle = 2 * Math.PI / nodes
        for (let i = 0; i < nodes; ++i) {
            let whoSpawn = spawn;
            if (spawn === "random") {
                whoSpawn = this.fullPickList[Math.floor(Math.random() * this.fullPickList.length)];
            } else if (spawn === "randomList") {
                whoSpawn = this.pickList[Math.floor(Math.random() * this.pickList.length)];
            }
            this[whoSpawn](x + sideLength * Math.sin(i * angle), y + sideLength * Math.cos(i * angle), radius);
        }
    },
    lineGroup(
        x,
        y,
        spawn = "striker",
        nodes = Math.min(3 + Math.ceil(Math.random() * simulation.difficulty + 2), 8),
        radius = Math.ceil(Math.random() * 10) + 17,
        l = Math.ceil(Math.random() * 80) + 30,
        stiffness = Math.random() * 0.06 + 0.01
    ) {
        for (let i = 0; i < nodes; ++i) {
            let whoSpawn = spawn;
            if (spawn === "random") {
                whoSpawn = this.fullPickList[Math.floor(Math.random() * this.fullPickList.length)];
            } else if (spawn === "randomList") {
                whoSpawn = this.pickList[Math.floor(Math.random() * this.pickList.length)];
            }
            this[whoSpawn](x + i * radius + i * l, y, radius);
        }
    },
    constrainAllMobCombos(nodes, stiffness) {
        for (let i = 1; i < nodes + 1; ++i) {
            for (let j = i + 1; j < nodes + 1; ++j) {
                consBB[consBB.length] = Constraint.create({
                    bodyA: mob[mob.length - i],
                    bodyB: mob[mob.length - j],
                    stiffness: stiffness
                });
                Composite.add(engine.world, consBB[consBB.length - 1]);
            }
        }
    },
    constrain2AdjacentMobs(nodes, stiffness, loop = false, damping = 0) {
        for (let i = 0; i < nodes - 1; ++i) {
            consBB[consBB.length] = Constraint.create({
                bodyA: mob[mob.length - i - 1],
                bodyB: mob[mob.length - i - 2],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
        if (nodes > 2) {
            for (let i = 0; i < nodes - 2; ++i) {
                consBB[consBB.length] = Constraint.create({
                    bodyA: mob[mob.length - i - 1],
                    bodyB: mob[mob.length - i - 3],
                    stiffness: stiffness,
                    damping: damping
                });
                Composite.add(engine.world, consBB[consBB.length - 1]);
            }
        }
        if (loop && nodes > 3) {
            consBB[consBB.length] = Constraint.create({
                bodyA: mob[mob.length - 1],
                bodyB: mob[mob.length - nodes],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
            consBB[consBB.length] = Constraint.create({
                bodyA: mob[mob.length - 2],
                bodyB: mob[mob.length - nodes],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
            consBB[consBB.length] = Constraint.create({
                bodyA: mob[mob.length - 1],
                bodyB: mob[mob.length - nodes + 1],
                stiffness: stiffness,
                damping: damping
            });
            Composite.add(engine.world, consBB[consBB.length - 1]);
        }
    },
    constraintPB(x, y, bodyIndex, stiffness) {
        cons[cons.length] = Constraint.create({
            pointA: {
                x: x,
                y: y
            },
            bodyB: body[bodyIndex],
            stiffness: stiffness
        });
        Composite.add(engine.world, cons[cons.length - 1]);
    },
    constraintBB(bodyIndexA, bodyIndexB, stiffness) {
        consBB[consBB.length] = Constraint.create({
            bodyA: body[bodyIndexA],
            bodyB: body[bodyIndexB],
            stiffness: stiffness
        });
        Composite.add(engine.world, consBB[consBB.length - 1]);
    },
    wireHead() {
        const breakingPoint = 1300
        mobs.spawn(breakingPoint, -100, 0, 7.5, "transparent");
        let me = mob[mob.length - 1];
        me.collisionFilter.category = cat.body;
        me.collisionFilter.mask = cat.map;
        me.inertia = Infinity;
        me.g = 0.0004; 
        me.restitution = 0;
        me.stroke = "transparent"
        me.freeOfWires = false;
        me.frictionStatic = 1;
        me.friction = 1;
        me.frictionAir = 0.01;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isUnblockable = true;

        me.do = function () {
            let wireX = -50;
            let wireY = -1000;
            if (this.freeOfWires) {
                this.gravity();
            } else {
                if (m.pos.x > breakingPoint || simulation.isCheating) {
                    this.freeOfWires = true;
                    this.fill = "#000"
                    this.force.x += -0.003;
                    player.force.x += 0.06;
                    for (let i = 0; i < powerUp.length; ++i) {
                        if (powerUp[i].name === "difficulty") {
                            Matter.Composite.remove(engine.world, powerUp[i]);
                            powerUp.splice(i, 1);
                        }
                    }

                }

                Matter.Body.setVelocity(player, { x: player.velocity.x, y: player.velocity.y + 0.3 })

                if (m.pos.x > 700 && player.velocity.x > -2) {
                    let wireFriction = 0.75 * Math.min(0.6, Math.max(0, 100 / (breakingPoint - m.pos.x)));
                    if (!m.onGround) wireFriction *= 3
                    Matter.Body.setVelocity(player, {
                        x: player.velocity.x - wireFriction,
                        y: player.velocity.y
                    })
                }
                Matter.Body.setPosition(this, { x: m.pos.x + (42 * Math.cos(m.angle + Math.PI)), y: m.pos.y + (42 * Math.sin(m.angle + Math.PI)) })
            }
            ctx.beginPath();
            ctx.moveTo(wireX, wireY);
            ctx.quadraticCurveTo(wireX, 0, this.position.x, this.position.y);
            if (!this.freeOfWires) ctx.lineTo(m.pos.x + (30 * Math.cos(m.angle + Math.PI)), m.pos.y + (30 * Math.sin(m.angle + Math.PI)));
            ctx.lineCap = "butt";
            ctx.lineWidth = 15;
            ctx.strokeStyle = "#000";
            ctx.stroke();
            ctx.lineCap = "round";
        };
    },
    wireKnee() {
        const breakingPoint = 1425
        mobs.spawn(breakingPoint, -100, 0, 2, "transparent");
        let me = mob[mob.length - 1];
        me.collisionFilter.category = cat.body;
        me.collisionFilter.mask = cat.map;
        me.g = 0.0003; 
        me.stroke = "transparent"
        me.restitution = 0;
        me.freeOfWires = false;
        me.frictionStatic = 1;
        me.friction = 1;
        me.frictionAir = 0.01;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isUnblockable = true;

        me.do = function () {
            let wireX = -50 - 20;
            let wireY = -1000;

            if (this.freeOfWires) {
                this.gravity();
            } else {
                if (m.pos.x > breakingPoint || simulation.isCheating) {
                    this.freeOfWires = true;
                    this.force.x -= 0.0004;
                    this.fill = "#222";
                }
                m.calcLeg(0, 0);
                Matter.Body.setPosition(this, {
                    x: m.pos.x + m.flipLegs * m.knee.x - 5,
                    y: m.pos.y + m.knee.y
                })
            }
            ctx.beginPath();
            ctx.moveTo(wireX, wireY);
            ctx.quadraticCurveTo(wireX, 0, this.position.x, this.position.y);
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#222";
            ctx.lineCap = "butt";
            ctx.stroke();
            ctx.lineCap = "round";
        };
    },
    wireKneeLeft() {
        const breakingPoint = 1400
        mobs.spawn(breakingPoint, -100, 0, 2, "transparent");
        let me = mob[mob.length - 1];
        me.collisionFilter.category = cat.body;
        me.collisionFilter.mask = cat.map;
        me.g = 0.0003; 
        me.stroke = "transparent"
        me.restitution = 0;
        me.freeOfWires = false;
        me.frictionStatic = 1;
        me.friction = 1;
        me.frictionAir = 0.01;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isUnblockable = true;

        me.do = function () {
            let wireX = -50 - 35;
            let wireY = -1000;

            if (this.freeOfWires) {
                this.gravity();
            } else {
                if (m.pos.x > breakingPoint || simulation.isCheating) {
                    this.freeOfWires = true;
                    this.force.x += -0.0003;
                    this.fill = "#333";
                }
                m.calcLeg(Math.PI, -3);
                Matter.Body.setPosition(this, {
                    x: m.pos.x + m.flipLegs * m.knee.x - 5,
                    y: m.pos.y + m.knee.y
                })
            }
            ctx.beginPath();
            ctx.moveTo(wireX, wireY);
            ctx.quadraticCurveTo(wireX, 0, this.position.x, this.position.y);
            ctx.lineWidth = 5;
            ctx.lineCap = "butt";
            ctx.strokeStyle = "#333";
            ctx.stroke();
            ctx.lineCap = "round";
        };
    },
    wireFoot() {
        const breakingPoint = 1350
        mobs.spawn(breakingPoint, -100, 0, 2, "transparent");
        let me = mob[mob.length - 1];
        me.collisionFilter.category = cat.body;
        me.collisionFilter.mask = cat.map;
        me.g = 0.0003; 
        me.restitution = 0;
        me.stroke = "transparent"
        me.freeOfWires = false;
        me.frictionAir = 0.01;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isUnblockable = true;

        me.do = function () {
            let wireX = -50 + 16;
            let wireY = -1000;

            if (this.freeOfWires) {
                this.gravity();
            } else {
                if (m.pos.x > breakingPoint || simulation.isCheating) {
                    this.freeOfWires = true;
                    this.force.x += -0.0006;
                    this.fill = "#111";
                }
                m.calcLeg(0, 0);
                Matter.Body.setPosition(this, {
                    x: m.pos.x + m.flipLegs * m.foot.x - 5,
                    y: m.pos.y + m.foot.y - 1
                })
            }
            ctx.beginPath();
            ctx.moveTo(wireX, wireY);
            ctx.quadraticCurveTo(wireX, 0, this.position.x, this.position.y);
            ctx.lineWidth = 5;
            ctx.lineCap = "butt";
            ctx.strokeStyle = "#111";
            ctx.stroke();
            ctx.lineCap = "round";
        };
    },
    wireFootLeft() {
        const breakingPoint = 1325
        mobs.spawn(breakingPoint, -100, 0, 2, "transparent");
        let me = mob[mob.length - 1];
        me.collisionFilter.category = cat.body;
        me.collisionFilter.mask = cat.map;
        me.g = 0.0003; 
        me.restitution = 0;
        me.stroke = "transparent"
        me.freeOfWires = false;
        me.frictionAir = 0.01;
        me.isDropPowerUp = false;
        me.isBadTarget = true;
        me.isUnblockable = true;

        me.do = function () {
            let wireX = -50 + 26;
            let wireY = -1000;

            if (this.freeOfWires) {
                this.gravity();
            } else {
                if (m.pos.x > breakingPoint || simulation.isCheating) {
                    this.freeOfWires = true;
                    this.force.x += -0.0005;
                    this.fill = "#222";
                }
                m.calcLeg(Math.PI, -3);
                Matter.Body.setPosition(this, {
                    x: m.pos.x + m.flipLegs * m.foot.x - 5,
                    y: m.pos.y + m.foot.y - 1
                })
            }
            ctx.beginPath();
            ctx.moveTo(wireX, wireY);
            ctx.quadraticCurveTo(wireX, 0, this.position.x, this.position.y);
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#222";
            ctx.lineCap = "butt";
            ctx.stroke();
            ctx.lineCap = "round";
        };
    },
    boost(x, y, height = 1000) {
        spawn.mapVertex(x + 50, y + 35, "120 40 -120 40 -50 -40 50 -40");
        level.addQueryRegion(x, y - 20, 100, 20, "boost", [
            [player], body, mob, powerUp, bullet
        ], -1.21 * Math.sqrt(Math.abs(height)));
    },
    blockDoor(x, y, blockSize = 60) {
        spawn.mapRect(x, y - 290, 40, 60); 
        spawn.mapRect(x, y, 40, 50); 
        for (let i = 0; i < 4; ++i) {
            spawn.bodyRect(x + 5, y - 260 + i * blockSize + i * 3, 30, blockSize);
        }
    },
    debris(x, y, width, number = Math.floor(2 + Math.random() * 9)) {
        for (let i = 0; i < number; ++i) {
            if (Math.random() < 0.15) {
                powerUps.chooseRandomPowerUp(x + Math.random() * width, y);
            } else {
                const size = 18 + Math.random() * 25;
                spawn.bodyRect(x + Math.random() * width, y, size * (0.6 + Math.random()), size * (0.6 + Math.random()), 1);
            }
        }
    },
    bodyRect(x, y, width, height, chance = 1, properties = { friction: 0.05, frictionAir: 0.001 }) { 
        if (Math.random() < chance) {
            body[body.length] = Bodies.rectangle(x + width / 2, y + height / 2, width, height, properties);
            const who = body[body.length - 1]
            who.collisionFilter.category = cat.body;
            who.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob | cat.mobBullet
            Composite.add(engine.world, who); 
            who.classType = "body"
        }
    },
    bodyVertex(x, y, vector, properties) { 
        body[body.length] = Matter.Bodies.fromVertices(x, y, Vertices.fromPath(vector), properties);
        const who = body[body.length - 1]
        who.collisionFilter.category = cat.body;
        who.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob | cat.mobBullet
        Composite.add(engine.world, who); 
        who.classType = "body"
    },
    mapRect(x, y, width, height, properties) { 
        map[map.length] = Bodies.rectangle(x + width / 2, y + height / 2, width, height, properties);
    },
    mapVertex(x, y, vector, properties) { 
        map[map.length] = Matter.Bodies.fromVertices(x, y, Vertices.fromPath(vector), properties);
    },
    bodyRectCorner(x, y, w = 800, h = 400, c = 25, properties) {
        w *= 0.5
        h *= 0.5
        const vector = `${w} -${h - c}  ${w} ${h - c}  ${w - c} ${h}  -${w - c} ${h}  -${w} ${h - c}  -${w} -${h - c}  -${w - c} -${h}  ${w - c} -${h}`
        map[map.length] = Matter.Bodies.fromVertices(x, y, Vertices.fromPath(vector), properties);
    },
    mapRectNow(x, y, width, height, properties, isRedrawMap = true) { 
        map[map.length] = Bodies.rectangle(x + width / 2, y + height / 2, width, height, properties);
        const who = map[map.length - 1]
        who.collisionFilter.category = cat.map;
        who.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.powerUp | cat.mob | cat.mobBullet;
        Matter.Body.setStatic(who, true); 
        Composite.add(engine.world, who); 
    },
    mapVertexNow(x, y, vector, properties, isRedrawMap = true) { 
        map[map.length] = Matter.Bodies.fromVertices(x, y, Vertices.fromPath(vector), properties);
        const who = map[map.length - 1]
        who.collisionFilter.category = cat.map;
        who.collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.powerUp | cat.mob | cat.mobBullet;
        Matter.Body.setStatic(who, true); 
        Composite.add(engine.world, who); 
        if (isRedrawMap) simulation.draw.setPaths() 
    },
    spawnBuilding(x, y, w, h, leftDoor, rightDoor, walledSide) {
        this.mapRect(x, y, w, 25); 
        this.mapRect(x, y + h, w, 35); 
        if (walledSide === "left") {
            this.mapRect(x, y, 25, h); 
        } else {
            this.mapRect(x, y, 25, h - 150); 
            if (leftDoor) {
                this.bodyRect(x + 5, y + h - 150, 15, 150, this.propsFriction); 
            }
        }
        if (walledSide === "right") {
            this.mapRect(x - 25 + w, y, 25, h); 
        } else {
            this.mapRect(x - 25 + w, y, 25, h - 150); 
            if (rightDoor) {
                this.bodyRect(x + w - 20, y + h - 150, 15, 150, this.propsFriction); 
            }
        }
    },
    spawnStairs(x, y, num, w, h, stepRight) {
        w += 50;
        if (stepRight) {
            for (let i = 0; i < num; i++) {
                this.mapRect(x - (w / num) * (1 + i), y - h + (i * h) / num, w / num + 50, h - (i * h) / num + 50);
            }
        } else {
            for (let i = 0; i < num; i++) {
                this.mapRect(x + (i * w) / num, y - h + (i * h) / num, w / num + 50, h - (i * h) / num + 50);
            }
        }
    },
    propsFriction: {
        friction: 0.5,
        frictionAir: 0.02,
        frictionStatic: 1
    },
    propsFrictionMedium: {
        friction: 0.15,
        frictionStatic: 1
    },
    propsBouncy: {
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        restitution: 1
    },
    propsSlide: {
        friction: 0.003,
        frictionStatic: 0.4,
        restitution: 0,
        density: 0.002
    },
    propsLight: {
        density: 0.001
    },
    propsOverBouncy: {
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        restitution: 1.05
    },
    propsHeavy: {
        density: 0.01 
    },
    propsIsNotHoldable: {
        isNotHoldable: true
    },
    propsNoRotation: {
        inertia: Infinity 
    },
    propsHoist: {
        inertia: Infinity, 
        frictionAir: 0.001,
        friction: 0.0001,
        frictionStatic: 0,
        restitution: 0,
        isNotHoldable: true
    },
    propsDoor: {
        density: 0.001, 
        friction: 0,
        frictionAir: 0.03,
        frictionStatic: 0,
        restitution: 0
    },
    sandPaper: {
        friction: 1,
        frictionStatic: 1,
        restitution: 0
    }
};