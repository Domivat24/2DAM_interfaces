const fs = require('fs');

let leeme = fs.readFileSync('readme.txt', 'utf8');
console.log(leeme);
fs.writeFileSync('escribeme.txt', leeme);
//Stream de lectura
let miStreamLectura = fs.createReadStream(__dirname + '/textolargo.txt',"utf8");
miStreamLectura.on('data', function (chunk) {
    console.log("nuevo trozo recibido ");
    console.log(chunk);
})