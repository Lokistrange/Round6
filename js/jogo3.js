// Função para iniciar o jogo
function jogar() {
    rodada = 1
while(rodada <= 3) {
console.log("Rodada: " + rodada)

escolhaJogador = prompt("Nivel: "+rodada+", escolha vidro (1,2 ou 3)?")
pisoQuebrado = Math.floor(Math.random()* 3) + 1;

if(escolhaJogador == pisoQuebrado) {
alert("Vidro quebrou, acabou o jogo pra você!")
rodada = 1000
}
else {
alert("Você passou! piso quebrado estava no ponte: " + pisoQuebrado)
}
rodada = rodada + 1

}

// se a rodado for >= 4

if(rodada == 4) {
alert("Parabéns, você venceu!!!")
}
}