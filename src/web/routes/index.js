import Feature1 from "./feature1";
import Feature2 from "./feature2";

const rootRoute = {
  component: "div",
  childRoutes: [
    require("./home"),
    { path: "/feature1", component: Feature1 },
    { path: "/feature2", component: Feature2 }
  ]
};

export default rootRoute;
