const valorInicial = 0;
const valorTotal = 3;
let valorActual = valorInicial;


const progreso = document.querySelector('.progreso');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAtras = document.getElementById('btnAtras');
const pasos = document.querySelectorAll('.paso');

btnSiguiente.addEventListener("click", function() {
    if (valorActual < valorTotal) {
        valorActual++; 
        progreso.style.width = (valorActual * 160) + "px"; 
        
        pasos.forEach(function(paso, index) {
            if (index <= valorActual) {
                paso.style.borderColor = "rgb(0, 183, 255)";
            } else {
                paso.style.borderColor = "rgb(160, 156, 156)";
            }
        });
    }
});

btnAtras.addEventListener("click", function() {
    if (valorActual > valorInicial) {
        valorActual--;
        progreso.style.width = (valorActual * 160) + "px"; 
        
        pasos.forEach(function(paso, index) {
            if (index < valorActual) {
                paso.style.borderColor = "rgb(0, 183, 255)";
            } else if (index === valorActual || (valorActual === valorInicial && index === 0)) {
                paso.style.borderColor = "rgb(0, 183, 255)";
            } else {
                paso.style.borderColor = "rgb(160, 156, 156)";
            }
        });
    }
});
