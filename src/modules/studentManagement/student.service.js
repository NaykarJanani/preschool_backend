const db = require("../../../db");

exports.getStudents = async () => {
    const result = await db.query("SELECT * FROM students");
    return result.rows;
};