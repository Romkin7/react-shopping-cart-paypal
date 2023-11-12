async function fetchProducts() {
    return fetch(`https://dummyjson.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error('Error ', error));
}

export default fetchProducts;