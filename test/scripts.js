function mostrarPanel() {
    const select = document.getElementById('tiempoLiturgico');
    const panel = document.getElementById('panel');

    // Obtener el valor seleccionado
    const selectedValue = select.value;

    // Contenido del panel según la selección
    let panelContent = '';

    switch (selectedValue) {
        case 'adviento':
            panelContent = generarListBoxConEnlacesAdviento();
            break;
        case 'ordinario':
            panelContent = generarListBoxConEnlacesOrdinario();
            break;
        case 'cuaresma':
            panelContent = generarListBoxConEnlacesCuaresma();
            break;
        case 'pascual':
            panelContent = generarListBoxConEnlacesPascual();
            break;
        default:
            panelContent = ''; // No se seleccionó nada
            break;
    }

    // Mostrar el panel y actualizar su contenido
    if (selectedValue !== '') {
        panel.style.display = 'block';
        panel.innerHTML = panelContent;

        // Agregar un listener para el evento de cambio en el list box
        const numeroListBox = document.getElementById('numeroListBox');
        if (numeroListBox) {
            numeroListBox.addEventListener('change', function() {
                const selectedNumber = parseInt(this.value); // Obtener el número seleccionado como entero

                // Redirigir a la URL correspondiente al número seleccionado
                switch (selectedValue) {
                    case 'adviento':
                        redirigirAdviento(selectedNumber);
                        break;
                    case 'ordinario':
                        redirigirOrdinario(selectedNumber);
                        break;
                    case 'cuaresma':
                        redirigirCuaresma(selectedNumber);
                        break;
                    case 'pascual':
                        redirigirPascual(selectedNumber);
                        break;
                    default:
                        break;
                }
            });
        }
    } else {
        panel.style.display = 'none';
    }
}

// Función para generar un list box con enlaces específicos para Tiempo de Adviento
function generarListBoxConEnlacesAdviento() {
    return generarListBoxConEnlaces([
        { numero: 1, url: 'https://adviento.com/ejemplo1' },
        { numero: 2, url: 'https://adviento.com/ejemplo2' },
        { numero: 3, url: 'https://adviento.com/ejemplo3' },
        { numero: 4, url: 'https://adviento.com/ejemplo4' }
    ]);
}

// Función para generar un list box con enlaces específicos para Tiempo Ordinario
function generarListBoxConEnlacesOrdinario() {
    return generarListBoxConEnlaces([
        { numero: 1, url: 'https://ordinario.com/ejemplo1' },
        { numero: 2, url: 'https://ordinario.com/ejemplo2' },
        // Agregar más enlaces para otros números del Tiempo Ordinario si es necesario
    ]);
}

// Función para generar un list box con enlaces específicos para Tiempo de Cuaresma
function generarListBoxConEnlacesCuaresma() {
    return generarListBoxConEnlaces([
        { numero: 1, url: 'https://cuaresma.com/ejemplo1' },
        { numero: 2, url: 'https://cuaresma.com/ejemplo2' },
        { numero: 3, url: 'https://cuaresma.com/ejemplo3' },
        { numero: 4, url: 'https://cuaresma.com/ejemplo4' },
        { numero: 5, url: 'https://cuaresma.com/ejemplo5' },
        { numero: 6, url: 'https://cuaresma.com/ejemplo6' },
        { numero: 7, url: 'https://cuaresma.com/ejemplo7' }
    ]);
}

// Función para generar un list box con enlaces específicos para Tiempo Pascual
function generarListBoxConEnlacesPascual() {
    return generarListBoxConEnlaces([
        { numero: 1, url: 'https://pascual.com/ejemplo1' },
        { numero: 2, url: 'https://pascual.com/ejemplo2' },
        { numero: 3, url: 'https://pascual.com/ejemplo3' },
        { numero: 4, url: 'https://pascual.com/ejemplo4' },
        { numero: 5, url: 'https://pascual.com/ejemplo5' },
        { numero: 6, url: 'https://pascual.com/ejemplo6' },
        { numero: 7, url: 'https://pascual.com/ejemplo7' }
    ]);
}

// Función genérica para generar un list box con enlaces específicos
function generarListBoxConEnlaces(enlaces) {
    let listBoxHTML = '<select id="numeroListBox">';

    enlaces.forEach(enlace => {
        listBoxHTML += `<option value="${enlace.numero}">${enlace.numero}</option>`;
    });

    listBoxHTML += '</select>';

    return listBoxHTML;
}

// Funciones específicas de redirección para cada Tiempo Litúrgico y número
function redirigirAdviento(numero) {
    switch (numero) {
        case 1:
            window.location.href = 'https://adviento.com/ejemplo1';
            break;
        case 2:
            window.location.href = 'https://adviento.com/ejemplo2';
            break;
        case 3:
            window.location.href = 'https://adviento.com/ejemplo3';
            break;
        case 4:
            window.location.href = 'https://adviento.com/ejemplo4';
            break;
        default:
            break;
    }
}

function redirigirOrdinario(numero) {
    switch (numero) {
        case 1:
            window.location.href = 'https://ordinario.com/ejemplo1';
            break;
        case 2:
            window.location.href = 'https://ordinario.com/ejemplo2';
            break;
        // Agregar más casos para otros números del Tiempo Ordinario si es necesario
        default:
            break;
    }
}

function redirigirCuaresma(numero) {
    // Implementar la lógica de redirección para Tiempo de Cuaresma según el número seleccionado
    switch (numero) {
        case 1:
            window.location.href = 'https://cuaresma.com/ejemplo1';
            break;
        case 2:
            window.location.href
