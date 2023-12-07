/* Los closures en JavaScript son una característica fundamental del lenguaje que permite a las funciones recordar el estado de su entorno de ejecución, incluso después de que la función haya sido invocada. Esto permite a las funciones mantener un estado privado y protegido de variables y funciones internas, lo que proporciona una mayor flexibilidad y seguridad en el código.

Un closure se crea cuando una función es declarada dentro de otra función. La función interna tiene acceso al ámbito de la función externa, lo que significa que puede acceder a las variables y funciones declaradas dentro de la función externa. Además, un closure también tiene acceso a las variables y funciones globales.

Observa el siguiente ejemplo de la función counter. La función externa crea una variable privada “count” y una función interna “increment” que incrementa el valor de “count” y devuelve el valor actual.*/

function counter() {
    let count = 0;
    return function increment() {
        count++;
        return count;
    }
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

/* En este ejemplo, la función “counter” es el closure y tiene acceso a la variable privada “count” y la función interna “increment”. Al asignar la función “contador” a la variable “myCounter” y luego llamar a la función “myCounter”, se está utilizando el closure para acceder a la variable “count” y modificar su valor cada vez que se llama a la función “increment”. Esto permite mantener un estado interno privado en la función “contador” y evitar conflictos con otras variables con el mismo nombre en el ámbito global.

Además de ayudar a mantener el estado privado, los closures también son útiles para crear funciones genéricas y reutilizables, ya que pueden ser parametrizadas con variables y funciones declaradas en su entorno de ejecución. Por ejemplo, una función que toma una función y un valor como argumentos y devuelve una nueva función que aplica el valor a la función original.*/

function multiplyBy(multiplier) {
    return function(value) {
        return value * multiplier;
    }
}

const double = multiplyBy(2);
console.log(double(5));
console.log(double(10));

const triple = multiplyBy(3);
console.log(triple(10));
console.log(triple(20));

// En este ejemplo, la función “multiplyBy” es un closure que toma un factor como argumento y devuelve una nueva función que multiplica el valor dado por el factor. Al asignar la función “multiplicador” con un factor específico a la variable “doble”, se está utilizando el closure para parametrizar la función con un valor específico y crear una nueva función reutilizable que siempre multiplica el valor dado por 2, por 3 o cualquier otro número.