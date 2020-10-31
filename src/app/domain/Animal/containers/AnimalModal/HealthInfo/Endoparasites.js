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



  const data = [
    {
      "id": "44cc31ac-4957-489c-ad2e-b8e85e36d1a1",
      "date": "2020-09-28",
      "anamnesis": "удовлетворительно"
    }
  ]

  const columns = [
    {
        title: 'Дата осмотра',
        dataIndex: 'date',      
        render: value => <span>{value}</span>
      },
      {
        title: 'Анамнез',
        dataIndex: 'anamnesis',      
        render: value => <span>{value}</span>
      }
  ]

  const Endoparasites = ({changeValues, values}) => {
      return (
          <>
          <Table   
          pagination={false}         
            dataSource={values.endoparasites} columns={columns} />
          </>
      )
  }

  export {Endoparasites}