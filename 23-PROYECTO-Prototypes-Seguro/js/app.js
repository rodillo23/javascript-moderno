function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

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
    const tipo = document.querySelector('input[name="tipo"]').value;

    if (marca === '' || year === '' || tipo === '') {
        console.log('No pasa la validación');
    }else{
        console.log('Si pasa la validación!');
    }   
}