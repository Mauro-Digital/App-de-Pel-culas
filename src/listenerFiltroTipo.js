import cargarGeneros from "./cargarGeneros";
import cargarTitulos from './cargarTitulos';
import fetchPopulares from './fetchPopulares';

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

// CARGAR LAS PELICULAS AL OPRIMIR EL BOTON DE "PELICULAS"
filtroPelicula.addEventListener('click', async(e) => {
    e.preventDefault();
    
    // Cargar los generos en la barra lateral.    
    cargarGeneros('movie');

    // Obtenemos los resultados.
    const resultados = await fetchPopulares('movie');
    
    // Los cargamos en el DOM.
    cargarTitulos(resultados);

    filtroShow.classList.remove('btn--active');
    filtroPelicula.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Peliculas Populares';    
});

// CARGAR LAS SERIES AL OPRIMIR EL BOTON DE "SERIES"
filtroShow.addEventListener('click', async(e) => {
    e.preventDefault();

    // Cargar los generos en la barra lateral.    
    cargarGeneros('tv');

    // Obtenemos los resultados.
    const resultados = await fetchPopulares('tv');
    
    // Los cargamos en el DOM.
    cargarTitulos(resultados);

    filtroPelicula.classList.remove('btn--active');
    filtroShow.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Series Populares';
});