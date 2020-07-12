import { handleSubmit } from '../src/client/js/formHandler';

describe('Tests handleSubmit', () => {
  test('Checks if handleSubmit is a function', async () => {
    expect(typeof handleSubmit).toBe("function");
});
  test('Checks if handleSubmit function is defined', () => {
      expect(handleSubmit).toBeDefined();
  });
});