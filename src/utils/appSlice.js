import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});
export const { toggleBar, closeBar } = appSlice.actions;
export default appSlice.reducer;
