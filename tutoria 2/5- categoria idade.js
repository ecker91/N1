//5) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
// - "Infantil A" de 5 a 7 anos de idade
// - "Infantil B" de 8 a 10 anos de idade
// - "Juvenil A" de 11 a 13 anos de idade
// - "Juvenil B" de 14 a 17 anos de idade
// - "Senior" com 18 anos de idade ou mais

let idade = Number(prompt('Digite sua idade: '))
switch(true){
    case idade >=5 && idade <8:
        alert('Você é da categoria Infantil A.')
        break
    case idade >=8 && idade <11:
        alert('Você é da categoria Infantil B.')
        break
    case idade >=11 && idade <14:
        alert('Você é da categoria Juvenil A.')
        break
    case idade >=14 && idade <18:
        alert('Você é da categoria Juvenil B.')
        break
    default:
        alert('Você é da categoria Senior.')
}