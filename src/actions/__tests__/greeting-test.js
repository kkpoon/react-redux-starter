jest.dontMock('../greeting');

const greeting = require('../greeting');

const { updateGreeting, clearGreeting } = greeting;

describe('actions', () => {
  it('should create an action to update greeting message', () => {
    const msg = 'hello1';
    const expected = {type: 'UPDATE_GREETING', message: msg};
    expect(updateGreeting(msg)).toEqual(expected);
  });

  it('should create an action to clear greeting message', () => {
    const expected = {type: 'CLEAR_GREETING'};
    expect(clearGreeting()).toEqual(expected);
  });
});
