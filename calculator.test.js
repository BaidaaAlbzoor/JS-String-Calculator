const add = require('./calculator.js');


test('return 0 if input is ""', () => {
    expect(add("")).toBe(0);
});


test('return 1 if input is "1"', () => {
    expect(add("1")).toBe(1);
});


test('return 3 if input is "1,2"', () => {
    expect(add("1,2")).toBe(3);
});


test('handle unknown amount of numbers', () => {
    expect(add("1,2,3")).toBe(6);
});


test('handle new lines between numbers (instead of commas)', () => {
    expect(add("1\n2,3")).toBe(6);
});


test('throw an exception if input is a negative number', () => {
    expect(() => {
        add("-1,2");
    }).toThrow();
});