import React from "react";
import { routesContent } from "@routes/configureRouter";

import {NavigationHeader} from '@containers/NavigationHeader';


import {stylesheet} from "typestyle";

const classNames = stylesheet({
  container: {
    margin: 0,
    padding: 0    
  },
  appContent: {
    paddingTop: '22px'
  }
});

const NoRoute = () => {
  return <div>Page not found 404</div>;
};

const App = (props) => {
  const { route, router } = props;

  if (!route) return <NoRoute />;

  const routePageComponent = routesContent[route.name];
  
  if (!routePageComponent) return <NoRoute />;

  return (
    <div>
      <NavigationHeader />
      <div className="container is-fluid">
        {React.createElement(routePageComponent, props)}
      </div>
      
    </div>
  )
  
};

export default App;
