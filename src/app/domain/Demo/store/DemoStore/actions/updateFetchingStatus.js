import {
    Store,
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {DemoStore} from "@domain/Demo/store/DemoStore/DemoStore"
import { demoApi } from "@domain/Demo/services/demoApi";

const updateFetchingStatus = (value) => {
    DemoStore.update((s) => {
        s.isFetching = value;
      });
}

  export {updateFetchingStatus}