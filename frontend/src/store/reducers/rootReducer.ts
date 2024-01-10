import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import loggedInUserReducer from './loggedInUserReducer';
import flashMessageReducer from './flashMessageReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    flashMessage: flashMessageReducer,
    loggedInUser: loggedInUserReducer,
    products: productReducer,
});

export default rootReducer;
