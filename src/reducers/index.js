import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import toppingReducer from'./toppingReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    topping: toppingReducer,
    order: orderReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer
})