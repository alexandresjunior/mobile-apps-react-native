document.addEventListener('DOMContentLoaded',
    function () {
        // Envia uma requisição GET pela URL
        fetch('https://viacep.com.br/ws/01001000/json/')
            // Formata a resposta no padrão JSON
            .then(response => response.json())
            .then(data => {
                // Exibe mensagem na tela
                document.querySelector('body').innerHTML = `Rua  ${data.logradouro} - ${data.localidade}, ${data.uf}`;
            });
    });