//Dar click en boton Idioma y moneda y mostrar el footer

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    //footer.classList.toggle('activo');
    
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda'
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar'
    }

})