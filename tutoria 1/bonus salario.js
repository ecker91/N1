//8) Solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let salarioBase, salarioBonus, tempoServiço

salarioBase = Number(prompt('Digite seu salário: '))
tempoServiço = Number(prompt('Digite há quantos anos você trabalha na empresa: '))

if(tempoServiço>= 5){
    salarioBonus = salarioBase*1.05
    alert('Você tem direito a um bônus. Seu novo salário é de: R$'+salarioBonus.toFixed(2))
}else{
    alert('Você ainda não tem direito a bônus. ')
}