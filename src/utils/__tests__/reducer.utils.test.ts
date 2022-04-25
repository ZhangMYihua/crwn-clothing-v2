import { createAction } from '../reducer/reducer.utils';

describe('reducer utils', () => {
  const testType = 'test';

  test('createAction generates an object with type value', () => {
    expect(createAction(testType).type).toBe(testType);
  });

  test('createAction generates an object with type value and payload when passed', () => {
    const testPayload = ['test1', 'test2'];
    expect(createAction(testType, testPayload).type).toBe(testType);
    expect(createAction(testType, testPayload).payload).toBe(testPayload);
  });
});
