// Crie uma função que receba dois números e a operação aritmética que deseja realizar, retornando o resultado desta operação. A função deve conter testes unitários e tratamento de exceção. O parâmetro de operação deve conter validação e caso a operação repassada como argumento não for aceita, uma exceção deve ser lançada. Os valores repassados para a função devem ser convertidos em números e validados.


function calculadora(){
var n1 = parseFloat(prompt('Digite o primeiro valor: '));
var n2 = parseFloat(prompt('Digite o segundo valor: '));
var operacao;
var resultado = 0;

switch(operacao){
    case '+':
        resultado = n1 + n2;
        break;
    
    case '-':
        resultado = n1 - n2;
        break;

    case '/':
        resultado = n1 / n2;
        break;

    case '*':
        resultado = n1 * n2;
        break;
    
    default:
        alert("Operação invalida!");
        break;

}

}
calculadora()