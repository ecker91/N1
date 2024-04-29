//6) Solicite um número ao usuário e informe se é positivo ou negativo.

let numero

numero = Number(prompt('Digite um número: '))

if(numero>0){
    alert('O número é positivo.')
}else if(numero<0){
    alert('O número é negativo.')
}else{
    alert('O número é zero.')
}