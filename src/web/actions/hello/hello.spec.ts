/// <reference path="../../../../typings/main.d.ts" />

import { expect } from "chai";

import updateHello from "./update";
import clearHello from "./clear";

describe("hello actions", () => {
  it("should create an action to update hello message", () => {
    const msg = "hello1";
    const expected = {type: "UPDATE_HELLO", message: msg};
    expect(updateHello(msg)).to.deep.equal(expected);
  });

  it("should create an action to clear hello message", () => {
    const expected = {type: "CLEAR_HELLO"};
    expect(clearHello()).to.deep.equal(expected);
  });
});
