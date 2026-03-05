const express = require('express');
const router = express.Router();
const studentController = require('./student.controller');

router.get('/', studentController.getStudents);

module.exports = router;