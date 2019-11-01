import { 
    ADD_ITEM_CART,
    DELETE_ITEM_CART,
    GET_ITEM_CART,
    GET_ITEM_CART_ERROR
} from '../actions/types';

const initialState = {
    localcart: localStorage.getItem('cart'),
    cart: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_CART:
            localStorage.setItem('cart',[...state.cart, action.payload])
            return {
                ...state,
                cart: [action.payload,...state.cart ]
            }
        case DELETE_ITEM_CART:
            localStorage.setItem('cart',state.cart.filter(item => item.id !== action.payload))
            return {
                ...state,
                cart:state.cart.filter(item => item._id !== action.payload)
            }
        case GET_ITEM_CART:
            return {
                ...state
            }
        case GET_ITEM_CART_ERROR:
        default:
            return state;
    }
}