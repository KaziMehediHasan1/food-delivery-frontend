import { useGoogleLogin } from "@react-oauth/google";
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
      setUser(res?.data?.findUsers);
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("user", JSON.stringify(res?.data?.findUsers));
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // google
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        if (res.data && res?.status === 200) {
          localStorage.setItem("user", JSON.stringify(res?.data));
          localStorage.setItem("token", response.access_token);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  const authInfo = {
    logout,
    login,
    googleLogin,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
