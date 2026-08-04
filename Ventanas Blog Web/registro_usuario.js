// Función que valida la información del formulario de registro
function Registro() {

    // Obtiene el valor de la contraseña
    var contraseña = document.getElementById('contraseña').value;

    // Obtiene el valor de la confirmación de contraseña
    var confcontraseña = document.getElementById("confcontraseña").value;

    // Obtiene el nombre del usuario
    var nombre = document.getElementById("nombre").value;

    // Obtiene los apellidos del usuario
    var apellidos = document.getElementById("apellidos").value;

    // Obtiene el correo electrónico
    var correo = document.getElementById("correo").value;

    // Obtiene el nombre de usuario
    var usuario = document.getElementById("usuario").value;


    // Obtiene la fecha actual del sistema
    var now = new Date();

    // Guarda el año actual
    var currentY = now.getFullYear();

    // Guarda el mes actual
    var currentM = now.getMonth();


    // Obtiene la fecha de nacimiento seleccionada en el formulario
    var dobget = document.getElementById("nacimiento").value;

    // Convierte la fecha de nacimiento en un objeto Date
    var dob = new Date(dobget);

    // Obtiene el año de nacimiento
    var prevY = dob.getFullYear();

    // Obtiene el mes de nacimiento
    var prevM = dob.getMonth();


    // Calcula la diferencia de años entre la fecha actual y la fecha de nacimiento
    var ageY = currentY - prevY;

    // Calcula la diferencia de meses
    var ageM = Math.abs(currentM - prevM);


    // Verifica que el usuario sea mayor de edad
    if (ageY < 18) {
        alert("Necesitas ser mayor de 18 años");
        return; // Detiene la ejecución de la función
    }


    // Comprueba que ambas contraseñas sean iguales
    if (contraseña != confcontraseña) {
        alert("Las contraseñas no coinciden");
    }

}


// Función que valida en tiempo real que ambas contraseñas coincidan
function check() {

    // Obtiene el campo de confirmación de contraseña
    var input = document.getElementById('confcontraseña');

    // Compara el valor escrito con la contraseña original
    if (input.value != document.getElementById('contraseña').value) {

        // Muestra un mensaje de error personalizado si no coinciden
        input.setCustomValidity('Password Must be Matching.');

    } else {

        // Si coinciden, elimina el mensaje de error y permite enviar el formulario
        input.setCustomValidity('');
    }
}