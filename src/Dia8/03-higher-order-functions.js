// Las Higher-Order Functions son una característica fundamental de la programación funcional en JavaScript. Como lo vimos en clases anteriores estás funciones puras que pueden tomar otras funciones como argumentos y/o devolver funciones como resultados. Esto permite crear funciones más genéricas y reutilizables que pueden ser combinadas de diferentes maneras para crear funciones más complejas.

// Una de las características principales de las Higher-Order Functions es su capacidad para manipular otras funciones de manera genérica. Por ejemplo, una función “map” es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los resultados de aplicar la función a cada elemento del array original.

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubleNumbers);
console.log(numbers);

// Otra característica importante de las Higher-Order Functions es su capacidad para crear funciones más pequeñas y reutilizables. Por ejemplo, una función “filter” es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los elementos que cumplen con una determinada condición.

const numeros = [1, 2, 3, 4, 5];
const evenNumbers = numeros.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);
console.log(numeros);