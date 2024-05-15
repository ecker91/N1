//2) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.

let numeroUm, numeroDois, numeroTres, numeroQuatro, numeroCinco, contador = 2

numeroUm = parseInt(prompt('Digite o primeiro número: '))
numeroDois = parseInt(prompt('Digite o segundo número: '))
numeroTres = parseInt(prompt('Digite o terceiro número: '))
numeroQuatro = parseInt(prompt('Digite o quarto número: '))
numeroCinco = parseInt(prompt('Digite o quinto número: '))

do{
    if(numeroUm%contador == 0){
        break
    }
    contador++
}while (contador < numeroUm)

if(contador == numeroUm){
    alert('O número '+numeroUm+' é primo.')
}else{
    alert('O número '+numeroUm+' não é primo.')
}

contador = 2 

do{
    if(numeroDois%contador == 0){
        break
    }
    contador++
}while (contador < numeroDois)

if(contador == numeroDois){
    alert('O número '+numeroDois+' é primo.')
}else{
    alert('O número '+numeroDois+' não é primo.')
}

contador = 2 

do{
    if(numeroTres%contador == 0){
        break
    }
    contador++
}while (contador < numeroTres)

if(contador == numeroTres){
    alert('O número '+numeroTres+' é primo.')
}else{
    alert('O número '+numeroTres+' não é primo.')
}

contador = 2 

do{
    if(numeroQuatro%contador == 0){
        break
    }
    contador++
}while (contador < numeroQuatro)

if(contador == numeroQuatro){
    alert('O número '+numeroQuatro+' é primo.')
}else{
    alert('O número '+numeroQuatro+' não é primo.')
}

contador = 2 

do{
    if(numeroCinco%contador == 0){
        break
    }
    contador++
}while (contador < numeroCinco)

if(contador == numeroCinco){
    alert('O número '+numeroCinco+' é primo.')
}else{
    alert('O número '+numeroCinco+' não é primo.')
}
