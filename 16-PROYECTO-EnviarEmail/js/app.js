document.addEventListener('DOMContentLoaded', function(){
    //seleccionar los inputs de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    
    const formulario = document.querySelector('#formulario');

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        const parent = e.target.parentElement;
        //validamos que el input no venga vacio.
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio.`, parent);
            return;
        };

        limpiarAlerta(parent);
    };

    function mostrarAlerta(mensaje, referencia){
        
        limpiarAlerta(referencia);
        
        //Generar alerta HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //inyectar mensaje
        //formulario.innerHTML = error.innerHTML;
        referencia.appendChild(error); 
    }
    
    function limpiarAlerta(parent){
        //Comprueba si ya existe una alerta
        const alerta = parent.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

})