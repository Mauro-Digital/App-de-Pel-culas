const fetchItem = async(id) => {
    const tipo = document.querySelector('.main__filtros .btn--active').id;

    try{
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=ab8e6a056feefbe83faaee33b0180ce1&language=es-MX`;

        const respuesta = await fetch(url);
        const datos = respuesta.json();

        return datos;        
    } catch(e){
        console.log(e);
    }
};

export default fetchItem;