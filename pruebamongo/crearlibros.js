const mongoose = require("mongoose")
const fs = require("fs");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/librosTarde", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    img: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true

    }
});
let Book = mongoose.model("libros", bookSchema)
let fichero = fs.readFileSync('./books.json');
let libros = JSON.parse(fichero);

libros.forEach(libro => {
    /*Metodo asignando cada valor
     bookI = new Book( {
         title: libro.title,
         author: libro.author,
         img: libro.img
     })*/

    let p1 = new Book(libro).save().then(resultado => {
        console.log("Book added: ", resultado)
    }).catch(err => console.log("ERROR: " + err))
})
Promise.all([]).then(() => mongoose.connection.close())