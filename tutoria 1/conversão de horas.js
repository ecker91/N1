// 3) Solicite ao usuário um valor em horas e converta para minutos e segundos.

let horas, minutos, segundos

horas = Number(prompt('Digite o valor em horas a ser convertido:'))

minutos = horas*60
segundos = minutos*60

alert(`${horas} é equivalente a ${minutos} minutos que é equivalente a ${segundos} segundos`)