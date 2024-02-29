//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};

//listeners
document.addEventListener('DOMContentLoaded', function(){
    mostrarAutos(autos);

    llenarSelect();
});

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})


//funciones

function mostrarAutos(autos){
    
    limpiarHTML();

    if (autos.length == 0) {
        const mensaje = document.createElement('p');
        mensaje.style.backgroundColor = 'red';
        mensaje.style.color = 'white';
        mensaje.textContent = 'No se encontraron autos con las caracteristicas señaladas.';
        resultado.appendChild(mensaje);
    }

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} puertas - transminsion ${transmision} - 
            precio:$ ${precio} - color: ${color}
        `;

        resultado.appendChild(autoHTML);
    })
}

//generar los años del select
function llenarSelect(){

    for (let y = max; y >= min; y--) {
        const opcion = document.createElement('option');
        opcion.value = y;
        opcion.textContent = y;
        year.appendChild(opcion);
        
    };
}

//funcion que filtra en base a la busqueda
function filtrarAuto(){

    const resultado = autos
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);
    mostrarAutos(resultado);
};

function filtrarMarca(auto){

    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }

    return auto;
};

function filtrarYear(auto){

    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }

    return auto;
};

function filtrarMinimo(auto){

    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
};

function filtrarMaximo(auto){

    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    }

    return auto;
};

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    };
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    };

    return auto;
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
};


