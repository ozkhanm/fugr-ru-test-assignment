import { combineReducers, configureStore } from "@reduxjs/toolkit";

import bookReducer from "./reducers/BookSlice";
import inputReducer from "./reducers/InputSlice";

const rootReducer = combineReducers({
  bookReducer,
  inputReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];