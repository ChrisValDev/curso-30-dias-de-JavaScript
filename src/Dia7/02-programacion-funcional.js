/* La programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En JavaScript, la programación funcional se basa en el uso de funciones puras, es decir, funciones que no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input.

Una de las características principales de la programación funcional es el uso de first-class functions (funciones como primer ciudadano), es decir, se consideran como valores y pueden ser asignados a variables, pasados como argumentos a otras funciones y retornadas como resultado de otras funciones. Esto permite crear funciones más pequeñas y reutilizables que se pueden combinar para crear funciones más complejas.

Por ejemplo, podemos crear una función “add” que toma dos números como argumentos y devuelve su suma:*/

function add(a, b) {
    return a + b;
}

// Luego, podemos asignar esta función a una variable y pasarla como argumento a otra función, como “makeOperation”:

const operation = add;

function makeOperation(operation, num1, num2) {
    return operation(num1, num2);
}

console.log(makeOperation(operation, 2, 3));

/* De esta forma, la función “makeOperation” se vuelve más genérica y reutilizable, ya que puede recibir cualquier función que tenga la misma estructura de argumentos.

Otra característica importante de la programación funcional es el uso de funciones puras. Esto significa que las funciones no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input. Esto hace que el código sea más fácil de probar y depurar, ya que no hay efectos secundarios ocultos que puedan afectar el comportamiento del código.

Por ejemplo, la función map() es una función pura ya que toma un array de números como input y devuelve un nuevo array con los números transformados, sin modificar el array original.*/

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(numbers) {
    return numbers * 2;
});

console.log(doubles);

// En resumen, la programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En javascript, se puede utilizar programación funcional mediante el uso de funciones como map, reduce, filter, arrow functions y librerías de programación funcional pura, lo cual permite crear código más fácil de probar y depurar.