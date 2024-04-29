//10) Peça ao usuário que digite números que sejam subtraídos (descontados) de 100, mostrando o valor atualizado a cada número digitado. Quando o valor chegar a zero ou ficar negativo, encerrar o programa.

let soma = 100, numero

while(soma>0){
    alert('Valor atual: '+soma+'.')
    numero = Number(prompt('Digite o valor a subtrair do total: '))
    soma = soma - numero
}