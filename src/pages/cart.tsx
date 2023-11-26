import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import ICartItem from '../@types/cartItem';
import Button from '../components/Button/Button';
import Cart from '../models/cart';
import RemoveFromCartForm from '../components/RemoveFromCartForm/RemoveFromCartForm';
import CartItem from '../models/cartItem';
import ModButtons from '../components/ModButtons/ModButtons';

const CartPage: FC = () => {
    const cartFromState = useSelector((state: AppState) => state.cart);
    const cart = new Cart(cartFromState);
    return (
        <section>
            <h1>Cart</h1>
            <div>
                <ul>
                    {cart.itemsToArray().map((item: ICartItem) => {
                        const cartItem = new CartItem(item, item.quantity);
                        return (
                            <li
                                className="d-flex align-items-center mb-4"
                                key={cartItem.id}
                            >
                                <p className="me-4">{`${
                                    cartItem.title
                                } $${cartItem.getItemsTotalPrice()} ${
                                    cartItem.quantity
                                }pieces`}</p>

                                <ModButtons item={cartItem} />
                            </li>
                        );
                    })}
                    <li>
                        <h4>{`total price: $${cart.getTotalPrice()}`}</h4>
                    </li>
                </ul>
                <Button
                    variant="success"
                    size="s"
                    type="button"
                    borderRadius="rounded"
                >
                    Buy
                </Button>
            </div>
        </section>
    );
};

export default CartPage;
