import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterslice";
import profile from "./redux/profile";
import productSlice from "./redux/prodcuts";

export const store = configureStore({
  reducer: {
    counter1: counterReducer,
    Profile: profile,
    Products: productSlice,
  },
});
