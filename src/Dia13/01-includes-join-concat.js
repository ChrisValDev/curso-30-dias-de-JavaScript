/*El método Array.prototype.includes es una función para determinar si un elemento determinado existe en un array. Este método es muy útil a la hora de verificar si un elemento específico está presente en un array o no, sin tener que recorrer todo el array.

Este método acepta dos parámetros: el primer parámetro es el elemento que se quiere buscar y el segundo parámetro es el índice desde donde se iniciará la búsqueda. Si el segundo parámetro no se proporciona, la búsqueda comenzará desde el índice 0.

El método includes devuelve un valor booleano que indica si el elemento buscado se encuentra o no en el array. Si el elemento se encuentra en el array, el valor devuelto será true, de lo contrario, el valor será false.

Ejemplo:*/

const numbers = [1, 2, 3, 4, 5];
const result = numbers.includes(9);

console.log(result);

/*Como se puede ver en el ejemplo anterior, el método Array.prototype.includes se utiliza para determinar si el elemento 3 está presente en el array numbers. La función devuelve un valor booleano de true, lo que indica que el elemento se encuentra en el array.

Además de poder buscar elementos primitivos, como números y cadenas, el método Array.prototype.includes también puede buscar objetos y otros tipos de datos. Sin embargo, es importante tener en cuenta que para objetos y otros tipos de datos, la búsqueda se realiza utilizando la comparación de igualdad estricta (===), lo que significa que sólo se considerarán iguales dos objetos si se refieren a la misma ubicación en memoria.

Array.protoype.join()
El método Array.prototype.join() se utiliza para convertir todos los elementos de un array en un solo string. Este método recibe como argumento un separador, que es una cadena de texto que se utilizará para separar los elementos del arreglo en el string resultante.

Por ejemplo, si tenemos un arreglo fruits con los siguientes elementos: ["apple", "banana", "cherry"], podemos convertir este arreglo en un string usando el método join como se muestra a continuación:*/

const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");

console.log(fruitsString);

// En este ejemplo, el separador que se utiliza es una coma y un espacio (, ), pero podemos usar cualquier otra cadena de texto como separador. Si no se proporciona un separador, se usará una coma (,) por defecto.

const frutas = ["apple", "banana", "cherry"];
const frutaString = frutas.join();

console.log(frutaString);

/* Es importante destacar que el método join no modifica directamente el arreglo original, sino que retorna una nueva cadena de texto con los elementos del array original.

Array.protoype.concat()
El método Array.prototype.concat() se utiliza para combinar dos o más arrays en uno solo. Este método no modifica los arrays originales, sino que devuelve un nuevo array con los elementos de los arrays originales concatenados.

La sintaxis de la función concat() es la siguiente:*/

array1.concat(array2, array3, ..., arrayX);

/* Donde array1 es el array que llama a la función, y array2, array3, …, arrayX son los arrays que se desean concatenar.

Además de arrays, también se pueden concatenar otros valores, como números, cadenas de texto, objetos, etc. Estos valores se añadirán al final del nuevo array como elementos individuales.

Por ejemplo:*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const string = "Hello";
const number = 123;

const resultado = array1.concat(array2, string, number);
console.log(resultado);

// En este ejemplo, se crean dos arrays, array1, array2, string y number se concatenan utilizando la función concat(). El resultado es un nuevo array, result, que contiene los elementos de ambos arrays originales con el string y el número.

