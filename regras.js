
/**
 * Calcula o valor final aplicando regras de negócio.
 * Regra 1: Se valor > 500, aplica 10% de desconto.
 * Regra 2: Aplica 5% de imposto sobre o valor (com ou sem desconto).
 * Regra 3: Retorna -1 se o valor for inválido (negativo).
 */
function calcularValorFinal(valorProduto) {
    // CENÁRIO DE FALHA
    if (valorProduto < 0 || typeof valorProduto !== 'number') {
        return -1; 
    }

    let valorBase = valorProduto;
    const LIMITE_DESCONTO = 500;

    // 10%
    if (valorProduto > LIMITE_DESCONTO) {
        valorBase = valorProduto * 0.90; 
    }

    // 5%
    const valorComImposto = valorBase * 1.05;

 
    return parseFloat(valorComImposto.toFixed(2));
}

function verificarStatus(valorFinal) {
    if (valorFinal === -1) {
        return "Erro: Valor Inválido";
    }
    return "Cálculo Realizado com Sucesso";
}