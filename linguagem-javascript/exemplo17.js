document.addEventListener('DOMContentLoaded', function() {
    // Envia uma requisição GET para a URL
    fetch('https://api.adviceslip.com/advice')
    // Coloca a resposta no formulário json
    .then(response => response.json())
    .then(data => {
        // Registra os dados no console
        console.log(data);

        // Obtém atributo 'advice' (conselho)
        const conselho = data.slip.advice;

        // Exibe mensagem na tela
        document.querySelector('body').innerHTML = `Conselho do dia: ${conselho}`;
    });
});