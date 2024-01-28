import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchBusqueda = async (pagina = 1) => {    
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    const idGenero = document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    const añoInicial = document.getElementById('años-min').value || 1950;
    const añoFinal = document.getElementById('años-max').value || 2023;    

    let url;
    if(tipo === 'movie'){
        url = `https://api.themoviedb.org/3/discover/movie?api_key=ab8e6a056feefbe83faaee33b0180ce1&include_adult=false&include_video=false&language=es-MX&page=${pagina}&release_date.gte=${añoInicial}&release_date.lte=${añoFinal}&sort_by=popularity.desc&with_genres=${idGenero}`;        
    } else if (tipo === 'tv') {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=ab8e6a056feefbe83faaee33b0180ce1&first_air_date.gte=${añoInicial}&first_air_date.lte=${añoFinal}&include_adult=false&include_null_first_air_dates=false&language=es-MX&page=${pagina}&sort_by=popularity.desc&with_genres=${idGenero}`;
    }

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const resultados = datos.results;  

        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);            
        });
        
        return resultados;
    } catch(e) {
        console.log(e);
    }
};
export default fetchBusqueda;