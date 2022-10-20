const fs = require('fs');

let fichero = fs.readFileSync(__dirname + "/books.json");
let libros = new Array();
libros = JSON.parse(fichero);

let exportJson = () => {
    fs.writeFileSync(__dirname + "/books.json", JSON.stringify(libros));
}
let addBook = (book) => {
    libros.push(book);
}
let eraseBook = (book) => {
    libros = libros.filter(libro => {
        return libro.img.charAt(0) !== String(book.img).charAt(0);
    });
    fs.writeFileSync(__dirname + "/books.json", JSON.stringify(libros));
}
addBook({
    "title": "Q",
    "author": "Luther Blissett",
    "price": "20",
    "img": "0.jpg",
    "libro": true
});
eraseBook({
    "title": "Q",
    "author": "Luther Blissett",
    "price": "20",
    "img": "0.jpg",
    "libro": true
});
console.log(libros);
//Eventos
const events = require('events');
let eventsE = events.EventEmitter;
let ee = new eventsE();
ee.on('writeFile', exportJson);
ee.emit('writeFile');
//Servidores
const http = require('http');
let server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(libros));
});
server.listen(3000, '127.0.0.1');

