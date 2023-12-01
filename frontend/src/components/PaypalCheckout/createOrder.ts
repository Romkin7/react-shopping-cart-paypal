import ICart from '../../@types/cart';
import { PayPalCart } from '../../models/payPalCart/payPalCart';

/**
 * createOrder function
 * @param {ICart} cart
 * @returns {Promise<string>}
 */
async function createOrder(cart: ICart): Promise<string> {
    const payPalCart = new PayPalCart(cart);
    console.dir(payPalCart);
    return fetch('http://localhost:8080/paypal/create-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify(payPalCart),
    })
        .then((response) => response.json())
        .then((data: { orderId: string }) => data.orderId);
}

export default createOrder;
