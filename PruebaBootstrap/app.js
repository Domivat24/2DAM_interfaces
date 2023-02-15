const {Task} = require('./database.js');
let list = document.getElementById("list")

document.getElementById("addTask").addEventListener('click', () => {
    let newTask = document.getElementById("newTask")
    let task = new Task({
        name: newTask.value
    })
    task.save().then(res => {
        newTask.value = ''
        findAllTasks()
    }).catch(() => newTask.value = 'Error while adding Task')

})
document.getElementById("deleteTask").addEventListener('click', () => {
    let newTask = document.getElementById("newTask").value
    Task.deleteOne({name: newTask}).then(res => {
        newTask.value = res
    }).catch(() => newTask.value = 'Error while adding Task')
})

let findAllTasks = () => {
    Task.find().then(res => paintTasks(res)).catch(() => console.log("ERROR ON FIND"))
}
let paintTasks = (tasks => {
    let cadena = ``
    tasks.forEach(task => {
        cadena = `<li class="list-group-item">${task.name}</li`
    })
    list.insertAdjacentHTML('beforeend', cadena)
})