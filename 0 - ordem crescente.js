//5) Peça três números ao usuário e os exiba em ordem crescente.

let numeroUm, numeroDois, numeroTres, temp

numeroUm = Number(prompt('Digite o primeiro número: '))
numeroDois = Number(prompt('Digite o segundo número: '))
numeroTres = Number(prompt('Digite o terceiro número: '))

if(numeroUm>numeroDois){
    temp = numeroDois
    numeroDois = numeroUm
    numeroUm = temp
}
if(numeroTres < numeroDois){
    temp = numeroTres
    numeroTres = numeroDois
    numeroDois = temp
}
if(numeroDois < numeroUm){
    temp = numeroDois
    numeroDois = numeroUm
    numeroUm = temp
}
alert(numeroUm+', '+numeroDois+", "+numeroTres)
