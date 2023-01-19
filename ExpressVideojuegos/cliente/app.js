'use strict';


const fetch = require('node-fetch');
const recurso = "http://127.0.0.1:8080";

let button = document.getElementById("nuevo")

//Get para todos los juegos:
fetch(recurso + '/juegos')
    .then(res => res.json())
    .then(json => inicio(json));
let inicio = json => {
    let cadena = "";
    json.forEach(juego => {
        cadena += `<li class="list-group-item">
                        <img class="img-circle media-object pull-left" src="${recurso + "/public/" + juego.img}" width="64" id="foto${juego.img.charAt(0)}"
                             height="64">
                        <div class="media-body">
                            <strong>${juego.title}</strong>
                            <p>${juego.developer}</p>
                        </div>
                    </li>`
    })
    document.getElementById("lista").innerHTML = cadena
    for (let f = 0; f < json.length; f++) {
        startListener(f, json);
    }
}
let nuevo = {
    "title": "2672",
    "developer": "LALA",
    "img": "9.jpg"
}
button.addEventListener("click", () => {
    fetch(recurso + '/juegos/nuevo', {
            method: "post",
            body: JSON.stringify(nuevo),
            headers: {'Content-Type': 'application/json'},
        }
    )
        .then(res => res.json())
        .then(() => {
            fetch(recurso + '/juegos')
                .then(res => res.json())
                .then(json => inicio(json));
        });
})
let startListener = (i, json) => {
    document.getElementById('foto' + i).addEventListener('click', () => {
        setGame(i, json);
    })
}
let setGame = (i, json) => {
    document.getElementById('foto' + i).addEventListener('click', () => {
        document.getElementById("wrapper").innerHTML = `<div>
    <img src="${recurso + "/public/" + json[i].img}" height="450" width="300">
    <br>
    <label><strong>${json[i].title}</strong></label>
    <br>
    <label>${json[i].developer}</label>
</div>`
    })
}