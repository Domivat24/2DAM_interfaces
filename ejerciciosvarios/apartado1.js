"use strict";

//APARTADO 1
function whoIsLarger(cadena1, cadena2) {
    if (typeof cadena2 !== "string" || typeof cadena1 !== "string") {
        return ("EROR: Uno o ambos parámetros introducidos no son una cadena.")
    } else {
        if (cadena1.length > cadena2.length) {
            return cadena1;
        }
        return cadena2;
    }
}

console.log(whoIsLarger("mondongo", 22));
console.log(whoIsLarger("mondongo", "22"));
console.log(whoIsLarger("Buenas tardes", "Buenísimas tardes"));

//APARTADO 2
let reiterateNTimes = (N, o) => {
    for (; N > 0; N--) {
        console.log(o);
        o *= 2;
    }
    return o;
}
console.log(reiterateNTimes(3, 2));
console.log(reiterateNTimes(6, 10));
console.log(reiterateNTimes(4, 2300));

//APARTADO 3
let repetitionCharacter = (cadena, caracter) => {
    //Convierto ambas cadenas a String
    cadena = String(cadena);
    caracter = String(caracter);
    if (caracter.length === 1) {
        let total = 0;
        for (let i = 0; i < cadena.length; i++) {
            if (cadena.charAt(i) === caracter) {
                total++;
            }
        }
        return total;
    } else {
        return "ERROR INESPERADO: Fallo en la asignación de parámetros";
    }
}
console.log(repetitionCharacter("cadenaa", "a"));
console.log(repetitionCharacter("cadenaa112", "1"));
console.log(repetitionCharacter("cadenaa112", 122));

//APARTADO 4
let validNum = (producto, precio, impuesto) => {
    if (producto === undefined) {
        producto = "Producto genérico";
    }
    if (precio === undefined) {
        precio = 100;
    }
    if (impuesto === undefined) {
        impuesto = 21;
    }
    producto = String(producto);
    precio = Number(precio);
    impuesto = Number(impuesto);
    if (Number.isNaN(precio) || Number.isNaN(impuesto)) {
        return "ERROR: El precio o el valor de impuesto no disponen de un formato válido.";
    }
    return console.log(producto + " de precio final: %d", precio + precio * impuesto / 100);
}
console.log(validNum("Primero", 21, 21));
console.log(validNum("Segundo", "21", "ada"));
console.log(validNum("Tercero", 200));
console.log(validNum());

//APARTADO 5
let searchCadena = (cadenaCompleta, busqueda) => {
    cadenaCompleta = String(cadenaCompleta).toLowerCase();
    busqueda = String(busqueda).toLowerCase();
    if (cadenaCompleta.indexOf(busqueda) === -1) {
        return "No se ha encontrado la cadena específicada en la cadena completa";
    }
    return "Se ha encontrado la cadena específicada en la cadena completa";

}

console.log(searchCadena("VAya vaya", "Vaya"));
console.log(searchCadena("MAtalascaña", "Alasca"));
console.log(searchCadena("MAtala scaña", " "));
console.log(searchCadena("MAtala scaña"));

//APARTADO 6

let arrays = () => {
    let array = [1, 2, 3, 4];
    console.log(array);
    array.push(5, 6);
    array.unshift(-1, 0);
    console.log(array);
    array.splice(2, 3);
    console.log(array);
    array.splice(array.length - 1, 0, 5.1, 5.2);
    console.log(array);
    let arraySeparado = "";
    array.forEach(n => arraySeparado += (n + " ==> "));
    console.log(arraySeparado);
}
console.log(arrays());

//APARTADO 7
let printMedia = (nombre, ...spread) => {
    const total = spread.reduce((valorPrevio, valorActual) => valorPrevio + valorActual);
    return total / spread.length;
}
console.log(printMedia("PEpe", 4.25, 8.5, 9));

//APARTADO 8

let sortArrayByLength = () => {
    let cadenas = ["mongolo", "hola", "1", "ADDADADADDDDD", "mongolos"];
    console.log(cadenas);
    //para que sea de menor a mayor a.length - b.length
    cadenas.sort(function (a, b) {
        return b.length - a.length
    });
    return cadenas;
}
console.log(sortArrayByLength());

//APARTADO 9
/*
Metodo 1000 de IQ y en una linea
numeros = Array.from(numeros, n=>n.toString().split('')-reduce((a,b)0>+a + +b,0));
 */
let mapeoArray = () => {
    let numeros = [12, 1233, 1, 77709];
    console.log(numeros);
    return numeros.map(function (num) {

        //Paso cada número del array a String para poder dividirlo por cifras con Array.from
        num = String(num);
        let cadenaNumeros = Array.from(num);

        //Ahora paso el array de String a numeros para poder sumar las cifras con reduce
        cadenaNumeros = cadenaNumeros.map(str => {
            return Number(str);
        });
        return cadenaNumeros.reduce(function (total, num) {
            return total + num;
        });
    })
}
console.log(mapeoArray());

//APARTADO 10

let getTriangleArea = (lado1, lado2, angulo) => {
    angulo = angulo * Math.PI / 180;
    return (1 / 2) * lado1 * lado2 * Math.sin(angulo);
}
console.log(getTriangleArea(12, 11.2, 30));

//APARTADO 11
let getFecha = (fecha) => {
    let f = new Date(fecha);
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return console.log("%s, %d de %s de %d", dias[f.getDay()], f.getDay(), meses[f.getMonth()], f.getFullYear());
}
console.log(getFecha("2022-9-21"));
//APARTADO 12


let f = new Date()
console.log(new Intl.DateTimeFormat('es', {
    dateStyle: "full"
}).format(f));