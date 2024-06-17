function mostrarPanel() {
    const select = document.getElementById('tiempoLiturgico');
    const panel = document.getElementById('panel');

    // Obtener el valor seleccionado
    const selectedValue = select.value;

    // Contenido del panel según la selección
    let panelContent = '';

    switch (selectedValue) {
        case 'adviento':
            panelContent = generarListBox([1, 2, 3, 4]);
            break;
        case 'ordinario':
            panelContent = generarListBoxConEnlaceTiempoOrdinario();
            break;
        case 'cuaresma':
            panelContent = generarListBox([1, 2, 3, 4, 5, 6, 7]);
            break;
        case 'pascual':
            panelContent = generarListBox([1, 2, 3, 4, 5, 6, 7]);
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
                switch (selectedNumber) {
                    case 1:
                        window.location.href = 'https://1.com';
                        break;
                    case 2:
                        window.location.href = 'https://2.com';
                        break;
                    // Agregar más casos para otros números si es necesario
                    default:
                        break;
                }
            });
        }
    } else {
        panel.style.display = 'none';
    }
}

// Función para generar un list box con enlaces específicos para Tiempo Ordinario
function generarListBoxConEnlaceTiempoOrdinario() {
    let listBoxHTML = '<select id="numeroListBox">';

    for (let i = 1; i <= 34; i++) {
        let enlace = ''; // Variable para almacenar el enlace correspondiente

        // Asignar el enlace según el número
        switch (i) {
            case 1:
                enlace = 'https://1.com';
                break;
            case 2:
                enlace = 'https://2.com';
                break;
            default:
                enlace = ''; // No hay enlace para otros números
                break;
        }

        // Generar la opción con enlace (si hay enlace)
        if (enlace !== '') {
            listBoxHTML += `<option value="${i}">${i}</option>`;
        } else {
            listBoxHTML += `<option value="${i}">${i}</option>`;
        }
    }

    listBoxHTML += '</select>';

    return listBoxHTML;
}
