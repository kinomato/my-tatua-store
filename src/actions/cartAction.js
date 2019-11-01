import { 
    ADD_ITEM_CART,
    DELETE_ITEM_CART,
    GET_ITEM_CART,
    GET_ITEM_CART_ERROR
} from '../actions/types';

// return errors
export const getCartItems = () => {
    return {
        type: GET_ITEM_CART,
    }
}

// clear errors
export const addCartItem = (product) => {
    return {
        type: ADD_ITEM_CART,
        payload: product
    }
}

export const deleteCartItem = (id) => {
    return {
        type: DELETE_ITEM_CART,
        payload: id
    }
}