const {app, BrowserWindow} = require('electron');


function createWindow() {
    let win = new BrowserWindow({
        width: 690,
        height: 630,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        resizable: false
    })
    win.loadFile('index.html').then(r => console.log(r))

    win.setMenu(null);
}

app.on('ready', createWindow)