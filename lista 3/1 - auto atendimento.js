/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente      D) Sair*/

let entrada

entrada = Number(prompt('Bem vindo ao auto atendimento. \n\nPara falar com o atendente, digite 1. \nPara falar com o RH, digite 2. \nPara falar com o nosso gerente, digite 3. \nCaso deseje sair, digite qualquer outro número.'))

switch(entrada){
    case 1: 
        alert('Aguarde enquanto redirecionamos você ao nosso atendente.')
        break
    case 2: 
        alert('Aguarde enquanto conectamos você ao nosso RH.')
        break
    case 3: 
        alert('Aguarde enquanto chamamos o gerente.')
        break
    default:
        alert('Volte sempre.')
}