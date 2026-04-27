const opcoes = ["pedra", "papel", "tesoura"]

const imagens = {
    pedra: "img/pedra.png",
    papel: "img/papel.png",
    tesoura: "img/tesoura.png"
}

// 1. Variáveis de pontos fora da função para não resetarem
let pontosJogador = 0
let pontosPc = 0

function jogar(escolhaJogador) {

    // escolha aleatória do computador
    const pos = Math.floor(Math.random() * 3)
    const escolhaPc = opcoes[pos]

    // mostrar imagens escolhidas
    document.getElementById("imgJogador").src = imagens[escolhaJogador]
    document.getElementById("imgPc").src = imagens[escolhaPc]

    let mensagem = ""
    let mensagem2 = ""

    if (escolhaJogador === escolhaPc) {
        mensagem = "Empate 😗"
    }
    else if (
        (escolhaJogador === "pedra" && escolhaPc === "tesoura") ||
        (escolhaJogador === "tesoura" && escolhaPc === "papel") ||
        (escolhaJogador === "papel" && escolhaPc === "pedra")
    ) {
        mensagem = "Você venceu 👨"
        pontosJogador++ // Aumenta a pontuação global
    }
    else {
        mensagem = "Computador venceu 🤖"
        pontosPc++ // Aumenta a pontuação global
    }

    // 2. Correção do operador: >= (maior ou igual)
    if (pontosJogador >= 10) {
        mensagem2 = "Parabéns, você fez 10 pontos! Você é muito bom! 🏆"
        pontosJogador = 0 
        pontosPc = 0
    }

    if (pontosPc >= 10) {
        mensagem2 = "Infelizmente você perdeu, mas não desista! 🎮"
        pontosJogador = 0
        pontosPc = 0
    }


    document.getElementById("mensagem").innerText = mensagem
    document.getElementById("mensagem2").innerText = mensagem2
    

}