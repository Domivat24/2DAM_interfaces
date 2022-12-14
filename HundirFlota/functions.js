const {dialog} = require('@electron/remote')
const canvas = document.getElementById("myCanvas")

const ctx = canvas.getContext("2d")
ctx.font = "bold 22px sans-serif";
let barcosN = 3;
let intentos = 0;
let canvasW = canvas.width;
let canvasH = canvas.height;
let barcos = [];

let generarBarco = () => {
    barcos.push({
        "x": Math.floor(Math.random() * canvasW),
        "y": Math.floor(Math.random() * canvasH),
        "width": 150,
        "height": 100
    })
}
let fillBarco = (barco) => {
    let colores = ["green", "black", "blue", "yellow"]
    let indice = Math.floor(Math.random() * 4)
    ctx.fillStyle = colores[indice]
    ctx.fillRect(barco.x, barco.y, barco.width, barco.height)

}

for (let i = 0; i < barcosN; i++) {
    generarBarco()
}


let reiniciar = document.getElementById("reiniciar")
const offsetY = 10


//or canvas
canvas.addEventListener("click", (e) => {
    intentos++;
    ctx.fillStyle = "black";
    document.getElementById("intentos").innerHTML = intentos;
    let xAdjusted = e.clientX
    let yAdjusted = e.clientY - offsetY

    barcos.forEach(barco => {
        if ((xAdjusted >= barco.x && xAdjusted <= (barco.width + barco.x)) && (yAdjusted >= barco.y && yAdjusted <= (barco.height + barco.y))) {
            fillBarco(barco);
            return;
        }
    })

    ctx.fillText("*", xAdjusted, yAdjusted);


})
reiniciar.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvasW, canvasH);
    intentos = 0;
    document.getElementById("intentos").innerHTML = intentos;
})

