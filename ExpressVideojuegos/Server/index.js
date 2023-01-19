const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")

let app = express()

app.use(bodyParser.json())
app.use("/public", express.static(__dirname + "/fotos"))
app.get("/juegos", (req, res) => {
    const libros = fs.readFileSync(__dirname + "/juegos.json")
    res.send(JSON.parse(libros))
})
app.post("/juegos/nuevo", (req, res) => {
    let nuevoLibro = req.body;
    let fichero = fs.readFileSync("./books.json")
    let libros = JSON.parse(fichero)
    libros.push(nuevoLibro)
    fs.writeFileSync("./books.json", JSON.stringify(libros))
    res.send({ok: true})
})
app.listen(8080)
