import React from "react";
import { routesContent } from "@routes/configureRouter";

import { Row, Col, Divider } from 'antd';

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

      <Row>
          <Col flex="25px">&nbsp;</Col>
          <Col flex="auto" style={{marginTop: '25px'}}>
            {React.createElement(routePageComponent, props)}
          </Col>
          <Col flex="25px">&nbsp;</Col>
      </Row>
      {/* <div className="container is-fluid">
        
      </div> */}
      
    </div>
  )
  
};

export default App;
