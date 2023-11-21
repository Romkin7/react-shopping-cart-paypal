import ICart from '../../@types/cart';
import CartActionTypes, {
    RESET_CART,
    SET_CART,
} from '../actions/actionTypes/cartActionTypes';
import Cart from '../../models/cart';

const DEFAULT_STATE: ICart = new Cart({ items: {} });
const cartReducer = (state = DEFAULT_STATE, action: CartActionTypes) => {
    switch (action.type) {
        case SET_CART:
            return action.cart;
        case RESET_CART:
            return DEFAULT_STATE;
        default:
            return state;
    }
};

export default cartReducer;
