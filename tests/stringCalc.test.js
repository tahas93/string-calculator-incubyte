const {add} = require('../src/stringCalc');

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('signle number returns value', () => {
    expect(add('1')).toBe(1);
});

test('two comma-seperated numbers', () => {
    expect(add('1,2')).toBe(3);
});

test('multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
});

test('new line allowed between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('support single delimiter between numbers', () => {
    expect(add('//;\n1,2')).toBe(3);
});

test('support multi delimiter between numbers', () => {
  expect(add('//;\n1;2;3')).toBe(6);
});

test('negative numbers not allowed', () => {
    expect(()=> add('-1')).toThrow('negative numbers not allowed -1');
});