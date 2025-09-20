const {add} = require('../src/stringCalc');

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});