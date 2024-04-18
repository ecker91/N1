programa {
  funcao inicio() {
    inteiro numero, fatorial= 1
    escreva("Escreva o número que você quer calcular o fatorial: ")
    leia(numero)

    enquanto(numero>0){
      fatorial = fatorial*numero
      numero--
    }
    escreva(fatorial)

  }
}
