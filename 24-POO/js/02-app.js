//Metodos en una clase y metodos estaticos
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    };

    mostrarInformacion(){
        return `Buenas tardes ${this.nombre}, tu saldo actual es $${this.saldo}`;
    };

    //los metodos estaticos se mandan llamar desde la clase no de la instancia, y no pertenecen al prototype
    static bienvenida(){
        return `Bienvenido al Cajero`;
    }
};

const rodo = new Cliente('Rodolfo', 1500);
console.log(rodo);
console.log(Cliente.bienvenida());
console.log(rodo.mostrarInformacion());