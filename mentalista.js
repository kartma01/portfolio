var numeroSecreto = parseInt(Math.random() * 11);

function MudarValor() {
  numeroSecreto = parseInt(Math.random() * 11);
}

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você Acertou!";
  } else if (chute > 10 || chute < -1) {
    elementoResultado.innerHTML = "voce deve digitar um numero de 0 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! O numero que você digitou é menor";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! O numero que você digitou é maior";
  } else {
    elementoResultado.innerHTML = "Digite algum numero";
  }
}
