function jogar() {
    idade = prompt("Quantos anos você tem?")
  if (idade < 18) {
    alert("Você não tem idade pra jogar Jokenpo")
  }
  if (idade >= 18) {
    escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-tesoura")
    escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
 // Mostrar a escolha do computador
alert("A escolha do computador foi: " + escolhaComputador);

// Condições de empate
if (escolhaJogador == escolhaComputador) {
  alert("Empate!");
}
// Condições de vitória ou derrota
else if (escolhaJogador == 1) { // Jogador escolheu Pedra
  if (escolhaComputador == 2) {
    alert("Computador venceu! Escolheu Papel.");
  } else {
    alert("Jogador venceu! Computador escolheu Tesoura.");
  }
} else if (escolhaJogador == 2) { // Jogador escolheu Papel
  if (escolhaComputador == 3) {
    alert("Computador venceu! Escolheu Tesoura.");
  } else {
    alert("Jogador venceu! Computador escolheu Pedra.");
  }
} else if (escolhaJogador == 3) { // Jogador escolheu Tesoura
  if (escolhaComputador == 1) {
    alert("Computador venceu! Escolheu Pedra.");
  } else {
    alert("Jogador venceu! Computador escolheu Papel.");
  }
} else {
  alert("Escolha inválida! Por favor, escolha entre 1, 2 ou 3.");
}
}
  }