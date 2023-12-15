import {
    AmountWithBreakdown,
    Payments,
    PurchaseItem,
    ShippingInfo,
} from '@paypal/paypal-js/types/apis/orders';
import IPayee from './payee';

interface IPurchaseUnit {
    reference_id: string;
    amount: AmountWithBreakdown;
    payee: IPayee;
    description: string;
    items: PurchaseItem[];
    shipping: ShippingInfo;
    payments: Payments;
}

export default IPurchaseUnit;
