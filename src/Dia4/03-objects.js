// Los objetos en JavaScript son un tipo de dato que permite almacenar una colección de pares clave-valor. Estos pares representan las propiedades y sus valores correspondientes de un objeto. Los objetos son similares a los arrays en cuanto a que también son una forma de almacenar y manejar datos, pero en lugar de tener un índice numérico, tienen una clave de string.

// La sintaxis para crear un objeto es la siguiente:

const miObjeto = {
    clave: valor,
    clave1: valor1,
    clave2: valor2
};

// Por ejemplo, el siguiente código crea un objeto llamado “curso” que tiene cinco propiedades: “Clases”, “Duración”, “Nombre”, “detalles” y comentarios:

const curso = {
    nombre: "30 dias de JavaScript",
    duracion: "20 horas",
    clases: 100,
    detalles: {
        tecnologias: ["js", "node", "web browser"],
        calificacion: 5,
    },
    comentarios: ["Excelente curso!", "JavaScript no es lo mismo que Java", "hola"]
}

// Para acceder a las propiedades de un objeto, se utiliza la notación de punto o la notación de corchetes. Por ejemplo, para acceder al nombre del curso anterior se utilizaría la siguiente sintaxis:

nameOfCourse = curso.nombre;
otherWayOfNameOfCourse = curso["nombre"];
console.log("punto", nameOfCourse);
console.log("corchete", otherWayOfNameOfCourse);

// Además de las propiedades, los objetos también pueden tener métodos, que son funciones asociadas a un objeto. Por ejemplo, el siguiente código crea un objeto “carro” con una propiedad “marca” y un método “encender”:

let carro = {
    marca: "Toyota",
    encender: function() {
        console.log("El carro se ha encendido");
    }
}

// Para llamar a un método de un objeto, se utiliza la notación de punto. Por ejemplo:

carro.encender();

// JavaScript también tiene una característica llamada prototype, que permite agregar propiedades y métodos a un objeto de forma dinámica. Esto permite a los desarrolladores crear nuevos objetos a partir de objetos existentes y heredar sus propiedades y métodos, pero esto lo verás mucho más adelante, por el momento no tienes de que preocuparte.