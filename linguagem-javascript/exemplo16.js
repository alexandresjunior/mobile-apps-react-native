let contador = 0;

function contar() {
    contador++;
    document.querySelector('h1').innerHTML = contador;

    if (contador % 10 === 0) {
        alert(`Contador = ${contador}`)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = contar;

    setInterval(contar, 1000);
});