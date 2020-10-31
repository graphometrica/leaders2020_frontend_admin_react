import {
    Store,    
  } from "pullstate";
    
  const DemoStore = new Store({
    data: [    
    ],
    previewData: [],
    searchFilter: '',
    isFetching: false
  });
  

  
  export { DemoStore };
  