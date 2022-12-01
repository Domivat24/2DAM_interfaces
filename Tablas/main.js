const {app, BrowserWindow, dialog} = require('electron')
require('@electron/remote/main').initialize()
 
let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })


require("@electron/remote/main").enable(mainWindow.webContents)
 
  mainWindow.loadFile('pag1.html')
  //mainWindow.webContents.openDevTools()
  mainWindow.setMenu(null)
  mainWindow.on('closed', function () {  
    mainWindow = null
  })
}
 
app.on('ready', createWindow)