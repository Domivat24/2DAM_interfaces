//EL habitual que usamos:
const {app, BrowserWindow, dialog, Menu} = require('electron')
require('@electron/remote/main').initialize()

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 490,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    require("@electron/remote/main").enable(mainWindow.webContents)

    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools()
    mainWindow.setMenu(null)
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', () => {
    createWindow();
    let template = [{
        label: 'Más información',
        submenu: [
            {
                label: 'Sobre el programa',
                click: function () {
                    let about = new BrowserWindow({
                        width: 400,
                        height: 250,
                        parent: mainWindow,
                        title: 'Hola MUNDO'

                    });
                    about.loadFile("programInfo.html")
                }
            },
            {
                label: 'Sobre el juego',
                click: function () {
                    require('electron').shell.openExternal("https://es.wikipedia.org/wiki/Batalla_naval_(juego)")
                }
            }
        ]
    }];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})