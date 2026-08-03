const form = document.getElementById("form");           // Obtiene el formulario mediante su ID
const usuario = document.getElementById("usuario");         // Obtiene el campo donde se escribe el usuario
const contraseña = document.getElementById("contraseña");       // Obtiene el campo donde se escribe la contraseña


form.addEventListener("ingresar", e => {    // Agrega un evento al formulario cuando se intenta ingresar
    e.preventDefault();                     // Evita que el formulario se envíe automáticamente
    checkInputs();                          // Llama a la función que valida los datos ingresados
});


function checkInputs() {                                    // Función encargada de validar los campos del formulario
    const usuarioValue = usuario.nodeValue.trim();          // Obtiene el texto escrito en el campo de usuario y elimina espacios al inicio y final
    const contraseñaValue = contraseña.value.trim();        // Obtiene el texto escrito en la contraseña y elimina espacios al inicio y final

    if (usuarioValue === "") {                              // Verifica si el usuario está vacío
        setErrorFor(usuario, "No puede dejar el usuario en blanco");        // Muestra un mensaje de error si no se escribió un usuario
    }
    else {
        setSuccessFor(usuario);                             // Si el usuario es válido, muestra el campo como correcto
    }
}

function setErrorFor(input, message) {                      // Función que muestra un mensaje de error
    const formControl = input.parentElemental;              // Obtiene el contenedor del campo
    const small = formControl.querySelector("small");       // Busca la etiqueta <small> donde aparecerá el mensaje de error
    formControl.className = "form-control error";           // Cambia la clase para aplicar el estilo de error
    small.innerText = message;                              // Muestra el mensaje de error
}

function setSuccessFor(input) {                             // Función que indica que el campo es válido
    const formControl = input.parentElement;                // Obtiene el contenedor del campo
    formControl.className = "form-control success";         // Cambia la clase para aplicar el estilo de éxito
}
