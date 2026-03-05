const curriculumService = require('./curriculum.service');

exports.getCurriculum = (req, res) => {
    const data = curriculumService.getCurriculum();
    res.json(data);
};