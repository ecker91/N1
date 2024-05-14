//O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

// Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
// Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.

let nome, idade, formacao, cidade

alert('Bem vindo ao processo seletivo do CETAS (Centro de Triagem de Animais Silvestres).\nInsira suas informações a seguir para verificarmos se estás apto a participar to processo.')
nome = prompt('Digite o seu nome: ')
idade = Number(prompt('Digite a sua idade: '))
formacao = prompt('Digite qual a sua formação (ex.: Direito, Medicina, etc): ').toLowerCase()
cidade = prompt('Digite qual a sua cidade de residência: ').toLowerCase()

if((idade>=25 && idade <=50)&&(formacao == 'ecologia' || formacao == 'biologia') && cidade == 'florianópolis'){
    alert('Usuário: '+nome+'\nApto a concorrer a vaga da "Equipe de Resgate".')
}else if((idade>=22 && idade<=60) && formacao == 'veterinária' && cidade =='florianópolis'){
    alert('Usuário: '+nome+'\nApto a concorrer a vaga da "Equipe de Tratamento".')
}else{
    alert('Usuário: '+nome+'\nNão está apto a concorrer. ')
}