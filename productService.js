async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    fetch(apiUrl)
        .then(response => response.json())  
        .then((data) => {
            console.log(data);
            return data;
          })                         
        .catch(err => console.error("Tivemos um erro na chamada API", err));
        
}

module.exports = getProduct;



