const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const btnCerrar =document.getElementById("btn-cerrar")

btn.addEventListener("click",()=>{
    modal.style.display="block";
    btn.style.display="none";
})
btnCerrar.addEventListener("click",()=>{
    modal.style.display="none";
    btn.style.display="block"

})
document.addEventListener("click", (event) => {
   
    if (!modal.contains(event.target) && event.target !== btn) {
        modal.style.display = "none";
        btn.style.display = "block";
    }
});