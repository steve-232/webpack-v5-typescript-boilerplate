import sum from '../sum';

describe('sum', () => {
  test('sum two numbers', () => {
    const res = sum(1, 1);
    expect(res).toBe(2);
  });

  test('return an error, if arguments are not passed', () => {
    expect(() => sum()).toThrow(new Error('undefined is not valid number'));
  });

  test('return an error, if the first argument is not number', () => {
    expect(() => sum('1', 1)).toThrow(new Error('1 is not valid number'));
  });

  test('return an error, if the second argument is not number', () => {
    expect(() => sum(2, '2')).toThrow(new Error('2 is not valid number'));
  });
});
