//selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const contenedorCitas = document.querySelector('#citas');

//objeto de citas
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''   
};

//eventos
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);
formulario.addEventListener('submit', submitCita);

//clases
class Notificacion {

    constructor({mensaje, tipo}){
        this.mensaje = mensaje;
        this.tipo = tipo
        this.mostrar();
    };

    mostrar(){
        //eliminar notificaciones previas
        const alertaPrevia = document.querySelector('alerta');
        alertaPrevia?.remove(); // -> encadenamiento opcional

        //crear la notificacion
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');
        
        //si el mensaje es de error lo pinta de rojo, si no de verde
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500'); 
        alerta.textContent = this.mensaje;

        //insertamos la notificacion en el html
        formulario.parentElement.insertBefore(alerta, formulario);

        //quitar alerta despues de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

class AdminCitas{
    constructor(){
        this.citas = []
    }

    agregar(cita){  
        this.citas = [...this.citas, cita]

        this.mostrar();
    }

    mostrar(){
        //limpiar HTML previo
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        };

        //generar citas 
        this.citas.forEach( cita => {
            const divCita = document.createElement('DIV');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl');

            const paciente = document.createElement('P');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span>${cita.paciente}`;

            const propietario = document.createElement('P');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span>${cita.propietario}`;

            const email = document.createElement('P');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            email.innerHTML = `<span class="font-bold uppercase">Email: </span>${cita.email}`;

            const fecha = document.createElement('P');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span>${cita.fecha}`;

            const sintomas = document.createElement('P');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            sintomas.innerHTML = `<span class="font-bold uppercase">Sintomas: </span>${cita.sintomas}`;

            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);

            contenedorCitas.appendChild(divCita);
        })
    }


}

const citas = new AdminCitas();

//funciones
function datosCita(e){
    citaObj[e.target.name] = e.target.value;  
};

function submitCita(e){
    e.preventDefault();
    //validamos que los campos no esten en blanco
    if (Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            mensaje:'Todos los campos son obligatorios!', 
            tipo:'error'
        });
        return;
    };

    //Paso la validacion
    citas.agregar(citaObj);

    formulario.reset();
    reiniciarObjetoCita();
};

function reiniciarObjetoCita(){
    Object.assign(citaObj, {
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''  
    })
}




