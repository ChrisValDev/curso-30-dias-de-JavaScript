// JavaScript cuenta con un modo estricto que es un conjunto de reglas y características que proporcionan una mayor seguridad y control en el código. El modo estricto se activa mediante la palabra clave “use strict” al comienzo de un archivo o al principio de una función.

// Una de las principales ventajas de utilizar el modo estricto es que ayuda a evitar errores comunes en el código. Por ejemplo, en modo estricto, no se puede redeclarar una variable con el mismo nombre en el mismo ámbito, lo que evita confusiones y errores en el código.

"use strict";
let numero = 5;
let numero = 10;
// Generará un error en modo estricto, ya que no se puede redeclarar una variable con el mismo nombre en el mismo ámbito

// Además, en modo estricto, no se puede cambiar el tipo de dato de una variable al momento de hacer la reasignación.

function miFuncion() {
    "use strict";
    let numero = 5;
    numero = "10"; // Generará un error en modo estricto, ya que no se puede cambiar el tipo de dato de una variable
    console.log(numero);
}

// El modo estricto también proporciona mejoras en la performance del código. Por ejemplo, en modo estricto, el código se ejecuta más rápido ya que no se realizan algunas comprobaciones y conversiones que se realizan en modo no estricto.

// En resumen, el modo estricto es una herramienta útil en la programación en JavaScript que proporciona una mayor seguridad, control y performance en el código. Es recomendable utilizar el modo estricto en todos los proyectos de JavaScript para evitar errores comunes y problemas de seguridad. Sin embargo, es importante tener en cuenta que el modo estricto puede generar algunos problemas al trabajar con código existente que no está escrito en modo estricto, por lo que se debe utilizar con precaución.