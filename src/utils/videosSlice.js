import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { setVideos } = videosSlice.actions;
export default videosSlice.reducer;
