programa {
  funcao inicio() {
    inteiro contador = 0 
      enquanto(contador<100){
        contador++
        se(contador%3 == 0 e contador%5 ==0){
            escreva("FizzBuzz\n")
        }senao se(contador%3 == 0){
            escreva("Fizz\n")
        }senao se(contador%5 == 0){
            escreva("Buzz\n")
        }senao{
          escreva(contador,"\n")
        }
      }

  }
}
