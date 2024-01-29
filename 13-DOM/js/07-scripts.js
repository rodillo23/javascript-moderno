//Cambiando CSS con JS -> las propiedades css se escriben con camelCase, ejemplo backgroundColor.

const encabezado = document.querySelector('h1')

//modificar el color de fondo, la fuente y poner en mayusculas el encabezado con js
encabezado.style.backgroundColor = 'blue';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform= 'uppercase';

//en JS se recomienda mas cambiar las clases del css
const card = document.querySelector('.contenedor-cards .card');
card.classList.add('nueva-clase', 'otra-clase');
card.classList.remove('card');
console.log(card.classList);


