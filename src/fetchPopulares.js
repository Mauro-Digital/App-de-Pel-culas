import fetchGeneros from './fetchGeneros';
import obtenerGenero from './obtenerGenero';

const fetchPopulares = async (filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';

    const url = 
        `https://api.themoviedb.org/3/discover/${tipo}?api_key=ab8e6a056feefbe83faaee33b0180ce1& include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    try {    
        const respuesta = await fetch(url);
        const datos = await respuesta.json(); 
        const resultados = datos.results;
        
        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);            
        });

        return resultados;
    } catch (e) {
        console.log(e);
    }
};

export default fetchPopulares;