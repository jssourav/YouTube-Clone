import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    category: categorySlice,
  },
});

export default store;
