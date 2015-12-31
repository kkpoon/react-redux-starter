jest.dontMock('../index');

const actions = require('../index');

const {
  UPDATE_GREETING,
  CLEAR_GREETING,
  updateGreeting,
  clearGreeting
} = actions;

describe('actions', () => {
  it('should create an action to update greeting message', () => {
    const msg = 'hello1';
    const expected = {type: UPDATE_GREETING, message: msg};
    expect(UPDATE_GREETING).toBe('UPDATE_GREETING');
    expect(updateGreeting(msg)).toEqual(expected);
  });

  it('should create an action to clear greeting message', () => {
    const expected = {type: CLEAR_GREETING};
    expect(CLEAR_GREETING).toBe('CLEAR_GREETING');
    expect(clearGreeting()).toEqual(expected);
  });
});
