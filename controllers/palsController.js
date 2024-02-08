const Pal = require('../models/pal');

// Get all
const getAll = async (req, res) => {
    const palId = req.params.id;
    
    try {
        const pals = await Pal.find();
        if (!pals) {
            return res.status(404).json({ message: 'Pals non trouvé' });
        }
        res.json(pals);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Get by id
const getById = async (req, res) => {
    const palId = req.params.id;
    
    try {
        const pal = await Pal.findOne({ id: palId });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        res.json(pal);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// GET by name
const getByName = async (req, res) => {
    const palName = req.params.name;
    
    try {
        const pal = await Pal.findOne({ name: palName });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        res.json(pal);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// GET by type
const getByType = async (req, res) => {
    const palType = req.params.type;
    
    try {
        const pals = await Pal.find({ types: palType });
        res.json(pals);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// SAVE new pal
const saveNew = async (req, res) => {
    const palData = req.body;
    
    try {
        const newPal = new Pal(palData);
        await newPal.save();
        res.status(201).json(newPal);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// GET skills of a pal
const getSkillsById = async (req, res) => {
    const palId = req.params.id;
    
    try {
        const pal = await Pal.findOne({ id: palId });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        res.json(pal.skills);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// ADD a skill to a pal
const addSkillById = async (req, res) => {
    const palId = req.params.id;
    const newSkill = req.body;
    
    try {
        const pal = await Pal.findOne({ id: palId });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        
        pal.skills.push(newSkill);
        await pal.save();
        
        res.status(201).json(pal.skills);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// MODIFY skill of a pal
const modifySkillById = async (req, res) => {
    const palId = req.params.id;
    const skillId = req.params.skillId;
    const updatedSkill = req.body;
    
    try {
        const pal = await Pal.findOne({ id: palId });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        
        const skillIndex = pal.skills.findIndex(skill => skill._id == skillId);
        if (skillIndex === -1) {
            return res.status(404).json({ message: 'Compétence non trouvée' });
        }
        
        pal.skills[skillIndex] = updatedSkill;
        await pal.save();
        
        res.json(pal.skills);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// GET types of a pal
const getTypesById = async (req, res) => {
    const palId = req.params.id;
    
    try {
        const pal = await Pal.findOne({ id: palId });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        res.json(pal.types);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// ADD type to a pal
const addTypeById = async (req, res) => {
    const palId = req.params.id;
    const newType = req.body.type;
    
    try {
        const pal = await Pal.findOne({ id: palId });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        
        pal.types.push(newType);
        await pal.save();
        
        res.status(201).json(pal.types);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// REMOVE type of a pal
const removeTypeById = async (req, res) => {
    const palId = req.params.id;
    const typeToRemove = req.params.type;
    
    try {
        const pal = await Pal.findOne({ id: palId });
        if (!pal) {
            return res.status(404).json({ message: 'Pal non trouvé' });
        }
        
        const typeIndex = pal.types.indexOf(typeToRemove);
        if (typeIndex === -1) {
            return res.status(404).json({ message: 'Type non trouvé' });
        }
        
        pal.types.splice(typeIndex, 1);
        await pal.save();
        
        res.json(pal.types);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// GET x Pal SORTED BY rarity
const sortedByRarity = async (req, res) => {
    try {
        const pals = await Pal.find().sort({ rarity: 1 });
        res.json(pals);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// GET x Pal SORTED BY price
const sortedByPrice = async (req, res) => {
    try {
        const pals = await Pal.find().sort({ price: 1 });
        res.json(pals);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = {
    getAll,
    getById,
    getByName,
    getByType,
    saveNew,
    getSkillsById,
    addSkillById,
    modifySkillById,
    getTypesById,
    addTypeById,
    removeTypeById,
    sortedByRarity,
    sortedByPrice,
}