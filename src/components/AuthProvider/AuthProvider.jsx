import axios from "axios";
import { createContext, useState } from "react";
export const authContext = createContext(null);
const url = import.meta.env.VITE_SERVER_PORT;
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = async (email, hashedPass) => {
    const res = await axios.get(`${url}/users`, {
      params: { email, hashedPass },
    });
    if (res?.data && res?.data?.findUsers) {
      // await axios.post(`${url}/jwt`)
      setUser(res?.data?.findUsers);
      localStorage.setItem("token", res?.data?.token);
    } else {
      localStorage.getItem("user");
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    console.log("User logged out");
  };
  const authInfo = {
    logout,
    login,
    user,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
