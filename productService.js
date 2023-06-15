async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    let dados = await fetch(apiUrl)
    let response = await dados.json()
    return response      
        
}

module.exports = getProduct;


