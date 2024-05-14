// Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. Realizar o cálculo da pontuação e mostrar ao final.

// 1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

// A) Van Helsing (2 pontos)
// B) Castlevania (3 pontos)
// C) The Vampire Diaries (2 pontos)
// D) Blade: The Series (1 ponto)


// 2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

// A) Alice no País das Maravilhas (4 pontos)
// B) O Hobbit (2 pontos)
// C) A Fantástica Fábrica de Chocolates (4 pontos)
// D) Coraline (3 pontos)


// 3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

// A) The Legend of Zelda (3 pontos)
// B) Kirby (2 pontos)
// C) Metroid (2 pontos)
// D) Super Mario Bros (4 pontos)


// 4) Quais dos autores citados, representam melhor o gênero de livros de terror?

// A) Stephen King (4 pontos)
// B) Edgar Allan Poe (2 pontos)
// C) H.P. Lovecraft (3 pontos)
// D) Mary Shelley (4 pontos)


let notaAcumulada = 0, entrada, notaPerfeita = 15

alert('Bem vindo ao nosso Quiz! \nO questionário será composto de quatro perguntas de multipla escolha, onde o usuário deve ler o enunciado e escrever a letra da opção que julgue "a mais correta" na caixa de resposta. \nNo total uma pontuação será dada no final do quiz.')

entrada = prompt('Pergunta 1. \nQuais séries a seguir englobam melhor a temática de vampiros e assombração?\nA) Van Helsing \nB) Castlevania \nC) The Vampire Diaries \nD) Blade: The Series').toUpperCase()

switch(entrada){
    case 'A':
        notaAcumulada = notaAcumulada + 2
        break
    case 'B':
        notaAcumulada = notaAcumulada + 3
        break
    case 'C':
        notaAcumulada = notaAcumulada + 2
        break
    case 'D':
        notaAcumulada = notaAcumulada + 1
        break
    default:
        alert('Opção inválida! Zero pontos adcionados.')
}

entrada = prompt('Pergunta 2. \nDentre os livros abaixo, quais incluem melhor a temática de fantasia?\nA) Alice no País das Maravilhas \nB) O Hobbit \nC) A Fantástica Fábrica de Chocolates \nD) Coraline').toUpperCase()

switch(entrada){
    case 'A':
        notaAcumulada = notaAcumulada + 4
        break
    case 'B':
        notaAcumulada = notaAcumulada + 2
        break
    case 'C':
        notaAcumulada = notaAcumulada + 4
        break
    case 'D':
        notaAcumulada = notaAcumulada + 3
        break
    default:
        alert('Opção inválida! Zero pontos adcionados.')
}

entrada = prompt('Pergunta 3. \nQuais das franquias listadas, representam melhor a empresa de jogos Nintendo?\nA) The Legend of Zelda \nB) Kirby \nC) Metroid \nD) Super Mario Bros').toUpperCase()

switch(entrada){
    case 'A':
        notaAcumulada = notaAcumulada + 3
        break
    case 'B':
        notaAcumulada = notaAcumulada + 2
        break
    case 'C':
        notaAcumulada = notaAcumulada + 2
        break
    case 'D':
        notaAcumulada = notaAcumulada + 4
        break
    default:
        alert('Opção inválida! Zero pontos adcionados.')
}

entrada = prompt('Pergunta 4. \nQuais dos autores citados, representam melhor o gênero de livros de terror?\nA) Stephen King \nB) Edgar Allan Poe \nC) H.P. Lovecraft \nD) Mary Shelley ').toUpperCase()

switch(entrada){
    case 'A':
        notaAcumulada = notaAcumulada + 4
        break
    case 'B':
        notaAcumulada = notaAcumulada + 2
        break
    case 'C':
        notaAcumulada = notaAcumulada + 3
        break
    case 'D':
        notaAcumulada = notaAcumulada + 4
        break
    default:
        alert('Opção inválida! Zero pontos adcionados.')
}
if(notaAcumulada == notaPerfeita){
    alert('Nota final: '+notaAcumulada+'\nParabéns pela nota perfeita!')
}else{
    alert('Nota final: '+notaAcumulada)
}