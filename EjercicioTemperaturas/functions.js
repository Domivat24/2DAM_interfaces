const Swal = require('sweetalert2');

let vCelsius;
let vKelvin;
let bConvertir = document.getElementById("convertir");
let bLimpiar = document.getElementById("limpiar");

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})

bConvertir.addEventListener('click', () => {
    vCelsius = document.getElementById("celsius").value;
    vKelvin = document.getElementById("kelvin").value;
    try {
        if (vCelsius === "" && vKelvin === "" || (isNaN(vKelvin) === true || isNaN(vCelsius) === true)) {
            throw error;
            }
        if ((isNaN(vKelvin) === false) && vKelvin !== "" && vCelsius === "") {
            document.getElementById("celsius").value = vKelvin - 273;
        } else {
            vCelsius = Number(vCelsius);
            document.getElementById("kelvin").value = Number(vCelsius + 273);
}

    } catch (error) {
        //alert no funciona en electron, ya que congela todos los hilos al ejecutarse,
        //así que he buscado e instalado el módulo sweetalert2 que me ha funcionado como la seda
        Toast.fire({
            icon: 'error',
            title: 'Error con los campos',
            text: "No ha introducido algún valor en los campos o estos no son números"
        })
    }

})
bLimpiar.addEventListener('click', () => {
    document.getElementById('kelvin').value = '';
    document.getElementById('celsius').value = '';

})