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

const NewOwner = ({changeValues, values}) => {
  return (
    <>
      <Row gutter={32}>
        <Col span="10">
          <Form.Item
            label="Юридическое лицо"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={values.newOwner.type === 'юридическое лицо' ? values.newOwner.name: undefined}
            onChange={(e) => {
                let newValues =  JSON.parse(JSON.stringify(values));
                newValues.newOwner.name = e.target.value;
                changeValues(newValues);
            }}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        

        <Col span="4">
          <Form.Item
            label="Телефон"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="10">
          <Form.Item
            label="Адрес"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>

      </Row>

      <Row gutter={32}>
        <Col span="10">
          <Form.Item
            label="ФИО опекунов"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={values.newOwner.type === 'юридическое лицо' ? values.newOwner.curators.map(i=>i.name).join(',') : undefined}
            onChange={(e) => {
                let newValues =  JSON.parse(JSON.stringify(values));

                let parts = (e.target.value || '').split(',')
                let curators = parts.map(i=> ({type: 'куратор', name: i }) )
                
                newValues.newOwner.curators = curators;
                changeValues(newValues);
            }}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="14">
          <Form.Item
            label="Контактные данные"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            
            placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32}>
          <br/><br/>
      </Row>

      <Row gutter={32}>
        <Col span="10">
          <Form.Item
            label="Физическое лицо (Ф.И.О)"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={values.newOwner.type === 'физическое лицо' ? values.newOwner.name: undefined}
            onChange={(e) => {
                let newValues =  JSON.parse(JSON.stringify(values));
                newValues.newOwner.name = e.target.value;
                changeValues(newValues);
            }}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="4">
          <Form.Item
            label="Серия паспорта РФ"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="10">
          <Form.Item
            label="Номер"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>

        

      </Row>

      <Row gutter={32}>
        <Col span="10">
            <Form.Item
            label="Выдан"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="4">
          <Form.Item
            label="дата выдачи"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="10">
          <Form.Item
            label="Адрес регистрации"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>

      </Row>

      <Row gutter={32}>
        <Col span="10">
            <Form.Item
            label="Контактные данные"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export { NewOwner };
