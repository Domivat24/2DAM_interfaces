const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/contactos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    telephone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^\d{9}$/
    },
    age: {
        type: Number,
        min: 18,
        max: 120
    }
});
let Contact = mongoose.model("contactos", contactSchema)
let contact1 = new Contact({
    name: "Boris3",
    telephone: "133323123",
    age: 49
})
//insertamos contacto
let p1 = contact1.save().then(resultado => {
    console.log("Contact addded: ", resultado)
}).catch()
//busqueda
let p2 = Contact.find({nombre: 'Boris'}).then(res => console.log(res)).catch(err => console.log("ERROR:" + err))
let p3 = Contact.find({nombre: 'Boris'}).then(res => console.log(res)).catch(err => console.log("ERROR:" + err))

//debemos esperar que acaben todas las promesas 
//para cerrar la conexión a la base de datos
Promise.all([p1, p2, p3]).then(values => {
    mongoose.connection.close();
});