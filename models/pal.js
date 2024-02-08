const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    level: Number,
    name: String,
    type: String,
    cooldown: Number,
    power: Number,
    description: String
});

const StatSchema = new mongoose.Schema({
    hp: Number,
    attack: {
        melee: Number,
        ranged: Number
    },
    defense: Number,
    speed: {
        ride: Number,
        run: Number,
        walk: Number
    },
    stamina: Number,
    support: Number,
    food: Number
});

const SuitabilitySchema = new mongoose.Schema({
    type: String,
    image: String,
    level: Number
});

const AuraSchema = new mongoose.Schema({
    name: String,
    description: String,
    tech: String
});

const PalSchema = new mongoose.Schema({
    id: Number,
    key: String,
    image: String,
    name: String,
    wiki: String,
    types: [String],
    imageWiki: String,
    suitability: [SuitabilitySchema],
    drops: [String],
    aura: AuraSchema,
    description: String,
    skills: [SkillSchema],
    stats: StatSchema,
    asset: String,
    genus: String,
    rarity: Number,
    price: Number,
    size: String,
    maps: {
        day: String,
        night: String
    }
});

const Pal = mongoose.model('Pal', PalSchema);

module.exports = Pal;
