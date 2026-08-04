// Etiqueta para incluir código JavaScript dentro del documento HTML
<script></script>

// Función que realiza las validaciones del formulario de registro
function Registro() {

    // Obtiene la contraseña escrita por el usuario
    var pass1 = document.getElementById('password').value;

    // Obtiene la confirmación de la contraseña
    var pass2 = document.getElementById("password2").value;

    // Obtiene el nombre del usuario
    var name = document.getElementById("name").value;

    // Obtiene el apellido paterno
    var Paterno = document.getElementById("apellidoP").value;

    // Obtiene el apellido materno
    var Materno = document.getElementById("apellidoM").value;

    // Obtiene el correo electrónico
    var email = document.getElementById("email").value;

    // Obtiene el nombre de usuario
    var user = document.getElementById("username").value;


    // Obtiene la fecha actual del sistema
    var now = new Date();

    // Guarda el año actual
    var currentY = now.getFullYear();

    // Guarda el mes actual
    var currentM = now.getMonth();


    // Obtiene la fecha de nacimiento ingresada
    var dobget = document.getElementById("nacimiento").value;

    // Convierte la fecha de nacimiento a un objeto Date
    var dob = new Date(dobget);

    // Obtiene el año de nacimiento
    var prevY = dob.getFullYear();

    // Obtiene el mes de nacimiento
    var prevM = dob.getMonth();


    // Calcula la edad aproximada en años
    var ageY = currentY - prevY;

    // Calcula la diferencia de meses
    var ageM = Math.abs(currentM - prevM);


    // Verifica que el usuario tenga al menos 18 años
    if (ageY < 18) {
        alert("Necesitas 18 años");
        return; // Detiene la ejecución de la función
    }


    // Comprueba que ambas contraseñas sean iguales
    if (pass1 != pass2) {
        alert("Las contraseñas no coinciden");
    }

}


// Función que valida en tiempo real que las contraseñas coincidan
function check() {

    // Obtiene el campo de confirmación de contraseña
    var input = document.getElementById('confcontraseña');

    // Compara la contraseña original con la confirmación
    if (input.value != document.getElementById('contraseña').value) {

        // Muestra un mensaje de error personalizado si son diferentes
        input.setCustomValidity('Password Must be Matching.');

    } else {

        // Si coinciden, elimina el mensaje de error
        input.setCustomValidity('');
    }
}