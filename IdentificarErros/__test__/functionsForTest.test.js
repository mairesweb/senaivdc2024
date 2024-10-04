const { verificarSePodeAposentar, calcularIMC } = require('../functionsForTest');

describe('Testa a função verificarSePodeAposentar', () => {
  it('Retorna true para homem com 63 anos e 35 anos de contribuição', () => {
    expect(verificarSePodeAposentar(63, 35, 'masculino')).toBe(true);
  });
  it('Retorna false para homem com 62 anos e 35 anos de contribuição', () => {
    expect(verificarSePodeAposentar(62, 35, 'masculino')).toBe(false);
  });
  it('Retorna true para mulher com 58 anos e 30 de contribuição', () => {
    expect(verificarSePodeAposentar(58, 30, 'feminino')).toBe(true);
  });
  it('Retorna false para mulher com 57 anos e 30 de contribuição', () => {
    expect(verificarSePodeAposentar(57, 30, 'feminino')).toBe(false);
  });
});