import {
    AmountWithBreakdown,
    Payee,
    PaymentInstruction,
    Payments,
    PurchaseItem,
    PurchaseUnit,
    ShippingInfo,
} from '@paypal/paypal-js/types/apis/orders';
import { PayPalCartItem } from './payPalCartItem';
import ICart from '../../@types/cart';
import Cart from '../cart';
import ICartItem from '../../@types/cartItem';

export class PayPalPurchaseUnit implements PurchaseUnit {
    amount: AmountWithBreakdown;
    reference_id?: string | undefined;
    description?: string | undefined;
    custom_id?: string | undefined;
    invoice_id?: string | undefined;
    soft_descriptor?: string | undefined;
    payee?: Payee | undefined;
    payment_instruction?: PaymentInstruction | undefined;
    shipping?: ShippingInfo | undefined;
    items?: PurchaseItem[] | undefined;
    payments?: Payments | undefined;
    /** constructor method */
    constructor(cart: ICart) {
        const cartInstanse = new Cart(cart);
        this.amount = {
            value: String(
                cartInstanse.getTotalPrice() + cartInstanse.getTotalTaxAmount(),
            ),
            currency_code: 'USD',
            breakdown: {
                item_total: {
                    value: String(cartInstanse.getTotalPrice()),
                    currency_code: 'USD',
                },
                tax_total: {
                    value: String(cartInstanse.getTotalTaxAmount()),
                    currency_code: 'USD',
                },
                shipping: {
                    value: String(0),
                    currency_code: 'USD',
                },
            },
        };
        this.payee = {
            email_address: 'devdesign@devdesign.fi',
        };
        (this.shipping = {
            name: {
                full_name: `${cart.customer?.firstName} ${cart.customer?.lastName}`,
            } as Partial<{ full_name: string }>,
            email_address: cart.customer?.email as string,
            phone_number: {
                national_number: cart.customer?.mobileNumber as string,
            },
            type: 'SHIPPING',
            address: {
                country_code:
                    (cart.customer?.address.countryCode as string) || 'FI',
                admin_area_2: cart.customer?.address.city,
                address_line_1: cart.customer?.address.street,
                postal_code: cart.customer?.address.zipCode,
            },
        }),
            (this.items = cartInstanse
                .itemsToArray()
                .map((item: ICartItem) => new PayPalCartItem(item)));

        this.description = `Order of ${cartInstanse.getTotalQuantity()} products with total price of $${cartInstanse.getTotalPrice()}`;
        this.reference_id = `DevDesign-CO-order-id: ${cart.cartId}`;
    }
}
