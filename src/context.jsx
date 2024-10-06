import { createContext, useContext, useReducer } from "react";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./actions";
import reducer from "./reducer";

const GlobalContext = createContext();

const initialState = {
  isSidebarOpen: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <GlobalContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
