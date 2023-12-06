/*Los ciclos son una herramienta esencial dentro de JavaScript. Sirven para repetir un bloque de código varias veces, dependiendo de una condición específica. Los ciclos son fundamentales para la automatización de tareas y la eficiencia en el código.

Existen dos tipos de ciclos en JavaScript: los ciclos “for” y los ciclos “while”. Ambos tienen una sintaxis similar, pero se utilizan en situaciones diferentes.

// For
El ciclo “for” es utilizado para repetir un bloque de código un número específico de veces. Su sintaxis básica es la siguiente:
*/

for (inicialización; condición; actualización) {
    // código a ejecutar
  }

// La inicialización se ejecuta una sola vez al principio del ciclo, la condición se evalúa en cada iteración antes de ejecutar el código dentro del ciclo y la actualización se ejecuta al final de cada iteración. Por ejemplo, el siguiente ciclo “for” imprimirá los números del 1 al 10 en la consola:

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// También existen los ciclos **for-in** y for-of. El ciclo for-in se utiliza para recorrer las propiedades de un objeto, mientras que el ciclo for-of se utiliza para recorrer los elementos de una colección como un array.

// El uso de un ciclo “for in” es la siguiente:

const user = {
    name: "Pepito",
    age: 20,
    role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}

// Por otro lado, la sintaxis de un ciclo for-of es la siguiente:

const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}

// While
// Por otro lado, el ciclo while se utiliza para repetir un bloque de código mientras se cumpla una determinada condición. Su sintaxis básica es la siguiente:

while (condición) {
    // código a ejecutar
  }

// La condición se evalúa antes de ejecutar el código dentro del ciclo y si la condición es verdadera, el código se ejecutará de nuevo. Por ejemplo, si quisiéramos hacer una implementación del ejemplo anterior con los números del 1 al 10, quedaría de la siguiente manera:

let i = 1;
while (i <= 10){
  console.log(i);
  i++;
}

// Existe una extensión del while en javascript llamado do-while que tiene una pequeña diferencia, el código dentro del ciclo se ejecutará al menos una vez antes de evaluar la condición. Por ejemplo:

let num = 1;
do {
	console.log(num);
	num++;
	} while (num <= 10);


// Challenge
// En este desafío, debes dibujar un triángulo isósceles usando bucles.
// Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.

function printTriangle(size, character) {
    let triangulo = "";
    for (let i = 1; i <= size; i++) {
        triangulo = triangulo + character;
        console.log(triangulo);
    }
}

printTriangle(5, "$");
