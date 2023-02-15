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
                        <img class="img-circle media-object pull-left" src="${recurso + "/public/" + juego.img}" width="64" id="foto${juego.img.substring(0, juego.img.indexOf("."))}" 
                             height="64">
                        <div class="media-body">
                            <strong>${juego.title}</strong>
                            <p>${juego.developer}</p>
                        </div>
                    </li>`
    })
    document.getElementById("lista").innerHTML = cadena
    json.forEach(juego => startListener(juego))
}

button.addEventListener("click", () => {
    let nuevo = {
        "title": document.getElementById("titulo").value,
        "developer": document.getElementById("developer").value,
        "img": "placeholder.png"
    }
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
let startListener = (juego) => {
    document.getElementById('foto' + juego.img.substring(0, juego.img.indexOf("."))).addEventListener('click', () => setGame(juego))
}
let setGame = (juego) => {
    console.log(juego.img.substring(0, juego.img.indexOf(".")))
    document.getElementById("wrapper").innerHTML = `<div>
    <img src="${recurso + "/public/" + juego.img}" height="450" width="300">
    <br>
    <label><strong>${juego.title}</strong></label>
    <br>
    <label>${juego.developer}</label>
</div>`
}