programa {
  funcao inicio() {
    cadeia nome, nomeMaiorIdade
    inteiro idade, maiorIdade, somaIdades = 0
    real mediaIdade

    escreva("Digite o nome da primeira pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    maiorIdade = idade
    nomeMaiorIdade = nome
    somaIdades = somaIdades + idade

    escreva("Digite o nome da segunda pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade > maiorIdade){
        maiorIdade = idade
        nomeMaiorIdade = nome
    }senao se(idade == maiorIdade){
        nomeMaiorIdade = nomeMaiorIdade + ", " + nome
    }
    somaIdades = somaIdades + idade

    escreva("Digite o nome da terceira pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade > maiorIdade){
        maiorIdade = idade
        nomeMaiorIdade = nome
    }senao se(idade == maiorIdade){
        nomeMaiorIdade = nomeMaiorIdade + ", " + nome
    }
    somaIdades = somaIdades + idade

    escreva("Digite o nome da quarta pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade > maiorIdade){
        maiorIdade = idade
        nomeMaiorIdade = nome
    }senao se(idade == maiorIdade){
        nomeMaiorIdade = nomeMaiorIdade + ", " + nome
    }
    somaIdades = somaIdades + idade

    escreva("Digite o nome da quinta pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade > maiorIdade){
        maiorIdade = idade
        nomeMaiorIdade = nome
    }senao se(idade == maiorIdade){
        nomeMaiorIdade = nomeMaiorIdade + ", " + nome}
    somaIdades = somaIdades + idade

    mediaIdade = somaIdades /5

    escreva("M�dia de idades: "+mediaIdade)
    escreva("\nMaior idade entre os cinco: "+maiorIdade)
    escreva("\nPessoa(s) com maior idade: "+nomeMaiorIdade)
  }
}
