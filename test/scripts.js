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
        { numero: 3, url: 'https://ordinario.com/ejemplo3' },
        { numero: 4, url: 'https://ordinario.com/ejemplo4' }
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
