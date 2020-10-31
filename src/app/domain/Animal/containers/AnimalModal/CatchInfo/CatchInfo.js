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

const CatchInfo = ({changeValues, values}) => {
  return (
    <>
      <Row gutter={32}>
        <Col span="8">
          <Form.Item
            label="Заказ-наряд №"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={values.catchInfo.catchOrder.orderActNumber}
            onChange={(e) => {
                let newValues =  JSON.parse(JSON.stringify(values));
                newValues.catchInfo.catchOrder.orderActNumber = e.target.value;
                changeValues(newValues);
            }}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="8">
          <Form.Item
            label="Дата"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={values.catchInfo.catchOrder.orderActDate}
            onChange={(e) => {
                let newValues =  JSON.parse(JSON.stringify(values));
                newValues.catchInfo.catchOrder.orderActDate = e.target.value;
                changeValues(newValues);
            }}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span="8">
          <Form.Item
            label="Акт отлова №"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={values.catchInfo.actNumber}
            onChange={(e) => {
                let newValues =  JSON.parse(JSON.stringify(values));
                newValues.catchInfo.actNumber = e.target.value;
                changeValues(newValues);
            }}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="8">
          <Form.Item
            label="Дата"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            
            placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span="16">
          <Form.Item
            label="Адрес места отлова"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={values.generalInfo.color}
            onChange={(e) => {
                let newValues =  JSON.parse(JSON.stringify(values));
                newValues.generalInfo.color = e.target.value;
                changeValues(newValues);
            }}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span="16">
          <Form.Item
            label="Видеофиксация отлова"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export { CatchInfo };
