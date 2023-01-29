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
    
export const addNewAdmission = async (profilePic, studentDetails) => {
    const formData = new FormData();
    const data = JSON.stringify(studentDetails);
    formData.append('file', profilePic.file);
    formData.append('data', data);
    return fetch(`${url}/api/student/admission`, {
        method: 'POST',
        body: formData,
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};

export const generateStudentResult = async (candidateId, studentInfo) => {
    return fetch(`${url}/api/student/generateResult`, {
        method: 'POST',
        headers: { ...getAuthHeader(), candidateId: candidateId },
        body: JSON.stringify(studentInfo)
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};

export const getCandidateInfo = (id, dob) => {
    const reqHeaders = { ...getAuthHeader(), candidateId: id, dob: dob };
    return fetch(`${url}/api/student/candidateInfo`, {
        method: 'GET',
        headers: reqHeaders
    })
    .then(validateResponse)
    .then((resp) => resp.data);
};
