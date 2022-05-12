function Converter() {
  var valorInserido = document.getElementById("valor");
  var apenasValor = valorInserido.value;
  var valorNumerico = parseFloat(apenasValor);

  var valorEmReal = apenasValor * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em reais é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
