//9) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.

let ladoUm, ladoDois, ladoTres, tipoTriangulo

ladoUm = Number(prompt('Digite quantas unidades de medida tem o primeiro lado: '))
ladoDois = Number(prompt('Digite quantas unidades de medida tem o segundo lado: '))
ladoTres = Number(prompt('Digite quantas unidades de medida tem o terceiro lado: '))

switch(true){
    case ladoUm == ladoDois && ladoDois == ladoTres:
        alert('É um triângulo equilatero.')
        break
    case ladoUm == ladoDois || ladoDois == ladoTres || ladoUm == ladoTres:
        alert('É um triângulo isósceles.')
        break
    default: 
        alert('É um triângulo escaleno.') 
}
