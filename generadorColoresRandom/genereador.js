const boton = document.getElementById("botonCambio");
const body = document.querySelector("body");
const color = document.getElementById("color")

const generarColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    return randomColor;
} ;

const cambioColor = () => {
    const nuevoColor = generarColor();
    
    color.innerHTML = nuevoColor ;

    body.style.backgroundColor = nuevoColor;
}


boton.addEventListener("click" ,cambioColor)