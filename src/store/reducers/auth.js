import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
    logged_in: true,
    token: 'someToken'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                logged_in: true,
                token: action.token
            };
        case LOGOUT:
            return {
                ...state,
                logged_in: false,
                token: ''
            }
        default:
            return state;
    }
};

export default reducer;