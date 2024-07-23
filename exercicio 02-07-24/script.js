const campoEmail = document.getElementById("email")
const campoSenha = document.getElementById("password")
const campoNovoEmail = document.getElementById("newemail")
const campoNovaSenha = document.getElementById("newpassword")
const campoRepSenha = document.getElementById("reppassword")
const campoTelefone = document.getElementById("telefone")
const campoNomeFreela = document.getElementById("nomefreela")
const campoCPF = document.getElementById("cpf")
const campoDataNascimento = document.getElementById("nascimento")
const campoCidade = document.getElementById("cidade")

function logar() {
  let email = campoEmail.value
  let senha = campoSenha.value
  let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
  if (bancoDeDados == null) {
    alert("Nenhum usuário cadastrado até o momento")
  } else {
    for (let usuario of bancoDeDados) {
      if ( usuario.email == email && usuario.senha == senha ) {
        alert("Parabéns, você logou!")
        window.location.href = "home.html"
        break
        }
      }
    }
    alert("E-mail ou senha incorreta!")
  }


function cadastrarFreela() {
  if (campoNovaSenha.value == campoRepSenha.value) {
    const usuario = {
      email: campoNovoEmail.value,
      senha: campoNovaSenha.value,
      dataNascimento: campoDataNascimento.value,
      cpf: campoCPF.value,
      nome: campoNomeFreela.value,
      telefone: campoTelefone.value,
      cidade: campoCidade.value,
    }
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (bancoDeDados == null) {
      bancoDeDados = []
    }
    if (existe(usuario, bancoDeDados)) {
      alert("Esse email já foi cadastrado anteriormente")
    } else {
      bancoDeDados.push(usuario)
      localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
      alert("Usuário cadastrado com sucesso!")
      document.getElementById("newemail").value = null
      document.getElementById("newpassword").value = null
      document.getElementById("reppassword").value = null
      document.getElementById("nascimento").value = null
      document.getElementById("telefone").value = null
      document.getElementById("nomefreela").value = null
      document.getElementById("cpf").value = null
      document.getElementById("cidade").value = null
    }
  } else {
    alert("As senhas são diferentes!")
  }
}

function existe(usuario, bancoDeDados) {
  for (let verificado of bancoDeDados) {
    if (verificado.email == usuario.email) {
      return true
    }
  }
  return false
}

function logout() {
  window.location.href = "index.html"
}