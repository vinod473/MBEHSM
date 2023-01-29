const axios = require('axios');
const formdata = require('form-data');
const form = new formdata();
const url = 'http://13.235.163.49:8085';

exports.getStats = async (req) => {
    try {
        const res = await axios.get(`${url}/candidate_total`);
        if (!res.data.errorCode)
            return res;
        throw new Error(res.data.errorMessage || 'unable to get candidate stats!');
    } catch(err) {
        throw err;
    }
};

exports.getRecords = async (req) => {
    try {
        const res = await axios.get(`${url}/candidate_info`);
        if (!res.data.errorCode)
            return res;
        throw new Error(res.data.errorMessage || 'unable to fetch student records!');
    } catch(err) {
        throw err;
    }
};

exports.newAdmission = async (req) => {
    form.append('file', req.file.buffer, req.file.originalname);
    const obj = JSON.parse(req.body.data);
    const options = {
        url: `${url}/add_admission`,
        method: 'POST',
        params: obj,
        data: form
    };
    try {
        const res = await axios(options);
        if (!res.data.errorCode)
            return res;
        throw new Error(res.data.errorMessage || 'New student admission failed!!');
    } catch(err) {
        throw err;
    }
};

exports.generateResult = async (req) => {
    const { resultYear } = req.body;
    const { candidateid } = req.headers;
    req.body.resultYear = Number(resultYear);
    req.headers.candidateId = Number(candidateid);
    try {
        const res = await axios.post(`${url}/generate_result`, req.body, { headers: req.headers });
        if (!res.data.errorCode)
            return res;
        throw new Error(res.data.errorMessage || 'unable to generate result');
    } catch(err) {
        throw err;
    }
};

exports.getCandidateInfo = async (req) => {
    const headers = {
        enrollmentNumber: req.headers.candidateid,
        dob: req.headers.dob
    };
    const options = {
        url: `${url}/studentLogin`,
        method: 'POST',
        headers: headers
    };
    try {
        const res = await axios(options);
        if (!res.data.errorCode)
            return res;
        throw new Error(res.data.errorMessage || 'unable to get candidate info');
    } catch(err) {
        throw err;
    }
};

