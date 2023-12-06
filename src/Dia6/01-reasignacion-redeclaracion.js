// En JavaScript, la reasignación y la redeclaración son dos conceptos diferentes relacionados con las variables.
// Reasignación se refiere al proceso de darle un nuevo valor a una variable existente. Por ejemplo:

let numero = 5;
numero = 10; // Reasignacion

// Además, es importante mencionar que las variables declaradas con la palabra clave “const” no pueden ser reasignadas, ya que su valor es constante. Si se intenta reasignar una variable declarada con “const”, se generará un error en el código. Por ejemplo:

const number = 5;
number = 10;

// Por otro lado, redeclaración se refiere al proceso de crear una nueva variable con el mismo nombre de una variable existente. Por ejemplo:

let numero1 = 5;
let numero1 = 10;

// En este ejemplo, se está intentando crear una nueva variable “numero” con un valor de 10, pero esto generará un error ya que no se puede redeclarar una variable con el mismo nombre en el mismo ámbito. Sin embargo, es posible redeclarar una variable utilizando la palabra clave “var” en lugar de “let” o “const”.

var number1 = 5;
var number1 = 10;
console.log(number1); // Esto funciona sin problema

// Ten en cuenta que la reasignación y la redeclaración tienen implicaciones diferentes en el código y deben utilizarse con cuidado para evitar errores y confusiones en el código. Es recomendable utilizar “let” o “const” en lugar de “var” para evitar la redeclaración accidental de variables.

