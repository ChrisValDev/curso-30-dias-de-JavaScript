// Estructura de una funcion
// Funcion declaracion
function miFuncion(parametro1, parametro2) {
    // Código de la función
  }

  miFuncion(); // LLamado de la funcion

  // Ejemplo de funcion

  function suma(a, b) {
    return a + b;
  }
  
  let resultado = suma(2, 3);
  console.log(resultado); // Imprime 5

// Existen otras 3 formas/tipos de hacer uso de funciones  
// IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida. Esta función es anónima y no se puede reutilizar.

(function () {
    console.log("Soy una funcion IIFE");
  })();

// Función expresión: una función que se define como una expresión y puede ser asignada a una variable. Esta función también puede ser llamada y reutilizada. *En este tipo de funcion tendríamos que declararla primero, y después mandarla llamar ya que no aplicar el Hoisting en este caso.

let saluda = function () {
    console.log("Soy una funcion expresiva y me tienen que llamar despues de haberme declarado");
};

saluda();

// Arrow function: una función que se define utilizando la sintaxis () =>. Esta función es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.

let saludar = () => console.log("Soy una arrow funcion");

saludar();