//1) Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let cidadeA = 80000, cidadeB = 200000, anos = 0, taxaCrescimentoA = 0.03, taxaCrescimentoB = 0.015

while(cidadeA < cidadeB){
    anos++
    cidadeA = cidadeA + cidadeA*taxaCrescimentoA
    cidadeB = cidadeB + cidadeB*taxaCrescimentoB
}

alert(anos+' anos.')