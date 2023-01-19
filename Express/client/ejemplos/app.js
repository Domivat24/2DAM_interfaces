import fetch from "node-fetch";

const recursos = "http://127.0.0.1:8080"

fetch(recursos + "/bienvenida").then(res => res.text()).then(body => console.log(body))

fetch(recursos + "/clientes").then(res => res.json()).then(json => console.log(json))

//busqueda dni
let dni = "11111111"
fetch(recursos + "/clientes/" + dni).then(res => res.json()).then(json => console.log(json))
//post cliente

let nuevo = {
    "dni": "3213132",
    "name": "Manolo",
    "phone": "1312132"
}
fetch(recursos + "/clientes", {
    method: "post",
    body: JSON.stringify(nuevo),
    headers: {'Content-Type': 'application/json'},
}).then(res => res.json()).then(json => console.log(json))
