import React from "react";
import "./AnimalCardsPage.scoped.scss";

import {AnimalCardsFilterBar} from '@domain/Animal/containers/AnimalCardsFilterBar'

import {AnimalCardsTable} from '@domain/Animal/containers/AnimalCardsTable'
import {Store, getAllAnimals} from '@Store'

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
    const { data, dataUnderFilter, isFetching } = Store.useState((s) => ({
        data: s.data,
        dataUnderFilter: s.dataUnderFilter,
        isFetching: s.isFetching
      }));
            
    const [downloadFinished, downloadResult] = getAllAnimals.useBeckon({isFetching: isFetching});

    if (!downloadFinished) {    
        return <div>Пожалуйста, подождите...</div>;
    }

    if (downloadResult.error) {
        return <div>Что-то пошло не так (: {downloadResult.message}</div>;
    }    

  return <AnimalCardsPage dataUnderFilter={dataUnderFilter} data={data} />;
};

export { AnimalCardsPageWrapper as AnimalCardsPage };
