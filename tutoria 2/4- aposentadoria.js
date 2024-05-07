//4) Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

// a) Ter pelo menos 65 anos
// b) Ter trabalhado pelo menos 30 anos
// c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos

let idade, tempoServico
idade = Number(prompt('Digite quantos anos você tem: '))
tempoServico = Number(prompt('Digite quantos anos de serviço você tem: '))
switch(true){
    case idade >= 65: 
    alert('Pode aposentar.')
    break
    case tempoServico >= 30:
    alert('Pode aposentar.')
    break
    case idade >=60 && tempoServico >=25:
    alert('Pode aposentar.')
    break
    default:
        alert('Não pode aposentar.')
}