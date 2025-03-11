// Función para abrir la carpeta del día
function openDayFolder(year, month, day) {
    // Construir la ruta de la carpeta
    const folderPath = `/lab/cal/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/`;
    console.log("Ruta de la carpeta:", folderPath);

    // Cargar la URL en el iframe
    dayFrame.src = folderPath;

    // Mostrar la fecha seleccionada
    const selectedDate = document.getElementById('selectedDate');
    selectedDate.textContent = `Fecha seleccionada: ${day}/${month}/${year}`;
}



// Variables globales
	let currentDate = new Date(); // Fecha actual
	let currentMonth = currentDate.getMonth(); // Mes actual (0-11)
	let currentYear = currentDate.getFullYear(); // Año actual

	// Elementos del DOM
	const calendar = document.getElementById('calendar');
	const monthSelector = document.getElementById('monthSelector');
	const prevMonthButton = document.getElementById('prevMonth');
	const nextMonthButton = document.getElementById('nextMonth');
	const dayFrame = document.getElementById('dayFrame');

	// Inicializar el calendario
	function initCalendar() {
		renderCalendar(currentYear, currentMonth);
		monthSelector.value = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
	}

	// Función para verificar si un año es bisiesto
	function isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	// Función para obtener el número de días en un mes
	function getDaysInMonth(year, month) {
		if (month === 1) { // Febrero
			return isLeapYear(year) ? 29 : 28;
		}
		return new Date(year, month + 1, 0).getDate();
	}

	// Renderizar el calendario
	function renderCalendar(year, month) {
		// Limpiar el calendario (excepto los nombres de los días)
		while (calendar.children.length > 7) {
			calendar.removeChild(calendar.lastChild);
		}

		// Obtener el primer día del mes y el número de días en el mes
		const firstDayOfMonth = new Date(year, month, 1);
		const daysInMonth = getDaysInMonth(year, month);
		const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

		// Crear días vacíos para la primera semana
		for (let i = 0; i < firstDayOfWeek; i++) {
			const emptyDay = document.createElement('div');
			calendar.appendChild(emptyDay);
		}

		// Crear los días del mes
		for (let day = 1; day <= daysInMonth; day++) {
			const dayElement = document.createElement('div');
			dayElement.classList.add('day');
			dayElement.textContent = day;
			dayElement.addEventListener('click', () => openDayFolder(year, month + 1, day));
			calendar.appendChild(dayElement);
		}
	}

	// Función para abrir la carpeta del día
	function openDayFolder(year, month, day) {
		// Construir la ruta de la carpeta
		const folderPath = `/lab/cal/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/`;
		console.log("Ruta de la carpeta:", folderPath);

		// Cargar la URL en el iframe
		dayFrame.src = folderPath;
	}

	// Navegación entre meses
	prevMonthButton.addEventListener('click', () => {
		currentMonth--;
		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		}
		renderCalendar(currentYear, currentMonth);
		monthSelector.value = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
	});

	nextMonthButton.addEventListener('click', () => {
		currentMonth++;
		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		}
		renderCalendar(currentYear, currentMonth);
		monthSelector.value = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
	});

	// Seleccionar mes desde el input
	monthSelector.addEventListener('change', (event) => {
		const [year, month] = event.target.value.split('-').map(Number);
		currentYear = year;
		currentMonth = month - 1; // Ajustar el mes (0-11)
		renderCalendar(currentYear, currentMonth);
	});

	// Inicializar el calendario al cargar la página
	initCalendar();


	// Función para abrir la carpeta del día

	function openDayFolder(year, month, day) {
		// Construir la ruta de la carpeta
		const folderPath = `/lab/cal/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/`;
		console.log("Ruta de la carpeta:", folderPath);
	
		// Cargar la URL en el iframe
		dayFrame.src = folderPath;
	
		// Mostrar la fecha seleccionada
		const selectedDate = document.getElementById('selectedDate');
		
		// Array con los nombres de los meses
		const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
		
		// Mostrar la fecha con el mes en letras
		selectedDate.textContent = `${day} de ${months[month - 1]} de ${year}`;
	}
