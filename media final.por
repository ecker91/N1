programa
{
	
	funcao inicio()
	{
		real notaUm, notaDois, notaTres, mediaFinal

		escreva("Digite o valor da primeira nota: ")
		leia(notaUm)
		escreva("Digite o valor da segunda nota: ")
		leia(notaDois)
		escreva("Digite o valor da terceira nota: ")
		leia(notaTres)

		mediaFinal = (notaUm + notaDois + notaTres)/3

		se(mediaFinal >= 7){
			escreva("Aprovado!")
		}senao{
			escreva("Reprovado!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 405; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
