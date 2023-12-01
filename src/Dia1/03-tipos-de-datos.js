// Numbers

let edad = 30;
let salario = 1500.50;
const PI = 3.14;

// También podemos utilizar la notación científica para representar números muy grandes o muy pequeños.

const numeroGrande = 1e6; // 1000000 "1 millón"
const numeroPequeño = 1e-6; // 0.000001


// Strings

const nombre = "Platzi";
const apellido = 'Academy';

// Concatenar strings

console.log(`Hola, ${nombre} ${apellido}!`); // "Hola, Platzi Academy!"

// Metodos mas comunes para manipular strings

const name = "Platzi";

console.log(name.length) // Devuelve la longitud de un string.
console.log(name.toUpperCase()) // Devuelve el string en mayúsculas.
console.log(name.toLowerCase()) // Devuelve el string en minúsculas.
console.log(name.substring(0, 4)) // Devuelve una parte del string.


// Objects
// Los objetos son estructuras de datos que nos permiten almacenar un conjunto de pares clave-valor. Los valores de las propiedades pueden ser de cualquier tipo de dato, incluyendo otros objetos.

const persona = {
    nombre: "Fulanita",
    platziRank: 9567,
        cursoFavorito: {
            nombre: "Básico de JavaScript",
            clases: 30,
            duración: "2 horas"
        }
};


// Para acceder a las propiedades de un objeto, podemos utilizar el operador . o la notación de corchetes [].

  console.log(persona.nombre); // "Fulanita"
  console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
  console.log(persona["platziRank"]); // 9567


// Booleanos

let cursoCompletado = true;
let lecturaCompletada = false;


// No pasa nada si no recuerdas el tipo de dato con el que estás trabajando, dentro de JavaScript existe la instrucción typeof la cual te dirá el nombre del tipo de dato con el que estás trabajando

console.log(typeof "#PlatziChallenge"); // "string"
console.log(typeof 30); // number
console.log(typeof true);// boolean
console.log(typeof {});// "object"


// 👀 con los arrays nos devuelve que son un objeto
// Más adelante descubriremos la razón
console.log(typeof []); // "object"



// Desafio
// En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor. Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.

function solution(valor) {
  return typeof valor;
  }
  
  console.log(solution(1));
  console.log(solution("Dieguillo"));
  console.log(solution(true));
  

// Null
// El valor null es un tipo de dato que representa un valor vacío o nulo. En JavaScript, podemos utilizar la palabra clave null para representar el valor nulo. A menudo, utilizamos null para representar un valor que aún no ha sido inicializado o para representar un valor que no tiene sentido en el contexto actual.

const caja = null;
console.log(caja); // imprime "null"

// Undefined
// El valor undefined es un tipo de dato que representa un valor que aún no ha sido asignado o que no tiene un valor válido. En JavaScript, podemos utilizar la palabra clave undefined para representar el valor undefined.

let names;
console.log(names); // imprime "undefined"

// Diferencias entre Null y Undefined
// Es importante tener en cuenta que null y undefined son valores diferentes en JavaScript. null representa un valor intencionalmente vacío, mientras que undefined representa un valor que aún no ha sido asignado o que no tiene un valor válido.

let gatito = {
  nombre: "Michi",
  edad: 3,
  dueño: null // intencional
};
console.log(gatito.dueño); // "null"

let gato; // Valor no valido
console.log(gato); // "undefined"