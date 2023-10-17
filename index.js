function ratingScore(wins, losses){
    let winnings = wins - losses;
    return winnings 
}

function rank(score){
    let winningsNumber = score
    let classification = ""
    if(winningsNumber <= 10){
        classification += "Ferro"
    } else if(winningsNumber <= 20){
        classification += "Bronze"
    } else if(winningsNumber <= 50){
        classification += "Prata"
    } else if(winningsNumber <= 80){
        classification += "Ouro"
    } else if(winningsNumber <=90){
        classification += "Diamante"
    } else if(winningsNumber <= 100){
        classification += "Lendário"
    } else {classification += "Imortal"}
    return classification
}

let PontuacaoJogador = ratingScore(70, 2)

console.log("O herói tem de saldo " + PontuacaoJogador + " e está no nível " + rank(PontuacaoJogador))