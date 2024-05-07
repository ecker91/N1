//6) Faça um programa do qual o usuário digite quatro números e ao final mostre o maior número, o menor número, e a soma dos outros dois números (que não são o maior nem o menor). Caso existam números repetidos digitados, após o usuário digitar os quatro números, não mostrar maior, menor nem soma, mas sim uma mensagem "Você digitou números repetidos".

let numeroUm, numeroDois, numeroTres, numeroQuatro, numeroTemp, somaNumerosIntermediarios

numeroUm = Number(prompt('Digite o valor do primeiro número: '))
numeroDois = Number(prompt('Digite o valor do segundo número: '))
numeroTres = Number(prompt('Digite o valor do terceiro número: '))
numeroQuatro = Number(prompt('Digite o valor do quarto número: '))

if(numeroDois < numeroUm){
    numeroTemp = numeroDois
    numeroDois = numeroUm
    numeroUm = numeroTemp
}
if(numeroTres < numeroDois){
    numeroTemp = numeroTres
    numeroTres = numeroDois
    numeroDois = numeroTemp
}
if(numeroDois < numeroUm){
    numeroTemp = numeroDois
    numeroDois = numeroUm
    numeroUm = numeroTemp
}
if(numeroQuatro < numeroTres){
    numeroTemp = numeroQuatro
    numeroQuatro = numeroTres
    numeroTres = numeroTemp
}
if(numeroTres < numeroDois){
    numeroTemp = numeroTres
    numeroTres = numeroDois
    numeroDois = numeroTemp
}
if(numeroDois < numeroUm){
    numeroTemp = numeroDois
    numeroDois = numeroUm
    numeroUm = numeroTemp
}

switch(true){
    case numeroUm == numeroDois:
    case numeroDois == numeroTres:
    case numeroTres == numeroQuatro:
        alert('Você digitou números repetidos!')
        break
    default:
        somaNumerosIntermediarios = numeroDois + numeroTres
        alert(`Maior número: ${numeroQuatro}\nMenor número: ${numeroUm}\nSoma dos números intermediarios: ${somaNumerosIntermediarios}`)
}