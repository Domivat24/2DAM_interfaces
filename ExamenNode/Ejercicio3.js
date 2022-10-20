/*
 Crear una función que añade personas, y añadir dos.
Crear una función que envia al navegador mediante un servidor node, las personas que tienen carnet.
 */
const fs = require('fs');
let fichero = fs.readFileSync(__dirname + "/autoescuela.json");
let clientes = new Array();
clientes = JSON.parse(fichero);

let guardarFichero = () => {
    fs.writeFileSync(__dirname + "/autoescuela.json", JSON.stringify(clientes));
}


let addPersona = (persona) => {
    clientes.push(persona);
    guardarFichero();
}
addPersona({
    "nombre": "Manito grande",
    "edad": 28,
    "carnet de conducir": true
});
addPersona({
    "nombre": "Tomás el molinos",
    "edad": 60,
    "carnet de conducir": false
});

const http = require('http');
let server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify(clientes.filter(cliente => {
        //sin modificar el fichero json para que no tenga espacios, no sé como escribir la variable con espacios como valor de cliente
        cliente["carnet de conducir"] === true;
    })));
});
server.listen(3000, '127.0.0.1');