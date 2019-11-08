import axios from 'axios';
import { returnErrors } from './errorAction';

import {
    GET_USERS,
    // ADD_USER,
    // DELETE_USER,
    // GET_ERRORS,
    // GET_ORDERS_FAIL,
    // USERS_LOADING,
    GET_USER,
    GET_USERS_FAIL,
    GET_USERS_COUNT,
    USERS_LOADING

} from '../actions/types';

// Lấy orders
export const getUsersCount = () => (dispatch) => {
    axios.get('/api/move/user/get/count')
        .then(res => {
            dispatch({
                type: GET_USERS_COUNT,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            // dispatch({
            //     type: GET_ORDERS_FAIL
            // });
        })
}
export const getUsers = () => (dispatch) => {
    dispatch(setUserLoading())
    axios.get('/api/move/user').then(res => {
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'GET_USERS_FAIL'))
            dispatch({
                type: GET_USERS_FAIL
            })
        })
}

export const setUserLoading = () => {
    return {
        type: USERS_LOADING
    }
}
