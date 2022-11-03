const fs = require('fs');

let fichero = fs.readFileSync('./ingredientes.json');
let ingredientes = JSON.parse(fichero).ingredientes;
let htmlIngredientes = "";
for (let i = 0; i < ingredientes.length; i++) {
    htmlIngredientes.concat(`<div class="checkbox">
<label>
<input type="checkbox" id="ingrediente${i}" value="${ingredientes[i]}"> ${ingredientes[i]}
</label>
</div>`);
}
document.getElementById('ingredientes').innerHTML= htmlIngredientes;
