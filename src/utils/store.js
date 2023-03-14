import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    category: categorySlice,
    video: videosSlice,
    search: searchSlice,
  },
});

export default store;
