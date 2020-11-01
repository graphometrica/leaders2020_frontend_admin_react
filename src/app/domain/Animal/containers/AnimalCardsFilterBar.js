import React from "react";

import { Row, Col, Divider, Select, Form,
    Button, Tooltip, Alert, Input
} from "antd";

import { FilterOutlined, CloseOutlined } from '@ant-design/icons';

import {Store, getAllAnimals, setAdvFilter, applyFilters, updateSearch} from '@Store'
import {SearchModal} from '@domain/Animal/containers/Search/SearchModal';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const getFilterText = ({type, filter}) => {

    let result = '';
    if (type === "1") result = "по № карточки";
    if (type === "2") result = "по № идентификационной метки";
    if (type === "3") result = "по кличке";
    if (type === "4") result = "по административному округу";
    if (type === "5") result = "по приюту";
    if (type === "6") result = "по периоду регистрации карточки";
    if (type === "7") result = "по виду животного";
    if (type === "8") result = "по возрасту";
    if (type === "9") result = "по размеру";
    if (type === "10") result = "по причине выбытия";
    if (type === "11") result = "по статусу животного";
    

    return `(${result}): "${filter}"`;
}

const AnimalCardsFilterBar = ({ data }) => {
    const { search, advFilter } = Store.useState((s) => ({
        advFilter:s.advFilter,
        search: s.search
      }));

      
      
    const [visible, setVisible] = React.useState(false);

    const [filters, setFilters] = React.useState();

    const [searchString, setSearchString] = React.useState();

    const updateFiltersHandler = (values) => {
        if ((values.filter || '').length > 0 ) {
            setFilters(values);
            setAdvFilter(values);
        }
        
        setVisible(false)
    }

    const closeHandler = () => {        
        setVisible(false)
    }    

  return (
    <>
    <SearchModal visible={visible} close={closeHandler} updateFilters={updateFiltersHandler} />
      <Row gutter={16}>
        <Col className="gutter-row" span={3}>
                <Tooltip title="Фильтр по карточкам животных">
                    <Button type="info" onClick={() => setVisible(true)}  icon={<FilterOutlined />}>Фильтр по карточкам</Button>
                </Tooltip>                      
        </Col>

    {!!filters ? (
        <>
        <Col className="gutter-row" span={10}>
            <Alert message={`Включен фильтр ${getFilterText(filters)}`} type="warning" />
            
        </Col>
        <Col className="gutter-row" span={2}>
            <Tooltip title="Сбросить фильтр">
                <Button onClick={() => {
                    setFilters(null);
                }} type="outline"  icon={<CloseOutlined />} shape="circle"></Button>
            </Tooltip>
        </Col>

        
        </>
    ): undefined}
        
            <Col span={9}>
            <Input
            value={search}
            onChange={ (e) => updateSearch(e.target.value)}
                size="large"
                placeholder="Введите строку для поиска" />
            </Col>
        

      </Row>
    </>
  );
};

        

const AnimalCardsFilterBarWrapper = (props) => {
  const isFetching = false;

  return <AnimalCardsFilterBar />;
};

export { AnimalCardsFilterBarWrapper as AnimalCardsFilterBar };
