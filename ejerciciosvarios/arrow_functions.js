let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];
let nuevaPersona = (persona) => {
    return new Promise((resolve, reject) => {
        let match = 0;
        //return false funciona como un break y return true como un continue, más métodos de salir del bucle en:
        // https://masteringjs.io/tutorials/fundamentals/foreach-break
        datos.every(numero => {
            if (numero.telefono === persona.telefono) {
                match = 1;
                return false;
            }
            return true;
        });
        if (match === 1) {
            reject("Error: El teléfono ya existe");
        } else {
            datos.push(persona);
            resolve(persona);
        }
    })
};
let borrarPersona = telefono => {
    return new Promise((resolve, reject) => {
        let match = 0;
        for (let cont = 0; cont < datos.length; cont++) {
            if (datos[cont].telefono === telefono) {
                resolve(datos.splice(cont, 1));
                match = 1;
                break;
            }
        }
        if (match === 0) {
            reject("Error: no se encontraron coincidencias");
        }

    });
}
nuevaPersona({nombre: "Juan", telefono: "965661564", edad: 60}).then(resultado => {
    console.log("Añadida persona: ", resultado);
}).catch(error => {
    console.log(error);
});
nuevaPersona({nombre: "Juan", telefono: "965661564", edad: 60}).then(resultado => {
    console.log("Añadida persona: ", resultado);
}).catch(error => {
    console.log(error);
});
nuevaPersona({nombre: "Juan22", telefono: "965661564", edad: 60}).then(resultado => {
    console.log("Añadida persona: ", resultado);
}).catch(error => {
    console.log(error);
});
nuevaPersona({nombre: "Rodolfo", telefono: "910011001", edad: 20}).then(resultado => {
    console.log("Añadida persona: ", resultado);
}).catch(error => {
    console.log(error);
});
console.log(datos);
borrarPersona("910011001").then(resultado => {
    console.log("Eliminada persona: ", resultado);
}).catch(error => {
    console.log(error);
});
borrarPersona("910011001").then(resultado => {
    console.log("Eliminada persona: ", resultado);
}).catch(error => {
    console.log(error);
});
console.log(datos);
