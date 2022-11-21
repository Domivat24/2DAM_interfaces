const fs = require('fs');

let fichero = fs.readFileSync('./marcas.json');
let brands = JSON.parse(fichero);
let cadenaDOM = '<select id="brands">';
brands.forEach(brand => {
    cadenaDOM += `<option value="${brand.brand}">${brand.brand}</option>`;
});
cadenaDOM += '</select>';
document.getElementById("desplegable").innerHTML += cadenaDOM;

let registrar = document.getElementById("registrar");
registrar.addEventListener('click', () => {
    let coche;

    let selectedFuel = document.querySelector('input[type=radio][name=fuel]:checked').value;
    let selectedMotor = document.querySelector('input[type=radio][name=motor]:checked').value;
    coche = {
        "Brand": document.getElementById("brands").value,
        "Model": document.getElementById("model").value,
        "Plate": document.getElementById("plate").value,
        "Fuel": selectedFuel,
        "Color": document.getElementById("color").value,
        "Motor": selectedMotor
    };
    fs.writeFileSync('./salida.json', JSON.stringify(coche));
})