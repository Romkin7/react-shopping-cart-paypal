async function generateAccessToken() {
    try {
        const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_URI } =
            process.env;
        if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
            throw new Error('MISSING_API_CREDENTIALS');
        }
        const auth = Buffer.from(
            `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`,
        ).toString('base64');
        const response = await fetch(`${PAYPAL_URI}/v1/oauth2/token`, {
            method: 'POST',
            body: 'grant_type=client_credentials',
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Failed to generate Access Token:', error);
    }
}

export default generateAccessToken;
