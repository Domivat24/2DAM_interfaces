const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const os = require('node:os')

let app = express()

app.use(bodyParser.json())

//Envia fecha
app.get("/fecha", (req, res) => {
    let date = new Date()
    res.send(date.toString());
})
//Envia usuario del sistema
app.get("/usuario", (req, res) => {
    res.send(os.userInfo())
})
app.listen(8080);