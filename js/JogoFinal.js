let perguntas = [
    {
      "pergunta": "Qual o principal pokemon do Ash?",
      "resposta": [
        { "opcao": "Pikachu", "correto": true },
        { "opcao": "Bulbassauro", "correto": false },
        { "opcao": "Charmander", "correto": false }
      ]
    },
    {
      "pergunta": "Qual é o nome da equipe de vilões mais famosa da serie Pokemon?",
      "resposta": [
        { "opcao": "Equipe Rocket", "correto": true },
        { "opcao": "Equipe Aqua", "correto": false },
        { "opcao": "Equipe Magma", "correto": false }
      ]
    }
  ];
  
  // Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    for (let i = 0; i < perguntaAtual.resposta.length; i++) {
      const resposta = perguntaAtual.resposta[i];
      const botao = document.createElement("button");
      botao.classList.add("botao-resposta");
      botao.innerText = resposta.opcao;
      botao.onclick = function () {
        if (resposta.correto) {
          acertos++; // Incrementa acertos
        }
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Próxima pergunta
        } else {
          finalizarJogo(); // Fim do jogo
        }
      };
      respostasElemento.appendChild(botao);
    }
  }
  
  // Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // Inicializa o jogo carregando a primeira pergunta
  carregarPergunta();