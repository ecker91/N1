let username = []
let password = []
let teste = localStorage.getItem("login")
if(teste !== null){
    username = JSON.parse(localStorage.getItem("login"))
    password = JSON.parse(localStorage.getItem("senha"))
}

function login(){
    let login = document.getElementById("usernameLogin").value
    let senha = document.getElementById("passwordLogin").value
    if(username.indexOf(login) != -1){ 
        if(senha == password[username.indexOf(login)]){
            window.location.href="about.html"
        }
        else{
            alert('Senha incorreta!')
        }
    }
    else{
        alert('Usuário não encontrado!')
    }
}

function cadastro(){
    let login = document.getElementById("usernameRegister").value
    let senha = document.getElementById("passwordRegister").value
    username.push(login)
    password.push(senha)
    localStorage.setItem("login", JSON.stringify(username)) 
    localStorage.setItem("senha", JSON.stringify(password)) 
    document.getElementById("usernameRegister").value = null
    document.getElementById("passwordRegister").value = null
}

function deslogar(){
    window.location.href='index.html'
}