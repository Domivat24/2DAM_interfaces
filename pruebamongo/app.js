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
    name: "Boris",
    telephone: "123123123",
    age: 49
})
let p1 = contact1.save().then(resultado => {
    console.log("Contact addded: ", resultado)
}).catch()

