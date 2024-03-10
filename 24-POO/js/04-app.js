//Propiedades Privadas

class Cliente{

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    };

    getNombre(){
        return this.#nombre;
    };

    setNombre(nombre){
        this.#nombre = nombre;
    }

    mostrarInformacion(){
        return `Buenas tardes ${this.#nombre}, tu saldo actual es $${this.saldo}`;
    };

    //los metodos estaticos se mandan llamar desde la clase no de la instancia, y no pertenecen al prototype
    static bienvenida(){
        return `Bienvenido al Cajero`;
    }
};

const rodo = new Cliente('Rodolfo', 2500);
rodo.setNombre('Jose');
console.log(rodo);
console.log(rodo.mostrarInformacion());
//console.log(rodo.#nombre); -> Nos devuelve error xq a una propiedad privada solo se accede desde la clase

