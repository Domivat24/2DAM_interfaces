const { BrowserWindow, ipcMain } = require('electron');
const fs = require("fs");

const Game = require('./models/Game')

function createWindow() {
    const win = new BrowserWindow({
        width: 1010,
        height: 1030,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
        //resizable: false
    })
    win.loadFile('index.html').then(r => console.log(r))
    win.maximize()

    //win.setMenu(null);
}
//inicio
ipcMain.on('getGames', (e, args) => {
    printGames(e)
})

//añadir juego
ipcMain.on('newGame', async (e, args) => {
    const newGame = await new Game(args).save();
    console.log(newGame)
    await printGames(e)
    e.reply('updatedGame-success', JSON.stringify(newGame))
})



//eliminar juego
ipcMain.on('removeGame', async (e, args) => {

    const deletedGame = await Game.findByIdAndDelete(args)
    console.log(deletedGame)
    printGames(e)

})
//actualizar juego
ipcMain.on('updateGame', async (e, args) => {
    const updatedGame = await Game.findByIdAndUpdate(args.id, { title: args.title, developer: args.developer, img: args.img }, { new: true })
    console.log(updatedGame)
    e.reply('updatedGame-success', JSON.stringify(updatedGame))
    printGames(e)

})
//manda los juegos
async function printGames(e) {
    let games = await Game.find()
    //en caso de que se vacíe la BBDD, definimos los juegos desde el json
    if (games.length <= 0) {
        let fichero = fs.readFileSync('juegos.json');
        let juegos = JSON.parse(fichero);

        //me aseguro que todos los juegos son añadidos
        await Promise.all(juegos.map(async (juego) => {
            const p1 = await new Game(juego).save()
        }))

        //vuelvo a buscar los valores que acabo de introducir, para recoger los ids generados en mongo
        games = await Game.find()
    }
    e.reply('printGames', JSON.stringify(games))

}
module.exports = { createWindow }