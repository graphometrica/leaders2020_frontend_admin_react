import {
    Store,
    createAsyncAction,
    errorResult,
    successResult,
  } from "pullstate";

import {AnimalStore} from "@domain/Animal/store/AnimalStore"
import { animalsApi } from "@domain/Animal/services/animalsApi";

const updateFetchingStatus = (value) => {
    AnimalStore.update((s) => {
        s.isFetching = value;
      });
}

  export {updateFetchingStatus}