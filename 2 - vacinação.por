programa {
  funcao inicio() {
    caracter comorbidade
    cadeia nomePessoa
    inteiro idadePessoa

    escreva("Digite o nome da pessoa: ")
    leia(nomePessoa)
    escreva("Digite a idade da pessoa: ")
    leia(idadePessoa)
    escreva("Digite S se a pessoa possui comorbidade ou N se n�o possue: ")
    leia(comorbidade)

    se (comorbidade == "S" ou idadePessoa >= 60){
    escreva("Pode vacinar!")
    }
    senao{
  escreva("N�o pode se vacinar.")
    }
  }
}
