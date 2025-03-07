document.addEventListener("DOMContentLoaded", function () {
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Nombres de los meses en español
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Formatear día, mes y año
    const dia = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const anio = fechaActual.getFullYear();
    const fechaFormateada = `${dia} ${mes} ${anio}`;
    const fechaSinAño = `${dia}/${fechaActual.getMonth() + 1}`; // Formato día/mes

    // Obtener los elementos de los botones
    const salmodiaBoton = document.getElementById("salmodia-enlace");
    const santoBotones = document.getElementById("santo-enlace");

    // Verificar si la fecha está en el catálogo de salmodia
    if (catalogoSalmodia[`${dia}/${fechaActual.getMonth() + 1}/${anio}`]) {
        // Asignar la acción de redirigir al enlace correspondiente al botón de salmodia
        salmodiaBoton.onclick = function () {
            window.location.href = catalogoSalmodia[`${dia}/${fechaActual.getMonth() + 1}/${anio}`];
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
            boton.onclick = function () {
                window.location.href = santo.enlace;
            };

            // Añadir el botón al contenedor
            santoBotones.appendChild(boton);
        });
    } else {
        // Manejar el caso en que no hay datos para la fecha actual
        const noDisponible = document.createElement("span");
        noDisponible.textContent = `${fechaFormateada}`;
        santoBotones.appendChild(noDisponible);
    }
});
