const formPresupuesto = document.querySelector('.content__formPresupuesto');
const presupuestoInput = document.querySelector('#presupuesto');
const btnSubmit = document.querySelector('.btnSubmit');

const presupuestos = []; 

//Eventos
eventListeners();
function eventListeners(){
    formPresupuesto.addEventListener('submit', agregarPresupuesto);
}

//clases
class UI {
    mostrarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj
        document.querySelector('.presupuestoCantidad span').textContent = presupuesto;
        document.querySelector('.restanteCantidad span').textContent = restante;
    }
}

const ui = new UI();

//funciones
function agregarPresupuesto(e){
    e.preventDefault();

    const presupuesto = parseFloat(presupuestoInput.value);

    if (presupuesto === '' || isNaN(presupuesto) || presupuesto <= 0) {
        console.log('Introduce un presupuesto válido');
        formPresupuesto.reset();
        return;
    };

    const nuevoPresupuesto = {
        id: Date.now(),
        presupuesto,
        restante: presupuesto,
        gastos: []
    };

    ui.mostrarPresupuesto(nuevoPresupuesto);

    formPresupuesto.reset();

    btnSubmit.setAttribute('disabled', 'true');
    
    

    console.log(nuevoPresupuesto);
}