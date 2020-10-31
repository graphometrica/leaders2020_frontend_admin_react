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

  const Vaccinations = ({changeValues, values}) => {

    const mappedData = values.vaccinations.map(i=> ({...i, key:i.id}) )
      return (
          <>
          <Table   
          pagination={false}         
            dataSource={values.vaccinations} columns={columns} />
          </>
      )
  }

  export {Vaccinations}