
import {
    Store as PullStore,
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import { Store} from "@Store"

import {filterArrayByString} from '@helpers'

const applyFilters = () => {
    let {data, search, advFilter } = Store.currentState;
    let result = filterArrayByString(Store.currentState.data, search);

    console.log('called', search, advFilter)
    Store.update((s) => {
        s.search = search;        
        s.dataUnderFilter = result
    });

    //console.log(DemoStore.currentState)
    
}

  export {applyFilters}