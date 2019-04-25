const funToTest = require('./app');

test('Should return string Hello', () => {
    expect(funToTest.returnHello()).toBe('Hello');
});