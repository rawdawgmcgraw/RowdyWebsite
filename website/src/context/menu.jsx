import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ bioOpen, setBioOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
