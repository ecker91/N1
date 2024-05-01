let number = Number(prompt('Digite um número: '))
let cont = number
let resto 
while(cont>2){
    cont--
    resto = number%cont
    if(resto == 0){
        break
    }
}
if(cont == 2 || cont == 1){
    alert('É primo.')
}else{
    alert('Não é primo. Ele é divisível por '+cont+'.')
}