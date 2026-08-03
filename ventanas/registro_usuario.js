<script></script>

function Registro() {

    var pass1 = document.getElementById('password').value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var user = document.getElementById("username").value;

    var now = new Date();
    var currentY = now.getFullYear();
    var currentM = now.getMonth();

    var dobget = document.getElementById("nacimiento").value;
    var dob = new Date(dobget);
    var prevY = dob.getFullYear();
    var prevM = dob.getMonth();

    var ageY = currentY - prevY;
    var ageM = Math.abs(currentM - prevM);

    if (ageY < 18) {
        alert("Necesitas 18 años")
        return;
    }

    if (pass1 != pass2) {
        alert("Las contraseñas no coinciden");

    }

}

function check() {
    var input = document.getElementById('confcontraseña');
    if (input.value != document.getElementById('contraseña').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}