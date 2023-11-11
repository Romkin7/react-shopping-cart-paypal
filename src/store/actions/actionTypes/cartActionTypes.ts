import ICart from '../../../@types/cart';

export const SET_CART = 'SET_CART';
export const RESET_CART = 'RESET_CART';

export interface SetCart {
    type: typeof SET_CART;
    cart: ICart;
}

export interface ResetCart {
    type: typeof RESET_CART;
}

type CartActionTypes = SetCart | ResetCart;
export default CartActionTypes;
