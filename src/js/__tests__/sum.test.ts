import sum from '../sum';

describe('sum', () => {
  test('sum two numbers', () => {
    const res = sum(1, 1);
    expect(res).toBe(2);
  });
});
