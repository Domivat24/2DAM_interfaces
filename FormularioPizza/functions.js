const fs = require('fs');
const pdf = require('html-pdf')

let fichero = fs.readFileSync('./ingredientes.json');
let ingredientes = JSON.parse(fichero).ingredientes;
let htmlIngredientes = `<div class="form-group">
                    <label><img class="img-circle media-object pull-left" src="images/4.png" width="32"
                                height="32"></label>
                </div>`;

for (let i = 0; i < ingredientes.length; i++) {
    htmlIngredientes += (`<div class="checkbox">
<label>
<input type="checkbox" id="ingrediente${i}" value="${ingredientes[i]}"> ${ingredientes[i]}
</label>
</div>`);
}
let aceptar = document.getElementById("aceptar");

document.getElementById('ingredientes').innerHTML = htmlIngredientes;
aceptar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

    let tamanio;
    if (document.getElementById("peque").checked) {
        tamanio = "Pequeña";
    }
    if (document.getElementById("mediana").checked) {
        tamanio = "Mediana";
    }
    if (document.getElementById("grande").checked) {
        tamanio = "Grande";
    }
    let masa = "";
    if (document.getElementById("delgada").checked) {
        masa = "Delgada";
    }
    if (document.getElementById("gruesa").checked) {
        masa = "Gruesa";
    }
    let marcados = {};
    for (let i = 0; i < ingredientes.length; i++) {
        if (document.getElementById('ingrediente${i}').checked) {
            marcados.push(ingredientes[i]);
        }
    }

    let content = '<h1>Pedido</h1>' +
        '<h1>Nombre: ${nombre}</h1>' +
        '<h1>Teléfono: ${telefono}</h1>' +
        '<h1>Dirección: ${direccion}</h1>' +
        '<h1>Tamaño: ${tamanio}</h1>' +
        '<h1>Masa: ${masa}</h1>' +
        '<h1> Lista de ingredientes: </h1>';

    for (let i = 0; i < marcados.length; i++) {
        content += `<h1>${marcados[i]}`;
    }
    pdf.create(content).toFile('./pdfpedidos/' + nombre + '.pdf', function (err, res) {
        if (err) {
            console.log(err);
        } else {
            alert("Pedido guardado")
            console.log(res);
        }
    });
})