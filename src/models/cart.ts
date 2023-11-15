import ICart from '../@types/cart';
import ICartItem from '../@types/cartItem';
import CartItem from './cartItem';

class Cart implements ICart {
    items: ICartItem[];

    constructor(cart: ICart) {
        this.items = cart.items || {};
    }

    itemsToArray() {
        const itemsArr: ICartItem[] = [];
        for (const item in this.items) {
            itemsArr.push(item as unknown as ICartItem);
        }
        return itemsArr;
    }

    addItem(item: ICartItem, totalQuantity: number) {
        let existingItem = this.items[item.id];
        if (!existingItem) {
            existingItem = this.items[item?.id] = new CartItem(
                item,
                totalQuantity,
            );
        } else {
            existingItem.quantity = totalQuantity;
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
        const itemsTotalPrices = itemsArray.map(
            (item: ICartItem) => item.quantity * item.price,
        );
        if (itemsTotalPrices.length) {
            const reduced = itemsTotalPrices.reduce(reducer);
            return reduced;
        } else {
            return 0;
        }
    }
}

export default Cart;
