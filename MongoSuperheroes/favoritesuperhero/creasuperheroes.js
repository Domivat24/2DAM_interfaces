const mongoose = require("mongoose")
const fs = require("fs");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/superheroesTarde", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let votosSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    voter: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }


})
let superheroSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    superhero: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    publisher: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    alter_ego: {
        type: String,
        minlength: 1,
        trim: true
    },
    first_appearance: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    characters: {
        type: String,
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
let Superhero = mongoose.model("superheroes", superheroSchema)
let Vote = mongoose.model("votes", votosSchema)
let fichero = fs.readFileSync('./data/superheroes.json');
let fichero2 = fs.readFileSync('./data/votes.json');
let superheroes = JSON.parse(fichero);
let votos = JSON.parse(fichero2);

superheroes.forEach(superhero => {
    let p1 = new Superhero(superhero).save().then(resultado => {
        console.log("Superhero added: ", resultado)
    }).catch(err => console.log("ERROR: " + err))
})
votos.forEach(vote => {
    let p2 = new Vote(vote).save().then(resultado => {
        console.log("Vote added: ", resultado)
    }).catch(err => console.log("ERROR: " + err))
})
module.exports = {
    Superhero,
    Vote
}
