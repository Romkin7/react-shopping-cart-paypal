import {
    CreateOrderRequestBody,
    INTENT,
    OrderApplicationContext,
    Payer,
    PurchaseUnit,
} from '@paypal/paypal-js/types/apis/orders';
import { PayPalPurchaseUnit } from './payPalPurchaseUnit';
import ICart from '../../@types/cart';

export class PayPalCart implements CreateOrderRequestBody {
    intent?: INTENT | undefined;
    purchase_units: PurchaseUnit[];
    payer?: Payer | undefined;
    application_context?: OrderApplicationContext | undefined;
    /** Constructor method */
    constructor(cart: ICart) {
        this.intent = 'CAPTURE';
        this.purchase_units = [new PayPalPurchaseUnit(cart)];
        this.application_context = { brand_name: 'PayPal cart' };
    }
}
