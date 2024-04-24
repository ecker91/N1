let anoAtual, anoNascimento, idadeAnos, idadeMeses, idadeDias, idadeSemanas

anoNascimento = Number(prompt('Digite o ano de nascimento: '))
anoAtual = Number(prompt('Digite o ano atual: '))

idadeAnos = anoAtual - anoNascimento
idadeMeses = idadeAnos*12
idadeDias = idadeAnos*365
idadeSemanas = idadeDias/7

alert('Idade em anos: '+idadeAnos+"\nIdade em meses: "+idadeMeses+"\nIdade em dias: "+idadeDias+"\nIdade em semanas: "+idadeSemanas)
