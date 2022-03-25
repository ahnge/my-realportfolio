import { createSlice } from "@reduxjs/toolkit";

const inViewSlice = createSlice({
  name: "inview",
  initialState: {
    heroInview: false,
    aboutInview: false,
    portfolioInview: false,
    contactInview: false,
  },
  reducers: {
    heroActive: (state) => {
      state.heroInview = true;
      state.aboutInview = false;
      state.portfolioInview = false;
      state.contactInview = false;
    },
    aboutActive: (state) => {
      state.heroInview = false;
      state.aboutInview = true;
      state.portfolioInview = false;
      state.contactInview = false;
    },
    portfolioActive: (state) => {
      state.heroInview = false;
      state.aboutInview = false;
      state.portfolioInview = true;
      state.contactInview = false;
    },
    contactActive: (state) => {
      state.heroInview = false;
      state.aboutInview = false;
      state.portfolioInview = false;
      state.contactInview = true;
    },
  },
});
export const { heroActive, aboutActive, portfolioActive, contactActive } =
  inViewSlice.actions;

export default inViewSlice.reducer;
