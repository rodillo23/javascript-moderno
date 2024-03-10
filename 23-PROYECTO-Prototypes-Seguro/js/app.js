function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35 
    */

    let cantidad;
    const base = 2000;

    switch(this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;

        case '2':
            cantidad = base * 1.05;
            break;

        case '3':
            cantidad = base * 1.35;
            break;

        default: 
            break;
    }

    //leer el año
    const diferencia = new Date().getFullYear() - this.year;
    //cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es basico se multiplica por un 30% mas
        Si el seguro es completo se multiplica por un 50% mas
    */

    if (this.tipo === 'basico') {
        cantidad *= 1.30
    }else{
        cantidad *= 1.50
    }
    
    return cantidad;
}

function UI(){};

UI.prototype.llenarSelect = function(){
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector('#year');
    
    for (let year = max; year >= min; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;

        selectYear.appendChild(option);  
    };

};

UI.prototype.mostrarMensaje = function(mensaje, tipo){

    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    };

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

};

UI.prototype.mostrarResumen = function(total, seguro){
    
    const {marca, year, tipo} = seguro;

    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiático';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultado = document.querySelector('#resultado');
    
    //Mostrar Spinner
    const cargando = document.querySelector('#cargando');
    cargando.classList.remove('hidden');
    
    setTimeout(() => {
        cargando.classList.add('hidden');
        resultado.appendChild(div);
    }, 3000);
};

UI.prototype.limpiarResultados = function(){
    const resultado = document.querySelector('#resultado');

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarSelect();
});


eventListeners();
function eventListeners(){
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', validarFormulario);
};

function validarFormulario(e){
    e.preventDefault();

    //marca
    const marca = document.querySelector('#marca').value;
    //año
    const year = document.querySelector('#year').value;
    //tipo
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //validacion y mostrar mensaje
    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios.', 'error');
        return;
    };

    ui.mostrarMensaje('Cotizando..', 'correcto');

    //Limpiamos los resultados
    ui.limpiarResultados();

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);

    //utilizar el prototype que va a cotizar
    const total = seguro.cotizarSeguro();
    
    ui.mostrarResumen(total, seguro);
}