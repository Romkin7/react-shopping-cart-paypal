import CountryCodes from '../countryCodes';

interface IPayer {
    name: {
        given_name: string;
        surname: string;
    };
    email_address: string;
    payer_id: string;
    address: {
        country_code: CountryCodes;
    };
    phone: {
        phone_number: {
            national_number: string;
        };
    };
}

export default IPayer;
