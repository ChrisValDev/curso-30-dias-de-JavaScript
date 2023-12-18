// El encapsulamiento es uno de los principios fundamentales de la programación orientada a objetos, y se refiere a la idea de que los datos y métodos de un objeto deben estar protegidos y no deben ser accesibles directamente desde fuera del objeto.

// Por ejemplo, supongamos que estamos creando una aplicación de un banco en la que se necesita almacenar información sobre las cuentas de los clientes, como su número de cuenta, saldo y nombre. Podríamos definir una clase Account como una abstracción de la información de una cuenta, con propiedades como numeroCuenta, saldo y nombre.

class Account {
    constructor(accountNumber, balance, name) {
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._name = name;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(quantity) {
        if(quantity <= this._balance) {
            this._balance -= quantity;
            } else {
                console.log("Saldo insuficiente");
            }
    }

    getBalance() {
        return this._balance;
    }
}

// En este ejemplo, las propiedades _accountNumber, _balance y _name se definen dentro del constructor con el prefijo _. Este prefijo se utiliza comúnmente para indicar que estas propiedades son privadas y no deben ser accesibles directamente desde fuera de la clase.

// La clase Account también define métodos públicos como deposit(), withdraw() y getBalance() que permiten interactuar con los datos privados de la cuenta. Estos métodos se pueden llamar desde fuera de la clase, pero el usuario no puede acceder directamente a las propiedades privadas de la cuenta.

// Por ejemplo, podríamos crear una nueva cuenta y depositar algo de dinero en ella:

const myAccount = new Account("123456789", 1000, "Juan");
myAccount.deposit(500);
console.log(myAccount.getBalance());

// En este ejemplo, el usuario no puede acceder directamente al saldo de la cuenta utilizando la propiedad _balance, sino que debe llamar al método obtenerSaldo(). Esto asegura que los datos de la cuenta estén protegidos y que el usuario solo pueda interactuar con ellos a través de la interfaz pública de la clase.

// Getters y setters
// Podemos mejorar aún más el encapsulamiento de la clase Cuenta utilizando **getters** y setters. Los getters y setters son métodos especiales que permiten acceder y modificar las propiedades privadas de un objeto de forma controlada.

// En este caso, podemos definir getters y setters para las propiedades _balance y _name de la clase Account. Los getters permiten acceder a las propiedades privadas, mientras que los setters permiten modificarlas. Al utilizar getters y setters, podemos validar los valores de las propiedades antes de asignarlos, lo que nos da un mayor control sobre el estado interno del objeto.

class Account {
    constructor(accountNumber, balance, name) {
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._name = name;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(quantity) {
        if(quantity <= this._balance) {
            this._balance -= quantity;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    get balance() {
        return this._balance;
    }

    set balance(newBalance) {
        if(newBalance < 0) {
            console.log("El saldo no puede ser negativo");
        } else {
            this._balance = newBalance;
        }
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if(newName === "") {
            console.log("El nombre no puede estar vacio");
        } else {
            this._name = newName;
        }
    }
}

// En este ejemplo, hemos agregado getters y setters para las propiedades _balance y _name utilizando la sintaxis de las propiedades computadas de la clase. Los getters tienen el mismo nombre que las propiedades privadas, mientras que los setters tienen el mismo nombre pero con el prefijo set.

// Ahora podemos crear una nueva cuenta y acceder y modificar su saldo y nombre utilizando los getters y setters:

const accountChris = new Account("123456789", 1000, "Christopher");
accountChris.balance = 1500;
console.log(accountChris.balance);
accountChris.name = "Chris";
console.log(accountChris.name);

// En este ejemplo, al modificar el saldo de la cuenta utilizando el setter, primero validamos que el nuevo saldo no sea negativo antes de asignarlo a la propiedad _balance. De esta forma, nos aseguramos de que el saldo de la cuenta nunca sea negativo.

// También validamos que el nuevo nombre no esté vacío antes de asignarlo a la propiedad _nombre utilizando el setter correspondiente. De esta forma, nos aseguramos de que la cuenta siempre tenga un nombre válido.