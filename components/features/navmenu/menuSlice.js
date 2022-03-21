import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuIsOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menuIsOpen = !state.menuIsOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
