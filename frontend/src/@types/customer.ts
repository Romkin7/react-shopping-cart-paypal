import IAddress from './address';

interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    address: IAddress;
}

export default ICustomer;
