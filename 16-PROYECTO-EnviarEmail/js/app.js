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
        if (e.target.value.trim() === '') {
            mostrarAlerta();
        }else{
            console.log('Si hay algo');
        }
    };

    function mostrarAlerta(){
        //Generar alerta HTML
        const error = document.createElement('p');
        error.textContent = 'Hubo un Error';
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //inyectar mensaje
        //formulario.innerHTML = error.innerHTML;
        formulario.appendChild(error); 
    }


})