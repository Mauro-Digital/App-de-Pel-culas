import cargarTitulos from "./cargarTitulos";
import fetchBusqueda from "./fetchBusqueda";

const btn = document.getElementById('btn-buscar');
btn.addEventListener('click', async(e) => {
    const resultados = await fetchBusqueda();    
    cargarTitulos(resultados);
});