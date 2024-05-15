//3) Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro digitado pelo usuário.

let numeroTemp = 3, numeroFinal, contador = 2, lista = '2'

numeroFinal = parseInt(prompt('Digite um número inteiro: '))
if (numeroFinal <2){
    alert('Por favor digite um número inteiro maior que um.')
}else if (numeroFinal == 2){
    alert('2 é o primeiro número primo.')
}else{

    while(numeroTemp < numeroFinal){
        do{
            if(numeroTemp%contador == 0){
                break
            }
             contador++
        }while (contador < numeroTemp)
        if(contador == numeroTemp){
             lista = lista + ', '+ numeroTemp
        }
        contador = 2
        numeroTemp++
    }
    alert(lista)
}