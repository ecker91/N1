programa
{
	
	funcao inicio()
	{
		inteiro numeroDeHabitantes
		real areaRegiao, densidadeHabitacional

		escreva("Digite quantos habitantes tem a região:")
		leia(numeroDeHabitantes)
		escreva("Insira o valor da área da região em kilometros quadrados:")
		leia(areaRegiao)

		densidadeHabitacional = numeroDeHabitantes / areaRegiao

		se (densidadeHabitacional >=100){
			escreva("Densidade Alta")
		}senao{
			escreva("Densidade Baixa")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 84; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
