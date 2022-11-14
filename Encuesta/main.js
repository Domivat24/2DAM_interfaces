//EL habitual que usamos:
const {app, BrowserWindow} = require('electron')

let mainWindow
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 490,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })


    mainWindow.loadFile('index.html')
    //mainWindow.webContents.openDevTools()
    mainWindow.setMenu(null)
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)