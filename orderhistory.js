document.addEventListener("DOMContentLoaded", function() {
    const apiEndpoint = "https://example.com/order-history";
    const apiKey = "your_api_key_here";

    fetch(apiEndpoint, {
        headers: {
            'Authorization': 'Bearer ' + apiKey,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to retrieve order history');
        }
        return response.json();
    })
    .then(orderHistory => {
        const orderHistoryElement = document.getElementById("orderHistory");
        orderHistory.forEach(order => {
            const orderDiv = document.createElement("div");
            orderDiv.classList.add("order");
            orderDiv.innerHTML = `
                <h3>Order ID: ${order.orderId}</h3>
                <p>Product: ${order.product}</p>
                <p>Price: ${order.price}</p>
                <p>Quantity: ${order.quantity}</p>
            `;
            orderHistoryElement.appendChild(orderDiv);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
