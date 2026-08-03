<script></script>       // Etiqueta para incluir código JavaScript dentro del documento HTML


// Función que se ejecuta al registrar un usuario
function Registro() {

    var pass1 = document.getElementById('password').value;          // Obtiene la contraseña ingresada por el usuario
    var name = document.getElementById("name").value;               // Obtiene el nombre del usuario
    var email = document.getElementById("email").value;             // Obtiene el correo electrónico
    var user = document.getElementById("username").value;           // Obtiene el nombre de usuario

    var now = new Date();                       // Obtiene la fecha actual
    var currentY = now.getFullYear();           // Obtiene el año actual
    var currentM = now.getMonth();              // Obtiene el mes actual

    var dobget = document.getElementById("nacimiento").value;        // Obtiene la fecha de nacimiento ingresada por el usuario
    var dob = new Date(dobget);                                      // Convierte la fecha de nacimiento en un objeto Date
    var prevY = dob.getFullYear();                                   // Obtiene el año de nacimiento
    var prevM = dob.getMonth();                                      // Obtiene el mes de nacimiento

    var ageY = currentY - prevY;                                     // Calcula la diferencia de años entre la fecha actual y la de nacimiento
    var ageM = Math.abs(currentM - prevM);                           // Calcula la diferencia de meses


    // Verifica si el usuario es menor de edad
    if (ageY < 18) {
        alert("Necesitas 18 años")      // Muestra un mensaje indicando que debe ser mayor de edad
        return;                         // Detiene la ejecución de la función
    }


    // Verifica que ambas contraseñas sean iguales
    if (pass1 != pass2) {
        alert("Las contraseñas no coinciden");      // Muestra un mensaje si las contraseñas no coinciden

    }

}


// Función para comprobar que la contraseña de confirmación sea igual a la original
function check() {
    var input = document.getElementById('confcontraseña');                  // Obtiene el campo donde se confirma la contraseña
    if (input.value != document.getElementById('contraseña').value) {       // Compara la contraseña confirmada con la contraseña original
        input.setCustomValidity('Password Must be Matching.');              // Muestra un mensaje de error de validación si son diferentes
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');                                        // Si las contraseñas coinciden, elimina el mensaje de error
    }
}