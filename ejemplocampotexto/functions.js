let texto = document.getElementById("texto");
let button = document.getElementById("boton");
button.addEventListener('click', () => {
    alert(texto.value());
})
let muestra = document.getElementById("muestra");
texto.addEventListener('keyup', (evento) => {
    if (evento.key === "Enter") {
        //alert("Enter!");
        muestra.innerHTML = texto.value();
    }
})