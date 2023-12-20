# React & NodeJS Paypal Shop - project

How to generate JWT token secrets
In terminal type:

- `node`
- `require('crypto').randomBytes(64).toString('hex');`

Paste tokens under:

`JWT_TOKEN_SECRET=`
`JWT_REFRESH_TOKEN_SECRET=`

in `.env` file.
