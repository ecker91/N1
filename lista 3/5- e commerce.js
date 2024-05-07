//5) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.

let valorFrete = 12.5, descontoGold = 0.8, descontoSilver = 0.9, categoriaAssinante, valorCompraBase, valorCompraFinal

valorCompraBase = Number(prompt('Digite o valor da compra: '))
categoriaAssinante = Number(prompt('É assinante? \nDigite 1 para Assinatura Premium.\nDigite 2 para Assinatura Gold.\nDigite 3 para Assinatura Silver.\nDigite 4 caso ainda não for assinante. '))

switch(categoriaAssinante){
    case 1:
        valorCompraFinal = valorCompraBase*descontoGold
        alert('Valor a ser pago: R$'+valorCompraFinal.toFixed(2))
    break
    case 2:
        valorCompraFinal = valorCompraBase*descontoGold + valorFrete
        alert('Valor a ser pago: R$'+valorCompraFinal.toFixed(2))
    break
    case 3:
        valorCompraFinal = valorCompraBase*descontoSilver + valorFrete
        alert('Valor a ser pago: R$'+valorCompraFinal.toFixed(2))
    break
    case 4: 
        valorCompraFinal = valorCompraBase + valorFrete
        alert('Valor a ser pago: R$'+valorCompraFinal.toFixed(2))
    break
    default:
        alert('Por favor digite 1, 2, 3 ou 4.')
}