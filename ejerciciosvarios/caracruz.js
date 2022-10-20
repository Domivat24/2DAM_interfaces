let caracruz = new Promise((resolve, reject) => {
    num = Math.floor(Math.random() * 2);
    console.log(num);
    if (num === 0) {
        resolve("Heads")
    } else {
        reject("Tails");
    }
    caracruz.then(resultado => {
        console.log(resultado);
    }).catch(error => {
        console.log(error);
    });
})