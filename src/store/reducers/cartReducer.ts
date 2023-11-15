import ICart from '../../@types/cart';
import CartActionTypes, {
    RESET_CART,
    SET_CART,
} from '../actions/actionTypes/cartActionTypes';

const DEFAULT_STATE: ICart = {
    items: [
        {
            title: 'Fruits',
            price: 20,
            quantity: 2,
            thumbnail: 'image',
            id: 1,
            category: 'groceries',
            brand: 'Bake Parlor Big',
            description: 'lorem',
        },
        {
            title: 'Vegetables',
            price: 40,
            quantity: 3,
            thumbnail: 'image',
            id: 2,
            category: 'groceries',
            brand: 'Bake Parlor Big',
            description: 'lorem',
        },
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
