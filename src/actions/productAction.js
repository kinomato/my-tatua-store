import axios from 'axios';
import { returnErrors } from './errorAction';

import {
    GET_PRODUCTS,
    // ADD_PRODUCT,
    // DELETE_PRODUCT,
    // GET_ERRORS,
    // GET_PRODUCTS_FAIL,
    GET_PRODUCT_FAIL,
    PRODUCTS_LOADING,
    GET_PRODUCT,
    // GET_PRODUCTS_COUNT,
    // GET_PRODUCTS_COUNTC,
    // GET_PRODUCT_CHART_DATA
} from '../actions/types';

export const getProducts = () => (dispatch) => {
    dispatch(setOrderLoading());
    axios.get('/api/move/product')
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'GET_PRODUCTS_FAIL'));

        })
}
export const getProduct = (id) => (dispatch) => {
    dispatch(setOrderLoading());
    axios.get(`/api/move/product/${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'GET_PRODUCT_FAIL'))
            dispatch({
                type: GET_PRODUCT_FAIL
            })
        })
}

export const setOrderLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
}