//1) Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.
let distanciaPercorrida = Number(prompt('Digite a distância total percorrida (em km): '))
let horasPercorridas = Number(prompt('Digite quantas horas levaram para completar a trilha: '))
let mediaVelocidade = distanciaPercorrida / horasPercorridas
alert('Sua média de velocidade durante essa trilha foi de '+mediaVelocidade+' km/h')