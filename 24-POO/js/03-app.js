//Herencia en clases
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

//cuando heredamos de una clase, basta con aplicar la herencia para poder utilizar los mismos metodos y 
//atributos de la clase.
class Persona extends Cliente{}

const pepito = new Persona('Pepito', 100);
console.log(Persona.bienvenida());
console.log(pepito.mostrarInformacion());

//Heredar y extender la funcionalidad de la clase
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    };

    static bienvenida(){
        return `Bienvenido al Cajero de Empresas`;
    };

};

const telmex = new Empresa('Telmex', 1000000, 5555555555, 'Comunicaciones');
console.log(Empresa.bienvenida());
console.log(telmex.mostrarInformacion());