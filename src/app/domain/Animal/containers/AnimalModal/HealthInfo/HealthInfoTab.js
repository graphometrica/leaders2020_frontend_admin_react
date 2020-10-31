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
    Table
  } from "antd";
  
  const { Option } = Select;
  const { Title } = Typography;
  const { TextArea } = Input;
  const { TabPane } = Tabs;
  const { Meta } = Card;

  import { HealthInfo } from './HealthInfo'
  import { Vaccinations } from './Vaccinations'
  import {Endoparasites} from './Endoparasites'
  

  

  const HealthInfoTab = ({changeValues, values}) => {
      return (
          <>          
          <p  style={{marginTop: '12px', marginBottom: '12px'}}><b>Сведения об обработке от экто- и эндопаразитов</b></p>
          <Row>
              <Col span={24}>
                <Endoparasites changeValues={changeValues} values={values}  />           
              </Col>
          </Row>

          <p style={{marginTop: '48px', marginBottom: '12px'}} ><b>Сведения о вакцинации</b></p>
          <Row >
              <Col span={24}>
                <Vaccinations changeValues={changeValues} values={values}  />           
              </Col>
          </Row>

          <p style={{marginTop: '48px', marginBottom: '12px'}} ><b>Сведения о состоянии здоровья</b></p>
          <Row >
              <Col span={24}>
                <HealthInfo changeValues={changeValues} values={values}  />           
              </Col>
          </Row>
          
           
          </>
      )
  }

  export {HealthInfoTab}