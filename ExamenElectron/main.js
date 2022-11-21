//EL habitual que usamos:
const {app, BrowserWindow} = require('electron')

function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 400,
        height: 700,
        webPreferences: {
            width:700,
            height:600,
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    //quita menú por defecto de chromium
    mainWindow.setMenu(null);
    mainWindow.loadFile('index.html')
    // Open the DevTools.
   // mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow);
app.allowRendererProcessReuse = true;