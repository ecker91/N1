//6) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).

let arremessoUm, arremessoDois, arremessoTres, totalPontuacao

arremessoUm = Number(prompt('Digite a nota do primeiro arremesso: '))
arremessoDois = Number(prompt('Digite a nota do segundo arremesso: '))
arremessoTres = Number(prompt('Digite a nota do terceiro arremesso: '))

totalPontuacao = arremessoUm + arremessoDois + arremessoTres

switch(true){
    case totalPontuacao == 15:
        alert('Deus da peteca!')
        break
    case totalPontuacao <15 && totalPontuacao >=10:
        alert('Petequeiro profissa!')
        break
    case totalPontuacao <10 && totalPontuacao >=5:
        alert('Petequeiro de final de semana...')
        break
    case totalPontuacao ==0 :
        alert('Nunca petecou!')
        break
    default:
        alert('Erro. Tem certeza que inseriu valores corretos?')
}