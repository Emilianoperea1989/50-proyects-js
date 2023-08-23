const btn = document.getElementById("btn");
const modal = document.getElementById("modal");

btn.addEventListener("click",()=>{
    modal.style.display="block";
    btn.style.display="none";
})
document.addEventListener("click", (event) => {
   
    if (!modal.contains(event.target) && event.target !== btn) {
        modal.style.display = "none";
        btn.style.display = "block";
    }
});