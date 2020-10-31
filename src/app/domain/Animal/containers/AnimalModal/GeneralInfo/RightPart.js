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
    Card
  } from "antd";
  
  const { Option } = Select;
  const { Title } = Typography;
  const { TextArea } = Input;
  const { TabPane } = Tabs;
  const { Meta } = Card;


  const RightPart = ({changeValues, values}) => {
      return (
          <>

        <Col span={16}>
          <Row gutter={32}>
            <Col span={12}>
              <Form.Item
                label="Вид животного"
                rules={[{ required: true, message: "Поле обязательное" }]}
              >
                <Radio.Group
                 value={values.generalInfo.type}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.generalInfo.type = e.target.value;
                    changeValues(newValues);
                }}
                >
                  <Radio
                  
                  
                  value={"собака"}>собака</Radio>
                  <Radio value={"кошка"}>кошка</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Пол"
                rules={[{ required: true, message: "Поле обязательное" }]}
              >
                <Radio.Group
                 value={values.generalInfo.gender}
                 onChange={(e) => {
                     let newValues =  JSON.parse(JSON.stringify(values));
                     newValues.generalInfo.gender = e.target.value;
                     changeValues(newValues);
                 }}
                >
                  <Radio value={"мужской"}>мужской</Radio>
                  <Radio value={"женский"}>женский</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Окрас"
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

              <Form.Item
                label="Уши"
                rules={[{ required: true, message: "Поле обязательное" }]}
                
              >
                <Input
                value={values.generalInfo.ears}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.generalInfo.ears = e.target.value;
                    changeValues(newValues);
                }}
                placeholder="Введите значение" />
              </Form.Item>

              <Form.Item
                label="Размер"
                rules={[{ required: true, message: "Поле обязательное" }]}
                
              >
                <Input
                value={values.generalInfo.size}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.generalInfo.size = e.target.value;
                    changeValues(newValues);
                }}
                placeholder="Введите значение" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Row gutter={32}>
                <Col span={12}>
                  <Form.Item
                    label="Год рождения"
                    rules={[{ required: true, message: "Поле обязательное" }]}
                    
                  >
                    <Input
                    value={values.generalInfo.year}
                    onChange={(e) => {
                        let newValues =  JSON.parse(JSON.stringify(values));
                        newValues.generalInfo.year = e.target.value;
                        changeValues(newValues);
                    }}
                    placeholder="Введите значение" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Вес"
                    rules={[{ required: true, message: "Поле обязательное" }]}
                    
                  >
                    <Input
                    value={values.generalInfo.weight}
                    onChange={(e) => {
                        let newValues =  JSON.parse(JSON.stringify(values));
                        newValues.generalInfo.weight = e.target.value;
                        changeValues(newValues);
                    }}
                    placeholder="Вес" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={32}>
                <Col span={24}>
                  <Form.Item
                    label="Кличка"
                    rules={[{ required: true, message: "Поле обязательное" }]}
                    
                  >
                    <Input
                    value={values.generalInfo.nickname}
                    onChange={(e) => {
                        let newValues =  JSON.parse(JSON.stringify(values));
                        newValues.generalInfo.nicknameы = e.target.value;
                        changeValues(newValues);
                    }}
                    placeholder="Введите значение" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Порода"
                    rules={[{ required: true, message: "Поле обязательное" }]}
                    
                  >
                    <Input
                    value={values.generalInfo.breed}
                    onChange={(e) => {
                        let newValues =  JSON.parse(JSON.stringify(values));
                        newValues.generalInfo.breed = e.target.value;
                        changeValues(newValues);
                    }}
                    placeholder="Введите значение" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Шерсть"
                    rules={[{ required: true, message: "Поле обязательное" }]}
                    
                  >
                    <Input
                    value={values.generalInfo.wool}
                    onChange={(e) => {
                        let newValues =  JSON.parse(JSON.stringify(values));
                        newValues.generalInfo.wool = e.target.value;
                        changeValues(newValues);
                    }}
                    placeholder="Введите значение" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Хвост"
                    rules={[{ required: true, message: "Поле обязательное" }]}
                    
                  >
                    <Input
                    value={values.generalInfo.tail}
                    onChange={(e) => {
                        let newValues =  JSON.parse(JSON.stringify(values));
                        newValues.generalInfo.tail = e.target.value;
                        changeValues(newValues);
                    }}
                    placeholder="Введите значение" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={36}>
            <Col span={24}>
              <Form.Item
                label="Особые приметы"
                rules={[{ required: true, message: "Поле обязательное" }]}
                
              >
                <Input
                value={values.generalInfo.specialSigns}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.generalInfo.specialSigns = e.target.value;
                    changeValues(newValues);
                }}
                placeholder="Введите значение" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Характер"
                rules={[{ required: true, message: "Поле обязательное" }]}
                
              >
                <TextArea
                
                rows={2} placeholder="Введите значение" />
              </Form.Item>
            </Col>

            <Col span={7}>
              <Form.Item
                label="Дата стерилизации"
                rules={[{ required: true, message: "Поле обязательное" }]}
                
              >
                <Input
                value={values.additionalInfo.sterilizationDate}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.additionalInfo.sterilizationDate = e.target.value;
                    changeValues(newValues);
                }}
                placeholder="Введите значение" />
              </Form.Item>
            </Col>

            <Col span={17}>
              <Form.Item
                label="Место стерилизации"
                rules={[{ required: true, message: "Поле обязательное" }]}
                
              >
                <Input placeholder="Введите значение" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="ФИО ветеринарного врача"
                rules={[{ required: true, message: "Поле обязательное" }]}
                
              >
                <Input
                value={values.additionalInfo.veterinarianEmployee.name}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    values.additionalInfo.veterinarianEmployee.name = e.target.value;
                    changeValues(newValues);
                }}
                placeholder="Введите значение" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
          </>
      )
  }

  export {RightPart}