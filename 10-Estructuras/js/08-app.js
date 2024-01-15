//Detener la ejecucion de un if con return

const puntaje = 450;

//Sin el return ejecutaria los dos dos logs, con return si se cumple la primera no ejecuta lo demas
//return solo se puede ejectuar dentro de una funcion

function revisarPuntaje(){
    if (puntaje > 400) {
        console.log('Excelente puntaje!');
        return;
    }

    if (puntaje > 300) {
        console.log('Buen puntaje!');
        return;
    }
}

revisarPuntaje()