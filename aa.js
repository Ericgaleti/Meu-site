let codigo = 848980;

    function verificarCodigo() {
        // Pega o elemento do campo de texto pelo seu ID
        const input = document.getElementById('codigoVerificacao');
        // Pega o valor digitado e converte para número
        const valorDigitado = Number(input.value);

        // Verifica se o valor digitado é igual ao código esperado
        if (valorDigitado === codigo) {
            alert('Código correto!');
        } else {
            alert('Código incorreto. Tente novamente.');
        }
    }
