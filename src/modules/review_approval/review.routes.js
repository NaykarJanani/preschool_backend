const express = require('express');
const router = express.Router();
const reviewController = require('./review.controller');

router.get('/', reviewController.getReviews);

module.exports = router;