import { expect } from "chai";
import Routers from "./routers";

const routers = new Routers();

describe("falcor routers", () => {
  it("should greet with `Hello World`", (done) => {
    const fPath = "greeting";
    const expected = "Hello World";
    routers.get([[fPath]]).subscribe(result => {
      expect(result.jsonGraph.greeting).to.equal(expected);
      done();
    });
  });
});
