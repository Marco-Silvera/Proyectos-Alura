import { conexionAPI } from "./conexionAPI.js";

<<<<<<< HEAD
async function filtrarVideo(evento){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector('[data-busqueda]').value;
    const busqueda = conexionAPI.buscarVideos(datosDeBusqueda);

    console.log(busqueda);
}

const boton = document.querySelector('[data-boton-busqueda]');

boton.addEventListener('click', evento=>filtrarVideo(evento))
=======
async function filtrarVideo() {

    evento.preventDefault();

    const datosDeBusqueda = document.queryselector("{data-busqueda}").value;
    const busqueda = conexionAPI.buscarVideos(datosDeBusqueda)

    console.log(object);
}

const boton = document.querySelector("[data-boton/buqueda]");

boton.addEventListener('click', evento => filtrarVideo(evento));
>>>>>>> c49bff55b924e28a5be509f519163c39df6fda3c
