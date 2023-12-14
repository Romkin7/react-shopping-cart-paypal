import IOrder from '../../@types/payPalOrder/order';

/**
 * getOrder function
 * @param {string} orderId
 * @returns {Promise<IOrder>}
 */
async function getOrder(orderId: string): Promise<IOrder> {
    return fetch(`http://localhost:8080/paypal/get-order/${orderId}`, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => data.order);
}

export default getOrder;
