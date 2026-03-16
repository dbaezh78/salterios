    // Manejo de navegación interna suave
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetContainer = document.getElementById(targetId);

            if (targetContainer && targetId !== "inicio") {
                e.preventDefault();
                // Ocultar todos los contenedores con clase .dc
                document.querySelectorAll('.dc').forEach(container => {
                    container.style.display = 'none';
                });
                // Mostrar el contenedor seleccionado
                targetContainer.style.display = 'block';
            }
        });
    });