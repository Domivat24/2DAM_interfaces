let n = 20;
let linea;
console.log("Diagonal con N=%d",n)
for (let i = 0; i < n; i++) {
    linea = "";
    for (let j = 0; j < i; j++) {
        linea = linea + " ";
    }
    console.log(linea + "*");
}