const studentService = require("./student.service");

exports.getStudents = async (req, res) => {
  try {
    const data = await studentService.getStudents();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching students" });
  }
};