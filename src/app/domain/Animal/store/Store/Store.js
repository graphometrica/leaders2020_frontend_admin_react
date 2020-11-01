import {
    Store as PullStore,    
  } from "pullstate";
    
  const Store = new PullStore({
    data: [    
    ],
    dataUnderFilter: [],
    advFilter: null,
    search: '',
    dicts: [],
    isFetchingDics: false,
    isFetching: false,
    userInfo: null
  });
  

  
  export { Store };
  