import ICart from '../@types/cart';
import ICartItem from '../@types/cartItem';
import ICustomer from '../@types/customer';
import IProduct from '../@types/product';
import testCustomer from '../data/testCustomer';
import CartItem from './cartItem';

class Cart implements ICart {
    items: Record<string, ICartItem>;
    customer: ICustomer;
    cartId: string;

    constructor(cart: ICart) {
        this.items = cart.items || {};
        this.cartId = cart.cartId || '';
        this.customer = cart.customer || testCustomer;
    }

    itemsToArray() {
        const itemsArr: ICartItem[] = [];
        for (const item in this.items) {
            itemsArr.push(this.items[item]);
        }
        return itemsArr;
    }

    addItem(item: IProduct | ICartItem, itemsTotalQuantity?: number) {
        let existingItem = this.items[item.id];
        if (!existingItem) {
            existingItem = this.items[item?.id] = new CartItem(item, 1);
        } else {
            const totalQuantity =
                itemsTotalQuantity || existingItem.quantity + 1;
            existingItem = this.items[item?.id] = new CartItem(
                item,
                totalQuantity,
            );
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
