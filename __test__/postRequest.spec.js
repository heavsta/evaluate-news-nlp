import { postRequest } from '../src/client/js/postRequest'

//using fetch-mock to mock our fetch call
const fetchMock = require('fetch-mock')

describe('Test post route', () => {
    test('Checks if postRequest  ', async () => {
        fetchMock.post('https://jestjs.io/', { polarity: "neutral" });
        const response = await postRequest('https://jestjs.io/');

        expect.assertions(1);
        expect(response.polarity).toEqual('neutral');
    })
})