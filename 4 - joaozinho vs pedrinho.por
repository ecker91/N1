programa {
  funcao inicio() {
    real alturaJoaozinho = 1.75, alturaPedrinho = 1.6
    inteiro contador = 0
    enquanto( alturaJoaozinho> alturaPedrinho ){
        alturaJoaozinho = alturaJoaozinho + 0.01
        alturaPedrinho = alturaPedrinho + 0.03
        contador = contador + 1
    }
    escreva("Passar�o "+contador+" anos at� que Pedrinho passe Jo�ozinho.")
    
  }
}
