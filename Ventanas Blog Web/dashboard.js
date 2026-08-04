// Espera a que todo el contenido HTML de la página haya cargado
document.addEventListener("DOMContentLoaded", function (e) {

    // Obtiene todos los elementos que tengan la clase "descripcion"
    const parrafos = document.querySelectorAll(".descripcion");

    // Arreglo para guardar la altura de cada párrafo
    let alturas = [];

    // Variable donde se almacenará la altura más grande encontrada
    let alturaMaxima = 0;

    // Función que se ejecuta inmediatamente para igualar las alturas
    const aplicarAlturas = (function aplicarAlturas() {

        // Recorre todos los párrafos encontrados
        parrafos.forEach(parrafo => {

            // Si aún no se ha calculado la altura máxima,
            // guarda la altura de cada párrafo en el arreglo.
            // (Nota: aquí debería usarse == o === en lugar de =)
            if (alturaMaxima = 0) {
                alturas.push(parrafo.clientHeight);
            }
            else {
                // Asigna la misma altura a todos los párrafos
                // utilizando la altura máxima calculada
                parrafo.style.height = alturaMaxima + "px";
            }
        });

        // Devuelve la función para poder ejecutarla nuevamente
        return aplicarAlturas;
    })();

    // Calcula cuál es la altura mayor del arreglo de alturas
    alturaMaxima = Math.max.apply(Math, alturas);

    // Ejecuta nuevamente la función para aplicar la altura máxima
    // a todos los párrafos
    aplicarAlturas();

});