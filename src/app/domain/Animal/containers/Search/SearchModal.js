import React, { useState } from 'react';
import { Modal, Button,
    Tabs,Select,Row,Col,Input
} from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

const SearchModal = ({visible, updateFilters, close}) => {  
    const mainRef = React.useRef(null);
    const [values, setValues] = React.useState({type: "1", filter: ""})

    const setFocus = () => {
        if (mainRef && mainRef.current) {
            mainRef.current.focus();
        }
    }

    const changeValueHandler = (value) => {
        setValues({value})
    }

    React.useEffect(() => {
        setFocus()
        
    }, [visible]);

    

  return (
    <Modal
        title="Фильтровать карточкам животных"
        centered
        visible={visible}
        onOk={() => updateFilters(values)}
        onCancel={() => close()}
        width={1000}
      >
          <Row gutter={32}>
              <Col span={8}>
                <Select defaultValue="1"
                 onChange={(e) => {                    
                        setValues({
                            type: e,
                            filter: values.filter
                        })
                        setFocus();
                    }}
                 style={{ width: '100%' }}>
                    <Option value="1">по № карточки</Option>
                    <Option value="2">по № идентификационной метки</Option>
                    <Option value="3">по кличке</Option>                    
                    <Option value="4">по административному округу</Option>
                    <Option value="5">по приюту</Option>
                    <Option value="6">по периоду регистрации карточки</Option>
                    <Option value="7">по виду животного</Option>
                    <Option value="8">по возрасту</Option>
                    <Option value="9">по размеру</Option>
                    <Option value="10">по причине выбытия</Option>
                    <Option value="11">по статусу животного</Option>
                </Select>
              </Col>
              <Col span={16}>
                <Input
                onChange={(e) => {                    
                    setValues({
                        type: values.type,
                        filter: e.target.value
                    })    
                                    
                }}
                ref={mainRef} onKeyDown={(e) => e.keyCode === 13 ? updateFilters(values) : null }
                placeholder="Укажите значение (можно частично)" />
              </Col>
          </Row>
        
      </Modal>
  );
};

export {SearchModal};