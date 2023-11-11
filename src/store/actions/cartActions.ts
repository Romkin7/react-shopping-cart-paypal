import ICart from '../../@types/cart';
import AppActions from './actionTypes/actions';
import { RESET_CART, SET_CART } from './actionTypes/cartActionTypes';

export function setCart(cart: ICart): AppActions {
    return {
        type: SET_CART,
        cart,
    };
}

export function resetCart(): AppActions {
    return {
        type: RESET_CART,
    };
}
