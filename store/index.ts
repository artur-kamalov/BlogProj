import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";
import { postsApi } from "./postsApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    postsApi: postsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(postsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
