/*Botão de Alterar tema*/

function mudaTema(){
    document.body.classList.toggle("dark")
  }
  
  /*Botão do cadastro*/

  function Continua() {
    email = document.getElementById("email").value;
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;
    alert(`seu email é: ${email} seu login é: ${login} sua senha é: ${senha}`)
}
