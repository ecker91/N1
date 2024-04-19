programa {
  funcao inicio() {
    cadeia nome
    inteiro idade, maiorIdade, somaIdades = 0
    real mediaIdade

    escreva("Digite o nome da primeira pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    maiorIdade = idade
    somaIdades = somaIdades + idade

    escreva("Digite o nome da segunda pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade < maiorIdade){

    }senao{
    maiorIdade = idade}
    somaIdades = somaIdades + idade

    escreva("Digite o nome da terceira pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade < maiorIdade){

    }senao{
    maiorIdade = idade}
    somaIdades = somaIdades + idade

    escreva("Digite o nome da quarta pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade < maiorIdade){
    }senao{
    maiorIdade = idade}
    somaIdades = somaIdades + idade

    escreva("Digite o nome da quinta pessoa: ")
    leia(nome)
    escreva("Digite a idade da pessoa: ")
    leia(idade)
    se (idade < maiorIdade){
    }senao{
    maiorIdade = idade}
    somaIdades = somaIdades + idade

    mediaIdade = somaIdades /5

    escreva("Média de idades: "+mediaIdade)
    escreva("\nMaior idade entre os cinco: "+maiorIdade)
  }
}
