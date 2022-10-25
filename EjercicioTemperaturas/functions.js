let vCelsius = document.getElementById("celsius");
let vKelvin = document.getElementById("kelvin");
let bConvertir = document.getElementById("convertir");
let bLimpiar = document.getElementById("limpiar");

bConvertir.addEventListener('click', () => {

})
bLimpiar.addEventListener('click', () => {
    vKelvin
})
let muestra = document.getElementById("muestra");
texto.addEventListener('keyup', (evento) => {
    if (evento.key === "Enter") {
        //alert("Enter!");
        muestra.innerHTML = texto.value();
    }
})