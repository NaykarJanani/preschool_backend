const dashboardService = require('./dashboard.service');

exports.getDashboard = (req, res) => {
    const data = dashboardService.getDashboardData();
    res.json(data);
};