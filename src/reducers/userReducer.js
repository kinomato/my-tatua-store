import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    // GET_ERRORS,
    // GET_ORDERS_FAIL,
    USERS_LOADING,
    GET_USER,
    GET_USERS_COUNT
} from '../actions/types';

const initialState = {
    users: [],
    userCT: null,
    loading: false,
    count: 0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                userCT: action.payload,
                loading: false
            }
        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case DELETE_USER:
            return {
                ...state
            }
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}