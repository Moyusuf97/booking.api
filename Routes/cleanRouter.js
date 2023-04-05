const express = require('express');
const router = express.Router();
const controller = require('../controllers/cleanController')
const clean = require("../models/clean");


router.get('/', controller.getAllClean);
router.get('/stadare', controller.getClean);
router.get('/:cleanid', controller.getCleanByID);
router.post('/', controller.createClean);
router.post('/user', controller.createUser);
router.delete('/:cleanid', controller.deleteClean);
router.delete('/', controller.deleteManyClean);
router.patch('/:cleanid', controller.updateClean);
  





module.exports = router; 