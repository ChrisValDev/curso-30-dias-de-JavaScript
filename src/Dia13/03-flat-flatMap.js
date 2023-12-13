/*Array.prototype.flat()
El método Array.prototype.flat() permite combinar varios arreglos en un solo arreglo plano (sin niveles adicionales de anidamiento). Este método es útil cuando se trabaja con arreglos multidimensionales y se desea obtener una sola secuencia de elementos en un solo arreglo.

Este método puede aceptar un argumento opcional, que indica la profundidad de anidamiento máxima hasta la cual se deben aplanar los arreglos. Si no se proporciona un argumento, el método aplanará los arreglos hasta el nivel más profundo.

A continuación se muestra un ejemplo de código que utiliza el método Array.prototype.flat() para aplanar un arreglo multidimensional:*/

const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat();
console.log(flatArray);

// En este ejemplo, el arreglo multidimensional multiDimensionalArray se aplanó utilizando el método Array.prototype.flat() y se guardó en la variable flatArray. Luego, se imprime en la consola el valor de flatArray y se puede ver que se trata de un arreglo plano con los elementos del arreglo multidimensional combinados en una sola secuencia.

// Además, también es posible aplanar un arreglo multidimensional hasta una profundidad específica utilizando el argumento opcional. Por ejemplo:

const multiDimensional = [[1, 2, 3], [4, [5, 6]], [7, 8, 9]];
const aplanarArray = multiDimensional.flat(1);
console.log(aplanarArray);

/* En este ejemplo, el arreglo multidimensional multiDimensionalArray se aplanó hasta una profundidad de anidamiento de 1 utilizando el método Array.prototype.flat(1). Esto significa que solo se aplanaron los arreglos de nivel más externo, por lo que el arreglo dentro del arreglo [5, 6] se mantuvo intacto.

Array.prototype.flatMap()
El método Array.prototype.flatMap() combina las funcionalidades de los métodos Array.prototype.map() y Array.prototype.flat() en uno solo. Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

Este método se aplica a un objeto Array y toma como argumento una función que se aplicará a cada elemento del arreglo. La función aplicada a cada elemento devuelve un nuevo arreglo, y flatMap aplana este arreglo resultante en un único arreglo.

Ejemplo de cómo se puede usar flatMap:*/

const numeros = [1, 2, 3, 4];
const result = numeros.flatMap(x => [x, x * 2]);

console.log(result);

// En este ejemplo, la función x => [x, x * 2] se aplica a cada elemento del arreglo numbers. Cada elemento del arreglo numbers es multiplicado por 2 y los dos valores se almacenan en un nuevo arreglo. Luego, el método flatMap aplana todos los arreglos resultantes en un único arreglo.

// Además de transformar y aplanar arreglos, flatMap también puede ser útil para eliminar elementos null o undefined de un arreglo. Aquí hay un ejemplo de cómo se puede hacer esto:

const values = [1, 2, 3, null, 4, undefined, 5];
const resultado = values.flatMap(x => x === null || x === undefined ? [] : x);

console.log(resultado);

// Al igual que el método flat() este nos puede ayudar a trabajar con arrays bidimensionales
// Ejemplo:

const bidimensionalArray = [[1, 2, 3], [4, 5, 6]];
const results = bidimensionalArray.flatMap(x => x);

console.log(results);

// El método flatMap aplana cada subarreglo dentro del arreglo bidimensionalArray en un único arreglo resultante. De esta manera, podemos trabajar con arreglos bidimensionales de manera más fácil y eficiente.