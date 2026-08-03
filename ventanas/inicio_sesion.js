const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");

form.addEventListener("ingresar", e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usuarioValue = usuario.nodeValue.trim();
    const contraseñaValue = contraseña.value.trim();

    if (usuarioValue === "") {
        setErrorFor(usuario, "No puede dejar el usuario en blanco");
    }
    else {
        setSuccessFor(usuario);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElemental;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
