// Las promesas son una característica importante de JavaScript para manejar operaciones asíncronas y controlar su flujo. Pero, ¿cómo se manejan las promesas en el código de forma eficiente y efectiva? Vamos a discutir dos formas populares de manejar promesas: mediante callbacks y mediante async/await.

// Callback
// Los callbacks son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona. Un callback es una forma de manejar la respuesta de una promesa.

// Veamos un ejemplo:

function getUserData(userId, callback) {
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

function displayUserData(data) {
    console.log(data.name);
}

getUserData(2, displayUserData);

// En este ejemplo, se define una función getUserData que toma un ID de usuario y un callback como parámetros. Dentro de esta función, se llama a la API de jsonplaceholder y se obtiene el objeto de datos del usuario. Luego, se llama al callback con los datos del usuario como argumento. En este caso, el callback es la función displayUserData que simplemente muestra el nombre del usuario en la consola.

// La desventaja de usar callbacks es que puedes crear un Callback Hell, que es un anti-patrón producido por anidar múltiples callbacks dentro de otros callbacks en un código asíncrono. Esto puede ocurrir cuando un código asíncrono necesita realizar múltiples operaciones de manera secuencial, donde la ejecución de una operación depende de los resultados de la operación anterior. Este anti-patrón puede hacer que el código sea difícil de entender, mantener y depurar.

// Un ejemplo del Callback Hell puede ser el siguiente, donde se realiza una serie de operaciones asíncronas anidadas que dependen de los resultados de la operación anterior:

operation1(function(result1) {
    operation2(result1, function(result2) {
        operation3(result2, function(result3) {
            operation4(result3, function(result4) {
                // continuar con mas operaciones
            });
        });
    });
});

// En este ejemplo, la ejecución de operation2 depende del resultado de operation1, y la ejecución de operation3 depende del resultado de operation2, y así sucesivamente. Como se puede ver, el código se vuelve cada vez más anidado y difícil de leer a medida que se agregan más operaciones.

// Promesas
// Una forma de evitar el Callback Hell es utilizar Promesas o Async/Await, que proporcionan una forma más estructurada y fácil de leer para manejar código asíncrono. Por ejemplo, el código anterior se puede reescribir utilizando Promesas de la siguiente manera:

operation()
    .then(result1 => {
        return operation(result1);
    })
    .then(result2 => {
        return operation(result2);
    })
    .then(result3 => {
        return operation(result3);
    })
    .then(result4 => {
        return operation(result4);
    })
    .catch(error => {
        // Manejar errores
    });

// En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior.

// Async/await
// Async/await es una forma más moderna y legible de manejar promesas. En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer.

// Veamos un ejemplo:

async function getUserData(userId) {
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

async function displayUserData(userId) {
    const data = await getUserData(userId);
    console.log(data.name);
}

displayUserData(1);

// En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.

// Conclusión
// El uso de callbacks y async/await son formas efectivas de manejar promesas en JavaScript. Aunque ambos métodos tienen sus ventajas y desventajas, async/await se ha convertido en la opción preferida para muchas personas debido a su legibilidad y sintaxis más clara. Sin embargo, aún hay situaciones en las que los callbacks pueden ser la mejor opción, especialmente en situaciones donde se necesitan múltiples llamadas asincrónicas en secuencia.