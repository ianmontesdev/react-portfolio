import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navStore";

export const store = configureStore({
  reducer: {
    navState: navReducer,
  },
});
