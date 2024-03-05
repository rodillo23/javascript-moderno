//variables
const formulario = document.querySelector('#formulario');
const lista = document.querySelector('#lista-tweets');
let tweets = [];

//event listeners
eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', agregarTweet)
};


//funciones
function agregarTweet(e){
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value.trim();

    if (tweet === '') {
        mostrarAlerta('El mensaje no puede estar vacío!');
        return;
    }

    //generamo el objeto con el tweet
    const tweetObj = {
        id: Date.now(),
        tweet
    };

    //lo guardamos en el array
    tweets = [...tweets, tweetObj];

    //creamos el HTML
    crearHTML();

    formulario.reset(); 
}

function mostrarAlerta(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();  
    }, 3000);
}

function crearHTML(){

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            const li = document.createElement('li');
            li.textContent = tweet.tweet;
            lista.appendChild(li);
        })
    }
};

function limpiarHTML(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}