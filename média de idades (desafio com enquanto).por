programa {
  funcao inicio() {
    cadeia nome, nomeMaiorIdade
    inteiro idade, maiorIdade = 0, contador = 1
    real mediaIdade, somaIdades = 0

    enquanto(contador<=5){
    escreva("Digite o nome da "+contador+"ª pessoa: ")
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
    contador = contador + 1}

    mediaIdade = somaIdades / 5

    escreva("Média de idades: "+mediaIdade)
    escreva("\nMaior idade entre os cinco: "+maiorIdade)
    escreva("\nPessoa(s) com maior idade: "+nomeMaiorIdade)
  }
}
