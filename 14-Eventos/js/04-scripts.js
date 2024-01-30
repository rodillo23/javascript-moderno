//Evento submit a un formulario

const formulario = document.querySelector('#formulario');
const busqueda = document.querySelector('.busqueda');



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    /*console.log(e);
    console.log(e.target);
    console.log(e.target.method);
    console.log(e.target.action);*/

    const valor = busqueda.value;
    console.log(`Buscando resultados para ${valor}`);
})