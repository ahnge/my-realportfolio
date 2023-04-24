import { createContext, useContext, useReducer } from "react";

// types
type ChildrenProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  menuIsOpen: boolean;
  dark: boolean;
};

type ACTIONTYPE =
  | { type: "toggle" }
  | { type: "toggleDarkMode" }
  | { type: "setDark" }
  | { type: "setLight" };

// init state
const initStates = {
  menuIsOpen: false,
  dark: false,
};

const MenuContext = createContext<MenuContextType>(initStates);
const MenuDispatchContext = createContext<React.Dispatch<ACTIONTYPE> | null>(
  null
);

export function MenuProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(menuReducer, initStates);

  return (
    <MenuContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuContext.Provider>
  );
}

function menuReducer(state: typeof initStates, action: ACTIONTYPE) {
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
  }
}

export const useMenu = () => {
  return useContext(MenuContext);
};

export const useMenuDispatch = () => {
  return useContext(MenuDispatchContext);
};
