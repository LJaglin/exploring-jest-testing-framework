const funToTest = require('./app');

test('Should return string Hello', () => {
    expect(funToTest.returnHello()).toBe('Hello');
});

test('Should add two numbers', () => {
    expect(funToTest.addTwoNum(3, 3)).toBe(6);
});