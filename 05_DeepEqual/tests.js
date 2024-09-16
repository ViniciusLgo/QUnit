QUnit.test('Testando utilizando a função deepEqual(...)', function(assert) {
    assert.expect(1);
    // 1º Objeto
    var pessoa = new Pessoa('Brendo Felipe','brendo10x@gmail.com');
    // 2º Objeto
    var pessoa2 = new Pessoa('Brendo Felipe','brendo10x@gmail.com');
    
    assert.deepEqual(pessoa, pessoa2, 'Os dois objetos apresentam as mesmas propriedades, valores e prototipos');
});

QUnit.test('Testando utilizando a função notDeepEqual(...)', function(assert) {
    assert.expect(1);
    // 1º Objeto
    var pessoa = new Pessoa('Brendo Felipe','brendo10x@gmail.com');
    // 2º Objeto
    humano.nome = 'Brendo Felipe';
    humano.email = 'brendo10x@gmail.com';
    
    assert.notDeepEqual(pessoa, humano, 'Os dois objetos apresentam as mesmas propriedades e valores, só que são diferentes, pois possuem prototipos diferentes');
        
    });