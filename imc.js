//Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. 
let peso, altura, IMC

peso = Number(prompt('Digite o peso (em kg): '))
altura = Number(prompt('Digite a altura (em cm): '))

altura = altura/100
IMC = peso/(altura*altura)

alert('Seu IMC é de: '+IMC.toFixed(3))