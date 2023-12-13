/*En este desafío tendrás que procesar una lista de compras.

Deberás implementar la lógica de la función processShoppingList de tal manera que esta módifique el array original de la siguiente manera

- Si el nombre del producto incluye la palabra "oferta", se debe aplicar un descuento del 20% al precio del producto.
- Multiplicar el precio del producto por su cantidad.
- Eliminar el atributo quantity una vez hecho lo anterior.
- Finalmente, debes retornar el total de la suma de todos los productos de la lista modificada.*/

function processShoppingList(list) {
    
    const ofertaProduct = list.find(objeto => objeto.name.includes("oferta"));
    
    if(ofertaProduct) {
        const descuento = ofertaProduct.price / 100 * 20;
        ofertaProduct.price -= descuento;
    }
    
    list.forEach(objeto => objeto.price *= objeto.quantity);
    list.forEach(objeto => delete objeto.quantity);
    const result = list.reduce((acumulador, objeto) => acumulador + objeto.price, 0);
    console.log("list", list);
    return result;
}


const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
]
  
console.log(processShoppingList(shoppingList));


const shoppingList2 = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
  ]
  
console.log(processShoppingList(shoppingList2));
console.log(shoppingList2)
