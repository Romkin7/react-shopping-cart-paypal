import { Router, Request, Response } from 'express';
import generateAccessToken from '../utils/payPal/generateAccessToken';

const router = Router();

router.post('/paypal/create-order', async (req: Request, res: Response) => {
    try {
        const paypalCart = req.body;
        const accessToken = await generateAccessToken();
        console.log(accessToken);
        const resp = await fetch(
            `${process.env.PAYPAL_URI}/v2/checkout/orders`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                method: 'POST',
                body: JSON.stringify(paypalCart),
            },
        );
        const response = await resp.json();
        console.log(response);
        return res.status(201).json({ orderId: response.id });
    } catch (error) {
        console.log(error.message, error);
        return res.status(500).json({ message: JSON.stringify(error) });
    }
});

router.post(
    '/paypal/capture-order/:orderId',
    async (req: Request, res: Response) => {
        try {
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
);

export default router;
