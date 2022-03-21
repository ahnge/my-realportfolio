import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/navmenu/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
