import { FC, MouseEvent } from 'react';
import ICartItem from '../../@types/cartItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { useDispatch } from 'react-redux';
import Cart from '../../models/cart';
import clsx from 'clsx';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import RemoveFromCartForm from '../RemoveFromCartForm/RemoveFromCartForm';
import { setCart } from '../../store/actions/cartActions';
import './ModButtons.scss';

type ModButtonAction = 'decrement' | 'increment';

interface ModButtonProps {
    item: ICartItem;
}

const ModButtons: FC<ModButtonProps> = ({ item }) => {
    const cartFromState = useSelector((state: AppState) => state.cart);
    const dispatch = useDispatch();
    const cart = new Cart(cartFromState);
    const { id, stock, title } = item;
    const handleChange = (
        event: MouseEvent<HTMLButtonElement>,
        action: ModButtonAction,
    ) => {
        event.preventDefault();
        if (action === 'decrement') {
            const updatedQuantity = item.quantity <= 1 ? 1 : item.quantity - 1;
            cart.addItem(item, updatedQuantity);
            dispatch(setCart(cart));
        } else {
            const updatedQuantity =
                item.quantity >= stock ? item.quantity : item.quantity + 1;
            cart.addItem(item, updatedQuantity);
            dispatch(setCart(cart));
        }
    };

    const modButtonStyles = clsx({
        ['modButtons']: true,
    });
    return (
        <nav className={modButtonStyles}>
            <Button
                type="button"
                size={'s'}
                variant="primary"
                borderRadius="none"
                onClick={(event: MouseEvent<HTMLButtonElement>) =>
                    handleChange(event, 'decrement')
                }
            >
                <Icon size="sm" ariaLabel="decrement quantity">
                    <svg
                        fill="currentColor"
                        className="bi bi-dash-lg"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                    </svg>
                </Icon>
            </Button>

            <RemoveFromCartForm id={id} title={title} />

            <Button
                type="button"
                size="s"
                variant="warning"
                borderRadius="rounded-right"
                onClick={(event: MouseEvent<HTMLButtonElement>) =>
                    handleChange(event, 'increment')
                }
            >
                <Icon size="sm" ariaLabel="increment quantity">
                    <svg
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </Icon>
            </Button>
        </nav>
    );
};

export default ModButtons;
