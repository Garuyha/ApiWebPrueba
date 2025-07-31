//aprender sobre DOM
const encabezado = document.createElement('h1');
const parrafo = document.createElement('p');
const botonTexto = document.createElement('button');
const botonColor = document.createElement('button');

//Funciones y metodos
function cambiarTexto(){
    let parrafo = document.getElementById('miParrafo');
    parrafo.textContent = 'Este texto fue modificado.';
}

function cambiarColor(){
    let parrafo = document.getElementById('miParrafo');
    parrafo.style.color = 'red';
}

//Crear componentes
encabezado.textContent = 'Encabezado de la pagina';
parrafo.textContent = 'aqui va un texto';
parrafo.id = 'miParrafo';
botonTexto.textContent = 'Cambiar texto';
botonTexto.addEventListener('click', cambiarTexto);
botonColor.textContent = 'Cambiar color';
botonColor.addEventListener('click', cambiarColor);

//Agregar componentes
document.body.appendChild(encabezado);
document.body.appendChild(parrafo);
document.body.appendChild(botonTexto);
document.body.appendChild(botonColor);