import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider, RouteNode } from 'react-router5'

import {configureRouter} from '@routes/configureRouter'

import appConfig from '@appConfig'
import '@styles/common.scss'
import '@styles/bulma.scss'

import 'antd/dist/antd.css';

import App from './app/App';

const router = configureRouter();

if (appConfig.ENV().mode == 'development') {
  console.log('ENV', appConfig.ENV())
}


ReactDOM.render(
  
    <RouterProvider router={router}>
      <HelmetProvider>
          <Helmet {...appConfig.app.head}/>          
            <RouteNode nodeName="">
              {({ route, previousRoute, router }) => <App route={route}
              previousRoute={previousRoute} router={router}  />}            
            </RouteNode>          
          
      </HelmetProvider>
    </RouterProvider>      
  ,
  document.getElementById('app')
);