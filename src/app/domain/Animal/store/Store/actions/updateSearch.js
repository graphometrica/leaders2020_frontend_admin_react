import {
    
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {Store, applyFilters} from "@Store"
import { backend } from "@backend";

const updateSearch = (value) => {
    console.log('updateSearch', value)
    Store.update((s) => {
        s.search = value;
    });
    applyFilters()
}

  export {updateSearch}