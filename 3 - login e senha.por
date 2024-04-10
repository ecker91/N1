programa {
  funcao inicio() {
    cadeia login, senha
    escreva("Digite o login: ")
    leia(login)
    escreva("Digite a senha: ")
    leia(senha)

    se (login == "admin" e senha == "123"){
      escreva("Login efetuado!")
    }
    senao {
      escreva("Login falhou!")
    }

  }
}
