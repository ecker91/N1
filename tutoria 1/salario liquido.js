//2) Pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.

let salarioBruto, salarioLiquido

salarioBruto = Number(prompt('Digite o valor do salário bruto em R$: '))

salarioLiquido = salarioBruto *0.8

alert('Seu salário líquido é R$'+salarioLiquido.toFixed(2))