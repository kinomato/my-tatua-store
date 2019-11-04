import {
    TOPPINGS_LOADING,
    GET_TOPPING,
    GET_TOPPINGS,
    GET_TOPPINGS_FAIL
} from '../actions/types';

const initialState = {
    topps: [],
    toppCT: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TOPPINGS:
            return {
                ...state,
                topps: action.payload,
                loading: false
            }

        case GET_TOPPING:
            return {
                ...state,
                toppCT: action.payload,
                loading: false
            }

        // case ADD_PRODUCT:
        //     return {
        //         ...state,
        //         products: [action.payload, ...state.products]
        //     }
        // case DELETE_PRODUCT:
        //     return {
        //         ...state
        //     }
        case TOPPINGS_LOADING:
            return {
                ...state,
                loading: true
            }

        // case GET_PRODUCTS_FAIL:
        // case GET_PRODUCT_FAIL:
        //     return {
        //         ...state,
        //         loading: false
        //     }

        default:
            return state;

    }
}