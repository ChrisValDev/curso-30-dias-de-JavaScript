// La estructura de control switch permite ejecutar diferentes bloques de código en función de un valor específico. Es una alternativa a la estructura if-else para casos en los que hay varios valores posibles para una variable y se desea ejecutar diferentes acciones en función de cada valor manteniendo legible el código.

// La sintaxis básica de una estructura “switch” es la siguiente:

switch (variable) {
	case valor1:
	  // código a ejecutar si variable es igual a valor1
	  break;
	case valor2:
	  // código a ejecutar si variable es igual a valor2
	  break;
	default:
	  // código a ejecutar si variable no es igual a ninguno de los valores anteriores
}

// Por ejemplo, el siguiente código imprimirá un mensaje diferente en la consola dependiendo del valor de la variable “dia”:

const dia = "martes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miercoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("Hoy no es lunes, martes o miércoles");
}

// Other example

let numero = "12";
switch (true) {
  case numero > 100:
    console.log("El valor es mayor a 100");
    break;
  case numero % 2 === 0:
    console.log("El valor es multiplo de 2");
    break;
  default:
    console.log("El valor no cumple con ninguna de las características");
}

// Challenge
/*En este desafío recibirás una serie de tipos de mascotas junto con su edad.

Dependiendo de estos 2 factores tendrás que construir la función llamada getPetExerciseInfo la cual retornará una cadena de texto con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

La función recibirá las siguientes mascotas:

perro
gato
ave
En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida"

Para cada tipo de mascota, la función retornará diferente información basada en la edad.

Perros
Si la edad es menor al año, deberá retornar "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
Si la edad es entre 1 y 7 años, deberá retornar "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
Si la edad es mayor a 7 años, deberá retornar "Los perros viejos necesitan caminatas más cortas"
gatos
Si la edad es menor al año, deberá retornar "Los gatitos necesitan frecuentes sesiones de juego"
Si la edad es entre 1 y 7 años, deberá retornar "Los gatos a esta edad necesitan jugar diariamente"
Si la edad es mayor a 7 años, deberá retornar "Los gatos viejos necesitan sesiones de juego más cortas"
aves
Si la edad es menor al año, deberá retornar "Las aves jóvenes necesitan mucho espacio para volar"
Si la edad es entre 1 y 7 años, deberá retornar "Las aves necesitan jugar diariamente y un lugar para volar"
Si la edad es mayor a 7 años, deberá retornar "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"
*/

function getPetExerciseInfo(type, age) {
    switch(type) {
        case "perro":
            if(age < 1) {
                return"Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
            } else if(age >= 1 && age <= 7) {
                return"Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
            } else if(age > 7) {
                return"Los perros viejos necesitan caminatas más cortas";
            }  
            break;
        case "gato":
            if(age < 1) {
                return"Los gatitos necesitan frecuentes sesiones de juego";
            } else if(age >= 1 && age <= 7) {
                return"Los gatos a esta edad necesitan jugar diariamente";
            } else if(age > 7) {
                return"Los gatos viejos necesitan sesiones de juego más cortas";
            }  
            break;
        case "ave":
            if(age < 1) {
                return"Las aves jóvenes necesitan mucho espacio para volar";
            } else if(age >= 1 && age <= 7) {
                return"Las aves necesitan jugar diariamente y un lugar para volar";
            } else if(age > 7) {
                return"Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
            }  
            break;
        default:
            return"Tipo de mascota inválida";
    }
}

console.log(getPetExerciseInfo("perro", 3));
console.log(getPetExerciseInfo("gato", 8));
console.log(getPetExerciseInfo("Mamut", 25));