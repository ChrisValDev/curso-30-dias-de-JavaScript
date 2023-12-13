// Array.prototype.every()
// El método every es una función que se utiliza en los arrays en JavaScript para comprobar si todos los elementos del array cumplen con una determinada condición. Devuelve un valor booleano que indica si todos los elementos del array cumplen con la condición especificada.

// Por ejemplo, supongamos que tienes un array de números y deseas comprobar si todos los números son mayores que cero:

const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log(allPositive);

// En este ejemplo, el método every se utiliza para comprobar si todos los elementos en el array numbers son mayores que cero. La función que se pasa como argumento a every devuelve true si el elemento es mayor que cero y false en caso contrario. Si todos los elementos devuelven true, every devuelve true. De lo contrario, devuelve false.

// También puedes utilizar una arrow function para hacer lo mismo:

const numeros = [1, 2, 3, 4, 5];
const allPositivos = numeros.every((numero) => numero > 0);

console.log(allPositivos);

// Además de comprobar si todos los elementos cumplen con una determinada condición, también puedes utilizar el método every para realizar otras tareas en cada elemento del array. Por ejemplo, supongamos que tienes un array de objetos y deseas comprobar si todos los objetos tienen una propiedad específica:

const objects = [{name: "John"}, {name: "Jane"}, {name: "Jim"}];
const allHaveName = objects.every(function(object) {
    return object.hasOwnProperty("name" && "age" && "address");
});

console.log(allHaveName);

// El método every es una herramienta útil para comprobar si todos los elementos en un array cumplen con una determinada condición. Es una forma sencilla y eficiente de procesar los elementos en un array y realizar tareas específicas en ellos.

// Array.prototype.Find()
/* El método find se puede utilizar en arrays para encontrar un elemento que cumpla con una condición determinada. Este método devuelve el primer elemento que cumple con la condición o undefined si no se encuentra ninguno.

El método find toma un callback como argumento. Este callback es llamado para cada elemento del array hasta que se encuentre un elemento que cumpla con la condición.

Aquí hay un ejemplo de cómo utilizar el método find para encontrar el primer número mayor que 5 en un array:*/

const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numeritos.find(numerito => numerito > 5);

console.log(result);

// En este ejemplo, el callback number => number > 5 se utiliza para determinar si un número es mayor que 5. Si se encuentra un número que cumpla con esta condición, el método find devuelve ese número y detiene la búsqueda.

// También es posible utilizar el método find con objetos. Por ejemplo, aquí hay un ejemplo de cómo utilizar el método find para encontrar el primer objeto con una propiedad específica:

const persons = [
    {name: "John", age: 32},
    {name: "Jane", age: 28},
    {name: "Jim", age: 40}
];
const resultado = persons.find(person => person.age === 32);
console.log(resultado);
 /*En este ejemplo, el callback person => person.age === 32 se utiliza para determinar si una persona tiene una edad de 32 años. Si se encuentra un objeto que cumpla con esta condición, el método find devuelve ese objeto y detiene la búsqueda.

Array.prototype.findIndex()
El método findIndex es una función que se utiliza para buscar un elemento en un array y devolver el índice de su primera aparición. Este método acepta un callback como argumento y la ejecuta para cada elemento en el array hasta que se encuentra un elemento que cumpla con la condición especificada. En ese momento, findIndex devuelve el índice del elemento encontrado.

A diferencia del método find, en este caso, solo se devuelve el primer indice del elemento que cumpla la condición, por ejemplo:*/

const books = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = books.findIndex(book => book > 3);

console.log(index);

// En este ejemplo, la función de callback recibe cada elemento del array numbers y devuelve true si el elemento es mayor que 5. El método findIndex devuelve el índice del primer elemento que cumple con esta condición, que es 5.
// Si no se encuentra ningún elemento que cumpla con la condición, findIndex devuelve -1. Por ejemplo:

const pelotas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const indice = pelotas.findIndex(num => num > 100);
console.log(indice); // Output: -1