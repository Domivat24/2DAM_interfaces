let reiniciar = document.getElementById("reiniciar");
let palabra = document.getElementById("palabra")
let letra = document.getElementById("letra")
let oculto = document.getElementById("oculto")
let match;
let guiones;
let aciertos = 0;
let fallos = 0;
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
palabra.addEventListener('keyup', (evento) => {
    if (evento.key === "Enter") {
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
        match = false;
        for (let i = 0; i < palabra.value.length; i++) {
            if (palabra.value.charAt(i) === letra) {
                match = true;
                aciertos++;
                guiones.replaceAt(i, letra);
            }
        }
        if (!match) {
            fallos++;
            if (fallos === 6) {
                alert("Perdiste muyayo");
                document.getElementById("letra").disabled = true;
            }
        } else {
            if (aciertos === guiones.length) {
                alert("Has ganado muyayo");
            }
        }
    }
})
reiniciar.addEventListener('click', () => {
    document.getElementById("palabra").disabled = false;
    document.getElementById("letra").disabled = true;
    document.getElementById("palabra").value = '';
    document.getElementById("letras").value = '';


})