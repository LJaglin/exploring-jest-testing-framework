const funToTest = require('./app');

test('Should return string Hello', () => {
    expect(funToTest.returnHello()).toBe('Hello');
});

test('Should add two numbers', () => {
    expect(funToTest.addTwoNum(3, 3)).toBe(6);
    expect(funToTest.addTwoNum(3, 3)).not.toBe(5);
    expect(funToTest.addTwoNum(-2, 2)).toBe(0);
    expect(funToTest.addTwoNum(-2, -2)).toBe(-4);
});