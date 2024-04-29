//3) Criar um programa que realize o cálculo de uma média da faculdade. A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela.
let notaAtividadeIndividual = Number(prompt('Digite o valor da nota da Atividade individual: '))
let notaSeminarioEquipe = Number(prompt('Digite a nota do Seminário em Equipe: '))
let notaProjetoFinal = Number(prompt('Digite a nota do Projeto final: '))
let mediaFinal = (notaAtividadeIndividual + notaSeminarioEquipe + notaProjetoFinal*3)/5
alert('Sua média final é: '+mediaFinal.toFixed(2))