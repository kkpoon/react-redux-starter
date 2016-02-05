expect = require("chai").expect

updateSay = require "./update"
clearSay = require "./clear"

describe 'say actions', () =>
  it 'should create an action to update say message', () =>
    msg = 'hello1'
    expected = {type: 'UPDATE_SAY', message: msg}
    expect(updateSay(msg)).to.deep.equal(expected)

  it 'should create an action to clear say message', () =>
    expected = {type: 'CLEAR_SAY'}
    expect(clearSay()).to.deep.equal(expected)
