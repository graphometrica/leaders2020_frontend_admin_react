import {
    
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {Store} from "@Store"
import { backend } from "@backend";
import { updateFetchingStatus } from './updateFetchingStatus'


const auth = createAsyncAction(
    async ({ username, password }) => {                
      const result = await backend.auth({username, password});    
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
            s.userInfo = result.payload;
          });
        }else {
            Store.update((s) => {
                s.userInfo = null;
              });
        }
       
      },
    }
  );

  export {auth}