// Crie uma função que receba dois números e a operação aritmética que deseja realizar, retornando o resultado desta operação. A função deve conter testes unitários e tratamento de exceção. O parâmetro de operação deve conter validação e caso a operação repassada como argumento não for aceita, uma exceção deve ser lançada. Os valores repassados para a função devem ser convertidos em números e validados.
var n1 = parseFloat(prompt("Digite o primeiro valor: "));
console.log(n1)
var operacao = prompt("Digite qual operação deseja realizar: ");
console.log(operacao);
var n2 = parseFloat(prompt("Digite o segundo valor: "));
console.log(n2)

function calculadora(n1, n2, operacao) {
  var n1, n2, operacao, resultado;

  switch (operacao) {
    case "+":
      resultado = n1 + n2;
      break;

    case "-":
      resultado = n1 - n2;
      break;

    case "/":
      resultado = n1 / n2;
      break;

    case "*":
      resultado = n1 * n2;
      break;

    default:
      alert("Operação invalida!");
      break;
  }
  return resultado;
}

var resultado = calculadora(n1, n2, operacao);
alert(`Conta: ${n1} ${operacao} ${n2} = ${resultado}`)
console.log(n1,operacao,n2,"=",resultado)
