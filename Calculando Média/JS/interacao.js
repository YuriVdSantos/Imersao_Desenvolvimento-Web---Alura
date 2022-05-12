var nome = 'Yuri'
var notaPrimeiroBimestre = 8
var notaSegundoBimestre = 5
var notaTerceiroBimestre = 2
var notaQuartoBimestre = 9

var notaFinal =
  (notaPrimeiroBimestre +
    notaSegundoBimestre +
    notaTerceiroBimestre +
    notaQuartoBimestre) /
  4

var notaArredondada = notaFinal.toFixed(2)

console.log('Seja Bem-Vindo ' + nome)
console.log('Sua média final foi: ' + notaArredondada)

if (notaFinal >= 6) {
  var result = 'Parabéns você foi APROVADO'
  console.log(result)
  result.innerHTML = result
} else {
  var result = 'Infelizmente você foi REPROVADO'
  console.log(result)
  result.innerHTML = result
}
