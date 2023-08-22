const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const nav = document.getElementById("nav-id");
const title = document.getElementById("titulo-opiniones");
const tarjetas = document.getElementsByClassName("tarjeta");
const logo = document.getElementById("logo")
const links = document.getElementsByClassName("links");

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', darkModeToggle.checked);
  nav.classList.toggle('dark-mode', darkModeToggle.checked);
  title.classList.toggle('dark-mode', darkModeToggle.checked);
  logo.classList.toggle('dark-mode', darkModeToggle.checked);


  for (const link of links) {
    link.classList.toggle('dark-mode', darkModeToggle.checked);
  }
  for (const tarjeta of tarjetas) {
    tarjeta.classList.toggle('dark-mode', darkModeToggle.checked);
  }
});