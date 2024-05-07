//7) Criar um programa no qual o usuário digite o motivo da sua saída em uma empresa e o valor do seus FGTS. Para motivo "Justa causa" o valor a receber é o valor do FGTS somado a uma multa de R$4.000,00. Para motivo "Sem justa causa" o valor a receber é o valor do FGTS com desconto de 15%. Ao final mostrar o valor a receber.

let motivoSaida, valorFGTS, recebimentoFinal
let desconto = 15/100 //porcentagem do desconto

motivoSaida = prompt('Digite o motivo da sua saida da empresa.').toLowerCase()
valorFGTS = Number(prompt('Digite o valor do seu FGTS: '))

switch(motivoSaida){
    case 'justa causa':
        recebimentoFinal = valorFGTS + 4000
        alert('O valor que você deve receber é R$ '+recebimentoFinal.toFixed(2))
        break
    default:
        recebimentoFinal = valorFGTS*(1 - desconto)
        alert('O valor que você deve receber é R$ '+recebimentoFinal.toFixed(2))
}