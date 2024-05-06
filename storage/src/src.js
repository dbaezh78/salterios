// font-selector.js
document.addEventListener('DOMContentLoaded', function () {
  // Crear el elemento select
  const selectElement = document.createElement('select');
  selectElement.id = 'tamanioFuente';

  // Crear las opciones
  const options = [
    { value: '1.5', text: 'Grande' },
    { value: '1.3', text: 'Mediano' },
    { value: '1.1', text: 'Pequeño' }
  ];

  // Agregar las opciones al select
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectElement.appendChild(optionElement);
  });

  // Agregar el select al documento
  const fontSelectorContainer = document.getElementById('font-selector');
  fontSelectorContainer.appendChild(selectElement);

  // Agregar evento onchange al select para cambiar el tamaño de fuente
  selectElement.addEventListener('change', function () {
    document.getElementById('cuerpo').style.fontSize = this.value + 'em';
  });
});
