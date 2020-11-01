import React from "react";
import "./AuthPage.scoped.scss";


import { Row, Col, Form, Input, Button, Typography,Image, Alert, Table } from 'antd';

import logo from '@images/kotok_dog.png'

const { Title } = Typography;

import {Store, auth} from '@Store'

const AuthPage = ({ route, router
     }) => {

        const { userInfo, isFetching } = Store.useState((s) => ({
            userInfo: s.userInfo,
            isFetching: s.isFetching
        }));   
    
        const [username, setUsername] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [inputErrorText, setInputErrorText] = React.useState('');        

        const authHandler = async(e) => {
            if (username && password) {
                await auth.run({username, password}).then( res => {
                    //console.log('xx', res)
                    if (res.error) {
                        setInputErrorText('Некорректный логин или пароль');
                        setPassword('')
                    }else {
                        router.navigate("AnimalCardsPage", null, {reload: true})
                    }                 
                })
            }            
        }

        const dataSource = [
            {
              key: '1',
              login: 'shelter1',              
              password: 'shelter1',
              text: 'сотрудник приюта 1'
            },
            {
                key: '2',
                login: 'shelter2',              
                password: 'shelter2',
                text: 'сотрудник приюта 2'
            }
        ]

        const columns = [
            {
                title: 'тип учетной записи',
                dataIndex: 'text'                
            },
            {
                title: 'логин',
                dataIndex: 'login'
            },
            {
                title: 'пароль',
                dataIndex: 'password'
            }
        ]
        
  return (
    <div>
        <Row justify="space-around" align="middle">            
            <Col span={8}></Col>
            <Col span={8}>
                                
                <Row justify="center">
                            <Col span={24} style={{textAlign: 'center'}}>
                                <Form.Item>
                                    <img style={{width: '300px'}} src={logo} />  
                                </Form.Item>                            
                            </Col>
                        </Row> 
                        <Row gutter={32}>       
                                                
                        <Col span={24}>
                            <Form.Item>
                                <Input
                                value={username} onChange={(e) => setUsername(e.target.value) }
                                 size="large" placeholder="Логин" />
                            </Form.Item>                            
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <Input
                                type="password"
                                value={password} onChange={(e) => setPassword(e.target.value) }
                                size="large" placeholder="Пароль" />
                            </Form.Item>                            
                        </Col>

                        <Col span={24}>
                        {!!inputErrorText ? <Alert style={{marginBottom: '16px'}} message={inputErrorText} type="error" /> : undefined}
                        </Col>
                </Row>
                <Row gutter={32}>
                    <Col span={24}>
                        <Button
                         onClick={authHandler}
                         disabled={isFetching}
                         size="large" style={{width: '100%'}} type="primary">Войти</Button>
                    </Col>
                </Row>

                <Row gutter={32} style={{marginTop: '36px'}}>
                    <Col span={24}>
                        <b>Для демонстрации используйте следующие учетные записи:</b>
                    </Col>
                    <Col span={24} >
                        <Table style={{marginTop: '16px'}}
                        
                        pagination={false}
                        dataSource={dataSource} columns={columns} />
                    </Col>

                    
                </Row>
                

                

            </Col>
            <Col span={8}></Col>
        </Row> 
    </div>
  );
};

const AuthPageWrapper = ({route, router}) => {
    // const { data, isFetching } = AnimalStore.useState((s) => ({
    //     data: s.data,        
    //     isFetching: s.isFetching        
    //   }));
      
    // const [downloadFinished, downloadResult] = getAll.useBeckon({value: 'getAll'});

    // if (!downloadFinished) {    
    //     return <div>Loading, please wait...</div>;
    // }

    // if (downloadResult.error) {
    //     return <div>ERROR: {downloadResult.message}</div>;
    // }

    // const handlers = {
    //     getAllHandler: async () => {    
    //       await getAll.run({ value: "wtf param" });    
    //     }
    // }

  return <AuthPage route={route} router={router} />;
};

export { AuthPageWrapper as AuthPage };
