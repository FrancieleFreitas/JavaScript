// 1. Define uma data futura (exemplo: 31 de dezembro de 2025)
const dataFutura = new Date("Dec 31, 2025 23:59:59").getTime();

// 2. Função para calcular o tempo restante
function calcularTempoRestante() {
  const agora = new Date().getTime();
  const diferenca = dataFutura - agora;

  // Calcula dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Exibe na tela
  document.getElementById("temporizador").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  // Quando chegar na data final
  if (diferenca < 0) {
    document.getElementById("temporizador").innerHTML = "Tempo esgotado!";
  }
}

// 3. Atualiza o temporizador a cada segundo
setInterval(calcularTempoRestante, 1000);

// Chama a função uma vez para exibir imediatamente
calcularTempoRestante();
