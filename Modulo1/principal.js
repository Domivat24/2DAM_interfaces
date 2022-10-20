const ruta = 'C:/\Program files';
const fs = require('fs');
const utilidades = require(__dirname + "./utilidades");
fs.readdirSync(ruta).forEach(fichero => console.log(fichero));
console.log(utilidades.sumar(1, 2));