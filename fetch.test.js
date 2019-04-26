//workind witch async data
const functions = require('./fetch');

//Promise
test('Promise - User fetched name should be Ervin Howell', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Ervin Howell');
    });
});

//Async Await
test('Async Await - User fetched name should be Ervin Howell', async () => {
    expect.assertions(1);
    const fetchedData = await functions.fetchUser();
    expect(fetchedData.name).toEqual('Ervin Howell');
});