QUnit.test('Testando utilizando a função propEqual(...)', function(assert) {
    assert.expect(1);
    // 1º Objeto
    var pessoa = new Pessoa('Brendo Felipe','brendo10x@gmail.com');
    // 2º Objeto
    humano.nome = 'Brendo Felipe';
    humano.email = 'brendo10x@gmail.com';

    assert.propEqual(pessoa, humano, 'Os dois objetos apresentam as mesmas propriedades e valores');
    
});

QUnit.test('Testando utilizando a função notPropEqual(...)', function(assert) {
    assert.expect(1);
    // 1º Objeto
    var pessoa = new Pessoa('Brendo Felipe','brendo10x@gmail.com');
    // 2º Objeto
    humano.nome = 'Fernando';
    humano.email = 'brendo10x@gmail.com';

    assert.notPropEqual(pessoa, humano, 'Os dois objetos apesar de terem as mesmas propriedades um deles apresenta o nome deferente do outro');
    });