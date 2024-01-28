const fetchGeneros = async (filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';

    const url = 
        `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=ab8e6a056feefbe83faaee33b0180ce1& include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`;
    try {    
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.genres;
    } catch (e) {
        console.log(e);
    }
};

export default fetchGeneros;
