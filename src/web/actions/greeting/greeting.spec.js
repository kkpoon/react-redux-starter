import { expect } from "chai";

import updateGreeting from "./update";
import clearGreeting from "./clear";

describe("greeting actions", () => {
  it("should create an action to update greeting message", () => {
    const msg = "hello1";
    const expected = {type: "UPDATE_GREETING", message: msg};
    expect(updateGreeting(msg)).to.deep.equal(expected);
  });

  it("should create an action to clear greeting message", () => {
    const expected = {type: "CLEAR_GREETING"};
    expect(clearGreeting()).to.deep.equal(expected);
  });
});
