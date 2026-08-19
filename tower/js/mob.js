let mob = [];
const mobs = {
    loop() {
        let i = mob.length;
        while (i--) {
            if (mob[i].alive) {
                mob[i].do();
            } else {
                mob[i].replace(i); 
            }
        }
    },
    draw() { },
    drawDefault() {
        ctx.lineWidth = 2;
        let i = mob.length;
        while (i--) {
            ctx.beginPath();
            const vertices = mob[i].vertices;
            ctx.moveTo(vertices[0].x, vertices[0].y);
            for (let j = 1, len = vertices.length; j < len; ++j) ctx.lineTo(vertices[j].x, vertices[j].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.fillStyle = mob[i].fill;
            ctx.strokeStyle = mob[i].stroke;
            ctx.fill();
            ctx.stroke();
        }
    },
    statusSlow(who, cycles = 60) {
        applySlow(who)
        if (tech.isAoESlow) {
            const range2 = (200 + 170 * Math.random()) ** 2
            for (let i = 0, len = mob.length; i < len; i++) {
                if (who !== mob[i] && Vector.magnitudeSquared(Vector.sub(who.position, mob[i].position)) < range2 + mob[i].radius) applySlow(mob[i])
            }
            simulation.drawList.push({
                x: who.position.x,
                y: who.position.y,
                radius: Math.sqrt(range2),
                color: "rgba(0,100,255,0.05)",
                time: simulation.drawTime
            });
        }

        function applySlow(whom) {
            if (!whom.shield && !whom.isShielded && whom.alive) {
                if (tech.isIceMaxHealthLoss && whom.health > 0.66 && whom.damageReduction > 0) whom.health = 0.66
                if (tech.isIceKill && whom.health < 0.34 && whom.damageReduction > 0 && whom.alive) {
                    whom.damage(Infinity)
                    simulation.drawList.push({
                        x: whom.position.x,
                        y: whom.position.y,
                        radius: whom.radius * 1.2,
                        color: "rgb(0,100,255)",
                        time: 8
                    });
                    simulation.drawList.push({
                        x: whom.position.x,
                        y: whom.position.y,
                        radius: whom.radius * 0.7,
                        color: "rgb(0,100,255)",
                        time: 12
                    });
                    simulation.drawList.push({
                        x: whom.position.x,
                        y: whom.position.y,
                        radius: whom.radius * 0.4,
                        color: "rgb(0,100,255)",
                        time: 16
                    });
                }
                if (whom.isBoss) cycles = Math.floor(cycles * 0.25)
                let i = whom.status.length
                while (i--) {
                    if (whom.status[i].type === "slow") whom.status.splice(i, 1); 
                }
                whom.isSlowed = true;
                whom.status.push({
                    effect() {
                        if (whom.speed > 1) {
                            const drag = 0.94
                            Matter.Body.setVelocity(whom, {
                                x: whom.velocity.x * drag,
                                y: whom.velocity.y * drag
                            });
                        }
                        Matter.Body.setAngularVelocity(whom, 0);
                        ctx.beginPath();
                        ctx.moveTo(whom.vertices[0].x, whom.vertices[0].y);
                        for (let j = 1, len = whom.vertices.length; j < len; ++j) {
                            ctx.lineTo(whom.vertices[j].x, whom.vertices[j].y);
                        }
                        ctx.lineTo(whom.vertices[0].x, whom.vertices[0].y);
                        ctx.strokeStyle = "rgba(0,100,255,0.8)";
                        ctx.lineWidth = 15;
                        ctx.stroke();
                        ctx.fillStyle = whom.fill
                        ctx.fill();
                    },
                    endEffect() {
                        whom.isSlowed = false;
                    },
                    type: "slow",
                    endCycle: simulation.cycle + cycles,
                })
            }
        }
    },
    statusStun(who, cycles = 180) {
        if (!who.shield && !who.isShielded) {
            if (who.speed > 3) {
                Matter.Body.setVelocity(who, {
                    x: who.velocity.x * 0.8,
                    y: who.velocity.y * 0.8
                });
            }
            Matter.Body.setAngularVelocity(who, who.angularVelocity * 0.8);
            let i = who.status.length
            while (i--) {
                if (who.status[i].type === "stun") who.status.splice(i, 1);
            }
            who.isStunned = true;
            who.status.push({
                effect() {
                    if (who.memory !== Infinity) {
                        who.seePlayer.yes = false;
                        who.seePlayer.recall = 0;
                        who.seePlayer.position = {
                            x: who.position.x + 100 * (Math.random() - 0.5),
                            y: who.position.y + 100 * (Math.random() - 0.5)
                        }
                    } else {
                        Matter.Body.setVelocity(who, {
                            x: who.velocity.x * 0.6,
                            y: who.velocity.y * 0.6
                        });
                    }
                    if (who.velocity.y < 2) who.force.y += who.mass * 0.0004 

                    ctx.fillStyle = `rgba(${Math.floor(255 * Math.random())},${Math.floor(255 * Math.random())},${Math.floor(255 * Math.random())},0.5)`

                    ctx.beginPath();
                    ctx.moveTo(who.vertices[0].x, who.vertices[0].y);
                    for (let j = 1, len = who.vertices.length; j < len; ++j) {
                        ctx.lineTo(who.vertices[j].x, who.vertices[j].y);
                    }
                    ctx.lineTo(who.vertices[0].x, who.vertices[0].y);
                    ctx.fill();
                },
                endEffect() {
                    who.isStunned = false
                },
                type: "stun",
                endCycle: simulation.cycle + cycles * (who.isBoss ? 0.2 : 1),
            })
        }
    },
    statusDoT(who, tickDamage, cycles = 180) {
        if (!who.isShielded && who.alive && who.damageReduction > 0) {
            who.status.push({
                effect() {
                    if ((simulation.cycle - this.startCycle) % 30 === 0) {
                        let dmg = tech.radioactiveDamage * this.dmg
                        who.damage(dmg);
                        if (who.damageReduction) {
                            simulation.drawList.push({ 
                                x: who.position.x + (Math.random() - 0.5) * who.radius * 0.5,
                                y: who.position.y + (Math.random() - 0.5) * who.radius * 0.5,
                                radius: Math.log(dmg + 1.1) * 40 * who.damageReduction + 3,
                                color: "rgba(0,80,80,0.9)",
                                time: simulation.drawTime
                            });
                        }
                    }
                },
                endEffect() { },
                dmg: tickDamage,
                type: "dot",
                endCycle: simulation.cycle + cycles,
                startCycle: simulation.cycle + 29 
            })
        }
    },
    deathCount: 0,
    mobSpawnWithHealth: 1,
    setMobSpawnHealth() {
        mobs.mobSpawnWithHealth = 0.88 ** (tech.mobSpawnWithHealth)
    },
    spawn(xPos, yPos, sides, radius, color) {
        let i = mob.length;
        mob[i] = Matter.Bodies.polygon(xPos, yPos, sides, radius, {
            mob: true,
            density: 0.001,
            frictionAir: 0.005,
            restitution: 0.5,
            collisionFilter: {
                group: 0,
                category: cat.mob,
                mask: cat.player | cat.map | cat.body | cat.bullet | cat.mob
            },
            onHit: undefined,
            alive: true,
            index: i,
            health: mobs.mobSpawnWithHealth,
            accelMag: 0.001 * simulation.accelScale,
            cd: 0, 
            delay: 60, 
            fill: color,
            stroke: "#000",
            seePlayer: {
                yes: false,
                recall: 0,
                position: {
                    x: xPos,
                    y: yPos
                }
            },
            radius: radius,
            spawnPos: {
                x: xPos,
                y: yPos
            },
            healthBar1() {
                const h = this.radius * 0.3;
                const w = this.radius * 2;
                const x = this.position.x - w / 2;
                const y = this.position.y - w * 0.7;
                ctx.fillStyle = "rgba(100, 100, 100, 0.3)";
                ctx.fillRect(x, y, w, h);
                ctx.fillStyle = this.team == "A" ? "rgba(255,0,0,0.7)" : "rgba(0,0,255,0.7)";
                ctx.fillRect(x, y, w * this.health, h);
            },
            healthBar2() {
                const x1 = this.position.x - this.radius
                const x2 = this.position.x + this.radius
                const y = this.position.y - this.radius
                ctx.lineWidth = this.radius * 0.27;

                ctx.beginPath()
                ctx.moveTo(x1, y);
                ctx.lineTo(x2, y)
                ctx.strokeStyle = "rgba(100, 100, 100, 0.3)";
                ctx.stroke()

                ctx.beginPath()
                ctx.moveTo(x1, y);
                ctx.lineTo(x1 + 2 * this.radius * this.health, y)
                ctx.strokeStyle = this.team == "A" ? "rgba(255,0,0,0.7)" : "rgba(0,0,255,0.7)";
                ctx.stroke()
            },
            healthBar3() {
                const arc = 3 / 2 * Math.PI
                ctx.lineWidth = this.radius * 0.25;
                ctx.strokeStyle = this.team == "A" ? "rgb(255,0,0)" : "rgb(0,0,255)";

                ctx.beginPath()
                ctx.arc(this.position.x, this.position.y, this.radius * 1.5, arc - this.health, arc + this.health,);
                ctx.stroke()
            },
            healthBar4() {
                const w = this.radius * 0.43;
                const x = this.position.x - this.radius;
                const y = this.position.y - this.radius * 1.4;
                ctx.fillStyle = "rgba(100, 100, 100, 0.3)";
                ctx.fillRect(x, y, this.radius * 2, w);
                let health
                if (this.health > 0.5) {
                    ctx.fillStyle = this.team == "A" ? "rgba(255,0,0,0.5)" : "rgba(0,0,255,0.5)";
                    health = 2 * (this.health - 0.5)
                } else {
                    ctx.fillStyle = this.team == "A" ? "rgb(255,0,0)" : "rgb(0,0,255)";
                    health = 2 * this.health
                }
                for (let j = 0; j < 4; j++) {
                    if (health > j * 0.25) {
                        ctx.fillRect(x + (j * 0.52) * this.radius, y, w, w);
                    }
                }
            },
            status: [], 
            checkStatus() {
                let j = this.status.length;
                while (j--) {
                    this.status[j].effect();
                    if (this.status[j].endCycle < simulation.cycle) {
                        this.status[j].endEffect();
                        this.status.splice(j, 1);
                    }
                }
            },
            isSlowed: false,
            isStunned: false,
            seeAtDistance2: Infinity, 
            distanceToPlayer() {
                const dx = this.position.x - player.position.x;
                const dy = this.position.y - player.position.y;
                return Math.sqrt(dx * dx + dy * dy);
            },
            distanceToPlayer2() {
                const dx = this.position.x - player.position.x;
                const dy = this.position.y - player.position.y;
                return dx * dx + dy * dy;
            },
            gravity() {
                this.force.y += this.mass * this.g;
            },
            seePlayerFreq: Math.floor(30 + 30 * Math.random()), 
            foundPlayer() {
                this.locatePlayer();
                if (!this.seePlayer.yes) {
                    this.alertNearByMobs();
                    this.seePlayer.yes = true;
                }
            },
            lostPlayer() {
                this.seePlayer.yes = false;
                this.seePlayer.recall -= this.seePlayerFreq;
                if (this.seePlayer.recall < 0) this.seePlayer.recall = 0;
            },
            memory: 120, 
            locatePlayer() { 
                this.seePlayer.recall = this.memory + Math.round(this.memory * Math.random()); 
                this.seePlayer.position.x = player.position.x;
                this.seePlayer.position.y = player.position.y;
            },
            alertNearByMobs() {
                for (let i = 0; i < mob.length; i++) {
                    if (!mob[i].seePlayer.recall && Vector.magnitudeSquared(Vector.sub(this.position, mob[i].position)) < this.alertRange2) {
                        mob[i].locatePlayer();
                    }
                }
            },
            alwaysSeePlayer() {
                if (!m.isCloak) {
                    this.seePlayer.recall = 1;
                    this.seePlayer.position.x = player.position.x;
                    this.seePlayer.position.y = player.position.y;
                }
            },
            seePlayerByHistory(depth = 30) { 
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    if (Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 && !m.isCloak) {
                        this.foundPlayer();
                    } else if (this.seePlayer.recall) {
                        this.lostPlayer();
                        if (!m.isCloak) {
                            for (let i = 0; i < depth; i++) { 
                                let history = m.history[(simulation.cycle - 10 * i) % 600]
                                if (Matter.Query.ray(map, this.position, history.position).length === 0) {
                                    this.seePlayer.recall = this.memory + Math.round(this.memory * Math.random()); 
                                    this.seePlayer.position.x = history.position.x;
                                    this.seePlayer.position.y = history.position.y;
                                    this.seePlayer.yes = true;
                                    break
                                }
                            }
                        }
                    }
                }
            },
            seePlayerCheck() {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    if (
                        this.distanceToPlayer2() < this.seeAtDistance2 &&
                        Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                        !m.isCloak
                    ) {
                        this.foundPlayer();
                    } else if (this.seePlayer.recall) {
                        this.lostPlayer();
                    }
                }
            },
            seePlayerCheckByDistance() {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    if (this.distanceToPlayer2() < this.seeAtDistance2 && !m.isCloak) {
                        this.foundPlayer();
                    } else if (this.seePlayer.recall) {
                        this.lostPlayer();
                    }
                }
            },
            seePlayerByDistOrLOS() {
                if (!(simulation.cycle % this.seePlayerFreq)) {
                    if (
                        (this.distanceToPlayer2() < this.seeAtDistance2 || (Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0)) && 
                        !m.isCloak
                    ) {
                        this.foundPlayer();
                    } else if (this.seePlayer.recall) {
                        this.lostPlayer();
                    }
                }
            },
            isLookingAtPlayer(threshold) {
                const diff = Vector.normalise(Vector.sub(player.position, this.position));
                const dir = { x: Math.cos(this.angle), y: Math.sin(this.angle) };
                const dot = Vector.dot(dir, diff);
                if (dot > threshold) {
                    return true;
                } else {
                    return false;
                }
            },
            lookRange: 0.2 + Math.random() * 0.2,
            lookTorque: 0.0000004 * (Math.random() > 0.5 ? -1 : 1),
            seePlayerByLookingAt() {
                if (!(simulation.cycle % this.seePlayerFreq) && (this.seePlayer.recall || this.isLookingAtPlayer(this.lookRange))) {
                    if (
                        this.distanceToPlayer2() < this.seeAtDistance2 &&
                        Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 &&
                        !m.isCloak
                    ) {
                        this.foundPlayer();
                    } else if (this.seePlayer.recall) {
                        this.lostPlayer();
                    }
                }
                if (!this.seePlayer.recall) {
                    this.torque = this.lookTorque * this.inertia;
                    const range = Math.PI * this.lookRange;
                    ctx.beginPath();
                    ctx.arc(this.position.x, this.position.y, this.radius * 2.5, this.angle - range, this.angle + range);
                    ctx.arc(this.position.x, this.position.y, this.radius * 1.4, this.angle + range, this.angle - range, true);
                    ctx.fillStyle = "rgba(0,0,0,0.07)";
                    ctx.fill();
                }
            },
            playerPosRandomY() {
                return {
                    x: player.position.x, 
                    y: player.position.y + (Math.random() - 0.5) * 110
                };
            },
            harmZone() {
                if (this.seePlayer.yes) {
                    ctx.setLineDash([125 * Math.random(), 125 * Math.random()]);
                    if (this.distanceToPlayer() < this.laserRange) {
                        if (m.immuneCycle < m.cycle) {
                            m.takeDamage(0.0003 * this.damageScale());
                            if (m.energy > 0.1) m.energy -= 0.003
                        }
                        ctx.beginPath();
                        ctx.moveTo(this.position.x, this.position.y);
                        ctx.lineTo(m.pos.x, m.pos.y);
                        ctx.lineTo(m.pos.x + (Math.random() - 0.5) * 3000, m.pos.y + (Math.random() - 0.5) * 3000);
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "rgb(255,0,170)";
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.arc(m.pos.x, m.pos.y, 40, 0, 2 * Math.PI);
                        ctx.fillStyle = "rgba(255,0,170,0.15)";
                        ctx.fill();
                    }
                    ctx.beginPath();
                    ctx.arc(this.position.x, this.position.y, this.laserRange * 0.9, 0, 2 * Math.PI);
                    ctx.strokeStyle = "rgba(255,0,170,0.5)";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.setLineDash([]);
                    ctx.fillStyle = "rgba(255,0,170,0.03)";
                    ctx.fill();
                }
            },
            wing(a, radius = 250, ellipticity = 0.4, dmg = 0.0003) {
                const minorRadius = radius * ellipticity
                const perp = { x: Math.cos(a), y: Math.sin(a) } 
                const where = Vector.add(this.position, Vector.mult(perp, radius + 0.8 * this.radius))

                ctx.beginPath();
                ctx.ellipse(where.x, where.y, radius, minorRadius, a, 0, 2 * Math.PI)
                ctx.fill();

                const hitPlayer = Matter.Query.ray([player], this.position, Vector.add(this.position, Vector.mult(perp, radius * 2.05)), minorRadius)
                if (hitPlayer.length && m.immuneCycle < m.cycle) {
                    m.takeDamage(dmg * this.damageScale());

                    const sub = Vector.sub(m.pos, this.position)
                    const push = Vector.mult(Vector.normalise(sub), 0.15 * player.mass)
                    Matter.Body.setVelocity(player, {
                        x: 0.9 * player.velocity.x + push.x,
                        y: 0.9 * player.velocity.y + push.y - 0.1 * player.mass
                    })
                }
            },
            searchSpring() {
                ctx.beginPath();
                ctx.moveTo(this.cons.pointA.x, this.cons.pointA.y)
                ctx.lineTo(this.cons.bodyB.position.x, this.cons.bodyB.position.y)
                ctx.moveTo(this.cons2.pointA.x, this.cons2.pointA.y)
                ctx.lineTo(this.cons2.bodyB.position.x, this.cons2.bodyB.position.y)
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#222";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.cons.pointA.x, this.cons.pointA.y, 6, 0, 2 * Math.PI);
                ctx.arc(this.cons2.pointA.x, this.cons2.pointA.y, 6, 0, 2 * Math.PI);
                ctx.fillStyle = "#222";
                ctx.fill();

                if (!(simulation.cycle % this.seePlayerFreq)) {
                    if (
                        (this.seePlayer.recall || this.isLookingAtPlayer(this.lookRange)) &&
                        this.distanceToPlayer2() < this.seeAtDistance2 &&
                        Matter.Query.ray(map, this.position, player.position).length === 0 &&
                        Matter.Query.ray(body, this.position, player.position).length === 0 &&
                        !m.isCloak
                    ) {
                        this.foundPlayer();
                    } else if (this.seePlayer.recall) {
                        this.lostPlayer();
                    }
                }
            },
            springAttack() {
                const stepRange = 600
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
                    const range = Math.PI * this.lookRange;
                    ctx.beginPath();
                    ctx.arc(this.position.x, this.position.y, this.radius * 2.5, this.angle - range, this.angle + range);
                    ctx.arc(this.position.x, this.position.y, this.radius * 1.4, this.angle + range, this.angle - range, true);
                    ctx.fillStyle = "rgba(0,0,0,0.07)";
                    ctx.fill();
                    if (!(simulation.cycle % (this.seePlayerFreq * 4))) {
                        best = {
                            x: null,
                            y: null,
                            dist2: Infinity,
                            who: null,
                            v1: null,
                            v2: null
                        };
                        const seeRange = 3000;
                        const look = {
                            x: this.position.x + seeRange * Math.cos(this.angle),
                            y: this.position.y + seeRange * Math.sin(this.angle)
                        };
                        best = vertexCollision(this.position, look, [map, body]);
                        if (best.dist2 != Infinity) {
                            if (Math.random() > 0.5) {
                                this.springTarget.x = best.x;
                                this.springTarget.y = best.y;
                                this.cons.length = 100 + 1.5 * this.radius;
                                this.cons2.length = 100 + 1.5 * this.radius;
                            } else {
                                this.springTarget2.x = best.x;
                                this.springTarget2.y = best.y;
                                this.cons.length = 100 + 1.5 * this.radius;
                                this.cons2.length = 100 + 1.5 * this.radius;
                            }
                        }
                    }
                }
            },
            curl(range = 1000, mag = -10) {
                applyCurl = function (center, array, isAntiGravity = true) {
                    for (let i = 0; i < array.length; ++i) {
                        if (!array[i].isNotHoldable) {
                            const sub = Vector.sub(center, array[i].position)
                            const radius2 = Vector.magnitudeSquared(sub);

                            if (radius2 < range * range && radius2 > 10000) {
                                const curlVector = Vector.mult(Vector.perp(Vector.normalise(sub)), mag)
                                if (array[i].isMobBullet) {
                                    Matter.Body.setVelocity(array[i], {
                                        x: array[i].velocity.x * 0.97 + curlVector.x * 0.06,
                                        y: array[i].velocity.y * 0.97 + curlVector.y * 0.06
                                    })
                                } else {
                                    Matter.Body.setVelocity(array[i], {
                                        x: array[i].velocity.x * 0.95 + curlVector.x * 0.06,
                                        y: array[i].velocity.y * 0.95 + curlVector.y * 0.06
                                    })
                                }
                                if (isAntiGravity) array[i].force.y -= 0.8 * simulation.g * array[i].mass
                            }
                        }
                    }
                }
                applyCurl(this.position, mob, false);
                applyCurl(this.position, body);
                applyCurl(this.position, powerUp);

            },
            pullPlayer() {
                if (this.seePlayer.yes && Vector.magnitudeSquared(Vector.sub(this.position, player.position)) < 1000000) {
                    const angle = Math.atan2(player.position.y - this.position.y, player.position.x - this.position.x);
                    player.force.x -= simulation.accelScale * 0.00113 * player.mass * Math.cos(angle) * (m.onGround ? 2 : 1);
                    player.force.y -= simulation.accelScale * 0.00084 * player.mass * Math.sin(angle);

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
            },
            repelBullets() {
                for (let i = 0, len = bullet.length; i < len; ++i) {
                    const dx = bullet[i].position.x - this.position.x;
                    const dy = bullet[i].position.y - this.position.y;
                    const dist = Math.max(300, Math.sqrt(dx * dx + dy * dy))
                    if (dist < 700) {
                        ctx.moveTo(this.position.x, this.position.y);
                        ctx.lineTo(bullet[i].position.x, bullet[i].position.y);
                        const angle = Math.atan2(dy, dx);
                        const mag = (500 * bullet[i].mass * simulation.g) / dist;
                        bullet[i].force.x += mag * Math.cos(angle);
                        bullet[i].force.y += mag * Math.sin(angle);
                    }
                }
            },
            attraction() {
                if (this.seePlayer.recall) {
                    const force = Vector.mult(Vector.normalise(Vector.sub(this.seePlayer.position, this.position)), this.accelMag * this.mass)
                    this.force.x += force.x;
                    this.force.y += force.y;
                }
            },
            repulsionRange: 500000, 
            repulsion() {
                if (this.seePlayer.recall && this.distanceToPlayer2() < this.repulsionRange) {
                    const forceMag = this.accelMag * this.mass;
                    const angle = Math.atan2(this.seePlayer.position.y - this.position.y, this.seePlayer.position.x - this.position.x);
                    this.force.x -= 2 * forceMag * Math.cos(angle);
                    this.force.y -= 2 * forceMag * Math.sin(angle); 
                }
            },
            hoverOverPlayer() {
                if (this.seePlayer.recall) {
                    const rangeY = 250;
                    if (this.position.y > this.seePlayer.position.y - this.hoverElevation + rangeY) {
                        this.force.y -= this.accelMag * this.mass;
                    } else if (this.position.y < this.seePlayer.position.y - this.hoverElevation - rangeY) {
                        this.force.y += this.accelMag * this.mass;
                    }
                    const rangeX = 150;
                    if (this.position.x > this.seePlayer.position.x + this.hoverXOff + rangeX) {
                        this.force.x -= this.accelMag * this.mass;
                    } else if (this.position.x < this.seePlayer.position.x + this.hoverXOff - rangeX) {
                        this.force.x += this.accelMag * this.mass;
                    }
                }
            },
            grow() {
                if (this.seePlayer.recall) {
                    if (this.radius < 80) {
                        const scale = 1.01;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                        this.fill = `hsl(144, ${this.radius}%, 50%)`;
                        if (this.isShielded) { 
                            this.isShielded = false;
                            this.removeConsBB();
                        }
                    }
                } else {
                    if (this.radius > 15) {
                        const scale = 0.99;
                        Matter.Body.scale(this, scale, scale);
                        this.radius *= scale;
                        this.fill = `hsl(144, ${this.radius}%, 50%)`;
                    }
                }
            },
            search() {
                if (!this.seePlayer.recall) {
                    const newTarget = function (that) {
                        if (Math.random() < 0.0007) {
                            that.searchTarget = player.position; 
                        } else {
                            that.searchTarget = map[Math.floor(Math.random() * (map.length - 1))].position;
                        }
                    };

                    const sub = Vector.sub(this.searchTarget, this.position);
                    if (Vector.magnitude(sub) > this.radius * 2) {
                        this.force = Vector.mult(Vector.normalise(sub), this.accelMag * this.mass * 0.2);
                    } else {
                        newTarget(this);
                    }
                    if (!(simulation.cycle % (this.seePlayerFreq * 15))) {
                        newTarget(this);
                    }
                }
            },
            blink() {
                if (this.seePlayer.recall && !(simulation.cycle % this.blinkRate)) {
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    const dist = Vector.sub(this.seePlayer.position, this.position);
                    const distMag = Vector.magnitude(dist);
                    const unitVector = Vector.normalise(dist);
                    const rando = (Math.random() - 0.5) * 50;
                    if (distMag < this.blinkLength) {
                        Matter.Body.translate(this, Vector.mult(unitVector, distMag + rando));
                    } else {
                        Matter.Body.translate(this, Vector.mult(unitVector, this.blinkLength + rando));
                    }
                    ctx.lineTo(this.position.x, this.position.y);
                    ctx.lineWidth = radius * 2;
                    ctx.strokeStyle = this.stroke; 
                    ctx.stroke();
                }
            },
            drift() {
                if (this.seePlayer.recall && !(simulation.cycle % this.blinkRate)) {
                    ctx.beginPath();
                    ctx.moveTo(this.position.x, this.position.y);
                    const dist = Vector.sub(this.seePlayer.position, this.position);
                    const distMag = Vector.magnitude(dist);
                    const vector = Vector.mult(Vector.normalise(dist), this.blinkLength);
                    if (distMag < this.blinkLength) {
                        Matter.Body.setPosition(this, this.seePlayer.position);
                        Matter.Body.translate(this, {
                            x: (Math.random() - 0.5) * 50,
                            y: (Math.random() - 0.5) * 50
                        });
                    } else {
                        vector.x += (Math.random() - 0.5) * 200;
                        vector.y += (Math.random() - 0.5) * 200;
                        Matter.Body.translate(this, vector);
                    }
                    ctx.lineTo(this.position.x, this.position.y);
                    ctx.lineWidth = radius * 2;
                    ctx.strokeStyle = this.stroke;
                    ctx.stroke();
                }
            },
            bomb() {
                if (
                    !(simulation.cycle % this.fireFreq) &&
                    Math.abs(this.position.x - this.seePlayer.position.x) < 400 && 
                    Matter.Query.ray(map, this.position, this.playerPosRandomY()).length === 0 && 
                    Matter.Query.ray(body, this.position, this.playerPosRandomY()).length === 0
                ) {
                    spawn.bomb(this.position.x, this.position.y + this.radius * 0.7, 9 + Math.ceil(this.radius / 15), 5);
                    Matter.Body.setAngularVelocity(mob[mob.length - 1], (Math.random() - 0.5) * 0.5);
                    Matter.Body.setVelocity(mob[mob.length - 1], { x: this.velocity.x, y: this.velocity.y });
                    Matter.Body.setAngularVelocity(this, (Math.random() - 0.5) * 0.25);
                }
            },
            fire() {
                const setNoseShape = () => {
                    const mag = this.radius + this.radius * this.noseLength;
                    this.vertices[1].x = this.position.x + Math.cos(this.angle) * mag;
                    this.vertices[1].y = this.position.y + Math.sin(this.angle) * mag;
                };
                if (this.seePlayer.recall) {
                    if (!(simulation.cycle % this.seePlayerFreq)) {
                        this.fireDir = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                        this.fireDir.y -= Math.abs(this.seePlayer.position.x - this.position.x) / 2500; 
                    }
                    const angle = this.angle + Math.PI / 2;
                    const dot = Vector.dot({
                        x: Math.cos(angle),
                        y: Math.sin(angle)
                    }, this.fireDir)
                    const threshold = 0.1;
                    if (dot > threshold) {
                        this.torque += 0.000004 * this.inertia;
                    } else if (dot < -threshold) {
                        this.torque -= 0.000004 * this.inertia;
                    } else if (this.noseLength > 1.5 && dot > -0.2 && dot < 0.2) {
                        spawn.bullet(this.vertices[1].x, this.vertices[1].y, this.tier, 9 + Math.ceil(this.radius / 15));

                        const v = 15;
                        Matter.Body.setVelocity(mob[mob.length - 1], {
                            x: this.velocity.x + this.fireDir.x * v + 3 * Math.random(),
                            y: this.velocity.y + this.fireDir.y * v + 3 * Math.random()
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
            },
            turnToFacePlayer() {
                const dx = player.position.x - this.position.x;
                const dy = -player.position.y + this.position.y;
                const dist = this.distanceToPlayer();
                const angle = this.angle + Math.PI / 2;
                c = Math.cos(angle) * dx - Math.sin(angle) * dy;
                if (c > 0.04 * dist) {
                    this.torque += 0.002 * this.mass;
                } else if (c < 0.04) {
                    this.torque -= 0.002 * this.mass;
                }
            },
            facePlayer() {
                const unitVector = Vector.normalise(Vector.sub(this.seePlayer.position, this.position));
                const angle = Math.atan2(unitVector.y, unitVector.x);
                Matter.Body.setAngle(this, angle - Math.PI);
            },
            explode(mass = this.mass) {
                if (m.immuneCycle < m.cycle) {
                    m.takeDamage(Math.min(Math.max(0.03 * Math.sqrt(mass), 0.01), 0.4) * this.damageScale());
                    this.isDropPowerUp = false;
                    this.death(); 
                }
            },
            timeLimit() {
                this.timeLeft--;
                if (this.timeLeft < 0) {
                    this.isDropPowerUp = false;
                    this.death(); 
                }
            },
            damageScale() {
                const base = ((spawn.mobDmgDoneByTier[this.tier] && level.levelsCleared < 14) ? spawn.mobDmgDoneByTier[this.tier] : spawn.dmgToPlayerByLevelsCleared())
                return base * (this._damageDone || 1);
            },
            damage(dmg, isBypassShield = false) { 
                if ((!this.isShielded || isBypassShield) && this.alive) {
                    if (dmg !== Infinity) {
                        dmg *= tech.damageAdjustments()
                        if (this.isDropPowerUp) {
                            if (this.health === 1) {
                                if (tech.isMobFullHealthCloak) {
                                    dmg *= 2.11
                                    simulation.ephemera.push({
                                        count: 7, 
                                        vertices: this.vertices,
                                        do() {
                                            this.count--
                                            if (this.count < 0) simulation.removeEphemera(this)
                                            ctx.beginPath();
                                            const vertices = this.vertices;
                                            ctx.moveTo(vertices[0].x, vertices[0].y);
                                            for (let j = 1, len = vertices.length; j < len; ++j) {
                                                ctx.lineTo(vertices[j].x, vertices[j].y);
                                            }
                                            ctx.lineTo(vertices[0].x, vertices[0].y);
                                            ctx.fillStyle = `rgba(255,0,100,0.15)` 
                                            ctx.fill()
                                            ctx.lineWidth = 3 
                                            ctx.strokeStyle = `#f08` 
                                            ctx.stroke();
                                        },
                                    })
                                }
                                if (tech.isChatter && !this.isInvulnerable) {
                                    let isTalking = false
                                    for (let i = 0; i < simulation.ephemera.length; i++) {
                                        if (simulation.ephemera[i].name === "in game text") {
                                            isTalking = true
                                        }
                                    }
                                    if (!isTalking) {
                                        const quotes = [
                                            "I can do *anything!*",
                                            "Chaos, chaos!",
                                            "Let's make the devilskn-",
                                            "Darmok and Jaled at Tanagra",
                                            "Kiazi's children, their faces wet!",
                                            "Sokath with his eyes uncovered!",
                                            "Are you suggesting that coconuts can migrate?",
                                            "One, Two, Five!",
                                            "Is it an African swallow or a European swallow?",
                                            "kept you waiting, huh?",
                                            "This prison... to hold... me?",
                                            "Did everyone see that? Because I will not be doing it again",
                                            "I see the light... it's a [404 Error]!",
                                            "I wish i took those digeridoo lessons",
                                            "Your mother was a hamster, and your father smelt of elderberries",
                                            "In Rod we trust",
                                            "AAAAAAAA",
                                            "the devil may cry?",
                                            "hey Mr M? are you still mad at me?",

                                            "yippee",
                                            "If you wish to defeat me train for another hundred years.",
                                            "WE CALLED TO TALK ABOUT YOUR CAR'S LIMITED WARRANTY",
                                            "KAMEHAMEHA!!!!!!!!!!",
                                            "Who you gonna call? GHOST BUSTERS!",
                                            "JARVIS evaporate this man",
                                            "Squirtle use water beam!",
                                            "El pollo está en llamas.",
                                            "pentagon, hexagon, octagon, nevergon.. na give you up",
                                            "Eat cube bozo",
                                            "let's make the devilsknife!",
                                            "you know, I really dislike you.",
                                            "Good luck, and may the odds be ever in your favor",
                                            "You dare defy the Lord of Darkness."
                                        ];
                                        const color = `#${Math.floor(Math.random() * 76 + 180).toString(16)}${Math.floor(Math.random() * 121).toString(16).padStart(2, '0')}${Math.floor(Math.random() * 121).toString(16).padStart(2, '0')}`
                                        const quote = quotes[Math.floor(Math.random() * quotes.length)]
                                        level.inGameText(this.position.x, this.position.y - 50, quote, 240, color)
                                    }
                                }
                            } else if (tech.isMobLowHealth && this.health < 0.25) {
                                dmg *= 3
                                simulation.ephemera.push({
                                    count: 2, 
                                    vertices: this.vertices,
                                    do() {
                                        this.count--
                                        if (this.count < 0) simulation.removeEphemera(this)
                                        ctx.beginPath();
                                        const vertices = this.vertices;
                                        ctx.moveTo(vertices[0].x, vertices[0].y);
                                        for (let j = 1, len = vertices.length; j < len; ++j) {
                                            ctx.lineTo(vertices[j].x, vertices[j].y);
                                        }
                                        ctx.lineTo(vertices[0].x, vertices[0].y);
                                        ctx.fillStyle = `rgba(255,50,100,0.2)` 
                                        ctx.fill()
                                        ctx.lineWidth = 3 
                                        ctx.strokeStyle = `#f38` 
                                        ctx.stroke();
                                    },
                                })
                            }
                        }

                        if (this.tier && level.levelsCleared < 14) {
                            dmg *= spawn.mobDmgTakenByTier[this.tier] 
                        } else {
                            dmg *= spawn.mobDmgTakenByLevelsCleared() 
                        }
                        dmg *= this.damageReduction 

                        if (tech.isFarAwayDmg) dmg *= 1 + Math.sqrt(Math.max(500, Math.min(3000, this.distanceToPlayer())) - 500) * 0.0067 
                        if (tech.energySiphon && this.isDropPowerUp && m.immuneCycle < m.cycle) {
                            const regen = Math.min(this.health, dmg) * tech.energySiphon * level.isReducedRegen
                            if (!isNaN(regen) && regen !== Infinity) {
                                m.energy += regen 
                                simulation.energyGenGraphic(3 + Math.min(20, Math.floor(400 * regen)))
                            }
                        }
                        dmg /= Math.sqrt(this.mass)
                    }

                    this.health -= dmg
                    this.onDamage(dmg); 
                    if ((this.health < 0.01 || isNaN(this.health)) && this.alive) this.death();
                }
            },
            onDamage() {
            },
            onDeath() {
            },
            damageReduction: 1,
            leaveBody: true,
            maxMobBody: 40,
            isDropPowerUp: true,
            death() {
                if (tech.collidePowerUps && this.isDropPowerUp) powerUps.randomize(this.position) 
                this.onDeath(this); 
                this.removeConsBB();
                this.alive = false; 

                if (this.isDropPowerUp) {
                    if (level.isMobDeathHeal) {
                        for (let i = 0; i < mob.length; i++) {
                            if (Vector.magnitudeSquared(Vector.sub(this.position, mob[i].position)) < 500000 && mob[i].alive) { 
                                if (mob[i].health < 1) {
                                    mob[i].health += 0.33
                                    if (mob[i].health > 1) mob[i].health = 1
                                    simulation.drawList.push({
                                        x: mob[i].position.x,
                                        y: mob[i].position.y,
                                        radius: mob[i].radius + 20,
                                        color: "rgba(0,255,100,0.5)",
                                        time: 10
                                    });
                                }
                            }
                        }
                    }
                    if (this.isSoonZombie) { 
                        this.leaveBody = false;
                        let count = 5 
                        let cycle = () => {
                            if (count > 0) {
                                if (m.alive) requestAnimationFrame(cycle);
                                if (!simulation.paused && !simulation.isChoosing) {
                                    count--
                                }
                            } else {
                                spawn.zombie(this.position.x, this.position.y, this.radius, this.vertices.length, this.fill) 
                            }
                        }
                        requestAnimationFrame(cycle);
                    }
                    if (tech.iceIXOnDeath && this.isSlowed) {
                        for (let i = 0, len = 2 * Math.sqrt(Math.min(this.mass, 25)) * tech.iceIXOnDeath; i < len; i++) b.iceIX(3, Math.random() * 2 * Math.PI, this.position)
                    }
                    if (tech.deathSpawnsFromBoss || tech.deathSpawns) {
                        const spawns = tech.deathSpawns + tech.deathSpawnsFromBoss
                        const len = Math.min(12, spawns * Math.ceil(Math.random() * simulation.difficulty * spawns))
                        for (let i = 0; i < len; i++) {
                            spawn.spawns(this.position.x + (Math.random() - 0.5) * radius * 2.5, this.position.y + (Math.random() - 0.5) * radius * 2.5, 2);
                            Matter.Body.setVelocity(mob[mob.length - 1], {
                                x: this.velocity.x + (Math.random() - 0.5) * 10,
                                y: this.velocity.x + (Math.random() - 0.5) * 10
                            });
                        }
                    }
                    if (level.isMobRespawn && !this.isBoss && 0.25 > Math.random()) {
                        simulation.drawList.push({
                            x: this.position.x,
                            y: this.position.y,
                            radius: 30,
                            color: `#fff`,
                            time: 20
                        });
                        simulation.drawList.push({
                            x: this.position.x,
                            y: this.position.y,
                            radius: 20,
                            color: `#fff`,
                            time: 40
                        });
                        simulation.drawList.push({
                            x: this.position.x,
                            y: this.position.y,
                            radius: 10,
                            color: `#fff`,
                            time: 60
                        });
                        setTimeout(() => {
                            spawn.randomMobByLevelsCleared(this.position.x, this.position.y);
                        }, 1000);
                    }
                    if (tech.healSpawn && Math.random() < tech.healSpawn) {
                        powerUps.spawn(this.position.x + 20 * (Math.random() - 0.5), this.position.y + 20 * (Math.random() - 0.5), "heal");
                        simulation.drawList.push({
                            x: this.position.x,
                            y: this.position.y,
                            radius: 50,
                            color: "#0eb",
                            time: 12
                        });
                        simulation.drawList.push({
                            x: this.position.x,
                            y: this.position.y,
                            radius: 100,
                            color: "#0eb",
                            time: 6
                        });
                        simulation.drawList.push({
                            x: this.position.x,
                            y: this.position.y,
                            radius: 200,
                            color: "#0eb",
                            time: 3
                        });
                    }

                    if (tech.isVerlet && !m.isTimeDilated) {
                        if (tech.isBarycenter) {
                            b.orbitBot(player.position, false);
                            bullet[bullet.length - 1].endCycle = simulation.cycle + 1320 
                        }

                        requestAnimationFrame(() => {
                            simulation.timePlayerSkip(this.isBoss ? 60 : 30)
                            simulation.loop(); 
                        }); 
                    }
                    if (tech.isEnergyLoss) {
                        m.energy -= 0.05;
                        if (m.energy < 0) m.energy = 0
                    }



                    if (tech.isRemineralize) {
                        const seconds = (simulation.cycle - tech.mineralLastCheck) / 60
                        tech.mineralLastCheck = simulation.cycle
                        tech.mineralDamageReduction = 1 - (1 - tech.mineralDamageReduction) * Math.pow(0.9, seconds);
                        tech.mineralDamage = 1 + (tech.mineralDamage - 1) * Math.pow(0.9, seconds);
                        tech.mineralDamageReduction *= 0.85
                    }
                    if (tech.isDemineralize) {
                        const seconds = (simulation.cycle - tech.mineralLastCheck) / 60
                        tech.mineralLastCheck = simulation.cycle
                        tech.mineralDamageReduction = 1 - (1 - tech.mineralDamageReduction) * Math.pow(0.9, seconds);
                        tech.mineralDamage = 1 + (tech.mineralDamage - 1) * Math.pow(0.9, seconds);
                        tech.mineralDamage *= 1.08
                    }



                    powerUps.spawnRandomPowerUp(this.position.x, this.position.y);
                    m.lastKillCycle = m.cycle; 
                    mobs.mobDeaths++

                    if (Math.random() < tech.sporesOnDeath) {
                        const amount = Math.min(25, Math.floor(2 + this.mass * (0.5 + 0.5 * Math.random())))
                        if (tech.isSporeFlea) {
                            const len = amount / 2
                            for (let i = 0; i < len; i++) {
                                const speed = 10 + 5 * Math.random()
                                const angle = 2 * Math.PI * Math.random()
                                b.flea(this.position, { x: speed * Math.cos(angle), y: speed * Math.sin(angle) })
                            }
                        } else if (tech.isSporeWorm) {
                            const len = amount / 2
                            for (let i = 0; i < len; i++) b.worm(this.position)
                        } else {
                            for (let i = 0; i < amount; i++) b.spore(this.position)
                        }
                    }
                    if (tech.isChitin) {
                        for (let i = 0; i < 2; i++) {
                            if (tech.wire.segments.length < 200) { 
                                const last = tech.wire.segments[tech.wire.segments.length - 1];
                                tech.wire.segments.push({ x: last.x, y: last.y, oldX: last.x, oldY: last.y });
                            }
                        }
                    }
                    if (tech.isConchoidal) {
                        const dmg = 1.04
                        m.damageDone *= dmg
                        tech.conchoidalDamage *= dmg
                    }
                    if (tech.isExplodeMob) {
                        b.explosion(this.position, Math.min(700, Math.sqrt(this.mass + 6) * (30 + 60 * Math.random())))
                    }
                    if (tech.nailsDeathMob) {
                        b.targetedNail(this.position, tech.nailsDeathMob, 39 + 6 * Math.random())
                    }
                    if (tech.isBotSpawnerReset) {
                        for (let i = 0, len = bullet.length; i < len; i++) {
                            if (bullet[i].botType && bullet[i].endCycle !== Infinity) bullet[i].endCycle = simulation.cycle + 900 
                        }
                    }
                    if (Math.random() < tech.botSpawner) {
                        b.randomBot(this.position, false)
                        bullet[bullet.length - 1].endCycle = simulation.cycle + 900 
                        this.leaveBody = false; 
                    }
                    if (tech.isMobDeathImmunity) {
                        const immuneTime = 300
                        if (m.immuneCycle < m.cycle + immuneTime) m.immuneCycle = m.cycle + immuneTime; 
                    }
                    if (tech.isAddRemoveMaxHealth) {
                        if (!this.isBoss) {
                            const amount = 0.0025
                            if (tech.isEnergyHealth) {
                                if (m.maxEnergy > amount) {
                                    tech.healMaxEnergyBonus -= amount
                                    m.setMaxEnergy();
                                }
                            } else if (m.maxHealth > amount) {
                                tech.extraMaxHealth -= amount 
                                m.setMaxHealth();
                            }
                        }
                    }
                    if (tech.cloakDuplication && !this.isBoss) {
                        tech.cloakDuplication -= 0.01
                        powerUps.setPowerUpMode(); 
                    }
                } else if (tech.isShieldAmmo && this.shield && this.shieldCount === 1) {
                    let type = "ammo"
                    if (Math.random() < 0.4) {
                        type = "heal"
                    } else if (Math.random() < 0.3 && !tech.isSuperDeterminism) {
                        type = "research"
                    }
                    for (let i = 0, len = Math.ceil(2 * Math.random()); i < len; i++) {
                        powerUps.spawn(this.position.x, this.position.y, type);
                    }
                }
                if (tech.isRadioactive) {
                    let dmgTotal = 0
                    for (let i = 0, len = this.status.length; i < len; i++) {
                        if (this.status[i].type === "dot") dmgTotal += this.status[i].dmg * (this.status[i].endCycle - simulation.cycle)
                    }
                    if (dmgTotal > 0) { 
                        let closestRadius = 500;
                        let closestIndex = null;
                        for (let i = 0, len = mob.length; i < len; ++i) {
                            const radius = Vector.magnitude(Vector.sub(this.position, mob[i].position))
                            if (mob[i].alive && !mob[i].isShielded && radius < closestRadius) {
                                closestRadius = radius
                                closestIndex = i
                            }
                        }
                        if (closestIndex) {
                            mobs.statusDoT(mob[closestIndex], dmgTotal / 180, 180)
                            ctx.beginPath();
                            ctx.moveTo(this.position.x, this.position.y);
                            ctx.lineTo(mob[closestIndex].position.x, mob[closestIndex].position.y);
                            ctx.lineWidth = this.radius;
                            ctx.strokeStyle = "rgba(0,80,80,1)";
                            ctx.stroke();
                        }
                    }
                }
            },
            removeConsBB() {
                for (let i = 0, len = consBB.length; i < len; ++i) {
                    if (consBB[i].bodyA === this) {
                        if (consBB[i].bodyB.shield) { 
                            consBB[i].bodyB.do = function () { this.death() }
                        }
                        consBB[i].bodyA = consBB[i].bodyB;
                        consBB.splice(i, 1);
                        this.removeConsBB();
                        break;
                    } else if (consBB[i].bodyB === this) {
                        if (consBB[i].bodyA.shield) {
                            consBB[i].bodyA.do = function () { this.death() }
                        }
                        consBB[i].bodyB = consBB[i].bodyA;
                        consBB.splice(i, 1);
                        this.removeConsBB();
                        break;
                    }
                }
            },
            removeCons() {
                for (let i = 0, len = cons.length; i < len; ++i) {
                    if (cons[i].bodyA === this) {
                        cons[i].bodyA = cons[i].bodyB;
                        cons.splice(i, 1);
                        this.removeCons();
                        break;
                    } else if (cons[i].bodyB === this) {
                        cons[i].bodyB = cons[i].bodyA;
                        cons.splice(i, 1);
                        this.removeCons();
                        break;
                    }
                }
            },
            replace(i) {
                if (this.leaveBody && body.length < mobs.maxMobBody && this.mass < 200 && this.mass > 1 && this.radius > 18) {

                    let v = Matter.Vertices.hull(Matter.Vertices.clockwiseSort(this.vertices)) 
                    if (v.length > 5 && body.length < 35 && Math.random() < 0.25) {
                        const cutPoint = 3 + Math.floor((v.length - 6) * Math.random()) 
                        const v2 = v.slice(0, cutPoint + 1)
                        v = v.slice(cutPoint - 1)
                        const len = body.length;
                        body[len] = Matter.Bodies.fromVertices(this.position.x, this.position.y, v2);
                        Matter.Body.setVelocity(body[len], Vector.mult(this.velocity, 0.5));
                        Matter.Body.setAngularVelocity(body[len], this.angularVelocity);
                        body[len].collisionFilter.category = cat.body;
                        body[len].collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob | cat.mobBullet;
                        body[len].classType = "body";
                        body[len].frictionAir = 0.001
                        body[len].friction = 0.05
                        Composite.add(engine.world, body[len]); 

                        const len2 = body.length;
                        body[len2] = Matter.Bodies.fromVertices(this.position.x, this.position.y, v);
                        Matter.Body.setVelocity(body[len2], Vector.mult(this.velocity, 0.5));
                        Matter.Body.setAngularVelocity(body[len2], this.angularVelocity);
                        body[len2].collisionFilter.category = cat.body;
                        body[len2].collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob | cat.mobBullet;
                        body[len2].classType = "body";
                        body[len2].frictionAir = 0.001
                        body[len2].friction = 0.05
                        Composite.add(engine.world, body[len2]); 

                        if (body[len].mass + body[len2].mass > 16) {
                            const massLimit = 8 + 6 * Math.random()
                            const shrink = function (that1, that2) {
                                if (that1.mass + that2.mass > massLimit) {
                                    const scale = 0.95;
                                    Matter.Body.scale(that1, scale, scale);
                                    Matter.Body.scale(that2, scale, scale);
                                    setTimeout(shrink, 20, that1, that2);
                                }
                            };
                            shrink(body[len], body[len2])
                        }
                    } else {
                        const len = body.length;
                        body[len] = Matter.Bodies.fromVertices(this.position.x, this.position.y, v);
                        Matter.Body.setVelocity(body[len], Vector.mult(this.velocity, 0.5));
                        Matter.Body.setAngularVelocity(body[len], this.angularVelocity);
                        body[len].collisionFilter.category = cat.body;
                        body[len].collisionFilter.mask = cat.player | cat.map | cat.body | cat.bullet | cat.mob | cat.mobBullet;
                        body[len].classType = "body";
                        body[len].frictionAir = 0.001
                        body[len].friction = 0.05
                        Composite.add(engine.world, body[len]); 
                        if (body[len].mass > 9) {
                            const massLimit = 7 + 4 * Math.random()
                            const shrink = function (that) {
                                if (that.mass > massLimit) {
                                    const scale = 0.95;
                                    Matter.Body.scale(that, scale, scale);
                                    setTimeout(shrink, 20, that);
                                }
                            };
                            shrink(body[len])
                        }
                    }
                    Matter.Composite.remove(engine.world, this);
                    mob.splice(i, 1);
                    if (tech.isMobBlockFling) {
                        const who = body[body.length - 1]
                        if (!who.isNotHoldable) {
                            b.targetedBlock(who)
                            Matter.Body.setAngularVelocity(who, (0.5 + 0.2 * Math.random()) * (Math.random() < 0.5 ? -1 : 1));
                        }
                    }
                } else {
                    Matter.Composite.remove(engine.world, this);
                    mob.splice(i, 1);
                }
            }
        });
        mob[i].alertRange2 = Math.pow(mob[i].radius * 3 + 550, 2);
        Composite.add(engine.world, mob[i]); 
    }
};

const NO_TARGET = Bodies.polygon(-100000, -100000, 3, 1);

let player = NO_TARGET, playerBody = NO_TARGET, playerHead = NO_TARGET;

const HISTORY_LEN = 600;
function initHistory(pos) {
    const h = new Array(HISTORY_LEN);
    for (let i = 0; i < HISTORY_LEN; i++) h[i] = { position: { x: pos.x, y: pos.y } };
    return h;
}
function safeIndex(i) { return ((i % HISTORY_LEN) + HISTORY_LEN) % HISTORY_LEN; }
function makeHistoryProxy(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            if (typeof prop === "string" && /^-?\d+$/.test(prop)) return target[safeIndex(parseInt(prop, 10))];
            return target[prop];
        }
    });
}
function updateAllHistories() {
    for (let i = 0; i < mob.length; i++) {
        const me = mob[i];
        if (!me._huntMemory) me._huntMemory = initHistory(me.position);
        const slot = me._huntMemory[simulation.cycle % HISTORY_LEN];
        slot.position.x = me.position.x;
        slot.position.y = me.position.y;
    }
}

const m = {
    target: NO_TARGET,
    get pos() { return this.target.position },
    get angle() { return this.target.angle },
    get health() { return this.target.health },
    get displayHealth() { return this.target.health },
    get maxHealth() { return 1 },
    get alive() { return this.target.alive },
    get isBadTarget() { return !!this.target.isBadTarget },
    get history() {
        const t = this.target;
        if (!t._huntMemory) t._huntMemory = initHistory(t.position);
        if (!t._huntMemoryProxy) t._huntMemoryProxy = makeHistoryProxy(t._huntMemory);
        return t._huntMemoryProxy;
    },
    get isCloak() { return false },
    get isTimeDilated() { return false },
    get onGround() { return true },
    get crouch() { return false },
    get immuneCycle() { return this.target.immuneUntilCycle || 0 },
    set immuneCycle(v) { this.target.immuneUntilCycle = v },
    get collisionImmuneCycles() { return 20 },
    get cycle() { return simulation.cycle },
    get energy() { return this.target._energy || 1 },
    set energy(v) { this.target._energy = v },
    get maxEnergy() { return 1 },
    get damageDone() { return this.target._damageDone || 1 },
    set damageDone(v) { this.target._damageDone = v },
    get lastKillCycle() { return this.target._lastKillCycle || 0 },
    set lastKillCycle(v) { this.target._lastKillCycle = v },
    get walk_cycle() { return 0 }, set walk_cycle(v) { },
    get flipLegs() { return 1 },
    get Vx() { return this.target.velocity ? this.target.velocity.x : 0 },
    get knee() { return { x: 0, y: 0 } },
    get foot() { return { x: 0, y: 0 } },
    fieldUpgrades: [],
    addHealth() { },
    calcLeg() { },
    lookingAtMob() { return false },
    setMaxEnergy() { },
    setMaxHealth() { },
    takeDamage(dmg) { this.target.damage(dmg) },
    death() { this.target.death() },
};

let currentActingTeam = null;
let currentActingMob = null;

function livingEnemiesOf(team) {
    const out = [];
    for (let i = 0; i < mob.length; i++) {
        const cand = mob[i];
        if (cand.alive && cand.team !== team) out.push(cand);
    }
    return out;
}

function nearestMobTeam(x, y, excludeMob) {
    let best = null, bestDist = Infinity;
    for (let i = 0; i < mob.length; i++) {
        const cand = mob[i];
        if (cand === excludeMob || !cand.alive) continue;
        const dx = cand.position.x - x, dy = cand.position.y - y;
        const d = dx * dx + dy * dy;
        if (d < bestDist) { bestDist = d; best = cand; }
    }
    return best ? best.team : "A";
}

const _originalMobsSpawn = mobs.spawn;
mobs.spawn = function (xPos, yPos, sides, radius, color) {
    _originalMobsSpawn(xPos, yPos, sides, radius, color);
    const created = mob[mob.length - 1];
    created.team = currentActingTeam !== null ? currentActingTeam : nearestMobTeam(xPos, yPos, created);
    const originalDamage = created.damage;
    created.damage = function (dmg, isBypassShield) {
        if (this._inDeathSequence) return;
        return originalDamage.call(this, dmg, isBypassShield);
    };
    const originalDeath = created.death;
    created.death = function () {
        if (this._inDeathSequence) return;
        this._inDeathSequence = true;
        try {
            originalDeath.call(this);
        } finally {
            this._inDeathSequence = false;        
        }
    };
};

function findNearestEnemy(me) {
    let best = null, bestDist = Infinity;
    for (let i = 0; i < mob.length; i++) {
        const cand = mob[i];
        if (cand === me || !cand.alive || cand.team === me.team || cand.collisionFilter.category === cat.mobShield || cand.collisionFilter.category === cat.mobBullet || cand.isInvulnerable) continue;
        const dx = cand.position.x - me.position.x, dy = cand.position.y - me.position.y;
        const d = dx * dx + dy * dy;
        if (d < bestDist) { bestDist = d; best = cand; }
    }
    return best;
}

function pointGlobalsAt(target) {
    player = target;
    playerBody = target;
    playerHead = target;
    m.target = target;
}

function broadcastTechEffect(entry, isRemove = false) {
    const savedTarget = m.target;
    const teamA = uniqueAliveTeamMobs('A');
    for (let i = 0; i < teamA.length; i++) {
        pointGlobalsAt(teamA[i]);
        if (isRemove) entry.remove(); else entry.effect();
    }
    m.target = savedTarget;
}

function resolveTargetFor(me) {
    pointGlobalsAt(findNearestEnemy(me) || NO_TARGET);
}

function runMobAI() {
    updateAllHistories();
    let i = mob.length;
    while (i--) {
        if (mob[i].alive) {
            currentActingTeam = mob[i].team;
            currentActingMob = mob[i];
            resolveTargetFor(mob[i]);
            mob[i].do();
            currentActingTeam = null;
            currentActingMob = null;
        } else {
            mob[i].replace(i);
        }
    }
}