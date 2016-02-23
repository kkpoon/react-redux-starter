import { expect } from 'chai';

import greeting from "./greeting";

describe('greeting reducer', () => {
  it('should return a state with new message', () => {
    const action = {type: 'UPDATE_GREETING', message: 'test1'};
    expect(greeting('', action)).to.equal('test1');
  });

  it('should return a state with empty message', () => {
    const action = {type: 'CLEAR_GREETING'};
    expect(greeting('test2', action)).to.equal('');
  });

  it('should return the input state when no `action.type` specified', () => {
    const action = {};
    expect(greeting('test3', action)).to.equal('test3');
  });

  it('should return the input state when unknown action', () => {
    const action = {type: 'FAKE_ACTION'};
    expect(greeting('test4', action)).to.equal('test4');
  });

});
