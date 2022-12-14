const {app, BrowserWindow, Menu, dialog} = require('electron')
/* O:
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
 */
require('@electron/remote/main').initialize()

let propiedades = [false, false, false, false, false, false];
let propString = ["Habitación 1", "Habitación 2", "Salón", "Cocina", "Baño", "Garaje", "Trastero"];
let setBoolean = (i) => {
    propiedades[i] = !propiedades[i];
    console.log(propiedades[i] + propString[i])
}


function createWindow() {
    mainWindow = new BrowserWindow({
        //frame: false,
        backgroundColor: '#16fdd7',
        width: 900,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    require("@electron/remote/main").enable(mainWindow.webContents)

    mainWindow.loadFile('index.html')

    //mainWindow.webContents.openDevTools()
    //mainWindow.setMenu(null)
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', function () {
        createWindow()
        let template = [{
            label: 'Casa',
            submenu: [
                {
                    label: 'Habitaciones',
                    submenu: [
                        {
                            label: 'Habitación 1',
                            click: function () {
                                setBoolean(0);
                            },
                            type: "checkbox"
                        },
                        {
                            label: 'Habitación 2',
                            click: function () {
                                setBoolean(1);
                            },
                            type: 'checkbox'
                        }
                    ]
                },
                {
                    label: 'Salón',
                    click: function () {
                        setBoolean(2)
                    },
                    type: "checkbox",
                    accelerator: 'CmdOrCtrl + S'
                },
                {type: "separator"},
                {
                    label: 'Cocina',
                    click: function () {
                        setBoolean(3)

                    },
                    type: 'checkbox',
                    accelerator: 'CmdOrCtrl + C'
                },
                {
                    label: 'Baño',
                    click: function () {
                        setBoolean(4)
                    },
                    type: 'checkbox',
                    accelerator: 'CmdOrCtrl + B'
                },

            ]
        }, {
            label: 'Extras',
            submenu: [
                {
                    label: 'Garaje',
                    click: function () {
                        setBoolean(5)
                    },
                    type: 'checkbox',
                    accelerator: 'Alt + G'
                },
                {
                    label: "Trastero",
                    click: function () {
                        setBoolean(6)
                    },
                    type: 'checkbox',
                    accelerator: 'Alt + T'
                }]
        },
            {
                label: 'Descripción Casa',
                click: function () {
                    let cadena = "";
                    for (let i = 0; i < propString.length; i++) {
                        if (propiedades[i] === true) {
                            console.log(propiedades[i])
                            console.log(cadena)
                            cadena += propString[i] + " ha sido seleccionado\n"
                        }
                    }
                    const options = {
                        title: 'Propiedades de su habitación',
                        message: cadena
                    };
                    dialog.showMessageBox(null, options);
                }
            }];
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
)

