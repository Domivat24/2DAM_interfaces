const mongoose = require("mongoose")
const fs = require("fs");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/peliculasExamen", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let p1, p2;
let peliculaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    clasificacion: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
});
let Pelicula = mongoose.model("peliculas", peliculaSchema)
let fichero = fs.readFileSync('./peliculas.json');
let peliculas = JSON.parse(fichero);

/* Añadir películas:
peliculas.peliculas.forEach(pelicula => {
    p1 = new Pelicula(pelicula).save().then(res => console.log("Película añadida: ", res)).catch(err => console.log(err))
})*/

//filtrado de generos
let generos = new Array()
peliculas.peliculas.forEach(pelicula => {
    generos.push(pelicula.clasificacion)
})
generos = generos.sort()

let generosSinRepetir = new Array();
for (let i = 0; i < generos.length; i++) {
    if (generos[i] !== generos[i + 1]) {
        generosSinRepetir.push(generos[i])
    }
}


let inicio = (cadena) => {
    console.log(cadena)
    document.getElementById("peliculas").innerHTML = cadena
}
let cadena = ``;
generosSinRepetir.forEach(genero => {
        cadena += `<div>
<table class="table-striped">
            <thead>
            <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Director</th>
                <th>Clasificación</th>
            </tr>
            </thead>
            <tbody>`;
        p2 = Pelicula.find({clasificacion: genero}).then(res => {
            res.forEach(pelicula => {
                cadena += `<tr>
      <td>${pelicula.id}</td>
      <td>${pelicula.nombre}</td>
      <td>${pelicula.director}</td>
      <td>${pelicula.clasificacion}</td>
    </tr>`
            })
            cadena += `</tbody>
</table>
</div>`;
        }).catch(err => console.log(err))
    }
)
//no me lo mete en el innerHTML, pese a que si que me encuentra los datos con node
inicio(cadena)

/*
Promise.all([p2]).then(values => {
    mongoose.connection.close();
});*/
