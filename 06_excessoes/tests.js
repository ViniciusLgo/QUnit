

QUnit.test('Trabalhando com exceções utilizando o throws(...)', function(assert) {
    assert.expect(1);

    assert.throws(function() { 
        verificaSeONumeroEPar('teste');
    },
    
    new Error('O argumento (numero) passado por parâmetro não é um número'), 'Passando uma string lança um erro'
    );

});


/*
Observe que na listagem anterior a função throws precisa dos seguintes parâmetros:

assert.throws(<A função a ser executada>, <Erro esperado>,
<Uma descrição opcional>)

*/