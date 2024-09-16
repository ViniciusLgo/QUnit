QUnit.test("Testes assíncronos com QUnit", function (assert) {
    expect(4);
    
    var async1 = assert.async();
    window.setTimeout(function () {
    assert.strictEqual(obterNumeroMaior(), -Infinity, "Nenhum parâmetro"); // 4º teste que será executado
    async1(); // chamada assíncrona
    }, 4000); // Será executado quando for 4 segundos

    var async2 = assert.async();
    window.setTimeout(function () {
    assert.strictEqual(
        obterNumeroMaior(1, 1, 2),2, "Todos os números positivos"); // 3º teste que será executado
    
        async2(); // chamada assíncrona
        }, 3000); // Será executado quando for 3 segundos

    var async3 = assert.async();
    window.setTimeout(function () {
    assert.strictEqual(obterNumeroMaior(-64, 5, 3, 23),23, "Números positivos e negativos"); // 2º teste que será executado
    async3(); // chamada assíncrona
    }, 2000); // Será executado quando for 2 segundos

    var async4 = assert.async();
    window.setTimeout(function () {
    assert.strictEqual(obterNumeroMaior(-11, -1, -5), -1, "Todos os números negativos" ); // 1º teste que será executado
    async4();
    }, 1000); // Será executado quando for 2 segundos
});
