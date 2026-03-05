const express = require('express');
const router = express.Router();
const growthController = require('./growth.controller');

router.get('/', growthController.getGrowth);

module.exports = router;