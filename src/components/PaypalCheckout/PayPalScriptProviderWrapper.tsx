import {
    PayPalScriptProvider,
    ReactPayPalScriptOptions,
} from '@paypal/react-paypal-js';
import { FC } from 'react';
import PayPalButtonsWrapper from './PayPalButtonsWrapper';

const initialOptions: ReactPayPalScriptOptions = {
    clientId:
        'AVmN48TZqWC6J3sXRRU6Rgzk467VH2kPZ7twqxjxx3r0paiTQe_vA27P82NZfkYwcdRVta6wGKk0MFZg',
    currency: 'USD',
    intent: 'capture',
};

const PayPalScriptProviderWrapper: FC = () => {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtonsWrapper />
        </PayPalScriptProvider>
    );
};

export default PayPalScriptProviderWrapper;
