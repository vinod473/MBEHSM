const axios = require('axios');
const url = 'http://13.235.163.49:8085';

const authHeaders = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    'channel-entity': 'sla',
    'channel-name': 'dashboard',
    'channel-host': 'browser'
};

exports.getToken = async (req) => {
    try {
        const { body } = req;
        const options = {
            url: `${url}/login`,
            method: 'POST',
            headers: {
                emailId: body.email,
                password: body.password
            }
        };
        const res = await axios(options);
        if (!res.data.errorCode)
            return res;
        throw new Error('Failed to get user token');
    } catch (error) {
        const responseObject = {
            data,
            message: error.message || 'Something went wrong'
        };
        return response.status('500').json(responseObject);
    }
};
