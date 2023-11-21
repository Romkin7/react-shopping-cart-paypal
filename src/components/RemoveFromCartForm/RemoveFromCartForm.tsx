import {FC, FormEvent} from 'react'
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Cart from '../../models/cart';
import { useDispatch } from 'react-redux';
import { setCart } from '../../store/actions/cartActions';

interface IRemoveFromCartFormProps {
    id: number;
}

const RemoveFromCartForm: FC<IRemoveFromCartFormProps> = ({id}) => {
    const cartFromState = useSelector((state: AppState) => state.cart);
    const cart = new Cart(cartFromState);
    const dispatch = useDispatch()

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedCart = cart.removeItem(id)
        dispatch(setCart(updatedCart));
    }  
  return (
      <form onSubmit={submitHandler}>
          <Button type="submit" size="s" variant="warning"><span>Remove</span></Button>
    </form>
  )
}

export default RemoveFromCartForm