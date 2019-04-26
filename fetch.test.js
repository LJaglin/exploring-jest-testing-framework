//workind witch async data
const functions = require('./fetch');

//Promise
test('User fetched name should be Ervin Howell', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Ervin Howell');
    });
});