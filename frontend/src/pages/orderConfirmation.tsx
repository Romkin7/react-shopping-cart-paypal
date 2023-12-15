import { FC, useEffect, useState } from 'react';
import getOrder from '../components/PaypalCheckout/getOrder';
import { useParams } from 'react-router-dom';
import IOrder from '../@types/payPalOrder/order';

const OrderConfirmationPage: FC = () => {
    const [order, setOrder] = useState<null | IOrder>(() => null);
    const { orderId } = useParams();
    useEffect(() => {
        getOrder(orderId as string).then((order: IOrder) => {
            setOrder(order);
        });
    }, [orderId, setOrder]);

    return (
        <section>
            <div className="container">
                <div className="row d-flex justify-content-start my-4">
                    {order ? (
                        <div className="col-md-12 py-5">
                            <h2>{order.id}</h2>
                        </div>
                    ) : (
                        <div className="col-md-12 py-5">
                            <h2>Loading your Order ...</h2>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OrderConfirmationPage;
