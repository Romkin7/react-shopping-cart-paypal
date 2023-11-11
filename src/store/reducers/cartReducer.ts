import ICart from '../../@types/cart';
import CartActionTypes, {
    RESET_CART,
    SET_CART,
} from '../actions/actionTypes/cartActionTypes';

const DEFAULT_STATE: ICart = {
    items: [
        { name: 'Fruits', price: 20, quantity: 2, avatar: 'image', id: 1 },
        { name: 'Vegetables', price: 40, quantity: 3, avatar: 'image', id: 2 },
    ],
};
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
