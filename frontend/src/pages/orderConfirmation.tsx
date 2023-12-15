import { FC, useEffect, useState } from 'react';
import getOrder from '../components/PaypalCheckout/getOrder';
import { useParams } from 'react-router-dom';
import IOrder from '../@types/payPalOrder/order';
import {PurchaseItem} from '@paypal/paypal-js/types/apis/orders';
import ILink from '../@types/payPalOrder/link';

const OrderConfirmationPage: FC = () => {
    const [order, setOrder] = useState<null | IOrder>(() => null);
    const { orderId } = useParams();
    useEffect(() => {
        getOrder(orderId as string).then((order: IOrder) => {
            setOrder(order);
        });
    }, [orderId, setOrder]);

    console.dir(order);

    return (
        <section>
            <div className="container">
                <div className="row d-flex justify-content-start my-4">
                    {order ? (
                        <div className="col-md-12 py-5">
                            <h2>Order Number: {order.id}</h2>
                            <p className='text-dark'>
                                {order.purchase_units[0].description}
                            </p>
                            <p>
                                Total Price: 
                                ${order.purchase_units[0].amount.value}
                            </p>
                            <p>
                                Total Taxes:
                                ${order.purchase_units[0].amount.breakdown?.tax_total?.value}
                            </p>
                            <h3>Links:</h3>
                            {order.links.map((link: ILink) => {
                                return (
                                    <a href={link.href} key={link.href} rel={link.rel}>{link.method} {" "} ORDER</a>
                                )
                            } )}
                            <h3>Payee:</h3>
                            <p>
                                <strong>Company Name:</strong>
                                {" "}
                                {order.purchase_units[0].payee.display_data.brand_name}
                            </p>
                            <p> 
                                <strong>Company Email:</strong>
                                {" "}
                                {order.purchase_units[0].payee.email_address}
                            </p>
                            <h3>Customer:</h3>
                            <p>
                                <strong>Name:</strong>
                                {" "}
                                {`${order.payer.name.given_name} ${order.payer.name.surname}` }
                            </p>
                            <p>
                                <strong>Email: </strong>
                                {" "}
                                {order.payer.email_address}
                            </p>
                            <p>
                                <strong>Phone Number: </strong>
                                {" "}
                                {order.payer.phone?.phone_number?.national_number}
                            </p>
                            <h3>Order Items: </h3>
                            {order.purchase_units[0].items.map(
                                (item: PurchaseItem) => {
                                    return (
                                        <div key={item.name}>
                                            <p>
                                                {`${item.name}, qty: ${item.quantity} ($${item.unit_amount.value})`}
                                            </p>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    ) : (
                        <div className="col-md-12 py-5">
                            <h2>Loading your Order data...</h2>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OrderConfirmationPage;
