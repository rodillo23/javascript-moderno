//Traversing de DOM -> Recorrer el DOM

const navegacion = document.querySelector('.navegacion')
console.log(navegacion);

console.log(navegacion.childNodes);// Los saltos de linea del html son considerados elementos
console.log(navegacion.children);//Lista nodos html reales

console.log(navegacion.children[1].nodeName); //-> la etiqueta 
console.log(navegacion.children[1].nodeType);// -> 1 Nodo de tipo elemento



//traversing de un card
//cambiar el titulo del card
const card = document.querySelector('.card')
card.children[1].children[1].textContent = 'Rock en tu Idioma'
console.log(card.children[1].children[1].textContent);

//cambiar la imagen de un card
card.children[0].src = 'img/hacer2.jpg'

//traversing de hijo al padre
console.log(card.parentNode);// -> Los saltos de linea del html son considerados elementos
console.log(card.parentElement.parentElement.parentElement);


//traversing de elementos hermanos

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling);

//primero y ultimo hijo
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

