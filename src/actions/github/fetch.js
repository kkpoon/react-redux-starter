'use strict';

import falcor from "falcor";
import HttpDataSource from "falcor-http-datasource";

const model = new falcor.Model({
  source: new HttpDataSource('/model.json')
});

function fetched(user) {
  return { type: "GITHUB_FETCHED", user };
}

function fetching() {
  return { type: "GITHUB_FETCHING" };
}

export default function(username) {
  return (dispatch) => {
    dispatch(fetching());
    const frm = 0;
    const len = 10;
    model.get(
      [
        "github",
        username,
        ['name', 'created_at']
      ],
      [
        "github",
        username,
        "repos",
        [{from:frm, length:len}],
        ['name', 'html_url', 'stargazers_count', 'forks_count', 'watchers_count']
      ]
    ).then(response => {
      const UserData = response.json.github[username];
      let user = {};
      user.name = UserData.name;
      user.created_at = UserData.created_at;
      user.repos = [];
      for (var i = frm; i < len; i++) {
        user.repos[i] = UserData.repos[i];
      }
      dispatch(fetched(user));
    });
  }
}
