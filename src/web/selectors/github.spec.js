import { expect } from "chai";

import Immutable from "immutable";

import {
  userSelector,
  fetchingSelector,
  starSelector,
  githubContainerSelector
} from "./github";

describe("github selectors", () => {
  const user = {
    name: "test1",
    created_at: "2015-07-12T00:00:01Z",
    repos: [
      {
        stargazers_count: 3
      },
      {
        stargazers_count: 0
      },
      {
        stargazers_count: 1
      }
    ]
  };
  const fetching = false;
  const state = { github: Immutable.Map({ user, fetching }) };

  describe("user selector", () => {
    it("should return an user with name, created_at and repositories", () => {
      expect(userSelector(state)).to.deep.equal(user);
    });
  });

  describe("fetching selector", () => {
    it("should return correct fetching status", () => {
      expect(fetchingSelector(state)).to.be.false;
    });
  });

  describe("star selector", () => {
    it("should return correct number of user repositories stars", () => {
      expect(starSelector(state)).to.equal(4);
    });
  });

  describe("container selector", () => {
    it("should return a github user profile for github container", () => {
      expect(githubContainerSelector(state)).to.deep.equal({
        name: user.name,
        created_at: user.created_at,
        repositories: user.repos,
        totalStars: 4,
        loading: false
      });
    });
  });
});
