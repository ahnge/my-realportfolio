import { createContext, useContext, useReducer } from "react";

// init state
const initStates = {
  menuIsOpen: false,
  dark: false,
};

const MenuContext = createContext(initStates);
const MenuDispatchContext = createContext(null);

export function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, initStates);

  return (
    <MenuContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuContext.Provider>
  );
}

function menuReducer(state, action) {
  switch (action.type) {
    case "toggle": {
      return { ...state, menuIsOpen: !state.menuIsOpen };
    }
    case "toggleDarkMode": {
      state.dark
        ? localStorage.setItem("theme", "light")
        : localStorage.setItem("theme", "dark");
      return { ...state, dark: !state.dark };
    }
    case "setDark": {
      localStorage.setItem("theme", "dark");
      return { ...state, dark: true };
    }
    case "setLight": {
      localStorage.setItem("theme", "light");
      return { ...state, dark: false };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const useMenu = () => {
  return useContext(MenuContext);
};

export const useMenuDispatch = () => {
  return useContext(MenuDispatchContext);
};
