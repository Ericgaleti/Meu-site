let codigo = 848980;

function verificarCodigo() {
  const input = document.getElementById("codigo-funcionario");

  const valorDigitado = Number(input.value);

  if (valorDigitado === codigo) {
    alert("Código correto!");
  } else {
    alert("Código incorreto. Tente novamente.");
  }
}