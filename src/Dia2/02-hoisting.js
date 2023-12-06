// El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas al comienzo del ámbito actual antes de que cualquier otro código sea ejecutado. Esto significa que las declaraciones de variables y funciones pueden ser utilizadas antes de haber sido declaradas en el código.
// Por ejemplo, si tenemos el siguiente código:

console.log(x);
var x = 5;

// JavaScript interpreta este código como si estuviera escrito de la siguiente manera:

var x;
console.log(x);
x = 5;

// Esto significa que cuando se ejecuta el código, el valor de x será undefined en la primera línea, ya que la declaración de x ha sido movida al comienzo del ámbito.
// Sin embargo, es importante tener en cuenta que las asignaciones no son movidas al comienzo del ámbito, sólo las declaraciones. Esto significa que el siguiente código dará un error:

console.log(x);
x = 5;