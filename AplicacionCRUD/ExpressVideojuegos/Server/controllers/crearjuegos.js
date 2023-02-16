const mongoose = require("mongoose")
const fs = require("fs");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/games", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let p1;
let gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    developer: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    img: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    }
});
let Game = mongoose.model("juegos", gameSchema)
let fichero = fs.readFileSync('./juegos.json');
let juegos = JSON.parse(fichero);

/*juegos.forEach(juego => {
    p1 = new Game(juego).save().then(resultado => {
        console.log("Game added: ", resultado)
    }).catch(err => console.log("ERROR: " + err))
})
Promise.all([p1]).then(() => mongoose.connection.close())*/
module.exports = {
    Game
}