//selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');

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
}

class Notificacion {

    constructor({mensaje, tipo}){
        this.mensaje = mensaje;
        this.tipo = tipo
        this.mostrar();
    };

    mostrar(){
        //eliminar notificaciones previas
        const alertaPrevia = document.querySelector('alerta');
        //encadenamiento opcional
        alertaPrevia?.remove();

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


