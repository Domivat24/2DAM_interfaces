const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/tasksTarde", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let tasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});
let Task = mongoose.model("tasks", tasksSchema)

module.exports = {
    Task
}
