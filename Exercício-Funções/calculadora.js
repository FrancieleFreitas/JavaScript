// Atividade de Criação de Variáveis e Funções em JavaScript

// 1. Funções de Operações Matemáticas (Arrow Functions)

// Função para somar dois números
const Soma = (num1, num2) => num1 + num2;

// Função para calcular a diferença (subtração)
const Subtrai = (num1, num2) => num1 - num2;

// Função para calcular o produto (multiplicação)
const Multiplica = (num1, num2) => num1 * num2;

// Função para calcular o quociente (divisão)
const Divide = (num1, num2) => num1 / num2;


// 2. Função de Exibição de Resultado (Função Tradicional)
// Esta função recebe dois números e exibe o resultado de cada operação no console.
function MostraResultado(num1, num2) {
    // Exibe a Soma, usando o nome da operação e o resultado.
    console.log(`Soma entre ${num1} e ${num2} ${Soma(num1, num2)}`);

    // Exibe a Diferença (Subtração).
    console.log(`Diferença entre ${num1} e ${num2} ${Subtrai(num1, num2)}`);

    // Exibe o Produto (Multiplicação).
    console.log(`Produto entre ${num1} e ${num2} ${Multiplica(num1, num2)}`);

    // Exibe o Quociente (Divisão).
    console.log(`Quociente de ${num1} e ${num2} ${Divide(num1, num2)}`);
}


// 3. Execução
// Chamando a função principal com números de exemplo (10 e 2)
MostraResultado(10, 2);