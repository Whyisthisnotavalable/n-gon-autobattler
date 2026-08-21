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
    duplicationChance() { return 0 },
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
    fireRate: 1, // initializes to 1
    bulletSize: null,
    crouchAmmoCount: null,
    bulletsLastLonger: null,
    isImmuneExplosion: null,
    isDroneOnDamage: null,
    isAcidDmg: null,
    isAnnihilation: null,
    isCrit: null,
    isLowHealthDmg: null,
    isLowHealthDefense: null,
    isLowHealthFireRate: null,
    isFirstDer: null,
    isMassEnergy: null,
    extraChoices: null,
    laserBotCount: null,
    dynamoBotCount: null,
    nailBotCount: null,
    foamBotCount: null,
    soundBotCount: null,
    boomBotCount: null,
    plasmaBotCount: null,
    missileBotCount: null,
    orbitBotCount: null,
    blockDmg: null,
    isBlockRadiation: null,
    isPiezo: null,
    isFastDrones: null,
    oneSuperBall: null,
    laserReflections: null,
    laserDamage: null,
    isAmmoFromHealth: null,
    isEnergyRecovery: null,
    isHealthRecovery: null,
    isDeathAvoid: null,
    isDeathAvoidedThisLevel: null,
    isPlasmaRange: null,
    isFreezeMobs: null,
    isIceCrystals: null,
    blockDamage: null,
    isBlockStun: null,
    isStunField: null,
    isHarmDamage: null,
    isVacuumBomb: null,
    renormalization: null,
    fragments: null,
    energyDamage: null,
    isSporeFollow: null,
    isNailRadiation: null,
    isStun: null,
    restDamage: null,
    isRPG: null,
    missileCount: null,
    isDeterminism: null,
    isHarmReduce: null,
    isSlowFPS: null,
    isNeutronStun: null,
    isAnsatz: null,
    isDamageFromBulletCount: null,
    laserDrain: null,
    isNailShot: null,
    slowFire: null,
    fastTime: null,
    isFastRadiation: null,
    isAmmoForGun: null,
    isRapidPulse: null,
    isSporeFreeze: null,
    isShotgunRecoil: null,
    isHealLowHealth: null,
    isHarmArmor: null,
    isTurret: null,
    isRerollDamage: null,
    isHarmFreeze: null,
    isBotArmor: null,
    isRerollHaste: null,
    researchHaste: null,
    isMineDrop: null,
    isRerollBots: null,
    isNailBotUpgrade: null,
    isFoamBotUpgrade: null,
    isSoundBotUpgrade: null,
    isLaserBotUpgrade: null,
    isBoomBotUpgrade: null,
    isOrbitBotUpgrade: null,
    isDroneGrab: null,
    isOneGun: null,
    isDamageForGuns: null,
    isGunCycle: null,
    isFastFoam: null,
    isSporeGrowth: null,
    isStimulatedEmission: null,
    nailInstantFireRate: null,
    isCapacitor: null,
    isEnergyNoAmmo: null,
    isSmallExplosion: null,
    isExplosionHarm: null,
    isCloakStun: null,
    bonusEnergy: null,
    slowFireDamage: null,
    isNoFireDefense: null,
    isNoFireDamage: null,
    duplicateChance: null,
    beamSplitter: null,
    iceEnergy: null,
    isPerfectBrake: null,
    explosiveRadius: 1,
    isWormholeDamage: null,
    isNailCrit: null,
    isFlechetteExplode: null,
    isWormholeWorms: null,
    isWormHoleBullets: null,
    isWideLaser: null,
    wideLaser: null,
    isPulseLaser: null,
    isRailEnergy: null,
    isMineSentry: null,
    isIncendiary: null,
    overfillDrain: null,
    isNeutronSlow: null,
    historyLaser: null,
    isSpeedHarm: null,
    isSpeedDamage: null,
    speedAdded: null,
    isTimeSkip: null,
    isCancelDuplication: null,
    duplication: null,
    isCancelRerolls: null,
    isCancelTech: null,
    cancelTechCount: null,
    isBotDamage: null,
    isBanish: null,
    isRetain: null,
    isMaxEnergyTech: null,
    isLowEnergyDamage: null,
    isRewindBot: null,
    isRewindGrenade: null,
    isExtruder: null,
    isEndLevelPowerUp: null,
    isMissileBig: null,
    isMissileBiggest: null,
    isMissileFast: null,
    isMissile2ndExplode: null,
    isLaserMine: null,
    isFoamMine: null,
    isAmmoFoamSize: null,
    isIceIX: null,
    isDupDamage: null,
    isDupEnergy: null,
    isFireRateForGuns: null,
    cyclicImmunity: null,
    isTechDamage: null,
    isRestHarm: null,
    isFireMoveLock: null,
    isRivets: null,
    isNeedles: null,
    isExplodeRadio: null,
    isPauseSwitchField: null,
    isPauseEjectTech: null,
    pauseEjectTech: null,
    isShieldPierce: null,
    isDynamoBotUpgrade: null,
    isBlockPowerUps: null,
    isHarmReduceNoKill: null,
    isSwitchReality: null,
    isResearchReality: null,
    isAnthropicDamage: null,
    isMetaAnalysis: null,
    isFoamAttract: null,
    droneCycleReduction: null,
    droneEnergyReduction: null,
    isHalfHeals: null,
    isAlwaysFire: null,
    isDroneRespawn: null,
    isPhaseVelocity: null,
    waveBeamSpeed: null,
    wavePacketAmplitude: null,
    isCollisionRealitySwitch: null,
    isAddBlockMass: null,
    isDarkMatter: null,
    isSneakAttack: null,
    isFallingDamage: null,
    harmonics: null,
    isStandingWaveExpand: null,
    isTokamak: null,
    isTokamakHeal: null,
    tokamakHealCount: null,
    isTokamakFly: null,
    deflectEnergy: null,
    superBallDelay: null,
    isBlockExplode: null,
    isOverHeal: null,
    isDroneRadioactive: null,
    droneRadioDamage: null,
    isDroneTeleport: null,
    isDroneFastLook: null,
    isBulletTeleport: null,
    isJunkResearch: null,
    laserColor: null,
    laserColorAlpha: null,
    isLongitudinal: null,
    is360Longitudinal: null,
    isShotgunReversed: null,
    fieldDuplicate: null,
    isCloakingDamage: null,
    harmonicEnergy: null,
    isFieldHarmReduction: null,
    isFastTime: null,
    isAnthropicTech: null,
    isFoamShot: null,
    isIceShot: null,
    isBlockRestitution: null,
    isZeno: null,
    isFieldFree: null,
    isExtraGunField: null,
    isBigField: null,
    isSmartRadius: null,
    isFilament: null,
    isLargeHarpoon: null,
    extraHarpoons: null,
    ammoCap: null,
    isHarpoonPowerUp: null,
    harpoonDensity: null,
    extruderRange: null,
    isForeverDrones: null,
    nailRecoil: null,
    baseJumpForce: null,
    baseFx: null,
    isNeutronium: null,
    isFreeWormHole: null,
    isCrouchRegen: null,
    isAxion: null,
    isWormholeMapIgnore: null,
    isLessDamageReduction: null,
    needleTunnel: null,
    isBrainstorm: null,
    isBrainstormActive: null,
    brainStormDelay: null,
    wormSize: null,
    extraSuperBalls: null,
    isTimeCrystals: null,
    isGroundState: null,
    isRailGun: null,
    isDronesTravel: null,
    isTechDebt: null,
    isPlasmaBall: null,
    plasmaDischarge: null,
    missileFireCD: null,
    isBotField: null,
    isFoamBall: null,
    isNoDraftPause: null,
    isFoamPressure: null,
    foamDamage: null,
    isClusterExplode: null,
    isCircleExplode: null,
    isPetalsExplode: null,
    isCritKill: null,
    isQuantumEraser: null,
    isPhononBlock: null,
    isPhononWave: null,
    isLaserLens: null,
    laserCrit: null,
    isSporeColony: null,
    isExtraBotOption: null,
    isLastHitDamage: null,
    isCloakHealLastHit: null,
    isRicochet: null,
    isCancelCouple: null,
    isCouplingPowerUps: null,
    isBoostPowerUps: null,
    isBoostReplaceAmmo: null,
    isInfiniteWaveAmmo: null,
    isJunkDNA: null,
    buffedGun: 0,
    isGunChoice: null,
    railChargeRate: null,
    isSuperHarm: null,
    isZombieMobs: null,
    isSuperMine: null,
    sentryAmmo: null,
    isDilate: null,
    isDiaphragm: null,
    isOffGroundDamage: null,
    isSuperBounce: null,
    isDivisor: null,
    isFoamCavitation: null,
    isHealAttract: null,
    isLaserField: null,
    isHealBrake: null,
    isMassProduction: null,
    isPrinter: null,
    isHookDefense: null,
    hookNails: null,
    isHarpoonDefense: null,
    isReel: null,
    harpoonPowerUpCycle: null,
    isHarpoonFullHealth: null,
    isDamageCooldown: null,
    isDamageCooldownTime: null,
    isPowerUpDamage: null,
    isExitPrompt: null,
    isResearchDamage: null,
    isResearchHeal: null,
    interestRate: null,
    isImmunityDamage: null,
    isMaxHealthDefense: null,
    noDefenseSettingDamage: null,
    isMaxHealthDamage: null,
    isEjectOld: null,
    isWiki: null,
    isStaticBlock: null,
    isDamageFieldTech: null,
    negativeMassCost: null,
    beamCollimator: null,
    isInPilot: null,
    isNoPilotCost: null,
    isPlasmaBoost: null,
    isControlPlasma: null,
    energyDefense: null,
    isNewWormHoleDamage: null,
    isNoDeath: null,
    isDeathTech: null,
    isDeathTechTriggered: null,
    isRebar: null,
    isMaul: null,
    isTargeting: null,
    isBreakHarpoon: null,
    isBreakHarpoonGain: null,
    isExponential: null,
    isCoyote: null,
    isNitinol: null,
    isEndothermic: null,
    isPrecision: null,
    isExtraGunTech: null,
    isExplodeContact: null,
    isMissileSide: null,
    isLaserShot: null,

    mergedList: [],

    wire: {
        segments: []
    },

    tech: [
        {
            name: "damage",
            description: `<strong>+10%</strong> team <strong class='color-d'>damage</strong> dealt`,
            maxCount: 9,
            count: 0,
            frequency: 1,
            frequencyDefault: 1,
            allowed() { return true },
            requires: "",
            effect() {
                m.damageDone *= 1.1;
            },
            remove() {
                m.damageDone /= 1.1;
            },
        },
        {
            name: "currency",
            description: `+50 <b>currency</b>`,
            maxCount: 99,
            count: 0,
            isInstant: true,
            frequency: 1,
            frequencyDefault: 1,
            allowed() { return true },
            requires: "",
            effect() {
                game.currency += 50;
            },
            remove() {},
        },
        {
            name: "kinetic bombardment",
            description: "far away mobs take more <strong class='color-d'>damage</strong><br>up to <strong>1.3x</strong> <strong class='color-d'>damage</strong> at <strong>3000</strong> displacement",
            maxCount: 1,
            count: 0,
            frequency: 1,
            frequencyDefault: 1,
            allowed() {
                return true;
            },
            requires: "",
            effect() {
                tech.isFarAwayDmg = true;
            },
            remove() {
                tech.isFarAwayDmg = false;
            }
        },
        {
            name: "cascading failure",
            description: "<strong>3x</strong> <strong class='color-d'>damage</strong> to mobs below <strong>25%</strong> <strong>durability</strong>",
            maxCount: 1,
            count: 0,
            frequency: 3,
            frequencyDefault: 3,
            allowed() {
                return true;
            },
            requires: "reaction inhibitor",
            effect() {
                tech.isMobLowHealth = true;
            },
            remove() {
                tech.isMobLowHealth = false;
            }
        },
        {
            name: "thermal runaway",
            description: "after mobs <strong>die</strong> they <strong class='color-e'>explode</strong>",
            maxCount: 1,
            count: 0,
            frequency: 1,
            frequencyDefault: 1,
            allowed() {
                return true;
            },
            requires: "",
            effect() {
                tech.isExplodeMob = true;
            },
            remove() {
                tech.isExplodeMob = false;
            }
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
    orbitBot() { }, worm() { }, flea() { }, spore() { }, targetedNail() { }, randomBot() { }, iceIX() { }, targetedBlock() { },
    explosion(where, radius, color = "rgba(255,25,0,0.6)", reducedKnock = 1) { // typically explode is used for some bullets with .onEnd
        radius *= tech.explosiveRadius
        let knock;
        let dmg = radius * 0.019
        if (tech.isExplosionHarm) radius *= 1.7 //    1/sqrt(2) radius -> area
        if (tech.isSmallExplosion) {
            // color = "rgba(255,0,30,0.7)"
            radius *= 0.7
            dmg *= 1.7
        }
        let sub = Vector.sub(where, player.position);
        let dist = Vector.magnitude(sub);
        if (tech.isSmartRadius && (radius > dist - 50) && m.immuneCycle < m.cycle) radius = Math.max(dist - 50, 1)

        if (tech.isExplodeRadio) { //radiation explosion
            radius *= 1.25; //alert range
            color = "rgba(25,139,170,0.25)"
            simulation.drawList.push({ //add dmg to draw queue
                x: where.x,
                y: where.y,
                radius: radius,
                color: color,
                time: simulation.drawTime * 2
            });

            //player damage
            // if (Vector.magnitude(Vector.sub(where, player.position)) < radius) {
            //     const DRAIN = (tech.isExplosionHarm ? 0.6 : 0.45) * (tech.isRadioactiveResistance ? 0.2 : 1)
            //     if (m.immuneCycle < m.cycle) m.energy -= DRAIN
            //     if (m.energy < 0) {
            //         m.energy = 0
            //         m.takeDamage(tech.radioactiveDamage * 0.03 * (tech.isRadioactiveResistance ? 0.2 : 1) * spawn.dmgToPlayerByLevelsCleared());
            //     }
            // }

            //mob damage and knock back with alert
            let damageScaler = 1.5; // reduce dmg for each new target to limit total AOE damage
            for (let i = 0, len = mob.length; i < len; ++i) {
                if (mob[i].alive && !mob[i].isShielded) {
                    sub = Vector.sub(where, mob[i].position);
                    dist = Vector.magnitude(sub) - mob[i].radius;
                    if (dist < radius) {
                        if (mob[i].shield) dmg *= 2.5 //balancing explosion dmg to shields
                        if (Matter.Query.ray(map, mob[i].position, where).length > 0) dmg *= 0.5 //reduce damage if a wall is in the way
                        mobs.statusDoT(mob[i], dmg * damageScaler * 0.25, 240) //apply radiation damage status effect on direct hits
                        if (tech.isStun) mobs.statusStun(mob[i], 30)
                        mob[i].locatePlayer();
                        damageScaler *= 0.87 //reduced damage for each additional explosion target
                    }
                }
            }
        } else { //normal explosions
            simulation.drawList.push({ //add dmg to draw queue
                x: where.x,
                y: where.y,
                radius: radius,
                color: color,
                time: simulation.drawTime
            });
            const alertRange = 100 + radius * 2; //alert range
            simulation.drawList.push({ //add alert to draw queue
                x: where.x,
                y: where.y,
                radius: alertRange,
                color: "rgba(100,20,0,0.03)",
                time: simulation.drawTime
            });

            //player damage and knock back
            // if (m.immuneCycle < m.cycle) {
            //     if (dist < radius) {
            //         const harm = tech.isExplosionHarm ? 0.067 : 0.05
            //         if (tech.isImmuneExplosion && m.energy > 0.05) {
            //             // const mitigate = Math.min(1, Math.max(1 - m.energy * 0.5, 0))
            //             m.energy -= 0.05
            //             knock = Vector.mult(Vector.normalise(sub), -0.6 * player.mass * Math.max(0, Math.min(0.15 - 0.002 * player.speed, 0.15)));
            //             player.force.x = knock.x; // not +=  so crazy forces can't build up with MIRV
            //             player.force.y = knock.y - 0.3; //some extra vertical kick
            //         } else {
            //             m.takeDamage(harm * spawn.dmgToPlayerByLevelsCleared());
            //             knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg) * player.mass * 0.013);
            //             player.force.x += knock.x;
            //             player.force.y += knock.y;
            //         }
            //     } else if (dist < alertRange) {
            //         knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg) * player.mass * 0.005);
            //         player.force.x += knock.x;
            //         player.force.y += knock.y;
            //     }
            // }

            //body knock backs
            for (let i = body.length - 1; i > -1; i--) {
                if (!body[i].isNotHoldable) {
                    sub = Vector.sub(where, body[i].position);
                    dist = Vector.magnitude(sub);
                    if (dist < radius) {
                        knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg) * body[i].mass * 0.022);
                        body[i].force.x += knock.x;
                        body[i].force.y += knock.y;
                        if (tech.isBlockExplode && !body[i].isInvulnerable) {
                            if (body[i] === m.holdingTarget) m.drop()
                            const size = 20 + 300 * Math.pow(body[i].mass, 0.25)
                            const x = body[i].position.x
                            const y = body[i].position.y
                            const onLevel = level.onLevel //prevent explosions in the next level
                            Matter.Composite.remove(engine.world, body[i]);
                            body.splice(i, 1);
                            setTimeout(() => {
                                if (onLevel === level.onLevel) b.explosion({ x: x, y: y }, size);
                            }, 250 + 300 * Math.random());
                        }
                    } else if (dist < alertRange) {
                        knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg) * body[i].mass * 0.011);
                        body[i].force.x += knock.x;
                        body[i].force.y += knock.y;
                    }
                }
            }

            //power up knock backs
            for (let i = 0, len = powerUp.length; i < len; ++i) {
                sub = Vector.sub(where, powerUp[i].position);
                dist = Vector.magnitude(sub);
                if (dist < radius) {
                    knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg) * powerUp[i].mass * 0.013);
                    powerUp[i].force.x += knock.x;
                    powerUp[i].force.y += knock.y;
                } else if (dist < alertRange) {
                    knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg) * powerUp[i].mass * 0.007);
                    powerUp[i].force.x += knock.x;
                    powerUp[i].force.y += knock.y;
                }
            }

            //mob damage and knock back with alert
            let damageScaler = 1.5; // reduce dmg for each new target to limit total AOE damage
            for (let i = 0, len = mob.length; i < len; ++i) {
                if (mob[i].alive && !mob[i].isShielded) {
                    sub = Vector.sub(where, mob[i].position);
                    dist = Vector.magnitude(sub) - mob[i].radius;
                    if (dist < radius) {
                        if (mob[i].shield) dmg *= 1.8 //balancing explosion dmg to shields
                        if (Matter.Query.ray(map, mob[i].position, where).length > 0) dmg *= 0.5 //reduce damage if a wall is in the way
                        mob[i].damage(dmg * damageScaler * (mob[i].team == "A" ? 0 : 1));
                        mob[i].locatePlayer();
                        knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg * damageScaler) * mob[i].mass * (mob[i].isBoss ? 0.003 : 0.01) * reducedKnock);
                        if (tech.isStun) {
                            mobs.statusStun(mob[i], 30)
                        } else if (!mob[i].isInvulnerable) {
                            mob[i].force.x += knock.x;
                            mob[i].force.y += knock.y;
                        }
                        radius *= 0.95 //reduced range for each additional explosion target
                        damageScaler *= 0.87 //reduced damage for each additional explosion target
                    } else if (!mob[i].seePlayer.recall && dist < alertRange) {
                        mob[i].locatePlayer();
                        knock = Vector.mult(Vector.normalise(sub), -Math.sqrt(dmg * damageScaler) * mob[i].mass * (mob[i].isBoss ? 0 : 0.006 * reducedKnock));
                        if (tech.isStun) {
                            mobs.statusStun(mob[i], 30)
                        } else if (!mob[i].isInvulnerable) {
                            mob[i].force.x += knock.x;
                            mob[i].force.y += knock.y;
                        }
                    }
                }
            }
        }
    },
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
    drawCursor() {
        const size = 10;
        ctx.beginPath();
        ctx.moveTo(simulation.mouse.x - size, simulation.mouse.y);
        ctx.lineTo(simulation.mouse.x + size, simulation.mouse.y);
        ctx.moveTo(simulation.mouse.x, simulation.mouse.y - size);
        ctx.lineTo(simulation.mouse.x, simulation.mouse.y + size);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000"; //'rgba(0,0,0,0.4)'
        ctx.stroke(); // Draw it
    },
    mouse: {
        x: 0,
        y: 0
    },
    mouseInGame: {
        x: 0,
        y: 0
    }
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