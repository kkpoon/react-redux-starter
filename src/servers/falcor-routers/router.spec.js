import { expect } from "chai";
import Router from "./router";

const router = new Router();

describe("falcor router", () => {
  it("should greet with `Hello World`", (done) => {
    const fPath = "greeting";
    const expected = "Hello World";
    router.get([[fPath]]).subscribe(result => {
      expect(result.jsonGraph.greeting).to.equal(expected);
      done();
    });
  });
});
