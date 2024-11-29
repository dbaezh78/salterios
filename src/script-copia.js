document.addEventListener("DOMContentLoaded", function () {
    // Obtener la fecha actual
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const año = fechaActual.getFullYear();

    // Formatear la fecha en el formato deseado (día/mes/año)
    const fechaFormateada = `${dia}/${mes}/${año}`;

    // Formatear la fecha sin el año para el catálogo de santos
    const fechaSinAño = `${dia}/${mes}`;

    // Obtener los elementos de los botones
    const salmodiaBoton = document.getElementById("salmodia-enlace");
    const santoBotones = document.getElementById("santo-enlace");

    // Verificar si la fecha está en el catálogo de salmodia
    if (catalogoSalmodia[fechaFormateada]) {
        // Asignar la acción de redirigir al enlace correspondiente al botón de salmodia
        salmodiaBoton.onclick = function() {
            window.location.href = catalogoSalmodia[fechaFormateada];
        };
    } else {
        // Manejar el caso en que no hay datos para la fecha actual
        salmodiaBoton.textContent = "Salmodia no disponible";
        salmodiaBoton.disabled = true;
    }

    // Verificar si la fecha está en el catálogo de santos
    if (catalogoSanto[fechaSinAño]) {
        // Limpiar el contenido previo
        santoBotones.innerHTML = "";

        const santos = catalogoSanto[fechaSinAño];
        santos.forEach(santo => {
            // Crear un nuevo botón para cada santo
            const boton = document.createElement("button");
            boton.textContent = santo.nombre;
            boton.onclick = function() {
                window.location.href = santo.enlace;
            };

            // Añadir el botón al contenedor
            santoBotones.appendChild(boton);
        });
    } else {
        // Manejar el caso en que no hay datos para la fecha actual
        const noDisponible = document.createElement("span");
        noDisponible.textContent = fechaActual;
        santoBotones.appendChild(noDisponible);
    }
});