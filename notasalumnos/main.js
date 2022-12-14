//EL habitual que usamos:

const {app, BrowserWindow, Menu, MenuItem} = require('electron')
/* O:
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
 */
require('@electron/remote/main').initialize()

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        //frame: false,
        backgroundColor: '#16fdd7',
        width: 490,
        height: 450,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    require("@electron/remote/main").enable(mainWindow.webContents)

    mainWindow.loadFile('index.html')
    let childWindow = new BrowserWindow({
        width: 400,
        height: 300,
        parent: mainWindow,
        show: false, //no se muestra de inicio
        modal: true, //Hasta que no se cierre no se puede interactuar con parentWindow
        title: 'Github Child'

    });
    childWindow.once('ready-to-show', () => {
        childWindow.show()
    });
    childWindow.loadURL('https://github.com');
    //mainWindow.webContents.openDevTools()
    //mainWindow.setMenu(null)
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', function () {
    createWindow()
    const template = [{
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'pasteandmatchstyle'},
            {role: 'delete'},
            {role: 'selectall'}
        ]
    }, {
        label: 'Demo',
        submenu: [
            {
                label: 'Cerrar',
                click: function () {
                    mainWindow.close();
                }
            },
            {type: 'separator'},
            {
                label: "Maximizar",
                click: function () {
                    BrowserWindow.getFocusedWindow().maximize();
                }
            },
            {type: 'separator'},
            {
                label: "Abrir Hola Mundo",
                click: function () {
                    let helloWorld = new BrowserWindow({
                        width: 1000,
                        height: 600,
                        parent: mainWindow,
                        title: 'Hola MUNDO'

                    });
                    helloWorld.loadFile("HelloWorld.html")

                }
            }
        ]
    },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About Electron',
                    click: function () {
                        //abre una página web en el navegador
                        require('electron').shell.openExternal('http://electron.atom.io');
                    },
                    accelerator: 'CmdOrCtrl + Shift + H'
                }
            ]
        }];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})
/*
app.on('ready', function (event, win) {
    const ctxMenu = new Menu()
    ctxMenu.append(new MenuItem(
        {
            label: 'Hello',
            click: function () {
                console.log('ctx menu clicked')
            }
        }
    ))

    childWindow.webContents.on('context-menu', function (e, params) {
        ctxMenu.popup(win, params.x, params.y)
    })
})*/
