//4) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.
let larguraPiscina = Number(prompt('Digite o valor da largura da piscina em metros: '))
let comprimentoPiscina = Number(prompt('Digite o valor do comprimento da piscina: '))
let areaPiscina = larguraPiscina * comprimentoPiscina
let totalAzulejos = areaPiscina*120
let totalCaixas = totalAzulejos/60
let valorTotal = totalCaixas*45.50
alert('Deve, ser compradas '+totalCaixas+' caixas de azulejos, totalizando '+totalAzulejos+' azulejos, custando no total R$'+valorTotal.toFixed(2))