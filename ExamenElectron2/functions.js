const fs = require('fs');
let task1 = document.getElementById("task1")
let task2 = document.getElementById("task2")
let exam = document.getElementById("exam")
let calculate = document.getElementById("calculate")

calculate.addEventListener('click', () => {
    let n1 = Number(task1.value)
    let n2 = Number(task2.value)
    let nExam = Number(exam.value)
    let qualification = (0.7 * nExam + 0.3 * (n1 + n2) / 2);
    document.getElementById("resultado").innerHTML = `<h1>${String(qualification)}</h1>`
})