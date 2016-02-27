import Layout from "../layouts/default-md-layout";
import Feature1 from "./feature1";
import Feature2 from "./feature2";

const rootRoute = {
  component: "div",
  childRoutes: [
    { // Default Layout Pages
      component: Layout,
      childRoutes: [
        require("./home"),
        { path: "/feature1", component: Feature1 },
        { path: "/feature2", component: Feature2 }
      ]
    }
  ]
};

export default rootRoute;
