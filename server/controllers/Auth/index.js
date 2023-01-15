const express = require('express');

const router = express.Router();
const authController = require('./auth.controller');
const responseHandler = require('../../utils/responseHandler');

router.post('/token', async (req, res) => {
    try {
        const token = await authController.getToken(req);
        return responseHandler.successResponse(
            res, { statusCode: 200, data: token, message: 'Success' }
        );
    } catch (error) {
        const statusCode = error.status || 500;
        return responseHandler.errorResponse(res, { statusCode, data: {}, message: error.message });
    }
});

module.exports = router;
