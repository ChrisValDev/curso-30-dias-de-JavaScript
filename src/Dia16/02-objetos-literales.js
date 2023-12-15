// Los objetos literales en JavaScript son una forma de almacenar y manipular datos en el lenguaje. Un objeto literal es un conjunto de pares clave-valor que se encierran entre llaves {}. Los objetos literales pueden contener cualquier tipo de dato, desde números, strings, booleanos, hasta funciones y otros objetos.

// Uno de los métodos más comunes para manipular objetos literales es Object.assign(). Este método permite copiar las propiedades de un objeto a otro. Por ejemplo:

const objeto1 = {a: 1, b: 2};
const objeto2 = {c: 3, d: 4};

// Object.assign necesita de entrada un target al cual asignarle los valores.
// En este ejemplo el target sera un nuevo objeto vacio.
// Y los siguientes elementos seran las fuentes (que pueden ser varios objetos)

const nuevoObjeto = Object.assign({}, objeto1, objeto2);

console.log(nuevoObjeto);

// Otro método importante es Object.freeze(). Este método congela un objeto, impidiendo que sus propiedades sean modificadas. Por ejemplo:

const objeto = {a: 1, b: 2};
Object.freeze(objeto);
objeto.a = 3;

console.log(objeto.a);

// Otro método importante es Object.getOwnPropertyNames. Este método devuelve un array con todas las propiedades de un objeto que son de su propiedad, es decir, no heredadas. Por ejemplo:

const objetoA = {a: 1, b: 2};
const objetoB = Object.create(objetoA);
objetoB.c = 3;

console.log(Object.getOwnPropertyNames(objetoB));


// Para iterar sobre las propiedades de un objeto, se puede utilizar un bucle for-in. Por ejemplo:

const object = {a: 1, b: 2, c:3};
for(let propiedad in object) {
    console.log(propiedad);
}

// Otra forma de iterar sobre las propiedades de un objeto es utilizando Object.keys() y un bucle for-of. Por ejemplo:

const objetoUno = {a: 1, b: 2, c: 3};
const propiedades = Object.keys(objetoUno);

console.log(propiedades);
for(let propiedad of propiedades) {
    console.log(propiedad);
}

// Object.values()
// Este método devuelve un array con los valores de todas las propiedades de un objeto. Por ejemplo:

const objeto11 = {a: 1, b: 2};
const objeto22 = Object.create(objeto11);
objeto22.c = 3;

console.log(Object.values(objeto22));

// Object.entries().
// Este método devuelve un array con los pares clave-valor de todas las propiedades de un objeto, incluyendo las heredadas. Por ejemplo:

const perro = {a: 1, b: 2};
const gato = Object.create(perro);
gato.c = 3;

console.log(Object.entries(gato));

// hasOwnProperty().
// Este método devuelve un booleano indicando si un objeto tiene una propiedad específica que es de su propiedad, es decir, no heredada. Por ejemplo:

const niño = {a: 1, b: 2};
const niña = Object.create(niño);
niña.c = 3;
console.log(niña.hasOwnProperty("c"));
console.log(niña.hasOwnProperty("a"));