// Los arrays en JavaScript son un tipo de estructura de datos que permite almacenar múltiples valores en una sola variable. A diferencia de las variables simples como los números o las cadenas de texto, los arrays pueden tener múltiples valores y elementos.

// En esta clase, vamos a explorar algunas de las características avanzadas de los arrays en JavaScript, incluyendo la creación de arrays utilizando la clase constructora Array, copiar arrays, arrays bidimensionales y arrays de múltiples dimensiones.

// Creación de Arrays utilizando la Clase Constructora Array
// En JavaScript, los arrays se pueden crear de una forma diferente a la tradicional utilizando la clase constructora Array. La clase constructora Array proporciona una forma fácil y flexible de crear arrays con diferentes elementos y longitudes.

let myArray = new Array(1, 2, 3, 4);
console.log(myArray);

// Array.from()
// La función Array.from() permite crear un nuevo array a partir de un objeto similar a un array o iterable. La sintaxis para utilizar Array.from() es la siguiente:

let newArray = Array.from('Christopher');
console.log(newArray);

// Array(n).fill()
// La función fill() permite llenar un array con un valor específico. La sintaxis para utilizar fill() es la siguiente:

let arrayLleno = new Array(6).fill("o");
console.log(arrayLleno);


// Array.isArray()
// La función Array.isArray() permite determinar si un objeto es un array o no. La sintaxis para utilizar Array.isArray() es la siguiente:

let numbers = [1, 2, 3, 4, 5];
let numeros = {};
console.log(Array.isArray(numbers));

// Copiando Arrays
// En JavaScript, es común tener la necesidad de hacer una copia de un array existente, ya sea para manipular los datos sin afectar el array original o para trabajar con múltiples versiones del mismo array. Hay varias maneras de hacer esto en JavaScript, incluyendo la creación de una nueva instancia de un array, el uso de métodos incorporados y el uso del spread operator.

// Crear una nueva instancia del array:
// Una forma de hacer una copia de un array es crear una nueva instancia del mismo array. Esto se logra usando el constructor Array:

const originalArray = [1, 2, 3, 4];
const copiedArray = new Array(...originalArray);

console.log(originalArray === copiedArray);
console.log("original", originalArray);
console.log("copia", copiedArray);

// En este ejemplo, se utiliza el operador spread para expandir los elementos del array original en una nueva instancia del constructor Array.

// Uso de métodos incorporados:
// Otro enfoque para hacer una copia de un array es utilizar los métodos incorporados de JavaScript. Por ejemplo, puedes utilizar el método slice para hacer una copia de un array:

const arrayOriginal = [1, 2, 3, 4];
const arrayCopied = arrayOriginal.slice();

console.log(arrayOriginal === arrayCopied);
console.log("original", arrayOriginal);
console.log("copia", arrayCopied);

// Otro método incorporado es el método concat:

const original = [1, 2, 3, 4];
const copia = original.concat();

console.log(original === copia);
console.log("original", original);
console.log("copia", copia);

// spread operator:
// El spread operator es una forma conveniente de hacer una copia de un array. El spread operator se utiliza para expandir los elementos de un array en una lista:

const origin = [1, 2, 3, 4];
const copy = [...origin];

console.log(origin === copy);
console.log("original", origin);
console.log("copia", copy);

// En este ejemplo, se utiliza el spread operator para expandir los elementos del array original en una nueva instancia de un array.

// Es importante tener en cuenta que, aunque estos métodos parecen hacer una copia de un array, solo hacen una copia superficial, lo que significa que los elementos dentro del array original y la copia comparten los mismos valores. Si necesitas hacer una copia profunda de un array, es necesario utilizar una biblioteca de terceros o escribir tu propia función para hacer una copia profunda.

// Arrays Bidimensionales
// Los arrays bidimensionales son un tipo de estructura de datos en la que cada elemento es un array y cada uno de esos arrays contiene más elementos. En otras palabras, son arrays de arrays. Estos pueden ser útiles para representar datos en un formato más organizado, como una tabla o una matriz.

// Para crear un array bidimensional, puedes inicializar un array vacío y luego agregar arrays a sus elementos. Aquí hay un ejemplo:

const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];

console.log(matrix);

// También puedes crear un array bidimensional utilizando la clase constructora Array:

const matriz = new Array(3);
for(let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);
}
console.log(matriz);

matriz[0][0] = 1;
matriz[0][1] = 2;
matriz[0][2] = 3;
matriz[1][0] = 4;
matriz[1][1] = 5;
matriz[1][2] = 6;
matriz[2][0] = 7;
matriz[2][1] = 8;
matriz[2][2] = 9;

console.log(matriz);

// Para acceder a un elemento específico en un array bidimensional, debes proporcionar dos índices. Por ejemplo, si deseas acceder al elemento 5 en el ejemplo anterior, puedes hacerlo de la siguiente manera:

console.log(matriz[1][1]);

// Además de crear y acceder a los elementos de un array bidimensional, también puedes copiar un array bidimensional utilizando el spread operator:

const originalMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const copiedMatrix = [...originalMatriz];

console.log(originalMatriz === copiedMatrix);
console.log("original", originalMatriz);
console.log("copia", copiedMatrix);

// En este ejemplo, el spread operator se utiliza para crear una copia profunda del array original, lo que significa que los elementos dentro del array también se copian.

// Además de los arrays bidimensionales, también puedes crear arrays de más dimensiones. Por ejemplo, puedes crear un array tridimensional:

const cube = [];
for(let i = 0; i < 3; i++) {
    cube[i] = [];
    for(let j = 0; j < 3; j++) {
        cube[i][j] = [];
        for(let k = 0; k < 3; k++) {
            cube[i][j][k] = i + j + k;
        }
    }
}

console.log(cube);

// Como puedes ver, los arrays de más dimensiones siguen la misma lógica de los arrays bidimensionales, pero con más niveles de índices para acceder a los elementos.