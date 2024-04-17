programa {
  funcao inicio() {
    inteiro numero, expoente, contador = 0 , resultado = 1
    escreva("Digite um número: ")
    leia(numero)
    escreva("Digite o expoente: ")
    leia(expoente)

    enquanto(contador < expoente){
      resultado = resultado*numero
      contador = contador + 1
    }
    escreva("O resultado de "+numero+" elevado a "+expoente+" é igual a "+resultado)
  }
}
