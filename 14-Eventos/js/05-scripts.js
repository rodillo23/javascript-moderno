//Eventos al dar scroll con el mouse

window.addEventListener('scroll', () => {
    //ver la cantidad de pixeles que hemos scrolleado
    /*const scrollPixels = window.scrollY;
    console.log(scrollPixels);*/

    const premium = document.querySelector('.premium');
    const ubicacionPremium = premium.getBoundingClientRect();
    console.log(ubicacionPremium.top);

    if (ubicacionPremium.top < 900) {
        console.log('La seccion premium ya esta visible');
    }else{
        console.log('Aun no esta visible.');
    }


})