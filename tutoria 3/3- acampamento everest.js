//3) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

let alturaCume = 8848, alturaAtual = 5360, contador = 0, alturaDiaria

while(contador < 7 || alturaAtual < alturaCume){
        alturaDiaria = parseInt(prompt('Digite quantos metros você subiu hoje: '))
        alturaAtual += alturaDiaria
        contador++
}

if(alturaAtual >= alturaCume){
    alert('Parabéns! Você levou '+contador+' dias para chegar ao cume.')
}else{
    alert('Você deve voltar, pois corre risco de ficar sem oxigênio')
}