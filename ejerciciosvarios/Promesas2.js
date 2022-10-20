let portero = edad => {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Adelante");
        } else {
            reject("Quieto parao");
        }
    });
}
portero(8).then(resultado => {
    console.log(resultado);
}).catch(menor => {
    console.log(menor);
});
portero(-10).then(resultado => {
    console.log(resultado);
}).catch(menor => {
    console.log(menor);
});
portero(200).then(resultado => {
    console.log(resultado);
}).catch(menor => {
    console.log(menor);
});

//APARTADO 3
let sameStrings = (cadena1, cadena2) => {
    return new Promise((resolve, reject) => {
        if (cadena1 === cadena2) {
            resolve("Son iguales las cadenas, muyayo.");
        } else {
            reject("A ver si aprendemos a escribir...");
        }
    })
}
sameStrings("ave maria", "ave maria").then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});
sameStrings("Aéíóú", "aéíÓú").then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});

// APARTADO 4
const generos = {
    Rock: "rock",
    Pop: "pop",
    Punk: "punk",
    Electronica: "electrónica",
    Indie: "indie"
};
let discos = [{
    nombre: "The Story",
    autor: "Fivefold",
    fecha: 2006,
    genero: generos.Rock,
    localizacion: 1,
    prestado: false
}, {
    nombre: "Worthwhile",
    autor: "Nathan Wagner",
    fecha: 1950,
    genero: generos.Indie,
    localizacion: 1,
    prestado: false
}, {
    nombre: "To be Honest",
    autor: "Fivefold",
    fecha: 1969,
    genero: generos.Indie,
    localizacion: 1,
    prestado: false
}, {
    nombre: "5 Minutes of Fame",
    autor: "Citizen Soldier",
    fecha: 2006,
    genero: generos.Rock,
    localizacion: 1,
    prestado: false
}, {
    nombre: "Beautiful People",
    autor: "Miles Edgeworth",
    fecha: 2021,
    genero: generos.Electronica,
    localizacion: 13,
    prestado: false
}, {
    nombre: "The Story",
    autor: "Fivefold",
    fecha: 2006,
    genero: generos.Indie,
    localizacion: 2,
    prestado: false
},];
console.log(discos.filter(disco => {
    return disco.genero === generos.Indie;
}));
console.log();
console.log(discos.sort((a, b) => a.autor.localeCompare(b.autor)));
console.log();
let discos2 = discos.filter(disco => disco.fecha <= 1970);
//Filtro en un nuevo array los discos anteriores a 1970 pare luego ordenar el array original por la fecha y eliminar con splice en base a discos2.length
discos.sort((a, b) => a.fecha - b.fecha).splice(0,discos2.length);
console.log(discos2)
console.log()
console.log(discos);
