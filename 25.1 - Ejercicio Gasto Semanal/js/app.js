const formPresupuesto = document.querySelector('.content__formPresupuesto');
const presupuestoInput = document.querySelector('#presupuesto');


//Eventos
eventListeners();
function eventListeners(){
    formPresupuesto.addEventListener('submit', agregarPresupuesto);
}

//clases
class Presupuesto{
    constructor(presupuesto){
        
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
    }
}

//funciones
function agregarPresupuesto(e){
    e.preventDefault();

    const presupuesto = parseFloat(presupuestoInput.value);

    if (presupuesto === '' || isNaN(presupuesto) || presupuesto <= 0) {
        console.log('Introduce un presupuesto válido');
        formPresupuesto.reset();
        return;
    };

    console.log('Agregando Presupuesto');
}