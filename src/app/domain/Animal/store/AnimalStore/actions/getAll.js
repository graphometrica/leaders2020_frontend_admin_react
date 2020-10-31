import {
    Store,
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {AnimalStore} from "@domain/Animal/store/AnimalStore/AnimalStore"
import { animalsApi } from "@domain/Animal/services/animalsApi";
import { updateFetchingStatus } from './updateFetchingStatus'


const getAll = createAsyncAction(
    async ({ value }) => {                
      const result = await animalsApi.getAll();    
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
          AnimalStore.update((s) => {
            s.data = result.payload;            
          });
        }
        //filterPreviewData(AnimalStore.currentState.searchFilter);        
      },
    }
  );

  export {getAll}