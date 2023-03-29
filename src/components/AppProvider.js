import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  return (
    <AppContext.Provider
      value={{
        show,
        setShow,
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
