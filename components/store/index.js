import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/navmenu/menuSlice";
import inviewReducer from "../features/navmenu/inViewSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    inview: inviewReducer,
  },
});
