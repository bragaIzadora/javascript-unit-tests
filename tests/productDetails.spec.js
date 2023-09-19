const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array', () => {
    const result = productDetails('firstProduct', 'secondProduct');
    expect(Array.isArray(result)).toBe(true);
  });
  it('Verifica se o array tem dois itens dentro', () => {
    // Teste se o array retornado pela função contém dois itens dentro.
    const result = productDetails('firstProduct', 'secondProduct');
    expect(result.length).toBe(2);
  });
  it('Verifica se os dois itens dentro do array são objetos', () => {
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const result = productDetails('firstProduct', 'secondProduct');
    for (let index = 0; index < result.length; index += 1) {
      expect(typeof result[index]).toBe('object');
    }
  });
  it('Verifica se dois parametros diferentes tem seus objetos retornados diferentes', () => {
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const result = productDetails('firstProduct', 'secondProduct');
    const [objectFirstProduct, objectSecondProduct] = result;
    expect(objectFirstProduct).not.toBe(objectSecondProduct);
  })
  // Teste se os dois productIds terminam com 123.
});
