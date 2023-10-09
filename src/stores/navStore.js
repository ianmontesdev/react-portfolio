import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "navState",
  initialState: false,
  reducers: {
    toggleNavState: (state) => {
      return !state;
    },
  },
});

export const { toggleNavState } = navSlice.actions;
export default navSlice.reducer;
