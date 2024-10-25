document.getElementById('currency-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Obter valores de entrada do formulário e substituir vírgula por ponto
    let valor = document.getElementById('amount').value.replace(',', '.');
    valor = parseFloat(valor); // Converte para número decimal
    // Verificar se o valor é um número válido após a conversão
    if (isNaN(valor)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    // Definir taxas de câmbio fixas com objeto
    const exchangeRates = {
        USD: { EUR: 0.93, BRL: 5.71 },
        BRL: { EUR: 0.16, USD: 0.18 },
        EUR: { BRL: 1.08, USD: 6.17 }
    };
    let valorConvertido;
    if (fromCurrency === toCurrency) {
        valorConvertido = valor;
    } else {
        valorConvertido = valor * exchangeRates[fromCurrency][toCurrency];
    }
    let conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado = ${valorConvertido.toFixed(2)} ${toCurrency}`;
});