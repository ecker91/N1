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
    senao se (login != "admin" e senha =="123"){
          escreva("Usuario errado!")
      }
      senao se (login == "admin" e senha != "123"){
          escreva("Senha errada!")
      }
      senao{
      escreva("Usuario e senha errados!")
    }

  }
}
