import ICustomer from '../@types/customer';

const testCustomer: ICustomer = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'devdesign@devdesign.fi',
    mobileNumber: '0504919485',
    address: {
        street: 'Helsinginkatu 26',
        zipCode: '00530',
        city: 'Helsinki',
        country: 'Finland',
        countryCode: 'FI',
    },
};

export default testCustomer;
