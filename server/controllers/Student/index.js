const express = require('express');

const router = express.Router();
const studentController = require('./student.controller');
const responseHandler = require('../../utils/responsehandler');

router.get('/generateRecord', async (req, res) => {
    try {
        await studentController.generateStudentRecord(req, res);
        const file = '../public/studentRecord.pdf';
        return res.download(file);
    } catch (error) {
        const statusCode = error.status || 500;
        return responseHandler.errorResponse(res, { statusCode, message: error.message });
    }
});

module.exports = router;
