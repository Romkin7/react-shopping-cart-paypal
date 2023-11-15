import ICartItem from './cartItem';

interface ICart {
    items: Record<string, ICartItem>;
}

export default ICart;
