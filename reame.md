Amigo Secreto 🎁
Um projeto simples e divertido para sortear amigos secretos! Desenvolvido com HTML, CSS e JavaScript, essa aplicação permite que você adicione nomes de amigos em uma lista e realize um sorteio aleatório para definir quem será o amigo secreto de cada um.

🚀 Funcionalidades
Adicionar Nomes: Insira os nomes dos participantes em um campo de texto e adicione-os à lista.

Validação de Entrada: Impede a adição de nomes vazios ou inválidos.

Lista de Participantes: Visualize todos os nomes adicionados em uma lista clara e organizada.

Sorteio Aleatório: Clique no botão "Sortear amigo" para escolher um nome aleatório da lista.

Responsividade: Design adaptável para diferentes tamanhos de tela.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica e acessível.

CSS3: Estilos modernos com Flexbox, variáveis CSS e design responsivo.

JavaScript: Lógica de programação para adicionar nomes, validar entradas e realizar o sorteio.

Fontes Google: Utilização das fontes Inter e Merriweather para um design clean e profissional.

📂 Estrutura do Projeto
Copy
amigo-secreto/
├── index.html          # Página principal do projeto
├── style.css           # Estilos CSS para a aplicação
├── app.js              # Lógica JavaScript para funcionalidades
├── assets/             # Pasta contendo imagens e ícones
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Documentação do projeto

🖥️ Como Executar o Projeto
Clone o repositório:

git clone https://github.com/seu-usuario/amigo-secreto.git
Navegue até a pasta do projeto:

cd amigo-secreto
Abra o arquivo index.html:

Basta abrir o arquivo index.html no seu navegador favorito.

Comece a usar:

Adicione os nomes dos participantes e clique em "Sortear amigo" para ver o resultado!

🎨 Design e Acessibilidade
Cores: Utilização de uma paleta de cores moderna e contrastante, definida com variáveis CSS para fácil manutenção.

Fontes: Fontes legíveis e elegantes, garantindo uma boa experiência de leitura.

Acessibilidade: Uso de atributos ARIA (aria-labelledby, aria-live) para melhorar a acessibilidade da aplicação.

🧠 Lógica de Programação
Adicionar Nomes:

O nome é validado para evitar entradas vazias.

Cada nome é armazenado em um array e exibido dinamicamente na lista.

Sorteio Aleatório:

Utiliza a função Math.random() para selecionar um índice aleatório do array de nomes.

O resultado é exibido de forma clara e destacada.

📝 Melhorias Futuras
Salvar Lista: Adicionar funcionalidade para salvar a lista de nomes no localStorage.

Compartilhar Resultado: Permitir que o resultado do sorteio seja compartilhado via link ou redes sociais.

Modo Escuro: Implementar um tema escuro para melhorar a experiência do usuário em ambientes com pouca luz.

🤝 Como Contribuir
Contribuições são bem-vindas! Se você quiser melhorar este projeto, siga os passos abaixo:

Faça um fork do projeto.

Crie uma nova branch com sua feature ou correção:

git checkout -b minha-feature
Faça commit das suas alterações:

git commit -m 'feat: Minha nova feature'
Envie para o repositório remoto:

git push origin minha-feature
Abra um Pull Request e descreva suas alterações.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.