const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const inconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonAdelante = document.querySelector('.controles button.adelante');

const playlistContainer = document.getElementById('playlist-container');

let canciones = [];
let indiceCancionActual = 0;

// Lista de archivos MP3 en la carpeta src (ordenados de mayor a menor)
const archivosMP3 = [
    'src/2025.mp3',
    'src/2024.mp3',
    'src/2023.mp3',
    'src/2022.mp3',
    'src/2021.mp3'
];

// Cargar las canciones en el reproductor
archivosMP3.forEach((archivo, index) => {
    canciones.push({
        titulo: `Evangelio ${index + 1}`,
        nombre: archivo.split('/').pop(), // Obtener solo el nombre del archivo (ej: "2025.mp3")
        fuente: archivo
    });
});

actualizarPlaylist();
actualizarInfoCancion();

function actualizarPlaylist() {
    playlistContainer.innerHTML = '';
    canciones.forEach((cancionItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${cancionItem.titulo} - ${cancionItem.nombre}`;

        li.onclick = () => {
            indiceCancionActual = index;
            actualizarInfoCancion();
            reproducirCancion();
        };

        if (index === indiceCancionActual) {
            li.classList.add('active');
        }

        playlistContainer.appendChild(li);
    });
}

function actualizarInfoCancion() {
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    actualizarPlaylist();
}

cancion.addEventListener('loadedmetadata', function () {
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
});

botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar() {
    if (cancion.paused) {
        reproducirCancion();
    } else {
        pausarCancion();
    }
}

function reproducirCancion() {
    cancion.play();
    inconoControl.classList.add('bi-pause-fill');
    inconoControl.classList.remove('bi-play-fill');
}

function pausarCancion() {
    cancion.pause();
    inconoControl.classList.remove('bi-pause-fill');
    inconoControl.classList.add('bi-play-fill');
}

cancion.addEventListener('timeupdate', function () {
    if (!cancion.paused) {
        progreso.value = cancion.currentTime;
    }
});

cancion.addEventListener('ended', function () {
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

progreso.addEventListener('input', function () {
    cancion.currentTime = progreso.value;
});

progreso.addEventListener('change', () => {
    reproducirCancion();
});

botonAdelante.addEventListener('click', function () {
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click', function () {
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

actualizarInfoCancion();