/*
Crear una clase llamada Animal con la propiedad tipo, especie y edad.
 De ella heredan Perro y Gato, que tienen los métodos ladrar y maullar.
 Crear un evento que se llame ‘miedo’ que lance esos métodos en instancias
  de cada clase perro y gato.
 */
const events = require('events');

class Animal extends events.EventEmitter {
    tipo;
    especie;
    edad;

    constructor(tipo, especie, edad) {
        super();
        this.tipo = tipo;
        this.especie = especie;
        this.edad = edad;
    }
}

class Perro extends Animal {
    let
    ladrar = () => {
        console.log("GUAU");
    }

    constructor() {
        super();
    }
}

class Gato extends Animal {
    let
    maullar = () => {
        console.log("MIAU");
    }

    constructor() {
        super();
    }
}

let gato = new Gato("tipoGato", "especieGatil", 10);
let perro = new Perro("tipoPerro", "especiePerril", 20);
let animales = [gato, perro];
animales.forEach(animal => {
    animal.on('miedo', actuan => {
        console.log("El animal de tipo %s, especie %s y de edad %d, dice con miedo:\n%s", animal.tipo, animal.especie, animal.edad, actuan);
    })
})
gato.emit('miedo', gato.maullar())
perro.emit('miedo', perro.ladrar())

