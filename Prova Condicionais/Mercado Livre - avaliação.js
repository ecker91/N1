//No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 e 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções), índice igual a 9 ou maior (destaque na página principal).

let notaQualidade, notaCustoBeneficio, notaDurabilidade, indiceAvaliacao

notaQualidade = Number(prompt('Digite a nota do seu produto no quesito "Qualidade do Produto" (0 a 10): '))
notaCustoBeneficio = Number(prompt('Digite a nota do seu produto no quesito "Custo Benefício" (0 a 10): '))
notaDurabilidade = Number(prompt('Digite a nota do seu produto no quesito "Durabilidade" (0 a 10): '))

indiceAvaliacao = (notaQualidade + notaCustoBeneficio + notaDurabilidade)/3

switch(true){
    case indiceAvaliacao < 5:
        alert('Indice de avaliação: '+indiceAvaliacao.toFixed(2)+'\nSem destaque.')
        break
    case indiceAvaliacao >= 5 && indiceAvaliacao < 7:
        alert('Indice de avaliação: '+indiceAvaliacao.toFixed(2)+'\nDestaque na página da categoria.')
        break
    case indiceAvaliacao >= 7 && indiceAvaliacao < 9:
        alert('Indice de avaliação: '+indiceAvaliacao.toFixed(2)+'\nDestaque em promoções.')
        break
    case indiceAvaliacao >= 9:
        alert('Indice de avaliação: '+indiceAvaliacao.toFixed(2)+'\nDestaque na página principal.')
        break
}