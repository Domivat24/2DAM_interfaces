//parte MONGODB
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/librosTarde', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//esquema
let librosSchema = new mongoose.Schema({
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

//modelo
let Libro = mongoose.model('libros', librosSchema);

let buscarTodos = () => {
    Libro.find().then(res => {
        inicio(res)
    }).catch(() => console.log("ERROR ON FIND"))
}


let inicio = json => {
    let cadena = ``
    json.forEach(libro => {
        cadena +=
            `<div>
<x-box vertical>
<img src="./fotos/${libro.img}" height="170" width="108">
<x-label><strong>${libro.title}</strong></x-label>
<x-label>${libro.author}</x-label>
</x-box>
</div>`;
    })
    document.getElementById("wrapper").innerHTML = cadena
}
buscarTodos()
