'use strict';


const fetch = require('node-fetch');
const recurso = "http://127.0.0.1:8080";

let button = document.getElementById("nuevo")

//Get para todos los libros:
fetch(recurso + '/libros')
    .then(res => res.json())
    .then(json => inicio(json));
let inicio = json => {
    let cadena = ""
    json.forEach(libro => {
        cadena +=
            `<div>
    <img src="${recurso + "/public/" + libro.img}" height="170" width="100">
    <br>
    <label><strong>${libro.title}</strong></label>
    <br>
    <label>${libro.author}</label>
</div>`
        document.getElementById("wrapper").innerHTML = cadena
    })
}
let nuevo = {
    "title": "2672",
    "author": "LALA",
    "img": "9.jpg"
}
button.addEventListener("click", () => {
    fetch(recurso + '/libros/nuevo', {
            method: "post",
            body: JSON.stringify(nuevo),
            headers: {'Content-Type': 'application/json'},
        }
    )
        .then(res => res.json())
        .then(() => {
            fetch(recurso + '/libros')
                .then(res => res.json())
                .then(json => inicio(json));
        });
})
