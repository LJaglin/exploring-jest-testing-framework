const reverse = require('./reverse');

test('reverseStr function exists', () => {
    expect(reverse).toBeDefined();
});

test('String reverses', () => {
    expect(reverse('start')).toEqual('trats');
});

test('String reverses with uppercase', () => {
    expect(reverse('StaRt')).toEqual('trats');
});