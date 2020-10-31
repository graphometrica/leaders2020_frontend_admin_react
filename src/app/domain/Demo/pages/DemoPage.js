import React from "react";
import "./DemoPage.scoped.scss";

import {
  DemoStore,
  getAll,
  addNew,
  removeLast,
  updateFetchingStatus,
  filterPreviewData
} from "@domain/Demo/store/DemoStore";

const DemoPage = ({ data, isFetching, refreshHandler, addHandler, removeLastHandler,
changeFilterHandler }) => {
    
  return (
    <section className="level">
      <div className="table-container">
            <div className="block">
                <input onInput={changeFilterHandler} className="input" type="text" placeholder="Search" />
            </div>
        <section className="block">
          <div className="buttons">
            <button disabled={isFetching} onClick={refreshHandler} className="button is-light">
              Refresh
            </button>
            <button disabled={isFetching} onClick={addHandler} className="button is-success">
              Add
            </button>
            <button disabled={isFetching} onClick={removeLastHandler} className="button is-danger">
              Remove
            </button>
          </div>
        </section>

        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr key={i.id}>
                <th>{i.id}</th>
                <td>{i.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </section>
  );
};

const DemoPageWrapper = (props) => {
  const { data, previewData, isFetching, searchFilter } = DemoStore.useState((s) => ({
    data: s.data,
    previewData: s.previewData,
    isFetching: s.isFetching,
    searchFilter: s.searchFilter
  }));  
  
//   const wtf = useDownloadByInterval(isFetching, getAll, {value: 'from timer'}, 1000);
  // const [downloadFinished, downloadResult] = getAll.useBeckon({value: 'test value'});
  
  // if (!downloadFinished) {    
  //   return <div>Loading, please wait...</div>;
  // }

  // if (downloadResult.error) {
  //   return <div>ERROR: {downloadResult.message}</div>;
  // }

  const handlers = {
    refreshHandler: async () => {    
      await getAll.run({ value: "wtf param" });    
    },
    addHandler: async () => {
      await addNew.run();
    },
    removeLastHandler: async () => {
      await removeLast.run();
    },
    changeFilterHandler: async (e) => {        
        filterPreviewData(e.target.value)
    }
  };

  return <DemoPage {...handlers} data={previewData} isFetching={isFetching} />;
};

export { DemoPageWrapper as DemoPage };
