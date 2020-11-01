import React from "react";

import logomin from '@images/logo.svg'

import { PageHeader, Tag, Button, Statistic, Descriptions, Row, Col, Alert } from 'antd';

import './NavigationHeader.scoped.scss'

import {Store} from '@Store'

const LogOut = (router, stay) => {
    
    // let allCookies = document.cookie.split(';'); 
    // console.log('clear all cookies', allCookies)
            
    // for (var i = 0; i < allCookies.length; i++)  {
    //     document.cookie = allCookies[i] + "=;expires=" 
    //     + new Date(0).toUTCString(); 
    // }

    if (!stay) {
        Store.update((s) => ({
            userInfo: null
      }));
        setTimeout(() => {
            router.navigate("AuthPage", null, {reload: true})
        })
    }
       
}

const reportHandler = (e) => {
    window.open('http://35.245.196.56:8088/superset/dashboard/8/', '_blank');        
}

const getExtraButtons = (router, userInfo) => {

    if (userInfo) {
        return [
                <Button key="1" onClick={reportHandler} className="reports-button">Конструктор отчетов</Button>,
                <Button key="2" onClick={ () => LogOut(router)}>Выйти</Button>
        ]
    }
    
}

const getUserText = (userInfo) => {
    if (!userInfo) return '';
    return userInfo.level;
}

const Authenticated = ({userInfo, router, route}) => {
    return <PageHeader
                router={router}
                route={route}
                className="site-page-header"                
                title={
                    <>
                    <img src={logomin} style={{height: '38px', marginRight: '12px'}} alt="Kotik.dog" />
                    <span style={{color: 'rgb(41.958618%,32.159424%,30.979919%)'}}>Kotik.dog</span>
                    </>
                }
                subTitle={getUserText(userInfo)}
                extra={ getExtraButtons(router, userInfo) }
                />
}

const NonAuthenticated = () => {
    return <div style={{marginTop: '24px'}}></div>
}

const NavigationHeader = ({ route, router }) => {
    
  const { userInfo } = Store.useState((s) => ({
        userInfo: s.userInfo
  }));    

    if (route.name === 'AuthPage') {
        LogOut(router, true);
        return <Row>          
                <Col flex="auto">
                    <NonAuthenticated />            
                </Col>
            </Row>
                
    }else {
            return <Row>          
                <Col flex="auto">
                    <Authenticated userInfo={userInfo} route={route} router={router}/>            
                </Col>
            </Row>
        
    }

};

export { NavigationHeader };
