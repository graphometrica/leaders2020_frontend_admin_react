import React from "react";

import { Row, Col, Divider, Table, Image } from "antd";

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
        title: 'фото',
        dataIndex: 'pictureId',
        render: value => <a target="_blank" href={`https://kotik.dog/imgstore/load_from_db?id=${value}`}><img style={{maxWidth:'128px', maxHeight: '128px'}} src={`https://kotik.dog/imgstore/load_from_db?id=${value}`}/></a>
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

const lookupInDict = (name, id) => {
  //console.log('qqq', )
  let ddd = Array.from(window.dicts);

  //let key = window.dicts.find(i=>!!Object.keys(i)[0][name]);  

  //console.log('lllll',name, ddd[0], Object.keys(ddd[0]));
//console.log(JSON.stringify(ddd, null, 2));
//throw new Exception('s');
  let dict = [];

  //console.log('q', ddd[0][name])
  let arr = [];
  for (let index = 0; index < ddd.length; index++) {

    
      if (Object.keys(ddd[index])[0] === name) {
        arr = ddd[index][name];
        break
      }
    
    
  }

  let result = arr.find(i=> i._links.self.href.indexOf(id)  );

  if (result) return result.name;
  return '';

  
}

const mapToTableDatav2 = (data) => {
  //console.log('mapToTableDatav2', data)
  
  if (!data) return [];
  let result = data.map(i=> {
      let date = new Date( (i.year || '').toString().split('.0').join('') ).getFullYear();
      if (isNaN(date)) date = i.year;
      return {
        ...i,
          key:i.id, 
          id: i.id,
          cardNumber: i.cardNumber,
          type: lookupInDict('animal-type',i.animalTypeId),
          age: date,
          weight: i.weight,
          nickname: i.nickname,
          gender: lookupInDict('gender-type',i.genderId),
          breed: lookupInDict('breed-type',i.breedId),
          color: lookupInDict('color-type',i.colorId),
          wool: lookupInDict('wool-type',i.woolTypeId),
          ears: lookupInDict('ear-type',i.earTypeId),
          tail: lookupInDict('tail-type',i.tailTypeId),
          size: i.size,
          specialSigns: i.specialSigns,
          aviary: ((i.aviary || 0)*1).toString()
      }
  })

  return result;

}


const AnimalCardsTable = ({ initialData, mappedData }) => {
    const [animalCardRecord, setAnimalCardRecord] = React.useState();

    const changeValuesHandler = (values) => {
        //setAnimalCardRecord({...animalCardRecord, ...values})
    }

    const rowClickHandler = (record, rowIndex) => {
        //setAnimalCardRecord(initialData[rowIndex]);        
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
    const [sorted, setSorted] = React.useState([]);

    React.useEffect(()=> {
      setSorted(mapToTableDatav2(dataUnderFilter).sort( (a,b)=> b.cardNumber > a.cardNumber ? 1: -1));
    }, [data]);
  
  
  //const mappedData = mapToTableData(dataUnderFilter);

  return <AnimalCardsTable initialData={sorted} mappedData={sorted} />;
};

export { AnimalCardsTableWrapper as AnimalCardsTable, mapToTableDatav2 };
