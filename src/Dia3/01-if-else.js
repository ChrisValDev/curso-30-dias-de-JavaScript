// La estructura de control “if” sirve para tomar decisiones en función de si una determinada condición es verdadera o falsa. El código dentro de un bloque “if” sólo se ejecutará si la condición es verdadera, mientras que el código en un bloque “else” sólo se ejecutará si la condición es falsa.

// La sintaxis básica de una estructura “if” es la siguiente:

if (condicion) {
    // código a ejecutar si la condición es verdadera
  } else {
    // código a ejecutar si la condición es falsa
  }

// Una de las formas más comunes de utilizar una estructura “if” es comparando una variable con un valor específico. Por ejemplo:

let edad = 10;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// También es posible utilizar varias condiciones en una estructura “if” utilizando la palabra clave “else if”. Por ejemplo:

let calificacion = 91;

if (calificacion >= 90) {
  console.log("Obtuviste una A");
} else if (calificacion >= 80) {
  console.log("Obtuviste una B");
} else if (calificacion >= 70) {
  console.log("Obtuviste una C");
} else {
  console.log("Obtuviste una calificación insuficiente");
}

// Challenge
// En este desafío, debes crear la lógica de la función isLeapYear, que determina si un año es bisiesto o no. Un año es bisiesto si cumple con las siguientes condiciones:

// Es divisible por 4, pero no por 100.
// Si es divisible por 100 debe serlo por 400 también.
// La función isLeapYear recibe un único parámetro: el año a evaluar. Debe devolver true si el año es bisiesto o false en caso contrario.

// Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos.

function isLeapYear(year) {
    let yearCorrect = year > 0;
    if(year % 4 === 0 && yearCorrect) {
        if(year % 100 !== 0 && yearCorrect || year % 100 === 0 && year % 400 === 0 && yearCorrect) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
  

console.log(isLeapYear(2000));
console.log(isLeapYear(-2024));
console.log(isLeapYear(1984.25));
