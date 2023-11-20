import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import ICartItem from '../@types/cartItem';
import Button from '../components/Button/Button';
import Cart from '../models/cart';

const CartPage: FC = () => {
    const cartFromState = useSelector((state: AppState) => state.cart);
    const cart = new Cart(cartFromState);
    return (
        <section>
            <h1>Cart</h1>
            <div>
                <ul>
                    {cart.itemsToArray().map((item: ICartItem) => {
                        return (
                            <li
                                key={item.id}
                            >{`${item.title} $${item.price} ${item.quantity} pieces`}</li>
                        );
                    })}
                    <li>{`total price: $${cart.getTotalPrice()}`}</li>
                </ul>
                <Button variant="warning" size="s" type="button">
                    Buy
                </Button>
            </div>
        </section>
    );
};

export default CartPage;
