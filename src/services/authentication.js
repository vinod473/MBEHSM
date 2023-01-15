import { validateResponse } from '../network/fetch';

const url = 'http://localhost:8080';

export const setCookie = (data) => {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * 36000;
    now.setTime(expireTime);

    Object.keys(data).forEach((key) => {
        let value = data[key];
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        document.cookie = `${key}=${value};expires=${now.toGMTString()};path=/`;
    });
};

export const getCookie = (cookieName) => {
    const name = `${cookieName}=`;
    const allCookieArray = document.cookie.split(';');
    for (let i = 0; i < allCookieArray.length; i += 1) {
        const temp = allCookieArray[i].trim();
        if (temp.indexOf(name) === 0) {
            return temp.substring(name.length, temp.length);
        }
    }
    return '';
};

const createUserInfo = (userInfo) => ({
    email: userInfo.email || "",
    name: userInfo.name || ""
});

export const setLoginInfo = (loginInfo = {}) => {
    const userInfo = createUserInfo(loginInfo);
    setCookie({ userInfo });
};

export const getUserInfo = () => {
    const user = getCookie('userInfo') && JSON.parse(getCookie('userInfo'));
    const roles = getCookie('roles') && JSON.parse(getCookie('roles'));
    const permissions = getCookie('permissions') && JSON.parse(getCookie('permissions'));
    return { user, roles, permissions };
};

export const getUserDetails = (userDetails) => {
    const { email, id, name } = userDetails;
    return { email, id, name };
};

export const getAuthHeader = () => ({
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie('token')}`
});

export const getUserToken = (req) => fetch(`${url}/api/auth/token`, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify(req)
})
    .then(validateResponse)
    .then((resp) => resp.data)
    .catch((error) => { throw error; });

export const isLoggedIn = () => {
    const token = typeof window !== 'undefined' && getCookie('userInfo');
    return token != "";
};

export const logout = () => {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i += 1) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    setCookie({ token: '' });
    setCookie({ userInfo: '' });
};

