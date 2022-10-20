let estaDentro = (v1, v2) => {
    let v3, v4;
    //Defino el vector más corto para ver si este está dentro del otro
    if (v1.length > v2.length) {
        v3 = v2;
        v4 = v1;
    } else {
        v3 = v1;
        v4 = v2;
    }
    for (let i = 0; i < v4.length; i++) {
        let caracter = true;
        let concurrent = true;
        let match = 0;
        let dentro = false;
        for (let j = 0; j < v3.length && caracter; j++) {
            if (concurrent === true && match === v3.length) {
                dentro = true;
            }
            if (v3[j] === v4[i]) {
                match = false;
                //sale del bucle
                caracter = false;
            } else {
                concurrent = false;
                match = 0;
            }
        }
        if (dentro) {
            console.log(v3+ "\nEstá dentro de\n"+ v4)
        }
            }
}