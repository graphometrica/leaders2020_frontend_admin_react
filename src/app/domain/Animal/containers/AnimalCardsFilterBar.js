import React from "react";

import { Row, Col, Divider, Select, Form } from "antd";

const { Option } = Select;

const children = [
    <Option key="1">кошка</Option>,
    <Option key="2">собака</Option>

];

function handleChange(value) {
  console.log(`selected ${value}`);
}

import animalData from "@domain/Animal/data/animal_card.json";

const AnimalCardsFilterBar = ({ data }) => {
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>

            <Form.Item
                label="Вид животных"
                rules={[{ required: true, message: "Поле обязательное" }]}
            >
                <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}   
                placeholder="Вид животных"
                defaultValue={["собака", "кошка"]}
                onChange={handleChange}
            >
                {children}
            </Select>
            </Form.Item>
          
        </Col>

        <Col className="gutter-row" span={1}>
        </Col>

        <Col className="gutter-row" span={6}>

            <Form.Item
                label="Возраст"             
            >
                <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}   
                placeholder="Возраст"
                defaultValue={["11", "22", "3"]}
                onChange={handleChange}
            >
                {[
                    <Option key="11">3</Option>,
                    <Option key="22">5</Option>,
                    <Option key="3">7</Option>

                ]}
            </Select>
            </Form.Item>
          
        </Col>

        <Col className="gutter-row" span={1}>
        </Col>

        <Col className="gutter-row" span={6}>

            <Form.Item
                label="Возраст"             
            >
                <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}   
                placeholder="Вольер"
                defaultValue={["11", "3"]}
                onChange={handleChange}
            >
                {[
                    <Option key="11">1</Option>,
                    <Option key="22">2</Option>,
                    <Option key="3">3</Option>

                ]}
            </Select>
            </Form.Item>
          
        </Col>

      </Row>
    </>
  );
};


          {/* собака/кошка
        возраст
        пол
        цвет
        шерсть
        уши
        хвост
        размер
        вольер */}

const AnimalCardsFilterBarWrapper = (props) => {
  const isFetching = false;

  return <AnimalCardsFilterBar data={{}} isFetching={isFetching} />;
};

export { AnimalCardsFilterBarWrapper as AnimalCardsFilterBar };
