const {dialog} = require('@electron/remote')
let reiniciar = document.getElementById("reiniciar");
let palabra = document.getElementById("palabra")
let letra = document.getElementById("letra")
let oculto = document.getElementById("oculto")
let match;
let png;
let guiones;
let aciertos;
let fallos;
let repetido;
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
palabra.addEventListener('keyup', (evento) => {
    if (evento.key === "Enter") {
        fallos = 0;
        aciertos = 0;
        guiones = "";
        for (let i = 0; i < palabra.value.length; i++) {
            guiones += "-";
        }
        oculto.innerHTML = guiones;
        document.getElementById("palabra").disabled = true;
        document.getElementById("letra").disabled = false;
    }

})

letra.addEventListener('keyup', (evento) => {
    if (evento.key === "Enter") {
        repetido = false;
        match = false;
        //Comprobar que no se gane repitiendo una letra ya adivinada
        for (let i = 0; i < guiones.length; i++) {
            if (letra.value === guiones.charAt(i)) {
                repetido = true;
            }
        }

        if (repetido === true) {
            dialog.showErrorBox("Atención", "Letra repetida, caballero")
        } else {
            for (let i = 0; i < palabra.value.length; i++) {
                if (palabra.value.toLowerCase().charAt(i) === letra.value) {
                    match = true;
                    aciertos++;
                    guiones = guiones.replaceAt(i, letra.value);
                }
            }
            oculto.innerHTML = guiones;
            if (!match) {
                fallos++;
                png = "img/" + fallos + ".png";
                document.getElementById("imagen").src = png
                if (fallos === 6) {
                    dialog.showErrorBox("Atención", "Perdiste muyayo")
                    document.getElementById("letra").disabled = true;
                }
            } else {
                if (aciertos === guiones.length) {
                    dialog.showErrorBox("Atención", "Ganaste muyayo")
                }
            }
        }
        document.getElementById("letra").value = '';
    }
})
reiniciar.addEventListener('click', () => {
    document.getElementById("palabra").disabled = false;
    document.getElementById("letra").disabled = true;
    document.getElementById("palabra").value = '';
    document.getElementById("letra").value = '';
    oculto.innerHTML = "";
    document.getElementById("imagen").src = "img/0.png"

})