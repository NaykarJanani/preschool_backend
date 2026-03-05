const studentService = require('./student.service');

exports.getStudents = (req, res) => {
    const data = studentService.getStudents();
    res.json(data);
};