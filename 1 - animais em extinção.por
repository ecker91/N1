programa {
  funcao inicio() {
      cadeia nomeEspecie
      inteiro populacaoEspecie

      escreva("Digite o nome da esp�cie: ")
      leia(nomeEspecie)
      escreva("Insira o valor da popula��o de tal esp�cie: ")
      leia(populacaoEspecie)

      se(populacaoEspecie >= 200 e populacaoEspecie <= 500){
        escreva("Esp�cie criticamente em perigo!")
      }
      senao se(populacaoEspecie > 500 e populacaoEspecie <= 1000){
        escreva("Esp�cie em perigo.")
      }
      senao se(populacaoEspecie > 1000 e populacaoEspecie <= 5000){
        escreva("Esp�cie vulner�vel.")
      }
    
  }
}
