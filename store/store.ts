import { configureStore} from "@reduxjs/toolkit";
import { jokesAPI } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [jokesAPI.reducerPath]: jokesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(jokesAPI.middleware),
});
// export type RootState = ReturnType<typeof >;