import axios from 'axios';
import { returnErrors } from './errorAction';

import {
    GET_TOPPINGS,
    TOPPINGS_LOADING
} from '../actions/types';

export const getToppings = () => (dispatch) => {
    dispatch(setToppLoading());
    axios.get('/api/move/topp')
        .then(res => {
            dispatch({
                type: GET_TOPPINGS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'GET_TOPPINGS_FAIL'));

        })
}
// export const getProduct = (id) => (dispatch) => {
//     dispatch(setOrderLoading());
//     axios.get(`/api/move/product/${id}`)
//         .then(res => {
//             dispatch({
//                 type: GET_PRODUCT,
//                 payload: res.data
//             });
//         })
//         .catch(err => {
//             dispatch(returnErrors(err.response.data, err.response.status, 'GET_PRODUCT_FAIL'))
//             dispatch({
//                 type: GET_PRODUCT_FAIL
//             })
//         })
// }

export const setToppLoading = () => {
    return {
        type: TOPPINGS_LOADING
    }
}