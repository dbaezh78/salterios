        // JavaScript para manejar la visibilidad del iframe
        // UN SOLO CLI
    document.getElementById('toggle-calendario').addEventListener('click', function() {
        var iframe = document.getElementById('calendario-iframe');
    if (iframe.style.display === 'none' || window.getComputedStyle(iframe).display === 'none') {
        iframe.style.display = 'block'; // Muestra el iframe
    } else {
        iframe.style.display = 'none'; // Oculta el iframe
    }
});

/*
        // DOS SOLO CLI
        document.getElementById('toggle-calendario').addEventListener('click', function() {
            var iframe = document.getElementById('calendario-iframe');
            if (iframe.style.display === 'none') {
                iframe.style.display = 'block'; // Muestra el iframe
            } else {
                iframe.style.display = 'none'; // Oculta el iframe
            }
        });
*/