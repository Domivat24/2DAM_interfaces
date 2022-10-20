const per = require(__dirname + "/personas");
let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];
per.nuevaPersona({nombre: "Juan", telefono: "965661564", edad: 60}, datos).then(resultado => {
    console.log("Añadida persona: ", resultado);
}).catch(error => {
    console.log(error);
});
per.nuevaPersona({nombre: "Juan", telefono: "965661564", edad: 60}, datos).then(resultado => {
    console.log("Añadida persona: ", resultado);
}).catch(error => {
    console.log(error);
});
console.log(datos);
per.borrarPersona("910011001",datos).then(resultado => {
    console.log("Eliminada persona: ", resultado);
}).catch(error => {
    console.log(error);
});
per.borrarPersona("965661564",datos).then(resultado => {
    console.log("Eliminada persona: ", resultado);
}).catch(error => {
    console.log(error);
});
console.log(datos);