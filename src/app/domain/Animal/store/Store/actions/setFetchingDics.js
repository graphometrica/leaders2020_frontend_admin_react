import {
    
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {Store} from "@Store"
import { backend } from "@backend";

const setFetchingDics = (value) => {
    Store.update((s) => {
        s.isFetchingDics = value;
      });
}

  export {setFetchingDics}