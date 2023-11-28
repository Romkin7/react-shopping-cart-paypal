import {
    AmountWithCurrencyCodeOptional,
    PurchaseItem,
} from '@paypal/paypal-js/types/apis/orders';
import ICartItem from '../../@types/cartItem';

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
        this.name = item.title;
        this.quantity = String(item.quantity);
        this.unit_amount = {
            value: String(item.price),
            currency_code: 'EUR',
        };
        this.tax = { value: String(0), currency_code: 'EUR' };
        this.description = item.description;
        this.category = 'PHYSICAL_GOODS';
    }
}
