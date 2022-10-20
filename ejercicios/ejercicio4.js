let n=20;
console.log("Triángulo inverso con N=%d",n)
for(let i=0;i<n;i++){
    let linea="";
    for(let j= 0; j<i; j++) {
        linea=linea+" *";
    }
    console.log(linea)
}