const reviewService = require('./review.service');

exports.getReviews = (req, res) => {
    const data = reviewService.getReviews();
    res.json(data);
};