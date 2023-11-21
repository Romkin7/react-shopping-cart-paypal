import ICart from '../@types/cart';
import ICartItem from '../@types/cartItem';
import IProduct from '../@types/product';
import CartItem from './cartItem';

class Cart implements ICart {
    items: Record<string, ICartItem>;

    constructor(cart: ICart) {
        this.items = cart.items || {};
    }

    itemsToArray() {
        const itemsArr: ICartItem[] = [];
        for (const item in this.items) {
            itemsArr.push(this.items[item]);
        }
        return itemsArr;
    }

    addItem(item: IProduct) {
        let existingItem = this.items[item.id];
        if (!existingItem) {
            existingItem = this.items[item?.id] = new CartItem(item, 1);
        } else {
            const newQuantity = existingItem.quantity + 1;
            existingItem = this.items[item?.id] = new CartItem(item, newQuantity);
        }
        return this;
    }

    removeItem(id: number) {
        delete this.items[id];
        return this;
    }

    getTotalPrice() {
        const itemsArray = this.itemsToArray();
        const reducer = (accumulator: number, currentValue: number): number =>
            accumulator + currentValue;
        const itemTotalPrices = itemsArray.map(
            (item: ICartItem) => item.quantity * item.price,
        );
        if (itemTotalPrices.length) {
            const reduced = itemTotalPrices.reduce(reducer);
            return reduced;
        } else {
            return 0;
        }
    }

    getTotalQuantity() {
        const itemsArray = this.itemsToArray();
        const reducer = (accumulator: number, currentValue: number): number =>
            accumulator + currentValue;
        const itemsTotalQuantities = itemsArray.map(
            (item: ICartItem) => item.quantity,
        );
        if (itemsTotalQuantities.length) {
            const reduced = itemsTotalQuantities.reduce(reducer);
            return reduced;
        } else {
            return 0;
        }
    }
}

export default Cart;
