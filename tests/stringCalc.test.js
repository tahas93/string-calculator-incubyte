const {add} = require('../src/stringCalc');

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('signle number returns value', () => {
    expect(add('1')).toBe(1);
});