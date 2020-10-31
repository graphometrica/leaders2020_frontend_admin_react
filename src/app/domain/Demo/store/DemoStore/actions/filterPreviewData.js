import {
    Store,
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {DemoStore} from "@domain/Demo/store/DemoStore/DemoStore"
import { demoApi } from "@domain/Demo/services/demoApi";

import {filterArrayByString} from '@helpers'

const filterPreviewData = (searchFilter) => {
    
    let result = filterArrayByString(DemoStore.currentState.data, searchFilter, ['id', 'name']);
    
    DemoStore.update((s, state) => {
        s.searchFilter = searchFilter;        
        s.previewData = result
    });

    //console.log(DemoStore.currentState)
    
}

  export {filterPreviewData}