import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
    // isSideBarOpen: true,
    selectedSearch: "",
  },
  reducers: {
    toggleBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeBar: (state) => {
      state.isSideBarOpen = false;
    },
    updateSearch: (state, action) => {
      state.selectedSearch = action.payload;
    },
  },
});
export const { toggleBar, closeBar, updateSearch } = appSlice.actions;
export default appSlice.reducer;
