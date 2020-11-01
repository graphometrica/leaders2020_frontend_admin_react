import {
    
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {Store} from "@Store"
import { backend } from "@backend";
import { updateFetchingStatus } from './updateFetchingStatus'

import { applyFilters} from "./applyFilters"


const downloadDicts = createAsyncAction(
    async ({ value }) => {                
      const result = await backend.downloadDicts();    
      if (result.status === 200) return successResult(result.data);
      return errorResult([], `Status code: ${result.status}`);
    },
    {      
      shortCircuitHook: ({args}) => {
        if (args && !args.doNotBlock) {
          updateFetchingStatus(true);
        }        
        return false;
      },
    
      postActionHook: ({ result, stores }) => {          
        
        updateFetchingStatus(false);      
        if (!result.error) {
          Store.update((s) => {
            s.data = result.payload;            
          });          
        }

        applyFilters()
        
      },
    }
  );

  export {downloadDicts}