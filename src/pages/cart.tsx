import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import ICartItem from '../@types/cartItem';
import Button from '../components/Button/Button';

const CartPage: FC = () => {
    const cart = useSelector((state: AppState) => state.cart);

    return (
        <section>
            <h1>Cart</h1>
            <div>
                <ul>
                    {cart.items.map((item: ICartItem) => {
                        return (
                            <li
                                key={item.name}
                            >{`${item.name} $${item.price} ${item.quantity}pieces`}</li>
                        );
                    })}
                </ul>
                <Button variant="warning" size="s" type="button">
                    Buy
                </Button>
            </div>
        </section>
    );
};

export default CartPage;
