// ===================================
// ARQUIVO: regras.js
// Lógica de Negócio: Imposto e Desconto
// ===================================

/**
 * Calcula o valor final aplicando regras de negócio.
 * Regra 1: Se valor > 500, aplica 10% de desconto.
 * Regra 2: Aplica 5% de imposto sobre o valor (com ou sem desconto).
 * Regra 3: Retorna -1 se o valor for inválido (negativo).
 */
function calcularValorFinal(valorProduto) {
    // CENÁRIO DE FALHA: Validação básica
    if (valorProduto < 0 || typeof valorProduto !== 'number') {
        return -1; // Código de erro
    }

    let valorBase = valorProduto;
    const LIMITE_DESCONTO = 500;

    // Regra de Desconto (10%)
    if (valorProduto > LIMITE_DESCONTO) {
        valorBase = valorProduto * 0.90; // Aplica 10% de desconto
    }

    // Regra de Imposto (5%)
    const valorComImposto = valorBase * 1.05;

    // Arredonda para 2 casas decimais e retorna como número
    return parseFloat(valorComImposto.toFixed(2));
}

/**
 * Retorna uma mensagem amigável baseada no resultado.
 */
function verificarStatus(valorFinal) {
    if (valorFinal === -1) {
        return "Erro: Valor Inválido";
    }
    return "Cálculo Realizado com Sucesso";
}