//2) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).

let vagasHotel = 40, entrada

while(entrada!=0){
    entrada = parseInt(prompt('Digite um número inteiro positivo para ocupar tantos leitos ou negativo para liberar tais (digite 0 para encerrar o programa).'))
    vagasHotel-=entrada
    if(vagasHotel>40){
        alert('Não é possivel liberar mais de 40 leitos!')
        vagasHotel+=entrada
    }
    if(vagasHotel<0){
        vagasHotel = 0 - vagasHotel
        alert('Não é possivel pois ultrapassa a capacidade em '+vagasHotel+' leitos.')
        break
    }
    alert('Leitos ainda disponíveis: '+vagasHotel)
}