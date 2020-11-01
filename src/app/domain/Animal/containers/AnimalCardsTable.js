import React from "react";

import { Row, Col, Divider, Table } from "antd";

import {AnimalModal} from '@domain/Animal/containers/AnimalModal/AnimalModal';

import {Store, getAllAnimals} from '@Store'

import './AnimalCardsTable.scoped.scss'
  
  const columns = [
    {
      title: '№',
      dataIndex: 'cardNumber',
      render: value => <a>{value}</a>
    },
    {
        title: 'вид',
        dataIndex: 'type',
        render: value => <span>{value}</span>
    },
    {
        title: 'возраст',
        dataIndex: 'age',        
        render: value => <span>{value}</span>
    },
    {
        title: 'вес, кг',
        dataIndex: 'weight',        
        render: value => <span>{value}</span>
    },
    {
        title: 'кличка',
        dataIndex: 'nickname',        
        render: value => <span>{value}</span>
    },
    {
        title: 'пол',
        dataIndex: 'gender',        
        render: value => <span>{value}</span>
    },
    {
        title: 'порода',
        dataIndex: 'breed',        
        render: value => <span>{value}</span>
    },    
    {
        title: 'окрас',
        dataIndex: 'color',        
        render: value => <span>{value}</span>
    },
    {
        title: 'шерсть',
        dataIndex: 'wool',        
        render: value => <span>{value}</span>
    },
    {
        title: 'уши',
        dataIndex: 'ears',        
        render: value => <span>{value}</span>
    },
    {
        title: 'хвост',
        dataIndex: 'tail',        
        render: value => <span>{value}</span>
    },
    {
        title: 'размер',
        dataIndex: 'size',        
        render: value => <span>{value}</span>
    },
    {
        title: 'особые приметы',
        dataIndex: 'specialSigns',        
        render: value => <span>{value}</span>
    },
    {
        title: 'Вольер №',
        dataIndex: 'aviary',        
        render: value => <span>{value}</span>
    }
  ];

const mapToTableData = (data) => {
    if (!data) return [];
    let result = data.map(i=> {
        const {generalInfo} = i;
        return {
            key: generalInfo.id, 
            id: generalInfo.id,
            cardNumber: generalInfo.cardNumber,
            type: generalInfo.type,
            age: generalInfo.year,
            weight: generalInfo.weight,
            nickname: generalInfo.nickname,
            gender: generalInfo.gender,
            breed: generalInfo.breed,
            color: generalInfo.color,
            wool: generalInfo.wool,
            ears: generalInfo.ears,
            tail: generalInfo.tail,
            size: generalInfo.size,
            specialSigns: generalInfo.specialSigns,
            aviary: generalInfo.aviary
        }
    })

    return result;

}


const AnimalCardsTable = ({ initialData, mappedData }) => {
    const [animalCardRecord, setAnimalCardRecord] = React.useState();

    const changeValuesHandler = (values) => {
        setAnimalCardRecord({...animalCardRecord, ...values})
    }

    const rowClickHandler = (record, rowIndex) => {
        setAnimalCardRecord(initialData[rowIndex]);        
    }

    const hideModalHandler = () => {
        setAnimalCardRecord(undefined);
    }

  return (
    <>
      <Row gutter={16} style={{marginTop: '12px'}}>
        <Col className="gutter-row" span={24}>
          
            <Table rowClassName="animals-table"
            onRow={(record, rowIndex) => {
                return {
                  onClick: event => rowClickHandler(record, rowIndex),
                  
                };
              }}
            dataSource={mappedData} columns={columns} />
          
        </Col>
      </Row>
      { !!animalCardRecord && <AnimalModal
       values={animalCardRecord} changeValues={changeValuesHandler}
        hideModal={hideModalHandler} /> }
      {/*  */}
    </>
  );
};

const AnimalCardsTableWrapper = ({ dataUnderFilter, data}) => {  
    
console.log('wtf', dataUnderFilter)
    
  const mappedData = mapToTableData(dataUnderFilter);

  return <AnimalCardsTable initialData={data} mappedData={mappedData} />;
};

export { AnimalCardsTableWrapper as AnimalCardsTable };
