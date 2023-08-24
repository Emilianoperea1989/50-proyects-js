const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzEyOGM5NmNjODZhNmYyMjM2ZTJhZGVjNmU5NDRmOSIsInN1YiI6IjY0ZTZiYzk5MDZmOTg0MDBhZTQ4MThjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgIyq5KFt18ZNyRkrwnwbz6U321BhRqCEUzvYY_JJbo'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        const peliculas = data.results;
        const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

        // Obtener el contenedor en el DOM
        const contenedor = document.getElementById('peliculas-container');

        peliculas.forEach(pelicula => {
            // Crear elementos <div> e <img> dinámicamente
            const peliculaDiv = document.createElement('div');
            const imagen = document.createElement('img');
            const titulo = document.createElement('h4');
            
            // Establecer atributos y contenido
            peliculaDiv.classList.add('pelicula-item'); // Clase CSS para el estilo
            imagen.src = baseImageUrl + pelicula.poster_path;
            imagen.alt = pelicula.title;
            titulo.textContent = pelicula.title;

            // Agregar elementos al contenedor en el DOM
            peliculaDiv.appendChild(imagen);
            peliculaDiv.appendChild(titulo);
            contenedor.appendChild(peliculaDiv);
        });
    })
    .catch(err => console.error(err));
