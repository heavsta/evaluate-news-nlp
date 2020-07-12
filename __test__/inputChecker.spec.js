import { checkForInput } from '../src/client/js/inputChecker'

describe('Test to check if the input is correctly checked', () => {
    test('Checks if a simple string input is valid', () => {
        const input = "test";
        expect(checkForInput(input)).toBe(true);
    })
    test('Checks if a url is valid', () => {
        const url = "https://duckduckgo.com/";
        expect(checkForInput(url)).toBe(true);
    })
})