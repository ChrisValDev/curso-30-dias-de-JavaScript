/* En este desafío, tu objetivo es encontrar un valor específico en un array de dos dimensiones.

La función searchValue recibirá dos parámetros: un array bidimensional y un valor a buscar. Tu tarea será implementar la lógica necesaria para encontrar el valor y retornar un objeto con las propiedades row y column que indicarán la posición del valor dentro del array bidimensional.

Si el valor no se encuentra en la matriz, la función deberá lanzar un error con el mensaje "Valor no encontrado". Recuerda que la sintaxis para lanzar errores es la siguiente

throw new Error("Valor no encontrado");*/

function searchValue(array, value) {
    const result = {
        row: 0,
        column: 0,
    }
    const validation = array.flat();
    const isValue = validation.some(num => num === value);
    if(!isValue) {
        throw new Error(`Valor ${value} no encontrado`);
    }
    const indexRow = array.findIndex(row => row.find((num) => num === value));
    result.row = indexRow;

    const indexColumn = array[indexRow].findIndex((num) => num === value);
    result.column = indexColumn;

    return result;
};

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
    
const value = 5;

console.log(searchValue(array, value));