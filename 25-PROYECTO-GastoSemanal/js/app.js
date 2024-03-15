//Variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//Eventos
eventListeners();
function eventListeners() {
    //Evento para solicitar el presupuesto
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    //Evento del boton enviar nuevo gasto
    formulario.addEventListener('submit', agregarGasto);
};

//Clases
class Presupuesto{
    //Al instanciar solo recibimos el presupuesto
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    };

    //Agregamos gasto al array y calculamos el restante
    crearGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    };

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;

        ui.actualizarRestante();
    };

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante();
    }
};

class UI{
    //Muestra el presupuesto y el restante en el html
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante; 
    };

    //imprime alertas de validacion en el formulario
    imprimirAlerta(mensaje, tipo){
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divAlerta.classList.add('alert-danger');
        }else{
            divAlerta.classList.add('alert-success');
        };

        divAlerta.textContent = mensaje;

        //insertar mensaje en HTML
        const primario = document.querySelector('.primario');
        primario.insertBefore(divAlerta, formulario);

        //removemos la alerta despues de 3 segundos
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    };

    mostrarGastos(gastos){

        this.limpiarHTML();

        gastos.forEach(gasto => {
            const {nombre, cantidad, id} = gasto;

            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center mb-3';
            nuevoGasto.setAttribute('data-id', id);
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">${cantidad}</span>`;

            //boton de borrar
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';

            btnBorrar.onclick = () => {
                eliminarGasto(id);
            };

            nuevoGasto.appendChild(btnBorrar);

            gastoListado.appendChild(nuevoGasto);

        });
    };

    limpiarHTML(){
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    };

    actualizarRestante(){
        document.querySelector('#restante').textContent = presupuesto.restante;
    };

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        if((presupuesto / 4) > restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        };

        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha terminado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
};

//creamos la instancia de ui en scope global
const ui = new UI();
//creamos presupuesto en scope global para despues crear la instancia dentro de la func. preguntarPresupuesto
let presupuesto;

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = parseFloat(prompt('¿Cual es tu presupuesto?'));
    
    if (presupuestoUsuario === '' || presupuestoUsuario === null || presupuestoUsuario <= 0 || isNaN(presupuestoUsuario)) {
        window.location.reload();
    };

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
};

function agregarGasto(e){
    e.preventDefault();
    //leemos los valores de los input
    const nombre = document.querySelector('#gasto').value;
    const cantidad = parseFloat(document.querySelector('#cantidad').value);

    //validamos los valores
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios!', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida!', 'error');
        return;
    };

    //guardamos el gasto creado por el usuario
    const gasto = {
        nombre,
        cantidad,
        id: Date.now()
    };

    //guardamos el gasto en el array
    presupuesto.crearGasto(gasto);

    //mostramos alerta de gasto creado
    ui.imprimirAlerta('Se añadio el gasto exitosamente.');

    //imprimir los gastos
    const {gastos} = presupuesto;
    ui.mostrarGastos(gastos);

    //comprobar presupuesto
    ui.comprobarPresupuesto(presupuesto);

    //Reseteamos el formulario
    formulario.reset();
};

function eliminarGasto(id){
    presupuesto.eliminarGasto(id);

    const {gastos} = presupuesto;
    ui.mostrarGastos(gastos);

    //actualizar restante se llama en calcular restante
    
    ui.comprobarPresupuesto(presupuesto);
}
