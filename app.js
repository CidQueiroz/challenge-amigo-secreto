// Seleciona os elementos do DOM
const inputAmigo = document.getElementById('amigo'); // Campo de texto para inserir o nome
const listaAmigos = document.getElementById('listaAmigos'); // Lista onde os nomes serão exibidos
const resultado = document.getElementById('resultado'); // Local onde o resultado do sorteio será exibido

// Array para armazenar os nomes
let nomes = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Remove espaços em branco no início e no final

    // Valida se o campo não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome ao array
    nomes.push(nome);

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de texto
    inputAmigo.value = '';
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
    // Limpa a lista atual
    listaAmigos.innerHTML = '';

    // Adiciona cada nome da lista ao HTML
    nomes.forEach((nome, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    // Verifica se há nomes na lista
    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio.');
        return;
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * nomes.length);

    // Exibe o nome sorteado
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${nomes[indiceSorteado]}</strong></li>`;
}

// Adiciona o evento de tecla "Enter" ao campo de texto
inputAmigo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});