//10) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.
// CEREJA - CEREJA - CEREJA -> R$100
// LARANJA - LARANJA - LARANJA -> R$80
// CEREJA - LARANJA - CEREJA -> R$50
// LARANJA - CEREJA - LARANJA -> R$25

let numeroCereja = 0, numeroLaranja = 0, valorGanho, fruta

fruta = prompt('Digite qual a primeira fruta obtida (cereja ou laranja): ').toLowerCase()
if(fruta == 'cereja'){
    numeroCereja = numeroCereja + 1
}else if(fruta == 'laranja'){
    numeroLaranja = numeroLaranja + 1
}
fruta = prompt('Digite qual a segunda fruta obtida (cereja ou laranja): ').toLowerCase()
if(fruta == 'cereja'){
    numeroCereja = numeroCereja + 1
}else if(fruta == 'laranja'){
    numeroLaranja = numeroLaranja + 1
}
fruta = prompt('Digite qual a terceira fruta obtida (cereja ou laranja): ').toLowerCase()
if(fruta == 'cereja'){
    numeroCereja = numeroCereja + 1
}else if(fruta == 'laranja'){
    numeroLaranja = numeroLaranja + 1
}

if(numeroLaranja + numeroCereja != 3){
    alert('Erro! Use sempre cereja ou laranja como resposta. ')
    numeroCereja = -1
}

switch(numeroCereja){
    case 0 :
        valorGanho = 80
        alert('Você ganhou R$ '+valorGanho)
        break
    case 1 :
        valorGanho = 25
        alert('Você ganhou R$ '+valorGanho)
        break
    case 2 :
        valorGanho = 50
        alert('Você ganhou R$ '+valorGanho)
        break
    case 3 :
        valorGanho = 100
        alert('Você ganhou R$ '+valorGanho)
        break
}