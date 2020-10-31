import React from "react";

import {
    Row,
    Col,
    Divider,
    Select,
    Drawer,
    Space,
    Form,
    Input,
    DatePicker,
    Typography,
    Radio,
    Image,
    Tabs,
    Checkbox,
    Card,
    Button
  } from "antd";
  
  const { Option } = Select;
  const { Title } = Typography;
  const { TextArea } = Input;
  const { TabPane } = Tabs;
  const { Meta } = Card;


  const LeftPart = ({changeValues, values}) => {

    
      return (
          <>
          <Col span={8}>
          <Row>
            <Col span={24}>
              <Card
                className="is-social"
                style={{ width: 350 }}
                cover={
                  <img
                    alt=""
                    src="https://drive.google.com/u/0/uc?id=1BI9zifsdwHq0qra11ZOlfT_ulgph8EK8&export=download"
                  />
                }
              >
                <Meta
                  title={
                    <Checkbox
                    checked={!!values.additionalInfo.isSocialized}
                    onChange={(e) => {
                        let newValues =  JSON.parse(JSON.stringify(values));
                        newValues.additionalInfo.isSocialized = e.target.checked;
                        changeValues(newValues);
                    }}
                    >
                      <b>социализировано</b>
                    </Checkbox>
                  }
                  description={
                    <span style={{ paddingLeft: "24px" }}>
                      готово к пристройству
                    </span>
                  }
                />
              </Card>
              
            </Col>
          </Row>
        </Col>
          </>
      )
  }

  export {LeftPart}