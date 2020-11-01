import React from "react";
import "./AnimalCardsPage.scoped.scss";
import { Spin, Space } from 'antd';

import {AnimalCardsFilterBar} from '@domain/Animal/containers/AnimalCardsFilterBar'

import {AnimalCardsTable} from '@domain/Animal/containers/AnimalCardsTable'
import {Store, getAllAnimals, downloadDicts} from '@Store'

const AnimalCardsPage = ({ getAllHandler, dataUnderFilter, data
     }) => {
    
  return (
    <div>
        <AnimalCardsFilterBar dataUnderFilter={dataUnderFilter} data={data} />
        <AnimalCardsTable dataUnderFilter={dataUnderFilter} data={data} />
      
    </div>
  );
};

const AnimalCardsPageWrapper = (props) => {
    const { data, dataUnderFilter, dicts, isFetching } = Store.useState((s) => ({
        data: s.data,
        dicts: s.dicts,
        dataUnderFilter: s.dataUnderFilter,
        isFetching: s.isFetching
      }));
            
      console.log('sdfsdsfslm;', dicts)
    const [downloadFinished, downloadResult] = getAllAnimals.useBeckon({isFetching: isFetching});

    const [dictFinished, dictResult] = downloadDicts.useBeckon({});
    

    if (!dictFinished) {
      return <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
    }


    //backend.downloadDicts().then( dics => {
    //   console.log('ddd', data)                                    
    // })

    if (!downloadFinished) {    
        return <div>Пожалуйста, подождите...</div>;
    }

    if (downloadResult.error) {
        return <div>Что-то пошло не так (: {downloadResult.message}</div>;
    }    

  return <AnimalCardsPage dataUnderFilter={dataUnderFilter} data={data} />;
};

export { AnimalCardsPageWrapper as AnimalCardsPage };
