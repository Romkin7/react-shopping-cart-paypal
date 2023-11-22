import { FC, FormEvent } from 'react';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Cart from '../../models/cart';
import { useDispatch } from 'react-redux';
import { setCart } from '../../store/actions/cartActions';
import Icon from '../Icon/Icon';

interface IRemoveFromCartFormProps {
    id: number;
    title: string;
}

const RemoveFromCartForm: FC<IRemoveFromCartFormProps> = ({ id, title }) => {
    const cartFromState = useSelector((state: AppState) => state.cart);
    const cart = new Cart(cartFromState);
    const dispatch = useDispatch();

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedCart = cart.removeItem(id);
        dispatch(setCart(updatedCart));
    };
    return (
        <form onSubmit={submitHandler}>
            <Button type="submit" size="s" variant="danger">
                <Icon
                    size="md"
                    color="light"
                    ariaLabel={`Remove ${title} from cart`}
                >
                    <svg
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </Icon>
            </Button>
        </form>
    );
};

export default RemoveFromCartForm;
