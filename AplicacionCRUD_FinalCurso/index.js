const { createWindow } = require('./main.js')
const { app } =  require('electron')

require('./database')

app.whenReady().then(createWindow)
app.allowRendererProcessReuse = false