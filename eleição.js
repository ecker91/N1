//Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

let numEleitores, votosX, votosY, votosBranco, votosNulo

numEleitores = Number(prompt('Digite o número de eleitores da cidade: '))

votosX = Number(prompt('Digite quantos votos recebeu o candidato X: '))
votosY = Number(prompt('Digite quantos votos recebeu o candidato Y: '))
votosBranco = Number(prompt('Digite quantos votos foram em branco: '))
votosNulo = Number(prompt('Digite quantos votos foram nulos: '))

if(votosX + votosBranco + votosNulo + votosY == numEleitores){
    votosX = votosX*100/numEleitores
    votosY = votosY*100/numEleitores
    votosBranco = votosBranco*100/numEleitores
    votosNulo = votosNulo*100/numEleitores

    alert('Percentual de votos de candidato X: '+votosX+'\nPercentual de votos de candidato Y: '+votosY+'\nPercentual de votos em branco: '+votosBranco+'\nPercentual de votos nulos: '+votosNulo)
}else{
    alert('Numero total de votos não fecha com o numero de eleitores.')
}