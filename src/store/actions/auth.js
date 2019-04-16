import { LOGIN, LOGOUT } from './actionTypes';

export const login = (token) => {
    return {
        type: LOGIN,
        token: token
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};