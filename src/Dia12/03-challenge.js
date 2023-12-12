/*En este desafío deberás validar un formulario de registro de usuario.

Tu tarea es implementar la lógica de la función validateForm la cual recibirá como parámetro un objeto con los datos del formulario al igual que una lista de usurios registrados.

La función debe verificar que todos los campos requeridos del formulario (name, lastname, email y password) estén completos, si falta algún campo, debe lanzar un error especificando los campos faltantes.

Para lanzar dicho error debes usar la siguiente sintaxis

throw new Error("Faltan los siguientes campos: name, email, etc...");

Además, la función debe verificar si el email ingresado ya existe en la lista de usuarios registrados. Si el email ya está en uso, debe retornar un error especificando el email duplicado.

Si todo está correcto, se debe agregar el usuario a la lista de usuarios registrados con todos los datos excepto la contraseña y retornar un mensaje indicando que el registro fue exitoso junto con el nombre y apellido del usuario.*/

function validateForm(formData, registeredUsers) {
    // validar que todos los campos del formulario esten completos (name, lastname, email, password)
    const propObligatorias = ["name", "lastname", "email", "password"];
    const isHaveAllProperties = propObligatorias.every(propiedad => formData.hasOwnProperty(propiedad));
    if(!isHaveAllProperties) {
        throw new Error(`Faltan los siguientes campos: name, email, etc...`);
        // si falta algun dato, lanzar error especificando los campos faltantes utilizando la siguiente sintaxis -- throw new Error("Faltan los siguientes campos: name, email, etc...");
    }

    if(registeredUsers.find(user => user.email === formData.email)) {   
        throw new Error(`El correo ${formData.email} esta duplicado`);
        // validar si el email ingresado ya existe en la lista de usuarios, si existe se debe retornar un error indicando que el email esta duplicado.
    }
    delete formData.password;
    registeredUsers.push(formData);
    // Si el email no existe, agregar el usuario a la lista de usuarios con todos los datos excepto la contrasena y retornar mensaje indicando que el registro fue exitoso junto con el nombre y apellido del usuario.
    return `Tu registro fue exitoso ${formData.name} ${formData.lastname}.`;
}

const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
  }

  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]
  

  console.log(validateForm(formData, registeredUsers)); 
