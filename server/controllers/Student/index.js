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

router.get('/records', async (req, res) => {
    try {
        const records = await studentController.getRecords(req, res);
        return responseHandler.successResponse(
            res, { statusCode: 200, data: records.data, message: 'success' }
        );
    } catch (error) {
        const statusCode = error.status || 500;
        return responseHandler.errorResponse(res, { statusCode, message: error.message });
    }
});

router.get('/stats', async (req, res) => {
    try {
        const stats = await studentController.getStats();
        return responseHandler.successResponse(
            res, { statusCode: 200, data: stats.data, message: 'success' }
        );
    } catch (error) {
        const statusCode = error.status || 500;
        return responseHandler.errorResponse(res, { statusCode, message: error.message });
    }
});

router.post('/admission', async (req, res) => {
    try {
        const adm = await studentController.newAdmission();
        return responseHandler.successResponse(
            res, { statusCode: 200, data: adm.data, message: 'success' }
        );
    } catch (error) {
        const statusCode = error.status || 500;
        return responseHandler.errorResponse(res, { statusCode, message: error.message });
    }
});

router.post('/generateResult', async (req, res) => {
    try {
        const result = await studentController.generateResult();
        return responseHandler.successResponse(
            res, { statusCode: 200, data: result.data, message: 'success' }
        );
    } catch (error) {
        const statusCode = error.status || 500;
        return responseHandler.errorResponse(res, { statusCode, message: error.message });
    }
});

router.get('/candidateInfo', async (req, res) => {
    try {
        const info = await studentController.getCandidateInfo(req);
        return responseHandler.successResponse(
            res, { statusCode: 200, data: info.data, message: 'success' }
        );
    } catch (error) {
        const statusCode = error.status || 500;
        return responseHandler.errorResponse(res, { statusCode, message: error.message });
    }
});

module.exports = router;
