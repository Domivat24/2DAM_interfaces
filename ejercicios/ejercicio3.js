let n=20;
console.log("Triángulo inverso con N=%d",n)
for(let i=0;i<n;i++){
    let linea="";
    for(let j= i; j<n; j++) {
        linea=linea+" * ";
    }
    console.log(linea)
}