//obtener referencia al div datos
let mDiv = document.getElementById("datos")


//EJERCICIO 1
let button1 = document.createElement("button")
let nombre = ["Nombre 1", "Nombre 2", "Nombre 3", "Nombre 4", "Nombre 5"];

button1.textContent = "Open Window with Div";
document.body.appendChild(button1)
button1.addEventListener("click", () => {
    mDiv.innerHTML = nombre.join("<br>");
})
//EJERCICIO 2

let personas = [
    {
        nombre: "Nacho",
        telefono: "966112233",
        edad: 40
    },
    {
        nombre: "Ana",
        telefono: "911223344",
        edad: 35
    },
    {
        nombre: "Mario",
        telefono: "611998877", edad: 15
    },
    {
        nombre: "Laura",
        telefono: "633663366",
        edad: 17
    }
];
let button2 = document.createElement("button")
button2.textContent = "Open Window with Table";
document.body.appendChild(button2)
button2.addEventListener("click", () => {
    mDiv.innerHTML = nombre.join("<br>");
})

