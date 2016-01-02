jest.dontMock('../greeting');

const greeting  = require('../greeting').default;

describe('greeting reducer', () => {

  it('should return a state with new message', () => {
    const action = {type: 'UPDATE_GREETING', message: 'test1'};
    expect(greeting('', action)).toBe('test1');
  });

  it('should return a state with empty message', () => {
    const action = {type: 'CLEAR_GREETING'};
    expect(greeting('test2', action)).toBe('');
  });
  
  it('should do nothing and return the input state when no `action.type` specified', () => {
    const action = {};
    expect(greeting('test3', action)).toBe('test3');
  });

  it('should do nothing and return the input state when unknown action', () => {
    const action = {type: 'FAKE_ACTION'};
    expect(greeting('test4', action)).toBe('test4');
  });

  it('should do nothing and return the input state when action is null', () => {
    const action = null;
    expect(greeting('test5', action)).toBe('test5');
  });

});
