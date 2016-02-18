import { expect } from "chai";
import { graphql } from "graphql";
import HelloSchema from "./hello";

describe("graphql hello schema", () => {
  it("should able to query with { hello }", (done) => {
    const query = "{ hello }";
    const expected = "world";
    graphql(HelloSchema, query).then(result => {
      expect(result.data.hello).to.equal(expected);
      done();
    });
  });

  it("should return error with other query, i.e. { foobar }", (done) => {
    const query = "{ foobar }";

    graphql(HelloSchema, query).then(result => {
      expect(result.errors).to.have.length(1);
      expect(result.errors[0]).instanceof(Error);
      done();
    });
  });
});
