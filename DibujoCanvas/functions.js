const {dialog} = require('@electron/remote')
const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

let generar = document.getElementById("generar")
//or canvas
canvas.addEventListener("click", (e) => {
    let colores = ["green", "black", "blue", "yellow"]
    let indice = Math.floor(Math.random() * 4)
    ctx.fillStyle = colores[indice]
    ctx.fillRect(e.clientX, e.clientY, 150, 100)
})
generar.addEventListener("click", () => {
    generarRectanguloAleatorio()
})
let generarRectanguloAleatorio = () => {
    let colores = ["green", "black", "blue", "yellow"]
    let indice = Math.floor(Math.random() * 4)
    ctx.fillStyle = colores[indice]
    ctx.fillRect(Math.floor(Math.random() * 550), Math.floor(Math.random() * 400), 150, 100)
}