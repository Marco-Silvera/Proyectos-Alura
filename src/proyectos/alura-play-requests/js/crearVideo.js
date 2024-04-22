import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]');

<<<<<<< HEAD
async function crearVideo(evento){
=======
async function crearVideo(evento) {
>>>>>>> c49bff55b924e28a5be509f519163c39df6fda3c

    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagen = document.querySelector('[data-imagen]').value;

<<<<<<< HEAD
    const descripcion = Math.floor(Math.random()*10).toString();
=======
    const descripcion = Math.floor(Math.random * 10).toString();
>>>>>>> c49bff55b924e28a5be509f519163c39df6fda3c

    await conexionAPI.enviarVideo(titulo, descripcion, url, imagen);

    window.location.href = '../pages/envio-concluido.html';
}

formulario.addEventListener('submit', evento => crearVideo(evento));