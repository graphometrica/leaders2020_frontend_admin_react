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

const AnimalMovements = ({changeValues, values}) => {
    let income = values.animalMovements.find(i=>(i.type || '').toLowerCase() === 'поступление животного в приют') || {}
    let outcome = values.animalMovements.find(i=>(i.type || '').toLowerCase() !== 'поступление животного в приют') || {}

    console.log(income)
  return (
    <>
      <Row gutter={32}>
        <Col span="8">
          <Form.Item
            label="Дата поступления в приют"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={income.date || ''}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="8">
          <Form.Item
            label="Акт №"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={income.documentNumber || ''}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
          <br/><br/>
      </Row>

      <Row gutter={32}>
        <Col span="8">
          <Form.Item
            label="Дата выбытия из приюта"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={outcome.date || ''}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>

        <Col span="8">
          <Form.Item
            label="Акт №"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={outcome.documentNumber || ''}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>
            

      <Row gutter={32}>
        <Col span="16">
          <Form.Item
            label="Причина выбытия из приюта"
            rules={[{ required: true, message: "Поле обязательное" }]}
          >
            <Input
            value={outcome.additional || ''}
            placeholder="Введите значение" />
          </Form.Item>
        </Col>
      </Row>

    </>
  );
};

export { AnimalMovements };
