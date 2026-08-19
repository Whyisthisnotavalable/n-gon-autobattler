const enemyGen = {
    baseBudget: 4,
    budgetPerLevel: 2.0,
    tierCost: [1, 1, 3, 8, 20],
    tierUnlockLevel: [1, 1, 3, 6, 10],
    tierExpiresAfterLevel: [1, Infinity, Infinity, Infinity, Infinity],
    bossLevelInterval: 10,
    bossTierUnlockLevel: [null, 4, 8, 12, 16],
    maxEnemiesForLevel(level) {
        return Math.min(20, 5 + Math.floor(level * 0.5));
    },
    budgetForLevel(level) {
        return this.baseBudget + (level - 1) * this.budgetPerLevel;
    },
    unlockedRegularTiers(level) {
        const out = [];
        for (let t = 0; t < this.tierUnlockLevel.length; t++) {
            if (level >= this.tierUnlockLevel[t] && level <= this.tierExpiresAfterLevel[t]) out.push(t);
        }
        return out;
    },
    isBossLevel(level) {
        return level % this.bossLevelInterval === 0;
    },
    highestUnlockedBossTier(level) {
        let best = 0;
        for (let t = 1; t < this.bossTierUnlockLevel.length; t++) {
            const unlockAt = this.bossTierUnlockLevel[t];
            if (unlockAt !== null && level >= unlockAt) best = t;
        }
        return best;
    },
    pickRegularWave(level, budget) {
        const tiers = this.unlockedRegularTiers(level);
        const cheapest = Math.min(...tiers.map(t => this.tierCost[t]));
        const cap = this.maxEnemiesForLevel(level);
        const picks = [];
        let remaining = budget;
        let guard = 0;
        while (remaining >= cheapest && picks.length < cap && guard < 300) {
            guard++;
            const tier = tiers[Math.floor(Math.random() * tiers.length)];
            const cost = this.tierCost[tier];
            if (cost > remaining) continue;
            const pool = MOB_ROSTER.regular[tier].names;
            picks.push(pool[Math.floor(Math.random() * pool.length)]);
            remaining -= cost;
        }
        return picks;
    },
    pickBoss(level) {
        const tier = this.highestUnlockedBossTier(level);
        if (tier === 0) return null;
        const pool = MOB_ROSTER.bosses[tier - 1].names;
        return pool[Math.floor(Math.random() * pool.length)];
    },
    generate(level) {
        if (this.isBossLevel(level)) {
            const wave = [];
            const boss = this.pickBoss(level);
            if (boss) wave.push(boss);
            wave.push(...this.pickRegularWave(level, this.budgetForLevel(level) * 0.5));
            return wave;
        }
        return this.pickRegularWave(level, this.budgetForLevel(level));
    },
};
const shop = {
    startingCurrency: 50,
    rewardBase: 10,
    rewardPerBudget: 3,
    bossBonusByTier: [0, 25, 55, 110, 200],
    tierUnlockCost: [0, 0, 40, 100, 220],
    tierPrice: [3, 5, 12, 30, 70],
    bossTierUnlockCost: [null, 50, 120, 250, 450],
    bossPrice: [null, 60, 150, 350, 700],
    healCostPerHealthPoint: 15,
    rewardForClearingLevel(level) {
        let reward = this.rewardBase + Math.round(enemyGen.budgetForLevel(level) * this.rewardPerBudget);
        if (enemyGen.isBossLevel(level)) {
            reward += this.bossBonusByTier[enemyGen.highestUnlockedBossTier(level)] || 0;
        }
        return reward;
    },

    tierOf(name) {
        for (const g of MOB_ROSTER.regular) if (g.names.includes(name)) return g.tier;
        return null;
    },
    bossTierOf(name) {
        for (const g of MOB_ROSTER.bosses) {
            if (g.names.includes(name)) return typeof g.tier === "number" ? g.tier : null;
        }
        return null;
    },
    isBossName(name) {
        return MOB_ROSTER.bosses.some(g => g.names.includes(name));
    },
    priceForName(name) {
        const rTier = this.tierOf(name);
        if (rTier !== null) return this.tierPrice[rTier];
        const bTier = this.bossTierOf(name);
        return bTier !== null ? this.bossPrice[bTier] : null;
    },
    isUnlocked(name, level) {
        const rTier = this.tierOf(name);
        if (rTier !== null) {
            if (rTier === 0) return level <= 1;
            if (rTier === 1) return true;
            return game.unlockedTiers.includes(rTier);
        }
        const bTier = this.bossTierOf(name);
        return bTier !== null && game.unlockedBossTiers.includes(bTier);
    },
    unlockRegularTier(tier) {
        if (game.unlockedTiers.includes(tier)) return false;
        const cost = this.tierUnlockCost[tier];
        if (cost === undefined || game.currency < cost) return false;
        game.currency -= cost;
        game.unlockedTiers.push(tier);
        return true;
    },
    unlockBossTier(tier) {
        if (game.unlockedBossTiers.includes(tier)) return false;
        const cost = this.bossTierUnlockCost[tier];
        if (!cost || game.currency < cost) return false;
        game.currency -= cost;
        game.unlockedBossTiers.push(tier);
        return true;
    },

    healTeamCost() {
        const missing = uniqueAliveTeamMobs('A').reduce((sum, m) => sum + Math.max(0, 1 - m.health), 0);
        return Math.ceil(missing * this.healCostPerHealthPoint);
    },
    healTeam() {
        const cost = this.healTeamCost();
        if (cost === 0 || game.currency < cost) return false;
        game.currency -= cost;
        uniqueAliveTeamMobs('A').forEach(m => { m.health = 1; });
        return true;
    },
};
const enemySpawnBuffer = 70;
function getArenaSampleBounds() {
    let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
    for (let i = 0; i < map.length; i++) {
        left = Math.min(left, map[i].bounds.min.x);
        right = Math.max(right, map[i].bounds.max.x);
        top = Math.min(top, map[i].bounds.min.y);
        bottom = Math.max(bottom, map[i].bounds.max.y);
    }
    if (!isFinite(left)) return { left: -500, right: 500, top: -500, bottom: 500 };
    return { left, right, top, bottom };
}

function sideRange(bounds, side) {
    const mid = (bounds.left + bounds.right) / 2;
    return side === "left" ? [bounds.left, mid] : [mid, bounds.right];
}

function isPointClear(x, y) {
    const point = { x, y };
    if (Matter.Query.point(map, point).length > 0) return false;
    if (Matter.Query.point(body, point).length > 0) return false;
    return true;
}

function isFarEnoughFromMobs(x, y, buffer) {
    for (let i = 0; i < mob.length; i++) {
        const other = mob[i];
        if (!other.alive || other.isMobBullet) continue;
        const minDist = (other.radius || 30) + buffer;
        const dx = other.position.x - x, dy = other.position.y - y;
        if (dx * dx + dy * dy < minDist * minDist) return false;
    }
    return true;
}

function findSpawnPoint(bounds, xRange, tries = 40) {
    for (let i = 0; i < tries; i++) {
        const x = xRange[0] + Math.random() * (xRange[1] - xRange[0]);
        const y = bounds.top + Math.random() * (bounds.bottom - bounds.top);
        if (isPointClear(x, y) && isFarEnoughFromMobs(x, y, enemySpawnBuffer)) {
            return { x, y };
        }
    }
    return {
        x: xRange[0] + Math.random() * (xRange[1] - xRange[0]),
        y: bounds.top + Math.random() * (bounds.bottom - bounds.top),
    };
}

function uniqueAliveTeamMobs(team) {
    const seen = new Set();
    const out = [];
    for (let i = 0; i < mob.length; i++) {
        const who = mob[i];
        if (who.alive && who.team === team && !who.isMobBullet && !seen.has(who)) {
            seen.add(who);
            out.push(who);
        }
    }
    return out;
}

function decidePlayerSide() {
    const bounds = getArenaSampleBounds();
    const mid = (bounds.left + bounds.right) / 2;
    const teamA = uniqueAliveTeamMobs('A');
    if (teamA.length === 0) return "left";
    const avgX = teamA.reduce((sum, m) => sum + m.position.x, 0) / teamA.length;
    return avgX <= mid ? "left" : "right";
}

function spawnEnemyWaveForLevel(lvl) {
    const names = enemyGen.generate(lvl);
    const bounds = getArenaSampleBounds();
    const enemySide = game.playerSide === "left" ? "right" : "left";
    const xRange = sideRange(bounds, enemySide);
    for (const name of names) {
        const pos = findSpawnPoint(bounds, xRange);
        game.place(name, pos.x, pos.y, "B");
    }
}

function clearStatusEffects(who) {
    for (let i = who.status.length - 1; i >= 0; i--) who.status[i].endEffect();
    who.status.length = 0;
    who.isSlowed = false;
    who.isStunned = false;
}

function repositionSurvivors() {
    const bounds = getArenaSampleBounds();
    const xRange = sideRange(bounds, game.playerSide);
    const survivors = uniqueAliveTeamMobs('A');
    for (const who of survivors) {
        const pos = findSpawnPoint(bounds, xRange);
        Body.setPosition(who, pos);
        Body.setVelocity(who, { x: 0, y: 0 });
        Body.setAngularVelocity(who, 0);
        clearStatusEffects(who);
        who.seePlayer.yes = false;
        who.seePlayer.recall = 0;
    }
}

function clearNonSurvivors() {
    for (let i = mob.length - 1; i >= 0; i--) {
        if (mob[i].team !== "A") {
            Composite.remove(engine.world, mob[i]);
            mob.splice(i, 1);
        }
    }
}

function countSurvivors() {
    return uniqueAliveTeamMobs('A').length;
}