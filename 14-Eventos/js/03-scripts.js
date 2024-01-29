//Eventos sobre los inputs

const busqueda = document.querySelector('.busqueda');

/* busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
})

busqueda.addEventListener('keyup', () => {
    console.log('Soltando la tecla');
})

busqueda.addEventListener('blur', () => {
    console.log('Saliste del input');
})

busqueda.addEventListener('copy', () => {
    console.log('Copiaste texto');
})

busqueda.addEventListener('paste', () => {
    console.log('Pegaste texto');
})

busqueda.addEventListener('cut', () => {
    console.log('Cortaste texto');
}) */

/*busqueda.addEventListener('input', () => {
    console.log('Hiciste algun movimiento en el input'); // detecta cualquier evento de los anteriores menos el blur
})*/

busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Introduce un destino..');
    }else{
        console.log(e.target.value);
    }
})