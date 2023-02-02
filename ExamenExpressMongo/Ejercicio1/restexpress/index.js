const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const os = require('node:os')

let app = express()

app.use(bodyParser.json())


app.get("/fichero", (req, res) => {
    let fichero = fs.readFileSync("./fichero.html");
    res.send((fichero));
});
app.get("/", (req, res) => {
    let fichero = fs.readFileSync("./bienvenida.json");
    res.send(JSON.parse(fichero));
});
app.get("/hostname", (req, res) => {
    res.send(os.hostname());
});

app.listen(8080);