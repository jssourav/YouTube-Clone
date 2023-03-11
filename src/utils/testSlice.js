import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test1",
  initialState: {
    isMenuOpen1: true,
  },
  reducers: {
    toggleMenu1: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu1 } = testSlice.actions;
export default testSlice.reducer;
