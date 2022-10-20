//Crear en un módulo una función que dado un color de este json nos devuelva el hexadecimal.
let colores = [{
    "nombreColor": "rojo",
    "valorHexadec": "#f00"
},
    {
        "nombreColor": "verde",
        "valorHexadec": "#0f0"
    },
    {
        "nombreColor": "azul",
        "valorHexadec": "#00f"
    },
    {
        "nombreColor": "cyan",
        "valorHexadec": "#0ff"
    },
    {
        "nombreColor": "magenta",
        "valorHexadec": "#f0f"
    },
    {
        "nombreColor": "amarillo",
        "valorHexadec": "#ff0"
    },
    {
        "nombreColor": "negro",
        "valorHexadec": "#000"
    }
]
//Añado el vector colores por si se quisiera utilizar otro json y así ser más reutilizable
let devolverHex = (color, colores) => {
    let hex;
    if (colores.some(c => {
        hex = c.valorHexadec;
        c.nombreColor === color.toLowerCase();
    }) === true) {
        console.log("El valor hexadecimal de %s es : %s", color, hex);
    } else {
        console.log("No se ha encontrado el color en el json o has introducido mal el color.")
    }
}
module.exports = {
    colores: colores,
    devolverHax: devolverHax,
}
//En otro fichero en el que queramos usar este método , incluíriamos las siguientes líneas de código:
const valorHax = require(__dirname + "/Ejercicio4.js")
//Y para utilizarlo:
console.log(valorHax.devolverHax("magenta", valorHax.colores));


