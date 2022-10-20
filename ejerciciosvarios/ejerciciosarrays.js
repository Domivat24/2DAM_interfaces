let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefeno: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];
datos.push({nombre: "Pedro", telefono: "611944444", edad: 25},
    {nombre: "Julia", telefono: "633232323", edad: 37});
console.log(datos);
datos = datos.sort((a, b) => a.edad - b.edad);
console.log(datos);
datos = datos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(datos);
console.log(datos.filter((a) => a.edad >= 30));