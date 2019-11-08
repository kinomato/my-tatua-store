import axios from 'axios';
import { returnErrors } from './errorAction';

import {
    GET_PRODUCTS,
    GET_PRODUCT_FAIL,
    PRODUCTS_LOADING,
    GET_PRODUCT
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