let estadoLicuadora = "apagado";
let botonEncendido = document.querySelector(".botonEncendido");
let licuadora = document.querySelector(".licuadora");
let botonLicuadora = document.getElementById("boton");
let sonidoLicuadora = document.getElementById("sonido")

botonEncendido.addEventListener("click", function () {
    if (estadoLicuadora === "apagado") {
        estadoLicuadora = "encendido";
        console.log("La licuadora está encendida");
        licuadora.classList.add("active");
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        estadoLicuadora = "apagado";
        console.log("La licuadora está apagada");
        licuadora.classList.remove("active");
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
});
