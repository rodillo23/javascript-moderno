//variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e){
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentNode.parentNode;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del html al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('.imagen-curso').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCurso);
 }


