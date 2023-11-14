async function fetchProducts(queryString?: string) {
    return fetch(
        queryString
        ? `https://dummyjson.com/products/search${queryString}`
        : 'https://dummyjson.com/products',
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => console.error('Error ', error));
}

export default fetchProducts;
