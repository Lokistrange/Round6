function Resultado() {
    let personagem = ["", "", ""];
let viloes = ["", "", ""];
let forcaPersonagem = 0;
let forcaViloes = 0;

// Exibe o array inicial de personagens
alert("O array Personagem contém: " + personagem);

// Loop para escolher os personagens e calcular a força total deles
for (let i = 0; i < 3; i++) {
let escolhaPersonagem;
do {
escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
} while (!escolhaPersonagem); // Valida entrada
personagem[i] = escolhaPersonagem;
forcaPersonagem += Math.floor(Math.random() * 10) + 1; // Soma força total
}

console.log("Agora, o array Personagem contém: " + personagem);

// Gera os vilões e calcula a força total deles
let viloesPossiveis = ["Frontman", "Ghostface", "Joker"];
let viloesUsados = []; // Para evitar duplicação de vilões

for (let i = 0; i < 3; i++) {
let indiceAleatorio;
do {
indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
} while (viloesUsados.includes(viloesPossiveis[indiceAleatorio])); // Evita duplicação

viloes[i] = viloesPossiveis[indiceAleatorio];
viloesUsados.push(viloes[i]);
forcaViloes += Math.floor(Math.random() * 10) + 1; // Soma força total
}

console.log("Lista final de vilões: " + viloes);

// Exibe o resultado com base na força das equipes
if (forcaPersonagem > forcaViloes) {
alert("Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi: " + forcaPersonagem);
} else if (forcaPersonagem < forcaViloes) {
alert("Seu time é fraquinho. O computador ganhou o cabo de guerra com a força de: " + forcaViloes);
} else {
alert("Os dois times têm a mesma força!");
}
    }