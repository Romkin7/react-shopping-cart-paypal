import ICartItem from '../@types/cartItem';
import IProduct, { Brands, Categories } from '../@types/product';

class CartItem implements ICartItem {
    id: number;
    title: string;
    brand: Brands;
    category: Categories;
    description: string;
    price: number;
    thumbnail: string;
    quantity: number;

    constructor(cartItem: IProduct, totalQuantity: number) {
        this.id = cartItem.id || 0;
        this.title = cartItem.title || '';
        this.brand = cartItem.brand || null;
        this.category = cartItem.category || null;
        this.description = cartItem.description || '';
        this.price = cartItem.price || 0;
        this.thumbnail = cartItem.thumbnail || '';
        this.quantity = totalQuantity || 0;
    }

    getTotalItemsPrice(): number {
        return this.price * this.quantity;
    }
}

export default CartItem;
