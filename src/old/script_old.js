document.addEventListener("DOMContentLoaded", function () {
    // Obtener la fecha actual
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11

    // Formatear la fecha en el formato deseado (día/mes)
    const fechaFormateada = `${dia}/${mes}`;

    // Obtener los elementos de los enlaces
    const salmodiaEnlace = document.getElementById("salmodia-enlace");
    const santoEnlaces = document.getElementById("santo-enlaces");

    // Verificar si la fecha está en el catálogo de salmodia
    if (catalogoSalmodia[fechaFormateada]) {
        // Establecer el enlace de la salmodia del día
        salmodiaEnlace.href = catalogoSalmodia[fechaFormateada];
    } else {
        // Manejar el caso en que no hay datos para la fecha actual
        salmodiaEnlace.textContent = "No disponible";
        salmodiaEnlace.href = "#";
    }

    // Verificar si la fecha está en el catálogo de santos
    if (catalogoSanto[fechaFormateada]) {
        // Limpiar el contenido previo
        santoEnlaces.innerHTML = "";

        const santos = catalogoSanto[fechaFormateada];
        santos.forEach(santo => {
            // Crear un nuevo enlace para cada santo
            const enlace = document.createElement("a");
            enlace.textContent = santo.nombre;
            enlace.href = santo.enlace;
            enlace.style.display = "block"; // Añadir un estilo para que cada enlace aparezca en una nueva línea

            // Añadir el enlace al contenedor
            santoEnlaces.appendChild(enlace);
        });
    } else {
        // Manejar el caso en que no hay datos para la fecha actual
        const noDisponible = document.createElement("span");
        noDisponible.textContent = "No disponible";
        santoEnlaces.appendChild(noDisponible);
    }
});
