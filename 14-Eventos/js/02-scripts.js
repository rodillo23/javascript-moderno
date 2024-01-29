//Eventos con el Mouse
const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => { //-> mousedown similar a click, mouseup cuando suletas el mouse
    console.log('Diste click en el nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando en la Navegacion');
    nav.style.backgroundColor = 'black'
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la Navegacion');
    nav.style.backgroundColor = 'transparent'
})

const logo = document.querySelector('.logo');
logo.addEventListener('dblclick', () => {
    logo.style.backgroundColor = 'red'
})
