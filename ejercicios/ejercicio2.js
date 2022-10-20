let n = 20;
let linea;
console.log("Diagonal inversa con N=%d",n)
for (let i = 0; i < n; i++) {
    linea = "";
    for (let j = i; j < n; j++) {
        linea = linea + " ";
    }
    console.log(linea + "*");
}