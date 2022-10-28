const fs = require('fs');

let fichero = fs.readFileSync('./clientes.json');
let clientes = JSON.parse(fichero);

//Todos los botones
let bFirst = document.getElementById("bFirst");
let bPrevious = document.getElementById("bPrevious");
let bNext = document.getElementById("bNext");
let bLast = document.getElementById("bLast");
let bErase = document.getElementById("bErase");
let bUpdate = document.getElementById("bUpdate");
let bInsert = document.getElementById("bInsert");

let posicion = 0;
let controlInsert = false;


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
    if (posicion > 0) {
        posicion--;
        setCliente(posicion);
        clientes.splice(posicion + 1, 1);
    } else {
        if (clientes.length !== 1) {
            setCliente(posicion + 1);
            clientes.splice(posicion, 1);
        } else {
            document.getElementById("dni").value = '';
            document.getElementById("name").value = '';
            document.getElementById("telefono").value = '';
            posicion = 0;
        }
    }
    setJson();
})
bInsert.addEventListener('click', () => {
    let cl = {};
    if (controlInsert === false) {
        emptyValues();
        controlInsert = true;
        bInsert.classList.remove('btn-primary');
        bInsert.classList.add('btn-negative');
    } else {
        cl.dni = document.getElementById("dni").value;
        cl.nombre = document.getElementById("name").value;
        cl.telefono = document.getElementById("telefono").value;

        bInsert.classList.remove('btn-negative')
        bInsert.classList.add('btn-primary')
        controlInsert = false;
        posicion = clientes.push(cl)-1;
        setCliente();
        setJson();
    }


});
bUpdate.addEventListener('click', () => {
    let cl = {};
    cl.dni = document.getElementById("dni").value;
    cl.nombre = document.getElementById("name").value;
    cl.telefono = document.getElementById("telefono").value;
    clientes.splice(posicion, 1, cl);
    setCliente(posicion);
})

let setCliente = () => {
    document.getElementById("dni").value = clientes[posicion].dni;
    document.getElementById('name').value = clientes[posicion].nombre;
    document.getElementById("telefono").value = clientes[posicion].telefono;
}
let setJson = () => {
    fs.writeFileSync('./clientes.json', JSON.stringify(clientes));
}
let emptyValues = () => {
    document.getElementById("dni").value = '';
    document.getElementById("name").value = '';
    document.getElementById("telefono").value = '';
}