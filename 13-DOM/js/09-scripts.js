//Eliminar elementos del DOM

//Eliminar un elemento por si mismo con remove()
const primerEnlace = document.querySelector('a');
primerEnlace.remove();

//Eliminar desde el padre con removeChild()
const navegacion = document.querySelector('.navegacion');
navegacion.removeChild( navegacion.children[2]); 
console.log(navegacion.children);