const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
  });
  it('verifica se o valor da chave fetchMenu do objeto retornado pela função é uma função', () => {
    const cardapio = createMenu();
    expect(typeof cardapio.fetchMenu).toBe('function');
  })
  it('verifica se o objeto retornado tem duas chaves sendo elas food e drinks', () => {
    const vObj = createMenu({food: {}, drinks: {}}).fetchMenu();
    const chaves = Object.keys(vObj);
    expect(chaves.length).toBe(2);
    expect(chaves).toContain('food');
    expect(chaves).toContain('drinks');
  });
  it('verifica se o menu passado pela função é identico ao recuperado', () => {
    const result = createMenu({ food: {}, drinks: {} }).fetchMenu();
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual(result);
  });
  it('verifica array vazio consumption', () => {
    const result = createMenu({ food: {}, drinks: {} }).consumption;
    expect(result).toEqual([]);
  });
  it('chave order', () => {
    const result = createMenu({ food: {}, drinks: {} });
    const produtoIndisponivel = result.order('teste');
    expect(produtoIndisponivel).toBe('Item indisponível');
    expect(result.consumption).toEqual([]);
  });
  it('verifica se ao add tres pedidos eles vão para o consumption', () => {
    const result = createMenu({
      food: {
        pastel: {},
        salgado: {},
      },
      drinks: {
        refri: {},
        suco: {},
      },
    });
    result.order('pastel');
    result.order('refri');
    result.order('suco');
    expect(result.consumption).toEqual(['pastel', 'refri', 'suco']);
  });
  it('verifica pedidos repitidos', () => {
    const result = createMenu({
      food: {
        pastel: {},
        salgado: {},
      },
      drinks: {
        refri: {},
        suco: {},
      },
    });
    result.order('salgado');
    expect(result.consumption).toEqual(['salgado']);
    result.order('salgado');
    expect(result.consumption).toEqual(['salgado', 'salgado']);
  })
});
