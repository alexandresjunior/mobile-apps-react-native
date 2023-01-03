document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de submissão e entrada (a serem utilizados mais adiante)
    const submit = document.querySelector('#submit');
    const novaTarefa = document.querySelector('#tarefa');

    // Disabilita o botão de submissão por padrão
    submit.disabled = true;

    // Observa a entrada a ser digitada no campo de entrada
    novaTarefa.onkeyup = () => {
        if (novaTarefa.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    // Observa o envio do formulário
    document.querySelector('form').onsubmit = () => {

        // Envia uma requisição POST para a URL
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: document.querySelector('#tarefa').value,
                body: 'Nova Tarefa',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        // Coloca a resposta no formulário json
        .then(response => response.json())
        .then(data => {
            // Registra os dados no console
            console.log(data);

            // Encontra a tarefa que o usuário acabou de enviar
            const tarefa = data.title;

            // Cria um item de lista para a nova tarefa e adicione a tarefa a ela
            const li = document.createElement('li');
            li.innerHTML = tarefa;

            // Adiciona um novo elemento à nossa lista não ordenada
            document.querySelector('#tarefas').append(li);
        });

        // Limpa o campo de entrada
        novaTarefa.value = '';

        // Desativa o botão enviar novamente
        submit.disabled = true;

        // Impede o envio do formulário
        return false;
    }
});