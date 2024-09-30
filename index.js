const readline = require('readline-sync')

let nomeHeroi = readline.question("Qual o nome do seu Heroi? " , String)

let numeroXP = parseInt(readline.question('Numero XP'))



if(numeroXP <= 1000){
console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro")
} else if (numeroXP >= 1001 && numeroXP <= 2000) {
console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze")
}
else if (numeroXP >= 2001 && numeroXP <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata")
    }
else if (numeroXP >= 5001 && numeroXP <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro")
    }
else if (numeroXP >= 7001 && numeroXP <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Platina")
    }
else if (numeroXP >= 8001 && numeroXP <= 9000) {
console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente")
}
else if (numeroXP >= 9001 && numeroXP <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal")
    }
else if (numeroXP >= 10001) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante")
    }