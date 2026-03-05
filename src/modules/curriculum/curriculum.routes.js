const express = require('express');
const router = express.Router();
const curriculumController = require('./curriculum.controller');

router.get('/', curriculumController.getCurriculum);

module.exports = router;