async function listarVideos() {
    const conexion = await fetch('http://localhost:3001/videos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const conexionConvertida = await conexion.json();
    // console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagem: imagen
        })
    });
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    console.log(palabraClave);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarVideos,enviarVideo,buscarVideos
}
