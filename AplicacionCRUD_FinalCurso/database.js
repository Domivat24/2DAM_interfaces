const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/games", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


/*
let fichero = fs.readFileSync('./juegos.json');
let juegos = JSON.parse(fichero);
juegos.forEach(juego => {
    p1 = new Game(juego).save().then(resultado => {
        console.log("Game added: ", resultado)
    }).catch(err => console.log("ERROR: " + err))
})
Promise.all([p1]).then(() => mongoose.connection.close())
*/