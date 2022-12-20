exports.errorResponse = (response, { statusCode = 500, data = {}, message = '' }) => {
    const responseObject = { data, message: message || 'Something went wrong' };
    return response.status(statusCode).json(responseObject);
};

exports.successResponse = (response, { statusCode = 200, data = {}, message = '' }) => {
    const responseObject = { data, message };
    return response.status(statusCode).json(responseObject);
};

