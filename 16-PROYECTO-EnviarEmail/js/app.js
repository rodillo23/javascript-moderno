document.addEventListener('DOMContentLoaded', function(){
    //Objeto que almacenara el valor de los input
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    };

    //seleccionar los inputs de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');


    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();

        comprobarEmail();
    })

    function validar(e){
        
        const parent = e.target.parentElement;
        
        //validamos que el input no venga vacio.
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio.`, parent);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es válido', parent);
            email[e.target.name] = '';
            comprobarEmail();
            return; 
        }

        limpiarAlerta(parent);

        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();
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

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        console.log(email);
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }else{
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }

})