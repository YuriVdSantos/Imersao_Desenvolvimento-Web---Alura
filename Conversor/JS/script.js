function Converter() {
  var valorInserido = document.getElementById('valor')
  var apenasValor = valorInserido.value
  var valorNumerico = parseFloat(apenasValor)

  var valorEmReal = valorNumerico * 5.18
  valorArredondadoReal = valorEmReal.toFixed(2)
  console.log(valorArredondadoReal)

  var elementoValorConvertidoReais = document.getElementById(
    'valorConvertidoReais'
  )
  var valorConvertidoReais = 'O valor em reais é R$ ' + valorArredondadoReal
  elementoValorConvertidoReais.innerHTML = valorConvertidoReais

  var valorEmEuro = valorNumerico * 0.96
  valorArredondadoEuro = valorEmEuro.toFixed(2)

  var elementoValorConvertidoEuro = document.getElementById(
    'valorConvertidoEuro'
  )
  var valorConvertidoEuro = 'O valor em Euro é R$ ' + valorArredondadoEuro
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro

  var valorEmBitCoin = valorNumerico * 0.000034
  valorArredondadoBitCoin = valorEmBitCoin.toFixed(5)

  var elementoValorConvertidoBitCoin = document.getElementById(
    'valorConvertidoBitCoin'
  )
  var valorConvertidoBitCoin =
    'O valor em BitCoin é R$ ' + valorArredondadoBitCoin
  elementoValorConvertidoBitCoin.innerHTML = valorConvertidoBitCoin
}
