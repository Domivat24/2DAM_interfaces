const { ipcRenderer } = require('electron')
//recojo los juegos siempre al iniciar
ipcRenderer.send('getGames')

let games = []
let id = null;

ipcRenderer.on('printGames', (e, args) => {
    games = JSON.parse(args);
    console.log(games)
    juegos = []
    games.forEach(juego => {
        juegos.push({
            "title": juego.title,
            "developer": juego.developer,
            "img": juego.img
        });
    })
    inicio(juegos)
    console.log(juegos)
})
//print data
let inicio = json => {
    let cadena = "";
    let i = 0;
    json.forEach(juego => {
        cadena += `<li class="list-group-item">
                        <img class="img-circle media-object pull-left" src="${__dirname + "/fotos/" + juego.img}" width="64" id="foto${i}" 
                             height="64">
                        <div class="media-body">
                            <strong>${juego.title}</strong>
                            <p>${juego.developer}</p>
                        </div>
                    </li>`
        i++;
    })
    document.getElementById("lista").innerHTML = cadena

    //añado los listeners de los juegos
    i = 0;
    json.forEach(juego => {
        startListener(juego, i)
        i++
    })
}

//añadir juego
document.getElementById("nuevo").addEventListener("click", () => {
    let nuevo = {
        "title": document.getElementById("titulo").value,
        "developer": document.getElementById("developer").value,
        "img": document.getElementById("img").value
    }
    if (nuevo.title == "" || nuevo.developer == "" || nuevo.title == null || nuevo.developer == null || nuevo.img == "" || nuevo.img == null) {
        alert("Introduzca valores en todos los campos")
    } else {
        //Si no encuentra la img en la base de datos, deja la imagen de placeholder
        let filtroImg = games.filter(game => document.getElementById("img").value == game.img)
        if (filtroImg.length == 0) {
            nuevo.img = "placeholder.png"
        }
        ipcRenderer.send('newGame', nuevo)
    }
})

//eliminar juego en función del juego seleccionado
document.getElementById("quitar").addEventListener("click", () => {
    if (id == null) {
        alert('Haga click en un juego para eliminarlo')
    } else {
        const res = confirm('¿Estás seguro de querer eliminar el juego?')
        if (res) {
            ipcRenderer.send('removeGame', id)
            document.getElementById("wrapper").innerHTML = ""
            id = null
        }
        return
    }
})
document.getElementById("actualizar").addEventListener("click", () => {
    //Si no encuentra la img en la base de datos, deja la imagen de placeholder
    let filtroImg = games.filter(game => document.getElementById("img").value == game.img)
    let nuevo = {
        "title": document.getElementById("titulo").value,
        "developer": document.getElementById("developer").value,
        "img": document.getElementById("img").value,
        "id": id
    }
    if (filtroImg.length == 0) {
        nuevo.img = "placeholder.png"
    }
    if (id == null) {
        alert('Seleccione antes el juego que desea actualizar')
    } else {
        if (nuevo.title == "" || nuevo.developer == "" || nuevo.title == null || nuevo.developer == null || nuevo.img == "" || nuevo.img == null) {
            alert("Introduzca valores en todos los campos")
        } else {
            ipcRenderer.send("updateGame", nuevo)
        }
        return
    }
})

let startListener = (juego, i) => {
    document.getElementById('foto' + i).addEventListener('click', () => setGame(juego, i))
}
let setGame = (juego, i) => {
    document.getElementById("wrapper").innerHTML = `<div>
    <img src="${__dirname + "/fotos/" + juego.img}" style="max-width:100%;max-height:100%;">
    <br>
    <label><strong>${juego.title}</strong></label>
    <br>
    <label>${juego.developer}</label>
</div>`
    id = games[i]._id;
    console.log(id)
}

let setUpdatedGame = (juego) => {
    document.getElementById("wrapper").innerHTML = `<div>
    <img src="${__dirname + "/fotos/" + juego.img}" style="max-width:100%;max-height:100%;">
    <br>
    <label><strong>${juego.title}</strong></label>
    <br>
    <label>${juego.developer}</label>
</div>`
    id = juego._id
    console.log(id);
}
ipcRenderer.on('updatedGame-success', (e, args) => {
    console.log(args)
    let juego = JSON.parse(args);
    setUpdatedGame(juego);
})