//Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

let plastico, papel, metal, total

plastico = Number(prompt('Digite quantos kg de plástico foram reciclados: '))
papel = Number(prompt('Digite quantos kg de papel foram reciclados: '))
metal = Number(prompt('Digite quantos kg de metal foram reciclados: '))

total = plastico*2/10 + papel*3/30 + metal*5/50

alert('O valor total em reais recebido é de R$'+total.toFixed(2))