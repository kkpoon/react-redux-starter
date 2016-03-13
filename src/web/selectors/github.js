/**
 * github selector
 * @module ./selectors/github
 *
 */

import { createSelector } from "reselect";

/**
 * get the total number of stars in user's repositories
 * @param {Object[]} repos - the array of repositories
 * @return {number} the number of stars
 */
function getUserStars(repos) {
  if (!repos) return 0;
  return repos.map((r) => r.stargazers_count).reduce((a, b) => a+b);
}

/**
 * a selector to get github user object from state
 * @param {object} state - the global state object
 * @return {object} the github user object
 */
export const userSelector = (state) => state.github.get("user");

/**
 * a selector to get github user object fetching status
 * @param {object} state - the global state object
 * @return {boolean} the github user object fetching status
 */
export const fetchingSelector = (state) => state.github.get("fetching");

/**
 * a selector to get github user total number of repositories stars
 * @param {object} state - the global state object
 * @return {number} the number of stars
 */
export const starSelector = createSelector(
  userSelector,
  (user) => getUserStars(user.repos)
);

/**
 * a selector for `containers/github`
 * @param {object} state - the global state object
 * @return {object} the props object for github container
 */
export const githubContainerSelector = createSelector(
  userSelector,
  fetchingSelector,
  starSelector,
  (user, fetching, stars) => {
    return {
      name: user.name || "",
      created_at: user.created_at || "",
      repositories: user.repos || [],
      totalStars: stars,
      loading: fetching,
    };
  }
);
