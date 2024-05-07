//3) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".

let numeroMes

numeroMes = Number(prompt('Digite o mês que você quer verificar quantos dias tem usando o número do mês: (Ex. Janeiro = 1, Fevereiro = 2, etc...)'))

switch(numeroMes){
    case 1: 
        alert('Esse mês tem 31 dias. ')
        break
    case 2: 
        alert('Esse mês tem 28 dias. (29 em anos bissextos)')
        break
    case 3: 
        alert('Esse mês tem 31 dias. ')
        break
    case 4: 
        alert('Esse mês tem 30 dias. ')
        break
    case 5: 
        alert('Esse mês tem 31 dias. ')
        break
    case 6: 
        alert('Esse mês tem 30 dias. ')
        break
    case 7: 
        alert('Esse mês tem 31 dias. ')
        break
    case 8: 
        alert('Esse mês tem 31 dias. ')
        break
    case 9: 
        alert('Esse mês tem 30 dias. ')
        break
    case 10: 
        alert('Esse mês tem 31 dias. ')
        break
    case 11: 
        alert('Esse mês tem 30 dias. ')
        break
    case 12: 
        alert('Esse mês tem 31 dias. ')
        break
    default:
        alert('Por favor digite um número inteiro entre 1 e 12.')
}