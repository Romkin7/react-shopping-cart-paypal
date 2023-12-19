import IErrorMessages from '../@types/errorMessages';

const ErrorMessages: IErrorMessages = {
    serverError: 'Something went wrong on the server, try again later!',
    adminsAllowedError: 'Only admins are allowed to access!',
    invalidUserId: 'Invalid or missing user ID!',
    invalidTokenError: 'Invalid or missing token!',
    wrongUsernameOrPassword: 'Wrong username or password!',
    duplicateRecordError:
        'Duplicate record found in Database, please update your informtion!',
    jwtExpiredError: 'Valitettavasti istuntonne on vanhentunut.',
    jwtMissingError: 'Valitettavasti ette ole kirjautunut sisään.',
    pinCodeExpiredError:
        'Pinkoodi on valitettavasti vanhentunut, tilatkaa uusi pinkoodi.',
};

export default ErrorMessages;
