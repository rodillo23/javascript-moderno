//Event bubbling (propagacion de eventos)

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => { //-> Al dar click ejecuta solo este evento
    e.stopPropagation();
    console.log('Click en el Card');
})

infoDiv.addEventListener('click', (e) => { //-> Al dar click ejecuta dos eventos
    e.stopPropagation();
    console.log('Click en Info');
})

titulo.addEventListener('click', (e) => { //-> Al dar click ejecuta los tres eventos
    e.stopPropagation();
    console.log('Click en titulo');
})


