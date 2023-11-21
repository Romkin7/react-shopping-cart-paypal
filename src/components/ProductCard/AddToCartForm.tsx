import { FC, PropsWithChildren, FormEvent } from 'react';
import IProduct from '../../@types/product';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { useDispatch } from 'react-redux';
import Cart from '../../models/cart';
import { setCart } from '../../store/actions/cartActions';

interface IAddToCartProps {
    product: IProduct;
}

type AddToCartProps = PropsWithChildren<IAddToCartProps>;

const AddToCartForm: FC<AddToCartProps> = ({ product, children }) => {
    const cart = useSelector((state: AppState) => state.cart);
    const dispatch = useDispatch();
    const addToCart = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newCart = new Cart(cart);
        const updatedCart = newCart.addItem(product as IProduct);
        dispatch(setCart(updatedCart));
    };

    return (
        <form action="post" onSubmit={addToCart}>
            {children}
        </form>
    );
};

export default AddToCartForm;
