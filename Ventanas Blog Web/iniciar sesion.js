// Obtiene el formulario mediante su id
const form = document.getElementById("form");

// Obtiene el campo de usuario
const usuario = document.getElementById("usuario");

// Obtiene el campo de contraseña
const contraseña = document.getElementById("contraseña");

// Agrega un evento al formulario cuando se intenta enviar
// Nota: "ingresar" no es un evento válido. Normalmente debe ser "submit".
form.addEventListener("ingresar", e => {

    // Evita que el formulario se envíe automáticamente
    e.preventDefault();

    // Llama a la función que valida los datos
    checkInputs();
});


// Función que verifica si los campos contienen información válida
function checkInputs() {

    // Obtiene el texto del usuario eliminando espacios al inicio y final
    // Nota: debería usarse usuario.value y no usuario.nodeValue.
    const usuarioValue = usuario.nodeValue.trim();

    // Obtiene la contraseña eliminando espacios innecesarios
    const contraseñaValue = contraseña.value.trim();

    // Comprueba si el usuario está vacío
    if (usuarioValue === "") {

        // Muestra un mensaje de error
        setErrorFor(usuario, "No puede dejar el usuario en blanco");

    } else {

        // Indica que el campo es válido
        setSuccessFor(usuario);
    }
}


// Función que muestra un error en un campo del formulario
function setErrorFor(input, message) {

    // Obtiene el contenedor del campo
    // Nota: parentElemental no existe. Debe ser parentElement.
    const formControl = input.parentElemental;

    // Busca la etiqueta <small> donde se mostrará el mensaje
    const small = formControl.querySelector("small");

    // Cambia la clase para mostrar el estilo de error
    formControl.className = "form-control error";

    // Escribe el mensaje de error
    small.innerText = message;
}


// Función que indica que un campo es válido
function setSuccessFor(input) {

    // Obtiene el contenedor del campo
    const formControl = input.parentElement;

    // Cambia la clase para mostrar el estilo de éxito
    formControl.className = "form-control success";
}