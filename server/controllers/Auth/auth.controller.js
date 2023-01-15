const axios = require('axios');

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
        // const result = await axios.get('', body, authHeaders);
        const result = {
            name: 'vinod',
            email: 'vkm@gmial.com',
            token: 'abcdef'
        }
        if (result) { 
            return result;
        }
        throw new Error('Failed to get user token');
    } catch (error) {
        const responseObject = {
            data,
            message: error.message || 'Something went wrong'
        };
        return response.status('500').json(responseObject);
    }
};
