// Crear una nueva instancia de la fecha
var fechaActual = new Date();

// Obtener el día, mes y año
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0
var anio = fechaActual.getFullYear();

// Formatear la fecha en formato dd/mm/yyyy
var fechaFormateada = dia + '/' + mes + '/' + anio;

// Mostrar la fecha en el elemento <time>
document.getElementById('fecha').textContent = fechaFormateada;
