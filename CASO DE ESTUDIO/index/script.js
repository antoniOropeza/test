document.addEventListener("DOMContentLoaded", function () {
    const textoElement = document.getElementById("texto-container");
    const textoContainer = document.getElementById("texto-container");
    const textoOriginal = "Imagina que eres líder en una Dirección dentro del Instituto Mexicano del Seguro Social, que tienes que entregar un trabajo muy importante y, para ello, cuentas<br>con un equipo de trabajo.<br><br>Han estado trabajando duro para cumplir con un importante plazo de entrega de un proyecto. Uno de los integrantes del equipo de trabajo, Pedro, ha estado enfrentando dificultades personales en casa y ha estado llegando tarde al trabajo con regularidad durante las últimas semanas. Esto ha empezado a afectar el progreso del proyecto y la moral del equipo.<br><br>Ahora, te enfrentas a la tarea de abordar la situación y tomar medidas para mantener el proyecto en marcha y apoyar a Pedro. Ten en cuenta esta situación al responder las siguientes preguntas.";
    let textoParcial = "";
    let index = 0;

    function escribirTexto() {
        if (index < textoOriginal.length) {
            textoParcial += textoOriginal.charAt(index);
            textoElement.innerHTML = textoParcial;
            index++;
            setTimeout(escribirTexto, 2); // Velocidad de escritura (ajusta según desees)
        }
    }

    escribirTexto();
});




document.addEventListener("DOMContentLoaded", function () {
    const inicioimagen = document.getElementById("inicioimagen");
    const mantieneimagen = document.getElementById("mantieneimagen");

    // Duración del temporizador en milisegundos (por ejemplo, 5000 ms = 5 segundos).
    const tiempoDeEspera = 2000;

    setTimeout(function () {
        // Cambiar la visibilidad de las imágenes.
        inicioimagen.style.display = "none";
        mantieneimagen.style.display = "block";

        // Aquí puedes agregar cualquier otra acción que desees realizar al cambiar la imagen.
    }, tiempoDeEspera);
});