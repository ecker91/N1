programa {
  funcao inicio() {
    real valorHoraTrabalhada, salarioBruto, salarioDescontado, totalDeDesconto
    inteiro percentualDeDesconto, horasTrabalhadasPorMes

    escreva("Insira o valor de horas trabalhadas no m�s: ")
    leia(horasTrabalhadasPorMes)
    escreva("Insira o valor do pagamento por hora trabalhada:")
    leia(valorHoraTrabalhada)
    escreva("Insira o valor (em %) dos descontos do sal�rio: ")
    leia(percentualDeDesconto)

    salarioBruto = horasTrabalhadasPorMes * valorHoraTrabalhada
    totalDeDesconto = percentualDeDesconto * salarioBruto / 100
    salarioDescontado = salarioBruto - totalDeDesconto

    escreva("\nN�mero de horas trabalhadas: "+horasTrabalhadasPorMes)
    escreva("\nSal�rio bruto: "+salarioBruto)
    escreva("\nValor a ser descontado: "+totalDeDesconto)
    escreva("\nSal�rio l�quido: "+salarioDescontado)
  }
}
