import {
    AmountWithCurrencyCodeOptional,
    PurchaseItem,
} from '@paypal/paypal-js/types/apis/orders';
import ICartItem from '../../@types/cartItem';
import CartItem from '../cartItem';

export class PayPalCartItem implements PurchaseItem {
    name: string;
    quantity: string;
    unit_amount: AmountWithCurrencyCodeOptional;
    tax?: AmountWithCurrencyCodeOptional | undefined;
    description?: string | undefined;
    sku?: string | undefined;
    category?: 'DIGITAL_GOODS' | 'PHYSICAL_GOODS' | 'DONATION' | undefined;
    /** Constructor method */
    constructor(item: ICartItem) {
        const cartItem = new CartItem(item, item.quantity);
        this.name = cartItem.title;
        this.quantity = String(cartItem.quantity);
        this.unit_amount = {
            value: String(cartItem.price),
            currency_code: 'USD',
        };
        this.tax = {
            value: String(cartItem.getValueAddedTax()),
            currency_code: 'USD',
        };
        this.description = cartItem.description;
        this.category = 'PHYSICAL_GOODS';
    }
}
