import { createContext, useState, useEffect } from "react";
/* eslint-disable react/prop-types */

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const getCurrentPath = () => {
    let path = window.location.pathname;

    // Check if the path is "/RowdyWebsite/" and redirect to "/"
    if (path === "/RowdyWebsite/") {
      window.history.pushState({}, "", "/");
      path = "/";
    }

    return path && path !== "" ? path : "/";
  };
  //this state basically is only to force re-render when back/forward button are pressed
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  //handle forward and back button
  useEffect(() => {
    const handler = () => {
      let path = window.location.pathname;

      // Handle redirect if path is "/RowdyWebsite/"
      if (path === "/RowdyWebsite/") {
        navigate("/");
      } else {
        setCurrentPath(path);
      }
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    if (to === "/RowdyWebsite/") {
      to = "/";
    }
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
