//9) Solicite o nome e email de 5 pessoas e mostre na tela ao final.

let nomeUm, nomeDois, nomeTres, nomeQuatro, nomeCinco, emailUm, emailDois, emailTres, emailQuatro, emailCinco

nomeUm = prompt('Digite o primeiro nome: ')
emailUm = prompt('Digite o endereço de email de '+nomeUm+": ")
nomeDois = prompt('Digite o segundo nome: ')
emailDois = prompt('Digite o endereço de email de '+nomeDois+": ")
nomeTres = prompt('Digite o terceiro nome: ')
emailTres = prompt('Digite o endereço de email de '+nomeTres+": ")
nomeQuatro = prompt('Digite o quarto nome: ')
emailQuatro = prompt('Digite o endereço de email de '+nomeQuatro+": ")
nomeCinco = prompt('Digite o quinto nome: ')
emailCinco = prompt('Digite o endereço de email de '+nomeCinco+": ")

alert(`Nome 1: ${nomeUm}. Email: ${emailUm}.\nNome 2: ${nomeDois}. Email: ${emailDois}.\nNome 3: ${nomeTres}. Email: ${emailTres}.\nNome 4: ${nomeQuatro}. Email: ${emailQuatro}.\nNome 5: ${nomeCinco}. Email: ${emailCinco}.`)