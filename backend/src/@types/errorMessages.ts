interface IErrorMessages {
    serverError: 'Something went wrong on the server, try again later!';
    adminsAllowedError: 'Only admins are allowed to access!';
    invalidUserId: 'Invalid or missing user ID!';
    invalidTokenError: 'Invalid or missing token!';
    wrongEmailOrPassword: 'Wrong email or password!';
    duplicateRecordError: 'Duplicate record found in Database; please update your informtion!';
    jwtExpiredError: 'Your Session has expired.';
    jwtMissingError: 'You are not logged in!';
    pinCodeExpiredError: 'Your pincode has expired!';
}

export default IErrorMessages;
