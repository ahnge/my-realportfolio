import { createContext, useContext, useReducer } from "react";

const MenuContext = createContext(null);
const MenuDispatchContext = createContext(null);

export function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, menuIsOpen);

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
      return !state;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const menuIsOpen = false;

export const useMenu = () => {
  return useContext(MenuContext);
};

export const useMenuDispatch = () => {
  return useContext(MenuDispatchContext);
};
