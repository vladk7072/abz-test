import homeTopSliderSlice from "./reducers/mainSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mainRtk } from "./api/mainRtk";

const mainReducer = combineReducers({
  [mainRtk.reducerPath]: mainRtk.reducer,
  homeTopSliderSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      mainRtk.middleware,
    ],
  });
};

export type StoreType = ReturnType<typeof setupStore>;
export type StateType = ReturnType<typeof mainReducer>;
export type DispatchType = StoreType["dispatch"];
