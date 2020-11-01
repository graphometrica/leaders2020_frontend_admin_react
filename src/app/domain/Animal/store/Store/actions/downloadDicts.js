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

const getSelf = (obj) => {
  
  let parts = obj._links.self.href.split('/');
  let name = parts[parts.length - 1];    

  let mapped = mapUniversal(obj);

  if (!mapped) return null;
  return {
    [name]:  mapped  
  };
  //"http://34.66.234.105:8095/api/v1/breed-type"
}



const downloadDicts = createAsyncAction(
    async ({ value }) => {                
      const result = await backend.downloadDicts();
      let d = result.data ? result.data : result;
      let dicts = d.map(i=>getSelf(i.data)) .filter(i=>i)
      window.dicts = dicts;
      return successResult(dicts);
      // if (result.status === 200) return successResult(dict);
      // return errorResult([], `Status code: ${result.status}`);
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
            s.dicts = mapData(result.payload);
          });          
        }

        applyFilters()
        
      },
    }
  );

  const mapData = (payload) => {
    
    let entities = mapUniversal(payload)
    console.log('ent',entities)
  }

  export {downloadDicts}