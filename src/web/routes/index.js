import Layout from '../layouts/default-md-layout';
import Home from './home';
import Feature1 from './feature1';
import Feature2 from './feature2';

const rootRoute = {
  childRoutes: [
    {
      path: "/",
      component: Layout,
      indexRoute: { component: Home },
      childRoutes: [
        { path: "/home", component: Home },
        { path: "/feature1", component: Feature1 },
        { path: "/feature2", component: feature2 }
      ]
    }
  ]
};

export default rootRoute;
