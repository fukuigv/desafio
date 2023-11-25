const prompt = require('prompt-sync')()
let name = prompt('insira seu nome: ') //armazena o nome 
let exp = parseInt(prompt("insira sua experiencia: ")) //armazena o xp e converte para um numero inteiro
let ranking = "" //variavel do ranking


switch(true)
{
    case (exp < 1000):
        ranking = "Ferro"
        break
    case (exp > 1000 && exp < 2000):
        ranking = "Bronze"
        break
    case (exp > 2000 && exp < 5000):
        ranking = "Prata"
        break
    case (exp > 6000 && exp < 7000):
        ranking = "Ouro"
        break
    case (exp > 7000 && exp < 8000):
        ranking = "Platina"
        break
    case (exp > 8000 && exp < 9000):
        ranking = "Ascendente"
        break
    case (exp > 9000 && exp < 10000):
        ranking = "Imortal"
        break
    default:
        ranking = "Radiante"
        break
}

console.log(`O heroi de nome ${name} está no nivel de ${ranking}`)
