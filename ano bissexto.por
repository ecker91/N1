programa {
  funcao inicio() {
      inteiro ano
      escreva("Insira o ano: ")
      leia(ano)

      se (ano%400 == 0 ){
        escreva("ano bissexto")
      }senao se (ano%100 == 0){
        escreva("ano não bissexto")
      }senao se (ano%4 == 0 ){
        escreva("ano bissexto")
      }senao {
        escreva("ano não bissexto")
      }
  }
}
