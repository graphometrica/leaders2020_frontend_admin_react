import {
    
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {Store} from "@Store"
import { backend } from "@backend";
import { updateFetchingStatus } from './updateFetchingStatus'

import { applyFilters} from "./applyFilters"
import {mapUniversal} from '@helpers/mapUniversal'


const getAllAnimals = createAsyncAction(
    async ({ value }) => {                
      const result = await backend.getAllAnimals();  
      let d = result.data ? result.data : result;  
      return successResult(mapUniversal(d));
      //return errorResult([], `Status code: ${result.status}`);
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

  export {getAllAnimals}