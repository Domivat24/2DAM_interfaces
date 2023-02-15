const {Game} = require('./database/crearjuegos.js');
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")

let app = express()

app.use(bodyParser.json())
app.use("/public", express.static(__dirname + "/fotos"))
app.get("/juegos", (req, res) => {
    Game.find().then(res2 => {
        let juegos = []
        res2.forEach(juego => {
            juegos.push({
                "title": juego.title,
                "developer": juego.developer,
                "img" : juego.img
            });
        })
        res.send(juegos)
        console.log(juegos)
    }).catch(err => console.log(err))

})
app.post("/juegos/nuevo", (req, res) => {
    let nuevoJuego = req.body;
    new Game(nuevoJuego).save().then(res => console.log("Game added: ", res)).catch(err => console.log(err))
    res.send({ok: true})
})
app.post("/juegos/eliminar", (req, res) => {
    let nuevoJuego = req.body;
    new Game(nuevoJuego).save().then(res => console.log("Game added: ", res)).catch(err => console.log(err))
    res.send({ok: true})
})
app.post("/juegos/actualizar", (req, res) => {
    let nuevoJuego = req.body;
    new Game(nuevoJuego).save().then(res => console.log("Game added: ", res)).catch(err => console.log(err))
    res.send({ok: true})
})
app.listen(8080)
