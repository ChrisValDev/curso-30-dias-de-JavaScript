/* En este desafío tendrás que crear una calculadora mediante el uso de closures.

La calculadora debe contar con los siguientes métodos:

add: recibe un número, lo suma al total y devuelve el resultado
subtract: recibe un número, lo resta al total y devuelve el resultado
multiply: recibe un número, lo multiplica al total y devuelve el resultado
divide: recibe un número, lo divide al total y devuelve el resultado
clear: reinicia el total a 0 y devuelve el resultado
getTotal: devuelve el total actual.
*/

function createCalculator() {
    let total = 0;
    return {
        add(num) {
            total += num;
            return total;
        },
        subtract(num) {
            total -= num;
            return total;
        },
        multiiply(num) {
            total *= num;
            return total;
        },
        divide(num) {
            total /= num;
            return total;
        },
        clear() {
            total = 0;
            return total;
        },
        getTotal() {
            return total;
        }
    }
}

/*
--Ejemplo 1:

Input:
const calculator = createCalculator()
calculator.add(10)

Output: 10

--Ejemplo 2:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)

Output: 20

--Ejemplo 3:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)
calculator.clear()

Output: 0
*/