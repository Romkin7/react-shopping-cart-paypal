/**
 * getOrder function
 * @param {string} orderId
 * @returns {Promise<unknown>}
 */
async function getOrder(orderId: string): Promise<unknown> {
    return fetch(`http://localhost:8080/paypal/get-order/${orderId}`, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => data.order);
}

export default getOrder;
