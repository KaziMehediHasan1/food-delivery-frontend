import axios from "axios";
import { createContext, useState } from "react";
export const authContext = createContext(null);
const url = import.meta.env.VITE_SERVER_PORT;
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const loginUser = async (email, password) => {
    console.log(email, password, "8 no line");
    const res = await axios.get(`${url}/users`, {
      params: { email, password },
    });
    console.log(res, "10 no 11 line");
  };
  const authInfo = {
    // logout,
    loginUser,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
