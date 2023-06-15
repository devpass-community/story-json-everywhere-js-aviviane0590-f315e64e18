async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    fetch(apiUrl)
        .then(response => response.json())        
        .catch(err => console.error("Tivemos um erro na chamada API", err));
}

module.exports = getProduct;


