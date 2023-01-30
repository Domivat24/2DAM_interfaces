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
//Boton Buscar Autor
document.getElementById("btnBuscarAutor").addEventListener("click", () => {
    let autor = document.getElementById("txtBuscarAutor").value
    if (autor === "") {
        let notificacion = document.querySelector("#notificacion")
        notificacion.innerHTML = "Debe escribir algo"
        notificacion.opened = true;
    } else {
        Libro.find({author: {$regex: autor, $options: 'i'}}).then(res => inicio(res)).catch(err => console.log(err))
    }
})
//Boton buscar Titulo
document.getElementById("btnBuscarTitulo").addEventListener("click", () => {
    let titulo = document.getElementById("txtBuscarTitulo").value
    if (titulo === "") {
        let notificacion = document.querySelector("#notificacion")
        notificacion.innerHTML = "Debe escribir algo"
        notificacion.opened = true;
    } else {
        Libro.find({author: {$regex: titulo, $options: 'i'}}).then(res => inicio(res)).catch(err => console.log(err))
    }
})

document.getElementById("btnAniadirLibro").addEventListener("click", (ev) => {

    let titulo = document.getElementById("txtNuevoTitulo").value
    let autor = document.getElementById("txtNuevoAutor").value
    let imagen = document.getElementById("txtNuevaImagen").value

    if (imagen === "" || autor === "" || titulo === "") {
        let notificacion = document.querySelector('#notificacion2')
        notificacion.innerHTML = "Debe escribir algo"
        notificacion.opened = true
    } else {
        let libro = new Libro({
            title: titulo,
            author: autor,
            img: imagen
        })
        libro.save().then(res => {
            let notificacion = document.querySelector('#notificacion2')
            notificacion.innerHTML = "Libro añadido correctamente"
            notificacion.opened = true
            buscarTodos()
        }).catch(() => {
            let notificacion = document.querySelector('#notificacion2')
            notificacion.innerHTML = "No se ha podido añadir el libro"
            notificacion.opened = true
        })
    }
})
document.getElementById("btnBorrarLibro").addEventListener("click", () => {
    let titulo = document.getElementById("tituloABorrar").value
    if (titulo === "") {
        let notificacion = document.querySelector('#notificacion3')
        notificacion.innerHTML = "Debe escribir algo"
        notificacion.opened = true
    } else {
        Libro.deleteOne({title: titulo}).then(() => buscarTodos()).catch(err => console.log(err))
        let notificacion = document.querySelector('#notificacion3')
        notificacion.innerHTML = "Libro eliminado correctamente"
        notificacion.opened = true
    }

})
//Boton mostrar todos
document.getElementById("btnMostrarTodos").addEventListener("click", () => Libro.find().then(res => inicio(res)).catch(err => console.log(err)))

