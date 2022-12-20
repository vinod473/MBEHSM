import { validateResponse } from '../network/fetch';

export const generateStudentRecordPdf = (req) => fetch(
    'http://localhost:8080/api/student/generateRecord',
    {
        method: 'GET',
        headers: { req }
    }
)
    .then(validateResponse)
    .then((resp) => resp.data);
