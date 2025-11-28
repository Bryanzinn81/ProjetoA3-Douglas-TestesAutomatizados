
describe("Sistema de Cálculo de Imposto e Desconto", function() {

    //CENÁRIOS DE SUCESSO!!!!!!!!!!!!
    
    describe("1. Cenários de Sucesso", function() {
        
        // Teste 1: Valor alto
        it("deve aplicar 10% desc + 5% imposto para valor R$ 1000", function() {
            // 1000 - 10% = 900. 900 + 5% = 945.00
            expect(calcularValorFinal(1000)).toBe(945.00);
        });

        // Teste 2: Valor baixo
        it("deve aplicar apenas 5% imposto para valor R$ 100", function() {
            // 100 + 5% = 105.00
            expect(calcularValorFinal(100)).toBe(105.00);
        });

        // Teste 3: Valor Decimal
        it("deve calcular corretamente valor quebrado (R$ 600.50)", function() {
            // 600.50 - 10% = 540.45. 540.45 + 5% = 567.4725 -> Arredonda 567.47
            expect(calcularValorFinal(600.50)).toBe(567.47);
        });
        
        // Teste 4: Verificação da mensagem de sucesso
        it("deve retornar status de sucesso para cálculo válido", function() {
            expect(verificarStatus(100)).toEqual("Cálculo Realizado com Sucesso");
        });
    });

    //CENÁRIOS DE BORDA!!!!!!!!!!!

    describe("2. Cenários de Borda (Limite de R$ 500)", function() {

        // Teste 5: Exatamente o limite
        it("deve NÃO dar desconto para o valor exato de R$ 500", function() {
            // 500 + 5% = 525.00 (Sem desconto pois a regra é MAIOR que 500)
            expect(calcularValorFinal(500)).toBe(525.00);
        });

        // Teste 6: Imediatamente acima
        it("deve DAR desconto para o primeiro centavo acima (R$ 500.01)", function() {
            // 500.01 - 10% = 450.009. + 5% = 472.509 -> Arredonda 472.51
            expect(calcularValorFinal(500.01)).toBe(472.51);
        });

        // Teste 7: Imediatamente abaixo
        it("deve NÃO dar desconto para um centavo abaixo (R$ 499.99)", function() {
            // 499.99 + 5% = 524.989 -> Arredonda 524.99
            expect(calcularValorFinal(499.99)).toBe(524.99);
        });
        
        // Teste 8: Limite inferior absoluto (Zero)
        it("deve retornar 0 para valor 0", function() {
            expect(calcularValorFinal(0)).toBe(0);
        });
    });

    //CENÁRIOS DE FALHA

    describe("3. Cenários de Falha", function() {

        // Teste 9: Valor Negativo
        it("deve retornar -1 (erro) para valores negativos", function() {
            expect(calcularValorFinal(-50)).toBe(-1);
        });

        // Teste 10: Mensagem de Erro
        it("deve retornar mensagem de erro correta quando status for -1", function() {
            expect(verificarStatus(-1)).toEqual("Erro: Valor Inválido");
        });
    });

});