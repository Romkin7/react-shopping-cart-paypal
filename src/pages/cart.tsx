import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import ICartItem from '../@types/cartItem';

const CartPage: FC = () => {
    const cart = useSelector((state: AppState) => state.cart  )

  return (
    <section>
        <h1>Cart</h1>
        <div><ul>{cart.items.map((item:ICartItem) => {
            return (
                <li key={item.name}>{`${item.name} $${item.price} ${item.quantity}pieces`}</li>
            )
        } )}</ul></div>
    </section>
  )
}

export default CartPage;