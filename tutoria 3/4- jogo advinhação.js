//4) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas.

let numeroSecreto, numeroPalpite, contador = 0 

numeroSecreto = parseInt(prompt('Digite o número secreto (0 a 100). '))

do{
    numeroPalpite = parseInt(prompt('Digite seu palpite (0 a 100): '))
    if(numeroPalpite>numeroSecreto){
        alert('O número secreto é menor!')
    }
    if(numeroPalpite< numeroSecreto){
        alert('O número secreto é maior!')
    }
    contador++
}while(numeroPalpite!=numeroSecreto)

alert('Parabéns! Você levou '+ contador+ ' tentativa(s)!')