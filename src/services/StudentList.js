import { validateResponse } from "../network/fetch";
import { getAuthHeader } from "./authentication";
const url = 'http://localhost:8080';

export const getStudentList = async (req) => {
    return fetch(`${url}/api/student/records`, {
        method: 'GET',
        headers: { ...getAuthHeader() },
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};

export const getCandidateTotalStats = async (req) => {
    return fetch(`${url}/api/student/stats`, {
        method: 'GET',
        headers: { ...getAuthHeader() },
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};
    
export const addNewAdmission = async (req) => {
    return fetch(`${url}/api/student/admission`, {
        method: 'POST',
        headers: { ...getAuthHeader() },
        body: JSON.stringify(req.body)
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};

export const generateStudentResult = async (candidateId, studentInfo) => {
    const reqHeaders = { ...getAuthHeader(), candidateId };
    return fetch(`${url}/api/student/generateResult`, {
        method: 'POST',
        headers: reqHeaders,
        body: JSON.stringify(studentInfo)
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};

export const getCandidateInfo = async (id) => {
    const reqHeaders = { ...getAuthHeader(), candidateId: id };
    return fetch(`${url}/api/student/candidateInfo`, {
        method: 'GET',
        headers: reqHeaders
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};
