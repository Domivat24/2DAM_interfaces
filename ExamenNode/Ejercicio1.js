/*
Crear una promesa que lea un fichero llamado robots.txt (escribir contenido en él) y lo imprima, y se resuelva correctamente en ese caso y
 en caso de error (no existe, problemas de ruta) devuelva un mensaje de error. Haced llamadas en los dos casos.
 */
const fs = require('fs');
let leerFichero = (fichero) => {
    return new Promise((resolve, reject) => {
        try {
            //Escribo directamente en el archivo, si no existe irá al catch
            fs.writeFileSync(__dirname + "/robots.txt", "Se ha escrito en el fichero robots.txt");
            let robots = fs.readFileSync(__dirname + "/" + fichero, 'utf8');
            resolve(console.log(robots));
        } catch (e) {
            reject("ERROR: Problema de ruta o no existe");
        }
    });
}
leerFichero("robots.txt").then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})
leerFichero("robotos.txt").then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})