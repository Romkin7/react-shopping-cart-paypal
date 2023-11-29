import { FC } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import createOrder from './createOrder';
import { AppState } from '../../store/store';
import { useSelector } from 'react-redux';

const PayPalButtonsWrapper: FC = () => {
    const cart = useSelector((state: AppState) => state.cart);
    const [{ isPending }] = usePayPalScriptReducer();
    return (
        <>
            {isPending ? (
                <h2>Loading...</h2>
            ) : (
                <PayPalButtons
                    style={{ layout: 'vertical' }}
                    createOrder={() => createOrder(cart)}
                />
            )}
        </>
    );
};

export default PayPalButtonsWrapper;
