// Los arrays en JavaScript son un tipo de objeto que permite almacenar una colección de valores. Estos valores pueden ser de cualquier tipo, como números, cadenas, objetos, incluso otros arrays. Los arrays son muy útiles para almacenar y manejar datos en una sola estructura.

//La sintaxis para crear un array en JavaScript es la siguiente:

let miArray = [valor1, valor2, valor3];

// Por ejemplo, el siguiente código crea un array llamado “colores” que contiene tres valores: “rojo”, “azul” y “verde”:

let colores = ["rojo", "azul", "verde"];

// Uno de los métodos más populares en los arrays de JavaScript es “push()”. Este método permite agregar un nuevo elemento al final del array. Por ejemplo:

colores.push("amarillo");
console.log(colores);

// Otro método popular es “pop()”, que permite eliminar el último elemento del array. Por ejemplo:

colores.pop();
console.log(colores);

// El método “map()” permite aplicar una función a cada elemento del array y devolver un nuevo array con los valores modificados. Por ejemplo:

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
    return numero * numero
});
console.log(numeros);
console.log(cuadrados);

// El método “reduce()” permite combinar todos los elementos del array en un solo valor. Por ejemplo:

const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0); // el 0 representa el valor inicial del acumulador
console.log(suma);