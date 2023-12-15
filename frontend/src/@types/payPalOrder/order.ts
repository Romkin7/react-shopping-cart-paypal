import ILink from './link';
import IPayer from './payer';
import IPaymentSource from './paymentSource';
import IPurchaseUnit from './purchaseUnit';

interface IOrder {
    id: string;
    intent: 'CAPTURE';
    status: 'COMPLETED';
    payment_source: IPaymentSource;
    purchase_units: IPurchaseUnit[];
    payer: IPayer;
    create_time: Date;
    update_time: Date;
    links: ILink[];
}

export default IOrder;
