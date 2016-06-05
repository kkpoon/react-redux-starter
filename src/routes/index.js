import Layout from "../components/layout";

const rootRoute = {
  component: Layout,
  childRoutes: [
    require("./home"),
  ],
};

export default rootRoute;
