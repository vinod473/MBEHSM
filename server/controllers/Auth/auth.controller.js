const axios = require('axios');

const authHeaders = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    'channel-entity': 'sla',
    'channel-name': 'dashboard',
    'channel-host': 'browser'
};

const url = 'http://13.235.163.49:8085';

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
}

exports.studentLogin =async  (req) => {
    try {
        const reqHeaders = {
            'Content-Type': 'application/json',
            'enrollmentNumber': req.headers.enrollmentnumber,
            'dob': req.headers.dob
        }
        const options = {
            method: 'POST',
            headers: reqHeaders,
            data: {},
            url: `${url}/studentLogin`
        };
        const result = await axios(options);
        if (!result.data.errorCode)
        return result;
        throw new Error('Failed to get student details');
    } catch (error) {
        const responseObject = {
            data,
            message: error.message || 'Something went wrong'
        };
        return response.status('500').json(responseObject);
    }
}

exports.fetchStudentResult =async  (req) => {
    try {
        const reqHeaders = {
            'Content-Type': 'application/json',
            'candidateId': req.headers.candidateid,
            'resultYear': req.headers.resultyear
        }
        const options = {
            method: 'GET',
            headers: reqHeaders,
            data: {},
            url: `${url}/fetch_result`
        };
        const result = await axios(options);
        if (!result.data.errorCode)
           return result;
        throw new Error('Failed to get student result');
    } catch (error) {
        const responseObject = {
            data,
            message: error.message || 'Something went wrong'
        };
        return response.status('500').json(responseObject);
    }
}
