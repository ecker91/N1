//8) Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

let numeroOvos, valorAteUmaDuzia = 0.40, valorAteDuasDuzias = 0.30, valorMaisDeDuasDuzias = 0.25, valorTotal

numeroOvos = Number(prompt('Digite quantos ovos serão comprados: '))

switch(true){
    case numeroOvos <= 12:
        valorTotal = numeroOvos*valorAteUmaDuzia
        alert('Custará no total R$ '+valorTotal.toFixed(2))
        break
    case numeroOvos > 12 && numeroOvos <=24:
        valorTotal = numeroOvos*valorAteDuasDuzias
        alert('Custará no total R$ '+valorTotal.toFixed(2))
        break
    case numeroOvos >24 :
        valorTotal = numeroOvos*valorMaisDeDuasDuzias
        alert('Custará no total R$ '+valorTotal.toFixed(2))
        break
}