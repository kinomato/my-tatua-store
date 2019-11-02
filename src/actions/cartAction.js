import currency from 'currency.js';
import { 
    ADD_ITEM_CART,
    DELETE_ITEM_CART,
    GET_ITEM_CART,
    GET_ITEM_CART_ERROR,
    INCR_ITEM_CART,
    CALCULATE_TONGTIEN
} from '../actions/types';

// return errors
export const getCartItems = () => {
    return {
        type: GET_ITEM_CART,
    }
}

export const incrCartItem = (cart) => {
    return {
        type: INCR_ITEM_CART,
        payload: cart
    }
}
// clear errors
export const addCartItem = (item) => {
    return {
        type: ADD_ITEM_CART,
        payload: item
    }
}

export const deleteCartItem = (id) => {
    return {
        type: DELETE_ITEM_CART,
        payload: id
    }
}
export const calculate = (cart) => {
    let money = 0;
    console.log(cart)
    cart.forEach(item => {
        const tempProdPrize = currency(item.product.prodPrize)
        const temp = tempProdPrize.multiply(item.sl);
        money +=temp;
    });
    return {
        type: CALCULATE_TONGTIEN,
        payload: money
    }
}