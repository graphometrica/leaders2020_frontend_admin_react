import {
    
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {Store, applyFilters} from "@Store"
import { backend } from "@backend";

const setAdvFilter = (value) => {
    Store.update((s) => {
        s.advFilter = value;
    });
    applyFilters()
}

  export {setAdvFilter}