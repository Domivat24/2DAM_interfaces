//cargar módulo fs
const fs = require('fs')
//leer clientes del archivo
let fichero = fs.readFileSync('./clientes.json');
//array para manipular los datos
let clientes
//parseamos el fichero en formato json
//ahora en el array clientes tendremos un vector
//donde en cada posición del vector hay un objeto
//con los datos de un cliente
clientes = JSON.parse(fichero);

//Todos los botones
let bFirst = document.getElementById("bFirst");
let bPrevious = document.getElementById("bPrevious");
let bNext = document.getElementById("bNext");
let bLast = document.getElementById("bLast");
let bErase = document.getElementById("bErase");
let bUpdate = document.getElementById("bUpdate");
let bModify = document.getElementById("bModify");

let posicion = 0;


bFirst.addEventListener('click', () => {
    posicion = 0;
    setCliente(posicion);
})
bLast.addEventListener('click', () => {
    posicion = clientes.length - 1;
    setCliente(posicion);
})
bPrevious.addEventListener('click', () => {
    if (posicion > 0) {
        posicion--;
        setCliente(posicion);
    }
});
bNext.addEventListener('click', () => {
    if (posicion < clientes.length - 1) {
        posicion++;
        setCliente(posicion);
    }
});
bErase.addEventListener('click', () => {
    //TODO: que funcione
    if (posicion > 0) {
        posicion--;
        setCliente(posicion);
        clientes.splice(posicion+1,1);
    } else {
        setCliente();
        clientes.splice(posicion-1,1);
    }
})

let setCliente = (posicion) => {
    document.getElementById("dni").value = clientes[posicion].dni;
    document.getElementById('name').value = clientes[posicion].nombre;
    document.getElementById("telefono").value = clientes[posicion].telefono;
}