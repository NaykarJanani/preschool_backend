const express = require('express');
const cors = require('cors');

const app = express();

// Import routes
const dashboardRoutes = require('./modules/dashboard/dashboard.routes');
const curriculumRoutes = require('./modules/curriculum/curriculum.routes');
const studentRoutes = require('./modules/studentManagement/student.routes');
const growthRoutes = require('./modules/growth_tree/growth.routes');
const reviewRoutes = require('./modules/review_approval/review.routes');

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Preschool Backend API Running');
});

// Use routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/curriculum', curriculumRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/growth', growthRoutes);
app.use('/api/reviews', reviewRoutes);

module.exports = app;