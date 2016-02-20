var Router = require('falcor-router');
var request = require("request");
var Rx = require("rx");
var Observable = Rx.Observable;
var ObservableRequest = Observable.fromNodeCallback(request);

module.exports = Router.createClass([
  {
    // match a request for the key "greeting"
    route: "greeting",
    // respond with a PathValue with the value of "Hello World."
    get: function(pathSet) {
      return { path: ["greeting"], value: "Hello World" };
    }
  },
  {
    route: "github.[{keys:userIds}].['name','created_at']",
    get: function(pathSet) {
      var userIds = pathSet.userIds;
      return Observable.fromArray(userIds).flatMap(function(uid) {
        return ObservableRequest({
          url: "https://api.github.com/users/" + uid,
          headers: {
            "User-Agent": "kkpoon/react-redux-boilerplate"
          }
        }).flatMap(function(info) {
          var user = JSON.parse(info[1]);
          return Observable.fromArray(pathSet[2])
            .map(function(key) {
              return { path: ["github", uid, key], value: user[key] };
            });
        });
      });
    }
  },
  {
    route: "github.[{keys:userIds}].repos.[{integers:indices}].[{keys:repoProps}]",
    get: function(pathSet) {
      var userIds = pathSet.userIds;
      return Observable.fromArray(userIds).flatMap(function(uid) {
        return ObservableRequest({
          url: "https://api.github.com/users/" + uid + "/repos",
          qs: { sort: "pushed" },
          headers: { "User-Agent": "kkpoon/react-redux-boilerplate" }
        }).flatMap(function(info) {
          var repos = JSON.parse(info[1]);
          return Observable.fromArray(pathSet.indices).flatMap(function(i) {
            return Observable.fromArray(pathSet.repoProps).map((key) => {
              return {
                path: ["github", uid, "repos", i, key],
                value: repos[i][key]
              };
            });
          });
        });
      });
    }
  }
]);
