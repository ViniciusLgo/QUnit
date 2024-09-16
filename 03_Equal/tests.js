

QUnit.test('Testes utilizando as funções strictEqual(...) e notStrictEqual(...)', function(assert) {assert.expect(2);
   //Com strictEqual()
    assert.strictEqual(multiplicar(-2, 2), -4, 'Multiplicação de um negativo e um número positivo é igual a um número inteiro negativo');
   //Com notStrictEqual()
    assert.notStrictEqual(multiplicar(-2, 2), '-4', 'Multiplicação de um negativo e um número positivo não é igual a uma string');
});