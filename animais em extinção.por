programa {
  funcao inicio() {
      cadeia nomeEspecie
      inteiro populacaoEspecie

      escreva("Digite o nome da espécie: ")
      leia(nomeEspecie)
      escreva("Insira o valor da população de tal espécie: ")
      leia(populacaoEspecie)

      se(populacaoEspecie >= 200 e populacaoEspecie <= 500){
        escreva("Espécie criticamente em perigo!")
      }
      senao se(populacaoEspecie > 500 e populacaoEspecie <= 1000){
        escreva("Espécie em perigo.")
      }
      senao se(populacaoEspecie > 1000 e populacaoEspecie <= 5000){
        escreva("Espécie vulnerável.")
      }
    
  }
}
