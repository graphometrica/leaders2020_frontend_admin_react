import {
    
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {Store} from "@Store"
import { backend } from "@backend";

const updateFetchingStatus = (value) => {
    Store.update((s) => {
        s.isFetching = value;
      });
}

  export {updateFetchingStatus}