const fs = require('fs');

const {dialog} = require('@electron/remote')
let bOpen = document.getElementById("open")
let fileNames;
let filas = "";
let alumnos;
bOpen.addEventListener('click', () => {
    fileNames = dialog.showOpenDialogSync({
        title: "Abriendo archivo de alumnos",
        defaultPath: __dirname,
        filters: [
            {name: 'Todos los archivos', extensions: ['*']},
            {name: 'Json', extensions: ['json']}
        ]
    })
    alumnos = require(fileNames[0])

    let ctabla = document.getElementById("ctabla");
    for (let i = 0; i < alumnos.length; i++) {
        filas += `
        <tr id="tr${i}">
        <td>${alumnos[i].grupo}</td>
        <td>${alumnos[i].nombre}</td>
        <td><input type="text" value="${alumnos[i].nota}" style="width: 20pt;" id="nota${i}"></td>
        </tr> `
    }
    ctabla.innerHTML = filas;
    for (let f = 0; f < alumnos.length; f++) {
        iniciarEdit(f);
    }

})

let iniciarEdit = (i) => {
    document.getElementById('nota' + i).addEventListener('click', () => {
        saveEdit(i);
    })
}
let saveEdit = (i) => {
    document.getElementById('nota' + i).addEventListener('keyup', evento => {
        if (evento.key === "Enter") {
            alumnos[i].nota = document.getElementById('nota' + i).value;
            const options = {
                title: 'Éxito',
                message: 'Nota actualizada con éxito',
            };
            dialog.showMessageBox(null, options);
        }
    })
}
bSave = document.getElementById("save");
bSave.addEventListener('click', () => {
    let rutaSave = dialog.showSaveDialogSync({
        title: "Guardar archivo de alumnos",
        defaultPath: __dirname,
        filters: [
            {name: 'Archivo JSON', extensions: ['json']}
        ]
    })
    fs.writeFileSync(rutaSave, JSON.stringify(alumnos));
})