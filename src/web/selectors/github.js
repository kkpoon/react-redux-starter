import { createSelector } from 'reselect';

function getUserStars(repos) {
  if (!repos) return 0;
  return repos.map((r) => r.stargazers_count).reduce((a, b) => a+b);
}

export const userSelector = (state) => state.github.get("user");

export const fetchingSelector = (state) => state.github.get("fetching");

export const starSelector = createSelector(
  userSelector,
  (user) => getUserStars(user.repos)
);

export const profileSelector = createSelector(
  userSelector,
  fetchingSelector,
  starSelector,
  (user, fetching, stars) => {
    return {
      name: user.name || "",
      created_at: user.created_at || "",
      repositories: user.repos || [],
      totalStars: stars,
      loading: fetching
    }
  }
);
