//Modificar Textos o Imagenes con Js

const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado);

//obtener el texto del encabezado
console.log(encabezado.innerText); //si en el CSS ponemos visibility:hidden, no lo va encontrar
console.log(encabezado.textContent); //si lo va a encontrar
console.log(encabezado.innerHTML); //se trae el texto pero tambien el html que este dentro

const nuevoheading = "El mejor lugar para Hospedarte en tus proximas vacaciones"
document.querySelector('.contenido-hero h1').textContent = nuevoheading;

//cambiar imagen
const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer4.jpg'
