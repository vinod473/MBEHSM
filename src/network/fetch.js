const errorObject = async (res) => {
    const body = await res.json();
    const error = body ? new Error(body.message || body.error || body) : '';
    error.statusCode = res.status;
    error.statusText = res.statusText || '';
    error.code = res.status;
    error.message = `${body.message} (${res.statusText})`;
    throw error;
};

export const validateResponse = async (resp) => {
    if (!resp.ok) return errorObject(resp);
    const respData = await resp.json();
    return {
        headers: resp.headers,
        data: respData.data
    };
};

export const validateTextResponse = async (resp) => {
    if (!resp.ok) return errorObject(resp);
    const respData = await resp.text();
    return {
        headers: resp.headers,
        data: respData.data
    };
};
