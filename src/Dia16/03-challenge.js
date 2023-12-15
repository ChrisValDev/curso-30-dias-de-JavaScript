/*mplementa la lógica para proteger un objeto de cambios.

En este desafío, debes implementar la lógica de la función llamada protectDog que reciba como parámetro los datos de un perro como objeto.

La función debe crear una copia del objeto original utilizando el método Object.assign, almacenarla en una variable y luego congelar la copia utilizando el método Object.freeze para evitar cualquier cambio en sus propiedades, incluyendo los objetos anidados.

De esta manera, el objeto original no se verá afectado y todos los objetos anidados también serán protegidos de ser modificados.*/

function protectDog(dog) {
    const copy = Object.assign({}, dog);
    Object.freeze(copy);
    
    for(let key in copy) {
        const value = copy[key];
        if(typeof value === 'object') {
            Object.freeze(value);
        }
    }
    return copy;
}

protectDog({
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
});