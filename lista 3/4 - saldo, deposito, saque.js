//4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

let contaBancaria, saldo = 1000, operacao, transacao

contaBancaria = Number(prompt('Digite o número da sua conta bancária.'))
operacao = Number(prompt('Escolha a sua operação.\nDigite 1 para ver seu saldo.\nDigite 2 para aplicar um depósito.\nDigite 3 para realizar um saque.'))

switch(operacao){
    case 1:
        alert('Seu saldo é de: '+saldo.toFixed(2)+' reais.')
        break
    case 2:
        transacao = Number(prompt('Digite o valor em reais do depósito a ser feito: '))
        saldo = saldo + transacao
        alert('Depósito concluido. Saldo atual: R$'+saldo.toFixed(2))
        break
    case 3:
        transacao = Number(prompt('Digite o valor do saque: '))
        if(transacao <= saldo){
            saldo = saldo - transacao
            alert('Saque concluído. Saldo atual: R$'+saldo.toFixed(2))
        }else{
            alert('Saldo insuficiente. ')
        }
        break
    default:
        alert('Por favor digite 1, 2 ou 3.')
}