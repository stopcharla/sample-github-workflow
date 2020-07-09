const { hello } = require('..')

describe("index test", () => {
  test('for non zero', () => {
    const res = hello(0);
    expect(res).toEqual(5);
  })
})