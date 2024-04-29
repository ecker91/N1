//4) Solicite ao usuário três notas e seus respectivos pesos, e calcule a média ponderada.
let notaUm, notaDois, notaTres, pesoUm, pesoDois, pesoTres, mediaFinal

notaUm = Number(prompt('Digite a primeira nota: '))
pesoUm = Number(prompt('Digite o peso da primeira nota: '))
notaDois = Number(prompt('Digite a segunda nota: '))
pesoDois = Number(prompt('Digite o peso da segunda nota: '))
notaTres = Number(prompt('Digite a terceira nota: '))
pesoTres = Number(prompt('Digite o peso da terceira nota: '))

mediaFinal = (notaUm*pesoUm + notaDois*pesoDois + notaTres*pesoTres)/(pesoUm+pesoDois+pesoTres)

alert('A média final ponderada das notas é: '+mediaFinal.toFixed(2))