import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
    isSuggBoxOpen: true,
    selectedSearch: "",
  },
  reducers: {
    toggleBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    toggleSuggBar: (state) => {
      state.isSuggBoxOpen = !state.isSuggBoxOpen;
    },
    closeBar: (state) => {
      state.isSideBarOpen = false;
    },
    updateSearch: (state, action) => {
      state.selectedSearch = action.payload;
    },
  },
});
export const { toggleBar, closeBar, updateSearch, toggleSuggBar } =
  appSlice.actions;
export default appSlice.reducer;
