

QUnit.test('Testes utilizando as funções equal(...) e notEqual(...)', function(assert) {
    assert.expect(6);
    //Com equal()
    assert.equal(multiplicar(2, 2), 4, 'Multiplicação de dois números positivos');
    assert.equal(multiplicar(-2, -2), 4, 'Multiplicação de dois números negativos');
    assert.equal(multiplicar(-2, 2), -4, 'Multiplicação de um número negativo e um número positivo');
    assert.equal(multiplicar(2, 0), 0, 'Multiplicação de um número positivo e um número neutro');
    //Com notEqual()
    assert.notEqual(multiplicar(1, 1), 0, 'Multiplicação de dois número positivo iguais');
    assert.notEqual(multiplicar(2, 3), 0, 'Multiplicação de um número positivo e um número positivo');
});