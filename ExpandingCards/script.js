const paneles = document.querySelectorAll('.panel');

paneles.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        paneles.forEach(panel => {
            panel.classList.remove('panel-activo');
        });
        panel.classList.add('panel-activo');
    });
});