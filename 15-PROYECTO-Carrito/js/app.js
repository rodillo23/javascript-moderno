//variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

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

    //se agrega la info curso al array
    articulosCarrito = [...articulosCarrito, infoCurso]

    console.log(articulosCarrito);

    //mostramos la informacion en el html
    carritoHtml();
 }

 //Muestra el carrito de compras en el HTML
 function carritoHtml(){
    //limpiar html
    limpiarHtml();

    //recorre el array de los articulos y crea el html
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src=${imagen} width="100"/></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        //agrega el html del carrito en tbody
        contenedorCarrito.appendChild(row);
    });

 }

 function limpiarHtml(){
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
 }


