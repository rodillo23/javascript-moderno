//weakset -> set debil 😒
// a diferencia del set, en weakset solo le podemos pasar objetos.
//no tiene el metodo .size, por lo tanto no se puede saber el tamaño del weakset
//no son iterables

const weakset = new WeakSet();

const cliente = {
    nombre: 'Rodolfo',
    saldo: 1500
};

const cliente2 = {
    nombre: 'Rodolfo',
    saldo: 1500
};

const cliente3 = {
    nombre: 'Rodolfo',
    saldo: 1500
};

weakset.add(cliente);
weakset.add(cliente2);
weakset.add(cliente3);

console.log(weakset);
console.log(weakset.has(cliente)); //-> true
//console.log(weakset.has('nombre')); //-> false
//console.log(weakset.has(cliente2)); //-> false

console.log(weakset);
