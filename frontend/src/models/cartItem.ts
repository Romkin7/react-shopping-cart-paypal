import ICartItem from '../@types/cartItem';
import IProduct, { Brands, Categories } from '../@types/product';
import decimalToInteger from '../utils/decimalToInteger';
import integerToDecimal from '../utils/integerToDecimal';

class CartItem implements ICartItem {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: Brands;
    category: Categories;
    thumbnail: string;
    quantity: number;
    stock: number;
    vatUnit: 2400;

    constructor(cartItem: IProduct | ICartItem, totalQuantity: number) {
        this.id = cartItem.id || 0;
        this.title = cartItem.title || '';
        this.description = cartItem.description || '';
        this.price = cartItem.price || 0;
        this.brand = cartItem.brand || '';
        this.category = cartItem.category || '';
        this.thumbnail = cartItem.thumbnail || '';
        this.quantity = totalQuantity || 0;
        this.stock = cartItem.stock || 0;
        this.vatUnit = 2400;
    }

    getItemsTotalPrice(): number {
        return this.price * this.quantity;
    }

    getValueAddedTax(): number {
        const { vatUnit, price } = this;
        const tax = price - price * (10000 / (10000 + vatUnit));
        const taxInteger = decimalToInteger(tax, 2);
        const roundedTax = integerToDecimal(taxInteger);
        return roundedTax;
    }
}

export default CartItem;
