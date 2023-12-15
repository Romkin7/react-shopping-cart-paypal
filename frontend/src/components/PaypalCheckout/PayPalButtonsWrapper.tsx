import { FC } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import createOrder from './createOrder';
import { AppState } from '../../store/store';
import { useSelector } from 'react-redux';
import captureOrder from './capture.Order';
import { useNavigate } from 'react-router-dom';

interface OnApproveData {
    orderID: string;
}

const PayPalButtonsWrapper: FC = () => {
    const cart = useSelector((state: AppState) => state.cart);
    const navigate = useNavigate();
    const [{ isPending }] = usePayPalScriptReducer();
    const capturePayPalOrder = async (orderID: string) => {
        const order = await captureOrder(orderID);
        navigate(`/order-confirmation/${order.id}`);
    };

    return (
        <>
            {isPending ? (
                <h2>Loading...</h2>
            ) : (
                <PayPalButtons
                    style={{ layout: 'vertical' }}
                    createOrder={() => createOrder(cart)}
                    onApprove={(data: OnApproveData) =>
                        capturePayPalOrder(data.orderID)
                    }
                />
            )}
        </>
    );
};

export default PayPalButtonsWrapper;
