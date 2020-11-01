import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider, RouteNode } from 'react-router5'

import {configureRouter} from '@routes/configureRouter'

import appConfig from '@appConfig'
import '@styles/common.scss'
import '@styles/bulma.scss'

import 'antd/dist/antd.css';

import { Spin } from 'antd';

import {Store, whoami, downloadDicts} from '@Store';

import App from './app/App';

import axios from 'axios';
//axios.defaults.withCredentials = true

const router = configureRouter();

if (appConfig.ENV().mode == 'development') {
  console.log('ENV', appConfig.ENV())
}


const Guard = ({children, route, previousRoute, router}) => {
  const { isFetching, userInfo } = Store.useState((s) => ({
    userInfo: s.userInfo,    
    isFetching: s.isFetching,    
  }));

  const [dictsDownloaded, setDictsDownloaded] = React.useState(false)

  React.useEffect( () => {
    if (!userInfo && route.name !== 'AuthPage') {
      setTimeout(() => {
        router.navigate("AuthPage", null, {reload: false})
      })
      
    }
  }, [route.name, userInfo])

  // React.useEffect( () => {
  //   if (!dictsDownloaded) {
  //     downloadDicts.run().then(res => res.state === 200 ? setDictsDownloaded(true): null);
  //     return <Spin />
  //   }
  // }, [dictsDownloaded])

  return children;
  
}


ReactDOM.render(
  
    <RouterProvider router={router}>
      <HelmetProvider>
          <Helmet {...appConfig.app.head}/>          
            <RouteNode nodeName="">
              {({ route, previousRoute, router }) => <Guard route={route} router={router}><App route={route}
              previousRoute={previousRoute} router={router}  /></Guard>}            
            </RouteNode>          
          
      </HelmetProvider>
    </RouterProvider>      
  ,
  document.getElementById('app')
);