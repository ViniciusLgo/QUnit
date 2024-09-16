# QUnit Projects

Este repositório contém uma série de projetos relacionados ao **QUnit**, uma popular biblioteca de testes unitários em JavaScript. Abaixo, você encontrará uma descrição de cada uma das 8 pastas que fazem parte deste repositório, abordando tópicos fundamentais sobre o uso de QUnit para criar testes automatizados de qualidade.

## Estrutura do Repositório

Cada pasta é dedicada a um aspecto importante do QUnit. A lista de pastas e suas descrições são:

### 1. Conhecendo Unit 
Este projeto apresenta uma introdução ao QUnit, explicando os conceitos básicos de testes unitários e como começar a escrever testes simples para verificar o comportamento de funções JavaScript. 
- **Objetivo:** Familiarizar-se com a sintaxe e os princípios fundamentais do QUnit.

### 2. Testando Afirmacões
Nesta pasta, exploramos como fazer uso das diferentes afirmativas disponíveis no QUnit, como `assert.ok()` e `assert.notOk()`, para verificar condições e comportamentos no código.
- **Objetivo:** Aprender como validar condições booleanas em diferentes cenários.

### 3. Equal
Este projeto foca na utilização de `assert.equal()` e `assert.notEqual()`, que são usados para comparar valores primitivos de forma simples.
- **Objetivo:** Compreender como comparar valores esperados e reais em testes.

### 4. PropEqual
Aqui, nos concentramos em `assert.propEqual()`, uma ferramenta que permite comparar as propriedades de objetos. Este é um recurso útil quando se quer garantir que os objetos tenham as mesmas propriedades e valores, ignorando a comparação da referência do objeto.
- **Objetivo:** Aprender a fazer comparações profundas de propriedades de objetos.

### 5. DeepEqual
Nesta pasta, usamos `assert.deepEqual()`, que compara objetos e arrays de maneira profunda, verificando todos os níveis das estruturas, garantindo que todos os elementos sejam iguais, não apenas os de nível superior.
- **Objetivo:** Entender como realizar comparações profundas em estruturas de dados complexas.

### 6. Exceções
Este projeto cobre o teste de exceções com QUnit. Usamos `assert.throws()` para verificar se funções lançam as exceções esperadas em determinados cenários.
- **Objetivo:** Aprender a testar o comportamento do código quando são lançadas exceções.

### 7. Testes Assíncronos
Nesta pasta, exploramos os métodos para testes assíncronos usando QUnit, como `assert.async()` para lidar com operações que não são síncronas.
- **Objetivo:** Testar funções que envolvem operações assíncronas, como chamadas de rede ou temporizadores.

### 8. Módulos de Testes
Este projeto introduz o conceito de **módulos de testes** no QUnit, que ajudam a organizar os testes em grupos, permitindo um melhor gerenciamento e estruturação dos casos de testes.
- **Objetivo:** Aprender a organizar seus testes de forma modular para aumentar a clareza e eficiência.

## Ferramenta de Testes

Todos os projetos neste repositório utilizam o **QUnit**, uma biblioteca leve e poderosa que permite escrever testes de maneira rápida e eficaz. Através desses exemplos, você será capaz de:
- Criar casos de testes eficientes;
- Aprender a validar o comportamento de funções de forma assertiva;
- Dominar testes unitários e assíncronos em JavaScript.

## Como Executar os Projetos

Para executar os testes unitários:
1. Clone este repositório usando o GitHub Desktop ou via terminal:
   ```bash = 
   git clone: 