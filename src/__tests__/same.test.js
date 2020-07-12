const { hello } = require('..')

describe("index test 222222", () => {
  test('for zero', () => {
    const res = hello(0);
    expect(res).toEqual(5);
  });

  test('for non zero', () => {
    const res = hello(1);
    expect(res).toEqual(6);
  })

  test('for non zero', () => {
    const res = hello(0);
    expect(res).toEqual(6);
  })

})