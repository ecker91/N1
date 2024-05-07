//3) Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número. Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7. Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.

let diaSemana
diaSemana = Number(prompt('Digite um número de 1 a 7: '))
switch(diaSemana){
    case 1: 
        alert('Domingo.')
        break
    case 2:
        alert('Segunda.')
        break
    case 3:
        alert('Terça.')
        break
    case 4:
        alert('Quarta.')
        break
    case 5:
        alert('Quinta.')
        break
    case 6:
        alert('Sexta.')
        break
    case 7:
        alert('Sábado.')
        break
    default:
        alert('Número inválido.')    
}