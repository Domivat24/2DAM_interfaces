const fs = require('fs');
const preguntas = require("./test.json");
let lista = document.getElementById("lista");
let contenidoLista = "";
let bComprobar = document.getElementById("comprobar");

for (let i = 0; i < preguntas.length; i++) {
    contenidoLista += `<li class="list-group-item"><img class="img-circle media-object pull-left" src="./images/${i + 1}.png"
                                             width="32" height="32">
                <div class="media-body"><strong>${preguntas[i].pregunta}</strong>
                    <div class="radio">
                        <label>
                            <input type="radio" name="r${i}" id="rA${i}" value="a">${preguntas[i].rA}
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="r${i}" id="rB${i}" value="b">${preguntas[i].rB}
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="r${i}" id="rC${i}" value="c">${preguntas[i].rC}
                        </label>
                    </div>
                </div>
            </li>`;
}
lista.innerHTML = contenidoLista;
bComprobar.addEventListener('click', () => {
    let aciertos = 0;
    let fallos = 0;
    for (let i = 0; i < preguntas.length; i++) {
        if (document.getElementById(`r${preguntas[i].correcta.toUpperCase()}${i}`).checked) {
            aciertos++;
        } else {
            fallos++;
        }
    }
    let muestra = document.getElementById("muestra");
    muestra.innerHTML = 'aciertos: ' + aciertos + '   ' + 'fallos :' + fallos;
    console.log('aciertos: ' + aciertos);
    console.log('fallos :' + fallos);
})
