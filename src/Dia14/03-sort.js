// El método Array.prototype.sort() se utiliza para ordenar elementos de un arreglo. Este método cambia el orden original del arreglo y devuelve el mismo arreglo ordenado.

// Por defecto, el método sort ordena los elementos en orden lexicográfico, lo que significa que los números se ordenan como si fueran cadenas de texto. Por ejemplo:

const numbers = [1, 5, 2, 4, 3];
numbers.sort();

console.log(numbers);

//Sin embargo, si desea ordenar los elementos en un orden diferente, puede proporcionar una función de comparación como argumento. La función de comparación toma dos argumentos y devuelve un número que indica cómo se deben ordenar los elementos. Si el número devuelto es menor que 0, el primer elemento debe ir antes que el segundo elemento; si el número devuelto es mayor que 0, el segundo elemento debe ir antes que el primero; y si el número devuelto es 0, los elementos son iguales y no se cambia su orden.

// Aquí hay un ejemplo de cómo se puede usar una función de comparación para ordenar los elementos de un arreglo en orden inverso:

const numeros = [1, 5, 2, 4, 3];
numeros.sort((a, b) => b - a );

console.log(numeros);

// Si queremos ver a detalle, podemos modificar un poco todo esto para poder observar el comportamiento de sort

const numers = [1, 5, 2, 4, 3];
numers.sort((a, b) => {
    console.log(`${b} - ${a}: ${ b - a}`)
    return b - a
});

// 5 - 1: 4 por lo tanto va primero el 5 [5, 1, 2, 4, 3]
// 2 - 1: 1 Por lo tanto va después el 2 [5, 2, 1, 4, 3]
// 2 - 5: -3 Por lo tanto va después el orden sigue igual [5, 2, 1, 4, 3]
// 4 - 1: 3 Por lo tanto se cambia de lugar el 4 [5,2,4,1,3]
// 4 - 2: 2 Por lo tanto se vuelve a cambiar de lugar el 4 [5,4,2,1,3]
// 4 - 5: -1 Por lo tanto el 5 y 4 se mantienen iguales [5,4,2,1,3]
// 3 - 1: 2 por lo tanto se recorre un lugar el 3 [5,4,2,3,1]
// 3 - 2: 1 Por lo tanto sigue recorriendose el 3 [5,4,3,2,1]
// 3 - 4: -1 Y se hace la última comprobación [5,4,3,2,1]
console.log(numers);

// También es posible ordenar objetos en un arreglo con el método sort. Aquí hay un ejemplo de cómo se puede hacer esto:

const people = [
    {name:"John", age: 30},
    {name:"Jane", age: 28},
    {name:"Jim", age: 32},
];

people.sort((a, b) => a.age - b.age );
console.log(people);

// En este ejemplo, la función de comparación (a, b) => a.age - b.age se utiliza para ordenar los objetos en el arreglo people por su edad.

/*
Menor a mayor
(a, b) => a - b
+ b antes que a
- a antes que b
= mantienen el mismo lugar

Mayor a menor
(b, a) => a - b
+ a antes que b
- b antes que a
= mantienen el mismo lugar
*/