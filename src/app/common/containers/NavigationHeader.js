import React from "react";

import { PageHeader, Tag, Button, Statistic, Descriptions, Row, Col } from 'antd';

import './NavigationHeader.scoped.scss'

const NavigationHeader = ({ route, router }) => {
    const reportHandler = (e) => {
        window.open('http://35.245.196.56:8088/superset/dashboard/8/', '_blank');
        
    }
  return (
    <Row>          
          <Col flex="auto">
          <PageHeader
                className="site-page-header"                
                title="Kotik.dog"
                subTitle="Панель администрирования"
                extra={[
                    <Button onClick={reportHandler} type="primary" key="2">Конструктор отчетов</Button>,
                    <Button key="3">Выйти</Button>
                ]}
                />  
          </Col>
      </Row>
  );
};

export { NavigationHeader };
