programa {
  funcao inicio() {
    real valorHoraTrabalhada, salarioBruto, salarioDescontado, totalDeDesconto
    inteiro percentualDeDesconto, horasTrabalhadasPorMes

    escreva("Insira o valor de horas trabalhadas no mês: ")
    leia(horasTrabalhadasPorMes)
    escreva("Insira o valor do pagamento por hora trabalhada:")
    leia(valorHoraTrabalhada)
    escreva("Insira o valor (em %) dos descontos do salário: ")
    leia(percentualDeDesconto)

    salarioBruto = horasTrabalhadasPorMes * valorHoraTrabalhada
    totalDeDesconto = percentualDeDesconto * salarioBruto / 100
    salarioDescontado = salarioBruto - totalDeDesconto

    escreva("\nNúmero de horas trabalhadas: "+horasTrabalhadasPorMes)
    escreva("\nSalário bruto: "+salarioBruto)
    escreva("\nValor a ser descontado: "+totalDeDesconto)
    escreva("\nSalário líquido: "+salarioDescontado)
  }
}
