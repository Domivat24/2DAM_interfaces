const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")

let app = express()

app.use(bodyParser.json())

app.get("/bienvenida", (req, res) => {
    res.send("Hola, bienvenido/a");
});
app.get("/", (req, res) => {
    res.send("Bienvenido/a a BARRA");
});
//Listado clientes general
app.get("/clientes", (req, res) => {
    let fichero = fs.readFileSync("./clientes.json")
    res.send(JSON.parse(fichero));
})
//Listado por dni
app.get("/clientes/:dni", (req, res) => {
    let fichero = fs.readFileSync("./clientes.json")
    let clientes = JSON.parse(fichero)
    let clients = clientes.filter(client => client.dni === req.params.dni)
    if (clients.length !== 0) {
        res.send(clients)
    } else {
        res.send({
            mensajeError: "Cagaste"
        })
    }
})
app.post("/clientes", (req, res) => {
    try {
        let nuevoCliente = req.body;
        let fichero = fs.readFileSync("./clientes.json")
        let clientes = JSON.parse(fichero)
        clientes.push(nuevoCliente)
        fs.writeFileSync("./clientes.json", JSON.stringify(clientes))
        res.send({ok: true})
    } catch (e) {
        res.send({ok: false})
    }
})
app.listen(8080);