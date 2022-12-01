const fs = require('fs');

const { dialog } = require('@electron/remote')



let catPath = dialog.showOpenDialogSync({
    title:'Abriendo JSON de productos',
    defaultPath:'G:\\Tablas',
    filters: [
        { name: 'Json', extensions: ['json']},
        {name: 'Todos los archivos', extensions: ['*']}
    ]
})

let fichero = fs.readFileSync(catPath[0]);
let productos = JSON.parse(fichero)


let cadena = ''
let editando = false
for (let index = 0; index < productos.length; index++) {
    cadena += '<tr id="tr' + index + '">' +
        '<td>' + productos[index].Alimento + '</td>' +
        '<td>' + productos[index].Calorias + '</td>' +
        '<td>' + productos[index].Grasas + '</td>' +
        '<td>' + productos[index].Proteina + '</td>' +
        '<td>' + productos[index].Carbohidratos + '</td>' +
        '<td><span class="editar" id="spanEditar' + index + '">Editar</span></td>' +
        '</tr>'
}

document.getElementById('ctabla').innerHTML = cadena


let funcion = (i) => {
    document.getElementById('spanEditar' + i).addEventListener('click', () => {
        console.log(i)
        if (editando == false) {
            document.getElementById('tr' + i).innerHTML = '<td><input type="text" id="alimento" value="' + productos[i].Alimento + '" size="10"></td>' +
                '<td><input type="text" id="calorias" value="' + productos[i].Calorias + '" size="5"></td>' +
                '<td><input type="text" id="grasas" value="' + productos[i].Grasas + '" size="5"></td>' +
                '<td><input type="text" id="proteina" value="' + productos[i].Proteina + '" size="5"></td>' +
                '<td><input type="text" id="carbohidratos" value="' + productos[i].Carbohidratos + '" size="5"></td>' +
                '<td>En Edición/<span class="editar" id="idGuardar' + i + '">Guardar</span></td>'
            funcion2(i)
            editando = true
        } else {
            dialog.showErrorBox('Alarm', 'Solo se puede editar de uno en uno')
        }
    })
}

let funcion2 = (i) => {
    document.getElementById('idGuardar' + i).addEventListener('click', () => {
        if (editando == true) {
            productos[i].Alimento = document.getElementById('alimento').value
            productos[i].Calorias = document.getElementById('calorias').value
            productos[i].Grasas = document.getElementById('grasas').value
            productos[i].Proteina = document.getElementById('proteina').value
            productos[i].Carbohidratos = document.getElementById('carbohidratos').value

            document.getElementById('tr' + i).innerHTML =
                '<td>' + productos[i].Alimento + '</td>' +
                '<td>' + productos[i].Calorias + '</td>' +
                '<td>' + productos[i].Grasas + '</td>' +
                '<td>' + productos[i].Proteina + '</td>' +
                '<td>' + productos[i].Carbohidratos + '</td>' +
                '<td><span class="editar" id="spanEditar' + i + '">Editar</span></td>'
            
            
            fs.writeFileSync('./alimentos.json', JSON.stringify(productos))            
            funcion(i)
            editando = false
        } else {
            dialog.showErrorBox('Alarm', 'Cagaste')
        }
    })
}

for (let index = 0; index < productos.length; index++) {
    funcion(index)
}
