/* En este desafío, tendrás la tarea de agrupar una lista de productos según su categoría.

Para ello, debes implementar la lógica de la función groupProducts que recibirá dos parámetros: products y category.

El primer parámetro products es una lista de objetos que representan cada producto y contienen las propiedades: name, category y price. El segundo parámetro category específica a qué categoría se filtrarán los productos.

La función debe retornar un objeto con dos propiedades: products que contiene la cadena de texto con los nombres de los productos respetando el orden en el que llegan separados por comas, y totalPrice que contiene la suma total de los precios.*/


function groupProducts(products, category) {
    const newProduct = {
        products: "",
        totalPrice: 0,
    };
    
    const filtroProducts = products.filter(product => product.category === category);
    const filtroNames = filtroProducts.map(product => product.name);
    const namesProducts = filtroNames.join(", ");
    newProduct.products = namesProducts;

    const filtroPrice = filtroProducts.map(product => product.price)
    const sumaPrice = filtroPrice.reduce((acumulador, price) => acumulador + price);
    newProduct.totalPrice = sumaPrice;
   
    return newProduct;
}

const product = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
];
  
console.log(groupProducts(product, "Electronics"));

const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
];
  
console.log(groupProducts(products, "Clothing"));