import IPaymentSource from './paymentSource';
import IPurchaseUnit from './purchaseUnit';

interface IOrder {
    id: string;
    intent: 'CAPTURE';
    status: 'COMPLETED';
    payment_source: IPaymentSource;
    purchase_units: IPurchaseUnit[];
    payer: {
        name: {
            given_name: 'John';
            surname: 'Doe';
        };
        email_address: 'sb-prwg128555380@personal.example.com';
        payer_id: 'FT756H2GK86RQ';
        address: {
            country_code: 'FI';
        };
    };
    create_time: '2023-12-14T16:25:25Z';
    update_time: '2023-12-14T16:27:33Z';
    links: [
        {
            href: 'https://api.sandbox.paypal.com/v2/checkout/orders/9A893765GB087934W';
            rel: 'self';
            method: 'GET';
        },
    ];
}

export default IOrder;
