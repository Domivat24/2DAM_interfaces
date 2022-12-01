'use strict'
//leer fichero
const fs = require('fs');
let fichero = fs.readFileSync('./electrodomesticos.json');
let productos = new Array();
productos = JSON.parse(fichero);
console.log(productos);

//contruir select
let cadenaDOM = '<select id="electros" class="table-striped">';
productos.forEach(producto => {
	cadenaDOM += `<option value="${producto.nombre}">${producto.nombre}</option>`;
});
cadenaDOM += '</select>';
console.log(cadenaDOM);
document.getElementById("desplegable").innerHTML = cadenaDOM;

//función que cronstruye el div información
let creaInformacion = (indice) => {
	cadenaDOM = `<table>
				<tr><td>Descripción:</td><td>${productos[indice].nombre}</td></tr>
				<tr><td>Precio coste:</td><td>${productos[indice].precioCoste}</td></tr>
				<tr><td>Precio venta:</td><td>${productos[indice].precioVenta}</td></tr>
				<tr><td>Stock actual:</td><td>${productos[indice].stockActual}</td></tr>
				<tr><td>Stock mínimo:</td><td>${productos[indice].stockMin}</td></tr>
				</table>`;
	document.getElementById("informacion").innerHTML = cadenaDOM;
}

//añadir escuchador al select:
document.getElementById("electros").addEventListener('click', () => {
	let indice = document.getElementById("electros").selectedIndex;
	console.log(indice);
	creaInformacion(indice);
});

//Ponemos la información del primer producto
creaInformacion(0);

//crear totales
//primero se hacen los 'calculos'
let suma = 0;
productos.forEach(p => {
	suma += parseInt(p.stockActual);
});
console.log(suma);

let stockmin = productos.filter(p => {
	return p.stockActual < p.stockMin;
});
console.log(stockmin);
//después se contruye el html
cadenaDOM = `<ul>
			<li>Total Productos: ${productos.length}</li>
			<li>Total Stock Actual: ${suma}</li>
			<li>Productos con stock por debajo del mínimo:
			
				<ol>`;

stockmin.forEach(p => {
			cadenaDOM += `<li> ${p.nombre} </li>`;
});				
cadenaDOM +=	`</ol>
			</li>
		</ul>`;
console.log(cadenaDOM);
document.getElementById("totales").innerHTML = cadenaDOM;