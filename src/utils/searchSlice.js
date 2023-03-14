import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchList: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      // Implemented LRU Cache -
      if (Object.keys(state.searchList).length > 100) {
        const firstValue = Object.values(state.searchList)[0];
        state.searchList = state.searchList[firstValue]?.shift();
      }
      state.searchList = { ...action.payload, ...state.searchList };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

// Implement LRU Cache
