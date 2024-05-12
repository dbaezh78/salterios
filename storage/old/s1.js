document.addEventListener('DOMContentLoaded', () => {
    const categoriasCheckboxes = document.querySelectorAll('input[name="categoria"]');
    const contentDiv = document.getElementById('contenido');

    categoriasCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
            const categoriaSeleccionada = event.target.value;
            let content = '';

            if (event.target.checked) {
                switch (categoriaSeleccionada) {
                    case 'adviento':
                        content += generarSemanas('Adviento', 4);
                        break;

                    case 'navidad':
                        content += generarSemanasConCirculos('Navidad', [
                            { semana: 'Semana 1', dias: ['25 dic', '26 dic', '27 dic', '28 dic'] },
                            { semana: 'Semana 2', dias: ['31 dic', '1 ene', '2 ene', '3 ene', '4 ene', '5 ene', '6 ene'] },
                            { semana: 'Semana 3', dias: ['7 ene', '8 ene', '9 ene', '10 ene', '11 ene', '12 ene', '13 ene'] }
                        ]);
                        break;

                    case 'ordinario':
                        content += generarSemanas('Ordinario', 34);
                        break;

                    case 'cuaresma':
                        content += generarSemanas('Cuaresma', 6);
                        break;

                    case 'pascua':
                        content += generarSemanas('Pascua', 8);
                        break;

                    case 'santos':
                        content += generarSantos();
                        break;

                    default:
                        break;
                }
            }

            contentDiv.innerHTML = content;
        });
    });

    // Función para generar semanas con círculos
    function generarSemanasConCirculos(categoria, semanas) {
        let semanasHTML = `<h2>${categoria}</h2>`;
        
        semanas.forEach((semanaData, index) => {
            semanasHTML += `<fieldset>
                                <legend>${semanaData.semana}</legend>`;
            
            semanaData.dias.forEach((dia, diaIndex) => {
                const inputId = `${categoria.toLowerCase()}Semana${index + 1}Dia${diaIndex + 1}`;
                semanasHTML += `
                    <label class="radio-label">
                        <input type="radio" id="${inputId}" name="${categoria.toLowerCase()}Semana${index + 1}" value="${dia}">
                        <div class="radio-circle"></div> ${dia}
                    </label>`;
            });

            semanasHTML += `</fieldset>`;
        });

        return semanasHTML;
    }

    // Otras funciones (generarSemanas, generarSantos) no modificadas...
});
