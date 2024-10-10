// Definindo as taxas de câmbio fixas
const exchangeRates = {
    USD: { BRL: 5.30, EUR: 0.85 },
    EUR: { BRL: 6.20, USD: 1.18 },
    BRL: { USD: 0.19, EUR: 0.16 }
 };
 // Função para realizar a conversão
 function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    // Verifica se foi inserido um valor
    if (amount === '' || isNaN(amount)) {
        document.getElementById("result").textContent = "Por favor, insira um valor válido.";
        return;
    }
    // Realiza a conversão
    let convertedAmount;
    if (fromCurrency === toCurrency) {
        convertedAmount = amount;  // Se a moeda de origem for igual à de destino, mantém o valor
    } else {
        convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    }
    // Exibe o resultado
    document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
 }
 // Evento de clique para o botão de conversão
 document.getElementById("convert").addEventListener("click", convertCurrency);