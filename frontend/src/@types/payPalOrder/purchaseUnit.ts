import {
    AmountWithBreakdown,
    Payee,
    Payments,
    PurchaseItem,
    ShippingInfo,
} from '@paypal/paypal-js/types/apis/orders';

interface IPurchaseUnit {
    reference_id: string;
    amount: AmountWithBreakdown;
    payee: Payee;
    description: string;
    items: PurchaseItem[];
    shipping: ShippingInfo;
    payments: Payments;
}

export default IPurchaseUnit;
