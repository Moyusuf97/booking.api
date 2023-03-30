const express = require('express');
const router = express.Router();
const controller = require('../controllers/cleanController')
  const clean = require("../models/clean");


router.get('/', controller.getAllClean);
router.get('/:cleanid', controller.getCleanByID);
router.post('/', controller.createClean);
router.delete('/:cleanid', controller.deleteClean);
router.patch('/:cleanid', controller.updateClean);
  





module.exports = router; 