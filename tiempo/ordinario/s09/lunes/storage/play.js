  <audio id="audioPlayer" controls>
    Tu navegador no soporta la reproducción de audio.
  </audio>

  <script>
    // Función para verificar si un año es par o impar
    function esPar(year) {
      return year % 2 === 0;
    }

    // Obtener el año actual
    var year = new Date().getFullYear();

    // Obtener el elemento de audio
    var audio = document.getElementById('audioPlayer');

    // Determinar qué archivo de audio reproducir según si el año es par o impar
    if (esPar(year)) {
      audio.src = 'archivo2.mp3';
    } else {
      audio.src = 'archivo1.mp3';
    }

    // Reproducir el audio automáticamente
    audio.play();
  </script>
