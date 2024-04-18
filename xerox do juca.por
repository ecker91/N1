programa {
  funcao inicio() {
    inteiro numCopias = 1
    real precoCopia = 0.33, precoTotal

   enquanto(numCopias <=500){
    precoTotal=precoCopia*numCopias
    escreva(""+numCopias+" cópia(s): "+precoTotal+"\n")
    numCopias++
   }
    
  }
}
