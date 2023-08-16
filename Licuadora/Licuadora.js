

let estadoLicuadora = "apagado";
let licuadora = document.getElementById("licuadora");
let botonLicuadora = document.getElementById("boton");
let sonidoLicuadora = document.getElementById("sonido")


function encederLicuadora() {
    if (estadoLicuadora === "apagado") {
        estadoLicuadora = "encendido"
        console.log("la licuadora esta encendida");
    }
}

function apagarLicuadora() {
    if (estadoLicuadora === "encendido") {
        estadoLicuadora = "apagado"
        console.log("la licuadora esta apagada");
    }
}


licuadora.addEventListener("click", function () {
    if (estadoLicuadora === "apagado") {
        encederLicuadora();
        licuadora.classList.add("active");
        botonLicuadora.play();
        sonidoLicuadora.play()
       
    } else {
        apagarLicuadora();
        licuadora.classList.remove("active");
        botonLicuadora.play();
        sonidoLicuadora.pause()
        sonidoLicuadora.currentTime = 0;
        
    }
})

