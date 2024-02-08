const express = require('express');
const router = express.Router();
const palsController = require('../controllers/palsController.js');

router.get('/', palsController.getAll);
router.get('/id/:id', palsController.getById);
router.get('/name/:name', palsController.getByName);

router.get('/type/:type', palsController.getByType);
router.get('/skills/:id', palsController.getSkillsById);
router.post('/skill/:id', palsController.addSkillById);
router.post('/skills/:id/:skillId', palsController.modifySkillById);

router.get('/types/:id', palsController.getTypesById);
router.post('/types/:id', palsController.addTypeById);
router.delete('/types/:type/:id', palsController.removeTypeById);

router.get('/sortedByRarity', palsController.sortedByRarity);
router.get('/sortedByPrice', palsController.sortedByPrice);

router.post('/', palsController.saveNew);

module.exports = router;