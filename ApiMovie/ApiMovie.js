const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzEyOGM5NmNjODZhNmYyMjM2ZTJhZGVjNmU5NDRmOSIsInN1YiI6IjY0ZTZiYzk5MDZmOTg0MDBhZTQ4MThjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgIyq5KFt18ZNyRkrwnwbz6U321BhRqCEUzvYY_JJbo'
    }
};

let currentPage = 1;

function fetchMovies(page) {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(data => {
            const peliculas = data.results;
            const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
            const contenedor = document.getElementById('peliculas-container');

            contenedor.innerHTML = '';

            peliculas.forEach(pelicula => {
                const peliculaDiv = document.createElement('div');
                const imagen = document.createElement('img');
                const titulo = document.createElement('h4');

                peliculaDiv.classList.add('pelicula-item');
                imagen.src = baseImageUrl + pelicula.poster_path;
                imagen.alt = pelicula.title;
                titulo.textContent = pelicula.title;

                peliculaDiv.appendChild(imagen);
                peliculaDiv.appendChild(titulo);
                contenedor.appendChild(peliculaDiv);
            });
        })
        .catch(err => console.error(err));
}
const siguienteBtn = document.getElementById('siguiente-btn');
siguienteBtn.addEventListener('click', () => {
    currentPage++;
    fetchMovies(currentPage);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

});
const atrasBtn = document.getElementById('atras-btn');
atrasBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }else fetchMovies(currentPage);
})
fetchMovies(currentPage);
