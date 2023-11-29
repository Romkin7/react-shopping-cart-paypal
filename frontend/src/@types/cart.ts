import ICartItem from './cartItem';
import ICustomer from './customer';

interface ICart {
    items: Record<string, ICartItem>;
    customer: ICustomer;
    cartId: string;
}

export default ICart;
