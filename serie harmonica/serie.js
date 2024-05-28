function iteracao(){
    let serie = 0, numero = parseInt(prompt('Digite quantas iterações da série você quer: '))
    for(let i = 1; i <= numero; i++){
        serie += 1/i
    }
    alert(serie.toFixed(5))
}