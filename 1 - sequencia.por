programa {
  funcao inicio() {
    inteiro numero, contador = 10

    escreva("Digite numero na sequencia de 10 a 1 :")
    
    enquanto(contador > 0){
    leia(numero)
    se(numero != contador){
      escreva("Voc� errou a sequencia")
      pare
    }
    contador = contador - 1
    se(contador == 0){
      escreva("Voc� terminou a sequ�ncia corretamente")
    }
    }
    
  }
}
