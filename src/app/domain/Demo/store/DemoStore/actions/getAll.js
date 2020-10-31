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

const getAll = createAsyncAction(
    async ({ value }) => {                
      const result = await demoApi.getAll();    
      if (result.status === 200) return successResult(result.data);
      return errorResult([], `Status code: ${result.status}`);
    },
    {      
      shortCircuitHook: ({args}) => {
        if (!args.doNotBlock) {
          updateFetchingStatus(true);
        }        
        return false;
      },
    
      postActionHook: ({ result, stores }) => {          
        
        updateFetchingStatus(false);      
        if (!result.error) {
          DemoStore.update((s) => {
            s.data = result.payload;            
          });
        }
        filterPreviewData(DemoStore.currentState.searchFilter);        
      },
    }
  );

  export {getAll}