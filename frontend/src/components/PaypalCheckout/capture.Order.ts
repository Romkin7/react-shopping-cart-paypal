async function captureOrder(orderId: string) {
    const response = await fetch(
        `http://localhost:8080/paypal/capture-order/${orderId}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    const { order } = await response.json();
    console.log('Order is: ', order);
    return order;
}

export default captureOrder;
