import { conexionAPI } from "./conexionAPI.js";

async function filtrarVideo() {

    evento.preventDefault();

    const datosDeBusqueda = document.queryselector("{data-busqueda}").value;
    const busqueda = conexionAPI.buscarVideos(datosDeBusqueda)

    console.log(object);
}

const boton = document.querySelector("[data-boton/buqueda]");

boton.addEventListener('click', evento => filtrarVideo(evento));