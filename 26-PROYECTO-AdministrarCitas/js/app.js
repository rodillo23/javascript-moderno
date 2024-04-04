//selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const contenedorCitas = document.querySelector('#citas');

let editando = false;

//objeto de citas
const citaObj = {
    id: generarId(),
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

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            //Toma una copia de un objeto
            //const clone = structuredClone(cita)
            btnEditar.onclick = () => cargarEdicion(cita);

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            const contenedorBotones = document.createElement('DIV');
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-5');

            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones)

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
    
    if (editando) {
        console.log('Editando cita..');
        editando = false;
    }else{
        citas.agregar({...citaObj});
        new Notificacion({
            mensaje: "Paciente registrado con Exito",
            tipo: 'exito'
        });
    }

    formulario.reset();
    reiniciarObjetoCita();
};

function reiniciarObjetoCita(){
    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''  
    })
};

function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita){
    Object.assign(citaObj, cita);

    const {paciente, propietario, email, fecha, sintomas} = cita;

    pacienteInput.value = paciente;
    propietarioInput.value = propietario;
    emailInput.value = email;
    fechaInput.value = fecha;
    sintomasInput.value = sintomas;

    editando = true;
    
}




