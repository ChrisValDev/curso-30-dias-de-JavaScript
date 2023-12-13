/*Las funciones mutables en JavaScript son aquellas que pueden modificar el estado de los objetos. En oposición a las funciones inmutables, que no pueden modificar el estado de los objetos y devuelven un nuevo objeto con los cambios.

Las funciones mutables son comúnmente utilizadas para manipular arrays y objetos. Algunos ejemplos de funciones mutables en JavaScript incluyen Array.prototype.push(), Array.prototype.pop(), Array.prototype.shift(), Array.prototype.unshift(), Array.prototype.splice() y Object.assign().

Es importante tener en cuenta que las funciones mutables pueden tener efectos secundarios, ya que modifican el estado de los objetos. Por lo tanto, es importante utilizarlas de manera consciente y tener cuidado al trabajar con ellas.

Por ejemplo, supongamos que tenemos un array llamado “numbers” que contiene los números 1, 2, 3 y 4. Si usamos la función mutable Array.prototype.push() para agregar un nuevo número al final del array, e estado del array “numbers” cambiará.*/

const numbers = [1, 2, 3, 4];
numbers.push(5);

console.log(numbers);

/* Como se puede ver en este ejemplo, el método push() ha modificado el estado del array “numbers” al agregar un nuevo número al final del array.

Por otro lado, si usamos una función inmutable como Array.prototype.concat() para agregar un nuevo número al array “numbers”, el estado del array “numbers” no cambiará. En su lugar, se devolverá un nuevo array con los cambios.*/

const numeros = [1, 2, 3, 4];
const newNumbers = numeros.concat([5]);

console.log(numeros);
console.log(newNumbers);

// También se pueden usar mutable functions para modificar objetos de la misma manera:

const person = {
    name: "John",
    age: 30,
};

function addProperty(object, key, value) {
    object[key] = value;
}

addProperty(person, "address", "123 Main St");

console.log(person);

// En este ejemplo, la función addProperty modifica directamente el objeto person al agregar una propiedad “address” a él.

// Además de modificar objetos y arrays individuales, también es posible usar mutable functions en combinación con bucles para modificar varios objetos y arrays al mismo tiempo. Aquí hay un ejemplo de cómo se puede hacer esto:

const numeritos = [1, 2, 3, 4];

const people = [
    {name:'John Doe', age: 30},
    {name:'Jane Doe', age: 25},
    {name:'Jim Doe', age: 35},
];

function addFive(array) {
    for(let i = 0; i < array.length; i++) {
        array[i] += 5;
    }
}

function addYear(array) {
    for(let i = 0; i < array.length; i++) {
        array[i].age++;
    }
}
console.log("antes");
console.log(numeritos);
console.log(people);

addFive(numeritos);
addYear(people);

console.log("despues");
console.log(numeritos);
console.log(people);