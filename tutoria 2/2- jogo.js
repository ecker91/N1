//2) Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

let vidaPersonagem = 100, dano

dano = Number(prompt('Digite quanto dano você sofreu no ataque: '))

switch(true){
    case dano < 50 :
        alert('Dano leve, vida boa!')
        break
    case dano >=50 && dano < 80 :
        alert('Dano moderado, vida estável.')
        break
    case dano >=80 && dano <100:
        alert('Dano crítico, quase sem vida!')
        break
    case dano >= vidaPersonagem:
        alert('Game Over.')
        break
}