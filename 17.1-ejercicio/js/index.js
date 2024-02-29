const selectTipo = document.querySelector('#tipo');
const selectIdioma = document.querySelector('#idioma');
const selectYear = document.querySelector('#year');
//const result = document.querySelector('.result');

const tableBody = document.querySelector('.table tbody');

const datosBusqueda = {
    tipo: '',
    idioma: '',
    year: ''
}

document.addEventListener('DOMContentLoaded', () => {
    llenarSelectTipo();
    llenarSelectIdioma();
    llenarSelectYear();

    mostrarPeliculas(shows);
});

selectTipo.addEventListener('change', (e) => {
    datosBusqueda[e.target.id] = e.target.value;
    filtrarPelicula();
});

selectIdioma.addEventListener('change', (e) => {
    datosBusqueda[e.target.id] = e.target.value;
    filtrarPelicula();
});

selectYear.addEventListener('change', (e) => {
    datosBusqueda[e.target.id] = parseInt(e.target.value);
    filtrarPelicula();
});



function llenarSelectTipo(){
    kind.forEach( kind => {
        const option = document.createElement('option');
        option.textContent = kind;

        selectTipo.appendChild(option);
    })
};

function llenarSelectIdioma(){
    language.forEach( idioma => {
        const option = document.createElement('option');
        option.textContent = idioma;
        selectIdioma.appendChild(option);
    })
};

function llenarSelectYear(){
    movie_year.forEach( year => {
        const option = document.createElement('option');
        option.textContent = year;
        selectYear.appendChild(option);
    })
};

function mostrarPeliculas(movies){
    limpiarHTML();

    //const peliculas = movies.filter( movie => movie.kind === 'movie');
    
    movies.forEach( pelicula => {
        const tr = document.createElement('tr');
        
        const td = document.createElement('td');
        td.textContent = `${pelicula.original_title}`; 
        
        const td1 = document.createElement('td');
        td1.textContent = `${pelicula.overview}`;

        const td2 = document.createElement('td');
        td2.textContent = `${pelicula.year}`;

        const td3 = document.createElement('td');
        td3.textContent = `${pelicula.original_language}`;

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tableBody.appendChild(tr);

    })
};

function filtrarPelicula(){
    const resultado = shows.filter(filtrarTipo).filter(filtrarIdioma).filter(filtrarYear);
    mostrarPeliculas(resultado);
};

function filtrarTipo(show){
    if (datosBusqueda.tipo) {
        return show.kind === datosBusqueda.tipo;
    }
    return show;
};

function filtrarIdioma(show){
    if (datosBusqueda.idioma) {
        return show.original_language === datosBusqueda.idioma;
    };

    return show;
};

function filtrarYear(show){
    if (datosBusqueda.year) {
        return show.year === datosBusqueda.year;
    };

    return show;
}

function limpiarHTML(){
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    };
}