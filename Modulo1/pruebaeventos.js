const eventos = require('events');
let EmisorEventos = eventos.EventEmitter;
let ee = new EmisorEventos;
ee.emit('datos', Date.now());
ee.on('datos', fecha => console.log(fecha));
setInterval(function (){
    ee.emit('datos',Date.now());
}, 500);