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

test('Should not add strings', () => {
    expect(funToTest.addTwoNum(3, '3')).toBe(null);
});

test('Should not add objects', () => {
    expect(funToTest.addTwoNum(3, {})).toBe(null);
});

test('Should not add arrays', () => {
    expect(funToTest.addTwoNum(3, [])).toBe(null);
});

//Test function that removes all s names from arrays
test('Should remove all s names', () => {
    const names = ['Scott', 'Jack', 'Stacy', 'Peter'];
    expect(funToTest.removeSNames(names)).not.toContain('Scott');
});

test('Should not remove other names', () => {
    const names = ['Mark', 'Stephan', 'Mike'];
    expect(funToTest.removeSNames(names)).toContain('Mark');
    expect(funToTest.removeSNames(names)).toContain('Mike');
});

test('Should account for case', () => {
    const names = ['Scott', 'Mark', 'stephan', 'Matthew'];
    expect(funToTest.removeSNames(names)).not.toContain('Scott');
    expect(funToTest.removeSNames(names)).not.toContain('stephan');
});

test('Should return null', () => {
    expect(funToTest.isNull()).toBe(null);
});



