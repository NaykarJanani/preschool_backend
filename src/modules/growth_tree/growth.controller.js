const growthService = require('./growth.service');

exports.getGrowth = (req, res) => {
    const data = growthService.getGrowth();
    res.json(data);
};