// En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.
// La función calculateTip recibirá dos parámetros, billAmount que representa el costo total de lo que se haya consumido y tipPercentage que representa el porcentaje de propina a dejar. Ambos valores serán de tipo Number y siempre serán positivos, incluyendo el 0. La función deberá devolver el valor de la propina como un número.

function calculateTip(billAmount, tipPercentage) {
    let calculo = billAmount * tipPercentage;
    let propina = calculo / 100;
    return propina;
  }
console.log(calculateTip(100, 10));
console.log(calculateTip(1524.33, 25));