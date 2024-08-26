import { createContext, useState, useEffect } from "react";
/* eslint-disable react/prop-types */

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  //this state basically is only to force re-render when back/forward button are pressed
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //handle forward and back button
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
