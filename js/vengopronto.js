// Función para mostrar u ocultar la imagen
function mostrarImagen(id) {
    const imagen = document.getElementById(id);
    if (imagen.style.display === "none" || imagen.style.display === "") {
        imagen.style.display = "block"; // Muestra la imagen
    } else {
        imagen.style.display = "none"; // Oculta la imagen
    }
}