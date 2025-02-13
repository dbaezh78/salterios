const year = new Date().getFullYear(); // Obtiene el año actual
// const year = 2025; // Si prefieres un año fijo

// Lista de audios con su información
const audios = [
    // DIA DE LOS SANTOS
    { nombre: "Santa María, Madre de Dios", 			archivo: "/salterios/src/evan/audios/01enero.mp3", fecha: `${year}-01-01` }, // 1ro de Enero, Santa Maria Madre de Dios
    { nombre: "El Santísimo Nombre de Jesús", 			archivo: "/salterios/src/evan/audios/03enero.mp3", fecha: `${year}-01-03` }, // 3 de Enero Santisimo Nombre de nuestro Señor Jesucristo
    { nombre: "La Epifanía del Señor", 					archivo: "/salterios/src/evan/audios/06enero.mp3", fecha: `${year}-01-06` }, // 6 de Enero, Epifanía del Señor
    { nombre: "Día de la Altagracia", 					archivo: "/salterios/src/evan/audios/21enero.mp3", fecha: `${year}-01-21` }, // 21 de Enero, Día de la Altagracia
    { nombre: "La Conversión de San Pablo, apóstol",	archivo: "/salterios/src/evan/audios/26enero.mp3", fecha: `${year}-01-25` }, // 25 La Conversión de San Pablo, apóstol

    // ENERO
    { nombre: "Bautismo del Señor", 					archivo: "/salterios/src/evan/audios/tos01d.mp3", fecha: `${year}-01-12` }, // I Domingo del Tiempo Ordinario | Bautismo del Señor
    { nombre: "Bodas de Canaan", 						archivo: "/salterios/src/evan/audios/tos02d.mp3", fecha: `${year}-01-19` }, // II Domingo del Tiempo Ordinario | Bodas de Canaan
    { nombre: "Hoy se cumple esta Escritura", 			archivo: "/salterios/src/evan/audios/tos03d.mp3", fecha: `${year}-01-26` }, // III Domingo del Tiempo Ordinario | Hoy se cumple esta Escritura

    // FEBRERO
//    { nombre: "Multiplicación de los Peces", 			archivo: "/salterios/src/evan/audios/tos05d.mp3", fecha: `${year}-02-13` }, // REVISION DEL AUDIO

    { nombre: "La presentación del Señor", 				archivo: "/salterios/src/evan/audios/tos04d.mp3", fecha: `${year}-02-02` }, // IV Domingo del Tiempo Ordinario | La Presentación del Señor
    { nombre: "Multiplicación de los Peces", 			archivo: "/salterios/src/evan/audios/tos05d.mp3", fecha: `${year}-02-09` }, // V Domingo del Tiempo Ordinario | Multiplicación de los Panes
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos06d.mp3", fecha: `${year}-02-16` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos07d.mp3", fecha: `${year}-02-23` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos08d.mp3", fecha: `${year}-02-23` },

    // MARZO
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos09d.mp3", fecha: `${year}-03-02` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos10d.mp3", fecha: `${year}-03-09` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos11d.mp3", fecha: `${year}-03-16` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos12d.mp3", fecha: `${year}-03-23` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos13d.mp3", fecha: `${year}-03-30` },

    // ABRIL
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos14d.mp3", fecha: `${year}-04-06` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos15d.mp3", fecha: `${year}-04-13` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos16d.mp3", fecha: `${year}-04-20` },
    { nombre: "Titulo Pendiente", 						archivo: "/salterios/src/evan/audios/tos17d.mp3", fecha: `${year}-04-27` },

    // MAYO
    { nombre: "Bodas de Canaan",						archivo: "/salterios/src/evan/audios/tos18d.mp3", fecha: `${year}-05-04` },
    { nombre: "Bodas de Canaan",						archivo: "/salterios/src/evan/audios/tos19d.mp3", fecha: `${year}-05-11` },
    { nombre: "Bodas de Canaan",						archivo: "/salterios/src/evan/audios/tos20d.mp3", fecha: `${year}-05-18` },
    { nombre: "Bodas de Canaan",						archivo: "/salterios/src/evan/audios/tos21d.mp3", fecha: `${year}-05-25` },

    // JUNIO
    { nombre: "Titulo Pendiente", archivo: "audios/tos22d.mp3", fecha: `${year}-06-01` },

    // SEMANA V TIEMPO ORDINARIO
    { nombre: "Evangelio Lunes Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos05lunes.mpeg",		fecha: `${year}-02-10` },
    { nombre: "Evangelio Martes Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos05martes.mpeg", 	fecha: `${year}-02-11` },
    { nombre: "Evangelio Miércoles Semana 5 Tiempo Ordinario",	archivo: "/salterios/src/evan/audios/tos05miercoles.mpeg",	fecha: `${year}-02-12` },
    { nombre: "Evangelio Jueves Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos05jueves.mpeg",		fecha: `${year}-02-13` },
    { nombre: "Evangelio Viernes Semana 5 Tiempo Ordinario",	archivo: "/salterios/src/evan/audios/tos05viernes.mp3",		fecha: `${year}-02-14` },
    { nombre: "Evangelio Sabado Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos05sabado.mpeg",		fecha: `${year}-02-15` },

    // SEMANA VI TIEMPO ORDINARIO
    { nombre: "Evangelio Lunes Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos06lunes.mpeg",		fecha: `${year}-02-10` },
    { nombre: "Evangelio Martes Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos06martes.mpeg",		fecha: `${year}-02-11` },
    { nombre: "Evangelio Miércoles Semana 5 Tiempo Ordinario",	archivo: "/salterios/src/evan/audios/tos06miercoles.mpeg",	fecha: `${year}-02-12` },
    { nombre: "Evangelio Jueves Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos06jueves.mpeg",		fecha: `${year}-02-13` },
    { nombre: "Evangelio Viernes Semana 5 Tiempo Ordinario",	archivo: "/salterios/src/evan/audios/tos06viernes.mpeg",	fecha: `${year}-02-14` },
    { nombre: "Evangelio Sabado Semana 5 Tiempo Ordinario",		archivo: "/salterios/src/evan/audios/tos06sabado.mpeg",		fecha: `${year}-02-15` },
];

function obtenerFechaHoy() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
}

function cargarAudioPorDefecto() {
    const fechaHoy = obtenerFechaHoy();
    console.log("Fecha de hoy:", fechaHoy);

    const audioHoy = audios.find(audio => audio.fecha === fechaHoy);
    console.log("Audio encontrado:", audioHoy);

    const reproductor = document.getElementById('audio-player');
    const fuenteAudio = document.getElementById('audio-source');
    const tituloAudio = document.getElementById('titulo-audio');

    if (audioHoy) {
        console.log("Cargando audio:", audioHoy.archivo);
        tituloAudio.textContent = audioHoy.nombre;
        fuenteAudio.src = audioHoy.archivo;
        reproductor.load();
    } else {
        console.log("No hay audio para hoy");
        tituloAudio.textContent = "No hay audio para hoy";
        fuenteAudio.src = "";
        reproductor.load();
    }
}

window.onload = cargarAudioPorDefecto;