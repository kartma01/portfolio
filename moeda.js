function Converter() {
    var valorElemento = parseFloat(document.getElementById("valor").value);
  
    var valorEmReal = valorElemento * 5.25;
    var total = valorEmReal.toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + total;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function Converterr() {
    var valorElemento = parseFloat(document.getElementById("valor").value);
  
    var valorEmDolar = valorElemento / 5.25;
    var total = valorEmDolar.toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dólar é U$ " + total;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  