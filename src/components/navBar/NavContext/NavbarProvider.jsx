import { createContext, useState } from "react";

const NavbarContext = createContext();
const NavbarProvider = ({ children }) => {
  const [navbarTitle, setNavbarTitle] = useState("");
  const info = {
    navbarTitle,
    setNavbarTitle,
  };
  return (
    <NavbarContext.Provider value={info}>{children}</NavbarContext.Provider>
  );
};

export default NavbarProvider;
