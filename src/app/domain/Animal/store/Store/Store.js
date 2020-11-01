import {
    Store as PullStore,    
  } from "pullstate";
    
  const Store = new PullStore({
    data: [    
    ],
    dataUnderFilter: [],
    advFilter: null,
    search: '',
    isFetching: false,
    userInfo: null
  });
  

  
  export { Store };
  