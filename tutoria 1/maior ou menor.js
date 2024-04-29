//1) Peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.
let numeroUm, numeroDois

numeroUm = Number(prompt('Digite o primeiro número: '))
numeroDois = Number(prompt('Digite o segundo número: '))

if(numeroUm>numeroDois){
    alert(numeroUm+" é maior que "+numeroDois)
}else if(numeroDois>numeroUm){
    alert(numeroUm+" é menor que "+numeroDois)
}else {
    alert('Os dois números são iguais. ')
}