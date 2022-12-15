const {dialog} = require('@electron/remote')
const canvas = document.getElementById("myCanvas")

const ctx = canvas.getContext("2d")
let barcosN = 3;
ctx.font = "bold 22px sans-serif";
let intentos = 0;
let canvasW = canvas.width;
let canvasH = canvas.height;
let barcos = [];
let aciertos = 0;

const mouse = {
    x: 0, y: 0,                        // coordinates
    lastX: 0, lastY: 0,                // last frames mouse position
    b1: false, b2: false, b3: false,   // buttons
    buttonNames: ["b1", "b2", "b3"],   // named buttons
}


let generarBarco = () => {
    barcos.push({
        "x": Math.floor(Math.random() * canvasW),
        "y": Math.floor(Math.random() * canvasH),
        "width": Math.floor(Math.random() * 100) + 50,
        "height": Math.floor(Math.random() * 100) + 50,
        "found": false
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
    mouse.x = e.clientX - canvas.getBoundingClientRect().left - scrollX
    mouse.x /= canvas.getBoundingClientRect().width
    mouse.x *= canvas.width
    mouse.y = e.clientY - canvas.getBoundingClientRect().top - scrollY
    mouse.y /= canvas.getBoundingClientRect().height
    mouse.y *= canvas.height
    mouse.y += 10
    mouse.x -= 4.2

    ctx.fillStyle = "black";
    document.getElementById("intentos").innerHTML = intentos;
    let contador = 0;

    try {
        barcos.forEach(barco => {
            if ((mouse.x >= barco.x && mouse.x <= (barco.width + barco.x)) && (mouse.y >= barco.y && mouse.y <= (barco.height + barco.y))) {
                if (!barco.found) {
                    fillBarco(barco);
                    aciertos++;
                    if (aciertos === 3) {
                        enhorabuena()
                    }

                }
                barco.found = true

                contador++;
                throw BreakException;
            }
        })


        ctx.fillText("*", mouse.x, mouse.y);
    } catch (BreakException) {

    }

})
reiniciar.addEventListener("click", () => {
    canvas.disable = false;
    ctx.fillStyle = "Black"
    ctx.font = "bold 22px sans-serif";
    ctx.clearRect(0, 0, canvasW, canvasH);
    intentos = 0;
    aciertos = 0;
    barcos.splice(0, barcos.length)
    document.getElementById("intentos").innerHTML = intentos;
    for (let i = 0; i < barcosN; i++) {
        generarBarco()
    }
    document.getElementById("myCanvas").setActive(true);
})
let enhorabuena = () => {
    ctx.fillStyle = "Black"
    ctx.font = "bold 60px sans-serif";
    ctx.fillText("¡¡ENHORABUENA!!", 50, canvas / 1.9);
    ctx.fillStyle = "Red"
    ctx.font = "bold 44px sans-serif";
    ctx.fillText("¡¡Ereh un ganador!!", 50, canvasH / 1.6);
    document.getElementById("myCanvas").setActive(false);
}

