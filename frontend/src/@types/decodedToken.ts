import ILoggedInUser from './loggedInUser';

interface DecodedToken {
    exp: number;
    iat: number;
    _id: string;
    loggedInUser: ILoggedInUser;
}

export default DecodedToken;
