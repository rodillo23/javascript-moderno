//queryselectorAll -> Retorna todos los elementos que cumplan la condicion

const cards = document.querySelectorAll('.card')
console.log(cards);

const formularios = document.querySelectorAll('.formulario')
console.log(formularios);

const noExiste = document.querySelectorAll('.portada') //-> si el elemento no existe devuelve NodeList vacio
console.log(noExiste);

