//2) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.
let territorioLeaoBaio = 320, territorioCasal = 80
let numeroDeCasais = Number(prompt('Digite o número de casais: '))
//Caso o número de casais fosse 0, teríamos que o total do territorio dominado seria 14 x o numero total de leões, onde cada casal reduz o tamanho do um de seus territorios de 320 para 80 se considerarmos os dois solteiros no lugar
let territorioTotal = territorioLeaoBaio * (14 - numeroDeCasais)  + numeroDeCasais * territorioCasal
if(numeroDeCasais<=5){
    alert('O território total dominado pelos leões baio, sendo deles '+numeroDeCasais+' casal(is), será: '+territorioTotal+' km²')
}else{
    alert('O número máximo de casais é 5.')
}