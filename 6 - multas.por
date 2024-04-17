programa {
  funcao inicio() {
    inteiro contador, pontos, somaPontos = 0
    real multa, somaMulta = 0

    escreva("Digite o numero de multas: ")
    leia(contador)

    enquanto(contador > 0){
      escreva("Digite o valor da multa (em R$): ")
      leia(multa)
      somaMulta = somaMulta + multa
      escreva("Escreva quantos pontos essa multa custou: ")
      leia(pontos)
      somaPontos = somaPontos + pontos
      contador = contador - 1
    }
    escreva("Valor total a pagar: R$"+somaMulta+"\n")
    escreva("Total de pontos :"+somaPontos+"\n")
    se(somaPontos < 21){
        escreva("Você está regular")
    }senao{
        escreva("Você está irregular")
    }
  }
}
