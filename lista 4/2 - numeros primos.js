//2) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.

let numero, contador = 2, qtdNumeros = 0

while(qtdNumeros <5){
    numero = parseInt(prompt('Digite um número: '))
    do{
        if(numero%contador == 0){
            break
        }
         contador++
    }while (contador < numero)
if(contador == numero){
    alert('O número '+numero+' é primo.')
}else{
    alert('O número '+numero+' não é primo.')
}
qtdNumeros++
contador = 2 
}
