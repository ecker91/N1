//1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia.

let entrada, somaTotal = 0, umCentavo = 0.01, cincoCentavos = 0.05, dezCentavos = 0.1, vinteCincoCentavos = 0.25, cinquentaCentavos = 0.5, moedaUm = 0, moedaCinco = 0, moedaDez = 0, moedaVinteCinco= 0, moedaCinquenta = 0

while(entrada!=0){
    entrada = parseInt(prompt('Quantos centavos vale a moeda? (Digite 0 para sair)'))
    entrada = entrada/100
    somaTotal+= entrada
    switch(true){
        case entrada == 0:
            break
        case entrada == umCentavo:
            moedaUm++
            break
        case entrada == cincoCentavos:
            moedaCinco++
            break
        case entrada == dezCentavos:
            moedaDez++
            break
        case entrada == vinteCincoCentavos:
            moedaVinteCinco++
            break
        case entrada == cinquentaCentavos:
            moedaCinquenta++
            break
        default:
            alert('Valor inválido! Digite 1, 5, 10, 25 ou 50.')
            somaTotal-= entrada
    }
}
alert(`Moedas de 1 (Um) centavo: ${moedaUm}\nMoedas de 5 (Cinco) centavos: ${moedaCinco}\nMoedas de 10 (Dez) centavos: ${moedaDez}\nMoedas de 25 (Vinte e Cinco) centavos: ${moedaVinteCinco}\nMoedas de 50 (Cinquenta) centavos: ${moedaCinquenta}\n\nValor total: R$ ${somaTotal.toFixed(2)}`)