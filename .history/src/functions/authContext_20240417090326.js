// AuthContext.js
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDataContext, setUserDataContext] = useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserDataContext(JSON.parse(storedUserData));
      }
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setUserDataContext({
      id: "",
      username: "",
      name: "",
      email: "",
      phone: "",
      avatar: "",
    });
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, userDataContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
