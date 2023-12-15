import CountryCodes from '../countryCodes';

interface IPaymentSource {
    paypal: {
        email_address: string;
        account_id: string;
        account_status: 'VERIFIED';
        name: {
            given_name: string;
            surname: string;
        };
        address: {
            country_code: CountryCodes;
        };
    };
}

export default IPaymentSource;
