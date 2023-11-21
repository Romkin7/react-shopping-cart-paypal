import ICartItem from '../@types/cartItem';
import IProduct, { Brands, Categories } from '../@types/product';

class CartItem implements ICartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: Brands;
    category: Categories;
    thumbnail: string;
    quantity: number;

    constructor(cartItem: IProduct, totalQuantity: number) {
        this.id = cartItem.id || 0;
        this.title = cartItem.title || '';
        this.description = cartItem.description || '';
        this.price = cartItem.price || 0;
        this.brand = cartItem.brand || '';
        this.category = cartItem.category || '';
        this.thumbnail = cartItem.thumbnail || '';
        this.quantity = totalQuantity || 0;
    }

    getTotalItemsPrice(): number {
        return this.price * this.quantity;
    }
}

export default CartItem;
