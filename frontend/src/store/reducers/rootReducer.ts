import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import loggedInUserReducer from './loggedInUserReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    loggedInUser: loggedInUserReducer,
});

export default rootReducer;
