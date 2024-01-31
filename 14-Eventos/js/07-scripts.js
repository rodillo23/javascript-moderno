//Prevenir Event Bubbling con Delegation

const card = document.querySelector('.card');

card.addEventListener('click', (e) => {
    if(e.target.classList.contains('titulo')){
        console.log('Le diste click a Titulo');
    }

    if (e.target.classList.contains('precio')) {
        console.log('Le diste click a Precio');
    }

    if (e.target.classList.contains('card')) {
        console.log('Le diste click al Card');
    }
})