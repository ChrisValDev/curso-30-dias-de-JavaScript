// La programación orientada a objetos (POO) es un paradigma de programación que se enfoca en el uso de objetos para representar conceptos del mundo real y manipular datos. JavaScript es un lenguaje orientado a objetos basado en prototipos, lo que significa que los objetos en JavaScript tienen una relación de prototipo entre ellos, en lugar de tener una relación de clase como en lenguajes como Java o C#.

// Una de las principales diferencias entre JavaScript y otros lenguajes orientados a objetos es el uso de clases en lugar de prototipos. Aunque JavaScript no tiene una sintaxis específica para definir clases, a partir de ECMAScript 6 se pueden utilizar las palabras clave “class” y “extends” para simular una estructura de clase. Sin embargo, debajo de esta sintaxis se sigue utilizando prototipos para la herencia. Por ejemplo:

class Animal {
    constructor(especie) {
        this.especie = especie;
    }
    respirar() {
        console.log("Respirando...");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("Guau!");
    }
}

const perron = new Perro("Canino");
console.log(perron);
console.log(perron.especie);
perron.respirar();
perron.ladrar();

// Como habrás visto, en este pequeño ejemplo hay muchas keywords nuevas como: new, this, extends, constructor. Posiblemente sea tu primer acercamiento a estos conceptos, por lo que es momento de entender cada uno de estos.

// Empecemos por this , this se refiere al objeto actual en el cual se está ejecutando un método o accediendo a una propiedad. En una función constructora, thisse refiere al nuevo objeto que se está creando. Por ejemplo:

function Animal(especie) {
    // Función constructora
    this.especie = especie;
  }
  
  Animal.prototype.respirar = function() {
    // En este scope no existe "especie"
      // Pero con "this" estamos accediendo directamente a "Animal"
      // Por lo que esto vendría siendo "Animal.especie"
    console.log(`La especie ${this.especie} está respirando...`);
  }
  
const dog = new Animal("Canino");
dog.respirar();

// Este ejemplo es muy parecido al anterior, básicamente es lo que hace JavaScript para convertir las clases en prototipos, si bien ahora existen las clases como lo viste al principio de esta lectura, debes de comprender como funciona el lenguaje por debajo sin toda esa sugar syntax.

// Con clases, esto se vería mejor 👇

//TODAS LAS CLASES empiezan en mayuscula por convencion

class Animal {
    constructor(especie) {
        // Con clases la funcion constructora es mas explicita, aqui se asignan los valores recibidos.
        // Parecido a las funciones, se recibe como parametro cualquier valor necesario y lo pasamos al scope de la clase con this.valor = valor;
        this.especie = especie;
    }

    respirar() {
        // Directamente podemos crear los metodos dentro de las clases, basicamente una funcion cualquiera pero sin la keyword "function".
        console.log(`La especie ${this.especie} esta respirando...`);
    }
}

const perrito = new Animal("Canino");
perrito.respirar();
console.log(perrito);

// Pero ambas practicas, vienen siendo igual a lo que modifica el prototype.

// Ahora, cuando estamos declarando la variable perro usamos la keyword new que se usa para crear una nueva instancia de una función constructora. Cuando se usa new con una función constructora, se crea un nuevo objeto, se establece su prototipo y se ejecuta el código dentro de la función constructora con this apuntando al nuevo objeto. Por ejemplo:


// Aqui estamos creando una instancia de la clase Animal.
// Por lo que perro, es una instancia de Animal que tiene como especie el valor de "Canino"

const perro = new Animal("Lomillo");
// De esta manera podemos acceder a todos los metodos creados en la clase.
perro.respirar();

// Solo falta conocer un concepto nuevo, extends

class Perro extends Animal {
    // Aqui no es necesario agregar el constructor si no se esperan nuevos parametros.

    ladrar() {
        console.log("Guau!");
    }
}

// Esto se le conoce como una subclase, que se refiere a una clase que hereda de otra clase.

// La keyword extends nos ayuda a copiar todo de la clase que extiende a la nueva clase y así evitar ser redundante y tener una buena jerarquía. Por lo que anterior viene siendo igual a lo siguiente.

class Perro {
    constructor(especie) {
        this.especie = especie;
    }

    respirar() {
        console.log("Respirando...");
    }
    ladrar() {
        console.log("Guau!");
    }
}

// Y la forma que es interpretada por JavaScript es de la siguiente manera

const animal = {
    respirar: function() {
        console.log("Respirando...");
    }
};

const perruno = Object.create(animal);

perruno.ladrar = function() {
    console.log("Guau!");
};

console.log(perruno);
perruno.respirar();
perruno.ladrar();

// Object.create() que se usa para crear un nuevo objeto con un prototipo específico. Este método recibe un objeto como primer parámetro y devuelve un nuevo objeto con ese objeto como su prototipo.

