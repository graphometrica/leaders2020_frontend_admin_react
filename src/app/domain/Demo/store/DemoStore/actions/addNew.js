import {
    Store,
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

  import {DemoStore} from "@domain/Demo/store/DemoStore/DemoStore"
  import { demoApi } from "@domain/Demo/services/demoApi";
  import { updateFetchingStatus } from './updateFetchingStatus'
  import {filterPreviewData} from './filterPreviewData'
  
  const addNew = createAsyncAction(
    async ({ value }) => {      
      const result = await demoApi.addNew();    
      if (result.status === 200) return successResult(result.data);
      return errorResult([], `Status code: ${result.status}`);
    },
    {
      shortCircuitHook: (q) => {        
        updateFetchingStatus(true);
        return false;
      },
      postActionHook: ({ result, stores }) => {
        updateFetchingStatus(false);
        if (!result.error) {
          DemoStore.update((s, prev) => {              
            s.data = [...prev.data, result.payload];            
          });
        }
        filterPreviewData(DemoStore.currentState.searchFilter);        
      },
    }
  );

  export {addNew}