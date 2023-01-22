const axios = require('axios');

const url = 'http://13.235.163.49:8085';

exports.getStats = async (req) => {
    try {
        const res = await axios.get(`${url}/candidate_total`);
        if (!res.data.errorCode)
            return res;
        throw new Error('unable to get candidate stats');
    } catch(err) {
        return err;
    }
};

exports.getRecords = async (req) => {
    try {
        const res = await axios.get(`${url}/candidate_info`);
        if (!res.data.errorCode)
            return res;
        throw new Error('unable to fetch candidate list');
    } catch(err) {
        return err;
    }
};

exports.newAdmission = async (req) => {
    try {
        // const res = await axios.get('');
        const res = studentRecord;
        return res;
    } catch(err) {
        return err;
    }
};

exports.generateResult = async (req) => {
    try {
        const res = await axios.post(`${url}/candidate_info`, { headers: req.headers, body: req.body});
        if (!res.data.errorCode)
            return res;
        throw new Error('unable to generate result');
    } catch(err) {
        return err;
    }
};

exports.getCandidateInfo = async (req) => {
    const headers = {
        candidateId: req.headers.candidateid,
        document_type: 'PROFILE_PIC'
    };
    try {
        const res = await axios.get(`${url}/candidate_info`, { headers: headers});
        if (!res.data.errorCode)
            return res;
        throw new Error('unable to get candidate info');
    } catch(err) {
        return err;
    }
};

