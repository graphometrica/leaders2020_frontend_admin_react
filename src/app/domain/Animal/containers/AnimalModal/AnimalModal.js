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
} from "antd";

const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Meta } = Card;

import { TopPart } from "./TopPart";
import { GeneralInfo } from "./GeneralInfo/GeneralInfo";
import { CatchInfo } from "./CatchInfo/CatchInfo";
import { NewOwner } from "./NewOwner/NewOwner";
import {AnimalMovements} from './AnimalMovements/AnimalMovements'

import {HealthInfoTab} from './HealthInfo/HealthInfoTab'

import "./AnimalModal.scoped.scss";

function callback(key) {
  console.log(key);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


const AnimalModal = ({ values, changeValues,  hideModal}) => {
  //console.log(values)
  return (
    <>
      <Drawer
        placement={"right"}
        closable={true}
        width={"70%"}
        onClose={hideModal}
        visible={!!values}
      >
        <Form layout="vertical" hideRequiredMark>
          <TopPart values={values} changeValues={changeValues} />

          <Row>
            <Col span={24}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Основные сведения" key="1">
                  <GeneralInfo values={values} changeValues={changeValues} />
                </TabPane>
                <TabPane tab="Сведения об отлове" key="2">
                  <CatchInfo values={values} changeValues={changeValues} />
                </TabPane>
                <TabPane tab="Сведения о новых владельцах" key="3">
                  <NewOwner values={values} changeValues={changeValues} />
                </TabPane>
                <TabPane tab="Движение животного" key="4">
                  <AnimalMovements values={values} changeValues={changeValues} />
                </TabPane>
                <TabPane tab="Медицинская информация" key="5">
                  <HealthInfoTab values={values} changeValues={changeValues} />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

const AnimalModalWrapper = (props) => {
  

  return <AnimalModal {...props} />;
};

export { AnimalModalWrapper as AnimalModal };
