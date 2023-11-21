import { IBaseProduct } from './product';

interface ICartItem extends IBaseProduct {
    quantity: number;
}

export default ICartItem;
