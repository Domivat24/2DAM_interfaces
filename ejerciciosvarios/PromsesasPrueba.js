let calcularArea = (figura, lados) => {
    return new Promise((resolve, reject) => {
            figura = String(figura).toLowerCase();
            switch (figura) {
                //la idea sería un case diferente para cada figura con su respectivo calculo de área
                case "cuadrado":
                case "rectángulo":
                case "rectangulo": {
                    if (lados.length === 2) {
                        let area = lados.reduce((total, num) => num * total);
                        resolve(figura + " de área: " + area);
                    } else {
                        reject(-1);
                    }
                    break;
                }
                default:
                    reject(-1);
                    break;

            }
        }
    )
};
calcularArea("cuadrado", [12, 4]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
calcularArea("rectángulo", [69, 4, 13]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
calcularArea("rectángulo", [100,20]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});