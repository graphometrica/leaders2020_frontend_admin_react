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

  import { saveAs } from 'file-saver';

  import axios from 'axios';
  
  const { Option } = Select;
  const { Title } = Typography;
  const { TextArea } = Input;
  const { TabPane } = Tabs;
  const { Meta } = Card;


  const TopPart = ({changeValues, values}) => {
      
const downloadHandler = async (e) => {
    console.log('v', values)
    //responseType: 'blob'
    const res = await axios({
        url: `https://kotik.dog/gen/get_animal_card`,
        method: 'POST',
        responseType: 'blob',
        data: values
    }).then(res=> {
        saveAs(res.data, "report.docx");
        console.log('res', res)
    })
}

      return (
          <>
          <Row gutter={32}>
            <Col span={8}>
              <Form.Item
                label="№ карточки"
                rules={[{ required: true, message: "Поле обязательное" }]}
              >
                <Input placeholder="Введите значение"
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.generalInfo.cardNumber = e.target.value;
                    changeValues(newValues);
                }}
                value={values.generalInfo.cardNumber} />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label="Вольер №"
                rules={[{ required: true, message: "Поле обязательное" }]}
              >
                <Input placeholder="Введите значение"
                value={values.generalInfo.aviary}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.generalInfo.aviary = e.target.value;
                    changeValues(newValues);
                }}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label="Идентификационная метка"
                rules={[{ required: true, message: "Поле обязательное" }]}
              >
                <Input placeholder="Введите значение"
                value={values.additionalInfo.identificationMark}
                onChange={(e) => {
                    let newValues =  JSON.parse(JSON.stringify(values));
                    newValues.additionalInfo.identificationMark = e.target.value;
                    changeValues(newValues);
                }}
                />
              </Form.Item>
            </Col>

            <Col span={6} style={{paddingTop: '32px'}}>
                <Button onClick={downloadHandler} size="small" type="primary">Скачать в формате Word</Button>
            </Col>

            
            
          </Row>
          </>
      )
  }

  export {TopPart}