import Countries from './countries';
import CountryCodes from './countryCodes';

interface IAddress {
    street: string;
    zipCode: string;
    city: string;
    country: Countries;
    countryCode: CountryCodes;
}

export default IAddress;
