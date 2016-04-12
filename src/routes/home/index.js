module.exports = {
  path: "/",
  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, require("./components/home"));
    });
  },
};
