import Layout from "./layout/layout";

const rootRoute = {
  component: Layout,
  childRoutes: [
    require("./home"),
  ],
};

export default rootRoute;
