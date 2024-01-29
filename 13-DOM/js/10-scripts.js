//Generar HTML desde JS
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Enlace';
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('nueva-clase');
enlace.onclick = miFuncion;
console.log(enlace);

//seleccionar el elemento donde se agregara el enlace
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace) //-> Agrega el hijo al final
navegacion.insertBefore(enlace, navegacion.children[1]) //-> inserta elemento antes del elemento seleccionado

function miFuncion(){
    alert('Diste click')
}

//crear un card
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Rock en tu Idioma';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$600 por persona';
parrafo3.classList.add('precio');

//crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'imagen concierto';

//crear card
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.children[0]);
console.log(card);
