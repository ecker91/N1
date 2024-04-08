programa
{
	
	funcao inicio()
	{
		real salarioAnual, pisoSalarialMensal, salarioMensal

		escreva("Digite o salário anual do funcionario:")
		leia(salarioAnual)
		escreva("Digite o piso salarial mensal da categoria:")
		leia(pisoSalarialMensal)

		salarioMensal = salarioAnual/12

		escreva("Seu salário mensal é de: R$"+salarioMensal)

		se(salarioMensal>=pisoSalarialMensal){
			escreva("\nSeu salário está de acordo com o piso")
		}senao{
			escreva("\nSeu salário está abaixo do piso salarial")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 515; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */