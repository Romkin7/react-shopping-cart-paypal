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
}

export default IPayer;
